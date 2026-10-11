/* =====================================================================
   ATLAS DIỄN NGÔN — ứng dụng chính
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- tiện ích ---------- */
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var fmt = function (n) { return n.toLocaleString("vi-VN"); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  function norm(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("atlas." + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("atlas." + k, JSON.stringify(v)); } catch (e) {} }
  };

  /* ---------- dữ liệu ---------- */
  var ETH = window.ETHNIC, FAM = window.FAMILIES, REG = window.REGIONS, PRO = window.PROFILES;
  var byId = {};
  var ranked = ETH.slice().sort(function (a, b) { return b.pop - a.pop; });
  ranked.forEach(function (e, i) { e.rank = i + 1; byId[e.id] = e; });
  var totalPop = ETH.reduce(function (s, e) { return s + e.pop; }, 0);

  var provTopo = window.GEO.prov;
  var provObj = provTopo.objects[Object.keys(provTopo.objects)[0]];
  var provinces = topojson.feature(provTopo, provObj).features;
  var nbTopo = window.GEO.nb;
  var neighbours = topojson.feature(nbTopo, nbTopo.objects[Object.keys(nbTopo.objects)[0]]).features;
  var vnOutline = topojson.merge(provTopo, provObj.geometries);

  var provInfo = {};   // tên tỉnh -> { name, merged, ids[] }
  provinces.forEach(function (f) {
    var p = f.properties;
    provInfo[p.TinhThanh] = { name: p.TinhThanh, merged: p.SapNhap, type: p.Loai, pop: p.DanSo_ng, ids: [] };
  });
  ranked.forEach(function (e) {
    e.provinces.forEach(function (pn) { if (provInfo[pn]) provInfo[pn].ids.push(e.id); else console.warn("Không khớp tỉnh:", pn); });
  });
  var maxCount = d3.max(Object.values(provInfo), function (p) { return p.ids.length; });

  // tên tỉnh cũ -> tỉnh mới (cho chatbot)
  var oldToNew = {};
  Object.values(provInfo).forEach(function (p) {
    (p.merged || "").split(",").forEach(function (o) { o = o.trim(); if (o) oldToNew[o] = p.name; });
    oldToNew[p.name] = p.name;
  });
  Object.assign(oldToNew, { "Đắk Lắk": "Đắk Lắk", "Đắk Nông": "Lâm Đồng", "Hòa Bình": "Phú Thọ", "Hoà Bình": "Phú Thọ", "Kon Tum": "Quảng Ngãi", "Sài Gòn": "TP. Hồ Chí Minh", "Hồ Chí Minh": "TP. Hồ Chí Minh", "HCM": "TP. Hồ Chí Minh", "Bà Rịa": "TP. Hồ Chí Minh", "Vũng Tàu": "TP. Hồ Chí Minh", "Bình Dương": "TP. Hồ Chí Minh", "Thừa Thiên Huế": "Huế", "Tiền Giang": "Đồng Tháp", "Hậu Giang": "Cần Thơ", "Sóc Trăng": "Cần Thơ", "Bến Tre": "Vĩnh Long", "Trà Vinh": "Vĩnh Long", "Bạc Liêu": "Cà Mau", "Kiên Giang": "An Giang", "Phú Yên": "Đắk Lắk", "Bình Định": "Gia Lai", "Ninh Thuận": "Khánh Hòa", "Bình Thuận": "Lâm Đồng", "Quảng Nam": "Đà Nẵng", "Quảng Bình": "Quảng Trị", "Hà Giang": "Tuyên Quang", "Yên Bái": "Lào Cai", "Bắc Kạn": "Thái Nguyên", "Bắc Giang": "Bắc Ninh", "Vĩnh Phúc": "Phú Thọ", "Hải Dương": "Hải Phòng", "Thái Bình": "Hưng Yên", "Nam Định": "Ninh Bình", "Hà Nam": "Ninh Bình", "Long An": "Tây Ninh", "Bình Phước": "Đồng Nai" });

  /* ---------- trạng thái ---------- */
  var S = {
    comp: store.get("companion", null),
    sort: "pop", q: "", fam: null, prov: null, sel: null,
    visited: store.get("visited", []),
    view: "map", detailId: null
  };

  /* =====================================================================
     NGƯỜI ĐỒNG HÀNH
     ===================================================================== */
  function compName() { return S.comp ? window.COMPANIONS[S.comp].name : "Mây"; }
  function paintCompanion() {
    var k = S.comp || "may";
    $("#who-av").innerHTML = companionSVG(k, { uid: "who" });
    $("#who-name").textContent = compName();
    $("#dock-fig").innerHTML = companionSVG(k, { uid: "dock" });
    $("#bubble-name").textContent = compName();
    $("#chat-av").innerHTML = companionSVG(k, { uid: "chat" });
    $("#chat-name").textContent = compName();
  }
  var bubbleTimer;
  function say(text, opts) {
    var b = $("#bubble");
    $("#bubble-text").innerHTML = text;
    b.classList.remove("hide");
    clearTimeout(bubbleTimer);
    if (!opts || !opts.stay) bubbleTimer = setTimeout(function () { b.classList.add("hide"); }, 14000);
  }

  function openIntro() {
    var intro = $("#intro");
    intro.hidden = false;
    var keys = Math.random() < 0.5 ? ["may", "nui"] : ["nui", "may"];   // thứ tự ngẫu nhiên — không ai “được ưu tiên”
    var pick = $("#pick");
    pick.innerHTML = keys.map(function (k) {
      var c = window.COMPANIONS[k];
      return '<button type="button" data-k="' + k + '" class="' + (S.comp === k ? "on" : "") + '" aria-pressed="' + (S.comp === k) + '">' +
        companionSVG(k, { uid: "pick" + k }) + '<b>' + c.name + '</b><small>Sinh viên · người ghi chép</small></button>';
    }).join("");
    var go = $("#intro-go");
    go.disabled = !S.comp;
    $$("button", pick).forEach(function (b) {
      b.onclick = function () {
        $$("button", pick).forEach(function (x) { x.classList.remove("on"); x.setAttribute("aria-pressed", "false"); });
        b.classList.add("on"); b.setAttribute("aria-pressed", "true");
        S.comp = b.dataset.k; go.disabled = false;
      };
    });
    go.onclick = function () {
      store.set("companion", S.comp);
      intro.hidden = true;
      paintCompanion();
      say(window.COMPANIONS[S.comp].intro + " Thử rê chuột lên một tỉnh, hoặc chọn một dân tộc ở danh sách bên phải.", { stay: true });
    };
  }
  $("#who").onclick = openIntro;

  /* =====================================================================
     BẢN ĐỒ CHÍNH
     ===================================================================== */
  var svg = d3.select("#map"), gRoot, proj, path, zoom, provSel, labelSel;
  var colour = d3.scaleLinear().domain([0, 1, maxCount * 0.5, maxCount]).range(["#ECE6CE", "#D6DDB0", "#93AA67", "#3F5C2D"]).interpolate(d3.interpolateRgb.gamma(1.4));

  function largestPolyCentroid(f) {
    if (f.geometry.type !== "MultiPolygon") return path.centroid(f);
    if (f.properties.TinhThanh === "Hà Nội") return proj([105.62, 21.0]);
    var best = null, bestA = -1;
    f.geometry.coordinates.forEach(function (c) {
      var g = { type: "Polygon", coordinates: c }, a = path.area(g);
      if (d3.geoArea(g) < 2 * Math.PI && isFinite(a) && a > bestA) { bestA = a; best = g; }
    });
    return path.centroid(best);
  }

  function drawMap() {
    var wrap = $("#map-wrap"), W = wrap.clientWidth, H = wrap.clientHeight;
    svg.attr("viewBox", "0 0 " + W + " " + H);
    svg.selectAll("*").remove();
    var narrow = W < 700;
    proj = d3.geoMercator().fitExtent(
      [[narrow ? 14 : 290, narrow ? 84 : 26], [W - (narrow ? 8 : 70), H - (narrow ? 60 : 24)]],
      { type: "MultiPoint", coordinates: [[102.1, 8.3], [117.4, 23.4]] });
    path = d3.geoPath(proj);

    var defs = svg.append("defs");
    var pat = defs.append("pattern").attr("id", "seadots").attr("width", 9).attr("height", 9).attr("patternUnits", "userSpaceOnUse");
    pat.append("rect").attr("width", 9).attr("height", 9).attr("fill", "#C7D5D4");
    pat.append("circle").attr("cx", 2).attr("cy", 2).attr("r", .8).attr("fill", "#AFC2C1");

    svg.append("rect").attr("width", W).attr("height", H).attr("fill", "url(#seadots)");
    gRoot = svg.append("g");
    gRoot.append("path").datum(d3.geoGraticule().step([2, 2])()).attr("class", "grat").attr("d", path);
    gRoot.append("g").selectAll("path").data(neighbours).join("path").attr("class", "nb").attr("d", path);

    provSel = gRoot.append("g").selectAll("path").data(provinces).join("path")
      .attr("class", "prov").attr("d", path)
      .attr("fill", function (d) { return colour(provInfo[d.properties.TinhThanh].ids.length); })
      .on("mousemove", function (ev, d) { showTip(ev, d); })
      .on("mouseleave", hideTip)
      .on("click", function (ev, d) { ev.stopPropagation(); selectProvince(d.properties.TinhThanh); });
    gRoot.append("path").datum(vnOutline).attr("class", "vn-out").attr("d", path);

    // quần đảo
    var isl = window.GEO.islands;
    var gi = gRoot.append("g");
    ["hs", "ts"].forEach(function (k) {
      gi.selectAll(null).data(isl[k]).join("circle").attr("class", "isl")
        .attr("cx", function (d) { return proj(d)[0]; }).attr("cy", function (d) { return proj(d)[1]; }).attr("r", 1.3);
    });
    var hs = proj([112.2, 16.75]), ts = proj([113.2, 11.3]);
    gi.append("text").attr("class", "lbl-isl").attr("x", hs[0]).attr("y", hs[1] - 16).attr("text-anchor", "middle").text("Quần đảo Hoàng Sa");
    gi.append("text").attr("class", "lbl-isl-sub").attr("x", hs[0]).attr("y", hs[1] - 4).attr("text-anchor", "middle").text("(VIỆT NAM)");
    gi.append("text").attr("class", "lbl-isl").attr("x", ts[0]).attr("y", ts[1]).attr("text-anchor", "middle").text("Quần đảo Trường Sa");
    gi.append("text").attr("class", "lbl-isl-sub").attr("x", ts[0]).attr("y", ts[1] + 12).attr("text-anchor", "middle").text("(VIỆT NAM)");

    // nhãn
    var gl = gRoot.append("g");
    [["Trung Quốc", 106.9, 23.9], ["Lào", 103.0, 19.0], ["Campuchia", 104.7, 12.9], ["Thái Lan", 101.2, 15.2]].forEach(function (c) {
      var p = proj([c[1], c[2]]);
      gl.append("text").attr("class", "lbl-country").attr("x", p[0]).attr("y", p[1]).attr("text-anchor", "middle").text(c[0]);
    });
    var bd = proj([111.4, 13.1]);
    gl.append("text").attr("class", "lbl-sea").attr("x", bd[0]).attr("y", bd[1]).attr("text-anchor", "middle").text("B i ể n   Đ ô n g");
    var hn = proj([105.84, 21.03]);
    gl.append("path").attr("class", "cap-star").attr("d", d3.symbol(d3.symbolStar, 70)()).attr("transform", "translate(" + hn + ")");
    gl.append("text").attr("class", "lbl-cap").attr("x", hn[0] + 7).attr("y", hn[1] - 5).text("HÀ NỘI");

    labelSel = gRoot.append("g").selectAll("text").data(provinces).join("text")
      .attr("class", "lbl-prov").attr("text-anchor", "middle")
      .attr("transform", function (d) { return "translate(" + largestPolyCentroid(d) + ")"; })
      .text(function (d) { return d.properties.TinhThanh === "Hà Nội" ? "" : d.properties.TinhThanh.replace("TP. ", ""); });

    zoom = d3.zoom().scaleExtent([1, 14]).on("zoom", function (ev) {
      gRoot.attr("transform", ev.transform);
      var k = ev.transform.k;
      labelSel.classed("show", k > 2.1).style("font-size", 10.5 / k + "px").style("stroke-width", 2.5 / k + "px");
      [[".lbl-country", 14], [".lbl-sea", 15], [".lbl-isl", 13], [".lbl-isl-sub", 8.5], [".lbl-cap", 12]].forEach(function (c) {
        gRoot.selectAll(c[0]).style("font-size", c[1] / k + "px").style("stroke-width", 3 / k + "px");
      });
      gRoot.selectAll(".isl").attr("r", 1.3 / Math.sqrt(k));
      gRoot.select(".cap-star").attr("transform", "translate(" + hn + ") scale(" + 1 / k + ")");
      gRoot.select(".lbl-cap").attr("x", hn[0] + 7 / k).attr("y", hn[1] - 5 / k);
    });
    svg.call(zoom).on("dblclick.zoom", null);
    svg.on("click", function () { if (S.prov) clearProvince(); });
    applyHighlight();
    drawLegend();
  }

  function drawLegend() {
    var steps = d3.range(0, maxCount + 1, Math.ceil(maxCount / 7));
    $("#legend").innerHTML =
      '<div class="lg-title">Số dân tộc thiểu số cư trú tập trung</div>' +
      '<div class="lg-ramp">' + d3.range(0, 8).map(function (i) { return '<span style="background:' + colour(i / 7 * maxCount) + '"></span>'; }).join("") + '</div>' +
      '<div class="lg-scale"><span>0</span><span>' + Math.round(maxCount / 2) + '</span><span>' + maxCount + '</span></div>' +
      '<div class="lg-hit"><i></i>Địa bàn của dân tộc đang chọn</div>';
    void steps;
  }

  function showTip(ev, d) {
    var info = provInfo[d.properties.TinhThanh], tip = $("#tip");
    var r = $("#map-wrap").getBoundingClientRect();
    var sub = info.merged && info.merged.indexOf(",") > -1 ? "Hợp nhất từ: " + info.merged : (info.type || "");
    var hl = S.sel && info.ids.indexOf(S.sel) > -1 ? " · có người " + byId[S.sel].name : "";
    tip.innerHTML = '<span class="t-name">' + esc(info.name) + '</span><span class="t-n">· ' + info.ids.length + ' dân tộc</span><span class="t-sub">' + esc(sub + hl) + '</span>';
    tip.style.left = (ev.clientX - r.left) + "px";
    tip.style.top = (ev.clientY - r.top - 8) + "px";
    tip.classList.add("show");
  }
  function hideTip() { $("#tip").classList.remove("show"); }

  var hoverId = null;
  function applyHighlight() {
    if (!provSel) return;
    var id = hoverId || S.sel;
    var set = id ? byId[id].provinces : [];
    provSel.attr("fill", function (d) {
      return set.length ? "#E4DFC8" : colour(provInfo[d.properties.TinhThanh].ids.length);
    });
    provSel.classed("hit", function (d) { return set.indexOf(d.properties.TinhThanh) > -1; })
           .classed("sel", function (d) { return S.prov === d.properties.TinhThanh; });
  }

  function zoomTo(features) {
    if (!features.length) return;
    var fc = { type: "FeatureCollection", features: features };
    var b = path.bounds(fc), W = $("#map-wrap").clientWidth, H = $("#map-wrap").clientHeight;
    var dx = b[1][0] - b[0][0], dy = b[1][1] - b[0][1], cx = (b[0][0] + b[1][0]) / 2, cy = (b[0][1] + b[1][1]) / 2;
    var k = Math.max(1, Math.min(4.5, 0.6 / Math.max(dx / W, dy / H)));
    svg.transition().duration(850).ease(d3.easeCubicInOut)
      .call(zoom.transform, d3.zoomIdentity.translate(W / 2 + 60, H / 2).scale(k).translate(-cx, -cy));
  }
  function mainlandOf(names) {
    // bỏ các đảo xa khi tính khung phóng (Đà Nẵng, Khánh Hòa có quần đảo)
    return provinces.filter(function (f) { return names.indexOf(f.properties.TinhThanh) > -1; }).map(function (f) {
      if (f.geometry.type !== "MultiPolygon") return f;
      var cs = f.geometry.coordinates.filter(function (c) { return d3.geoCentroid({ type: "Polygon", coordinates: c })[0] < 110; });
      return { type: "Feature", properties: f.properties, geometry: { type: "MultiPolygon", coordinates: cs } };
    });
  }

  $("#zin").onclick = function () { svg.transition().duration(350).call(zoom.scaleBy, 1.6); };
  $("#zout").onclick = function () { svg.transition().duration(350).call(zoom.scaleBy, 1 / 1.6); };
  $("#zreset").onclick = function () { svg.transition().duration(600).call(zoom.transform, d3.zoomIdentity); };

  function selectProvince(name) {
    S.prov = name; S.sel = null;
    var info = provInfo[name];
    zoomTo(mainlandOf([name]));
    renderList(); applyHighlight();
    var chip = $("#prov-chip");
    chip.hidden = false;
    chip.innerHTML = '<div><b>' + esc(name) + '</b> · ' + info.ids.length + ' dân tộc thiểu số cư trú tập trung' +
      (info.merged && info.merged.indexOf(",") > -1 ? '<small>Hợp nhất từ: ' + esc(info.merged) + '</small>' : '') + '</div><button aria-label="Bỏ lọc tỉnh">×</button>';
    $("button", chip).onclick = clearProvince;
    if (info.ids.length) say("Ở <b>" + esc(name) + "</b> có " + info.ids.length + " dân tộc thiểu số cư trú tập trung: " + info.ids.slice(0, 5).map(function (i) { return byId[i].name; }).join(", ") + (info.ids.length > 5 ? "…" : "") + ". Bạn muốn tìm hiểu ai trước?");
    else say("<b>" + esc(name) + "</b> không phải địa bàn cư trú tập trung của dân tộc thiểu số nào trong dữ liệu — nhưng không có nghĩa là không có người thiểu số sinh sống ở đây. Đô thị là nơi rất nhiều người trẻ thiểu số đến học tập, làm việc.");
  }
  function clearProvince() {
    S.prov = null; $("#prov-chip").hidden = true;
    renderList(); applyHighlight();
    svg.transition().duration(700).call(zoom.transform, d3.zoomIdentity);
  }

  /* =====================================================================
     DANH SÁCH
     ===================================================================== */
  function famBadge(e) { var f = FAM[e.fam]; return '<span class="fam" style="color:' + f.color + '">' + f.name + '</span>'; }
  function leadOf(e) {
    if (PRO[e.id]) return PRO[e.id].lead;
    return "Người " + e.name + " nói ngôn ngữ thuộc nhóm " + FAM[e.fam].name + ", cư trú tập trung ở vùng " + REG[e.region].name + ". Theo Tổng điều tra 2019, dân số là " + fmt(e.pop) + " người.";
  }

  function renderFamFilter() {
    $("#fam-filter").innerHTML = Object.keys(FAM).map(function (k) {
      return '<button data-f="' + k + '" class="' + (S.fam === k ? "on" : "") + '"><i style="background:' + FAM[k].color + '"></i>' + FAM[k].name + '</button>';
    }).join("");
    $$("#fam-filter button").forEach(function (b) {
      b.onclick = function () { S.fam = S.fam === b.dataset.f ? null : b.dataset.f; renderFamFilter(); renderList(); };
    });
  }

  function renderList() {
    var q = norm(S.q.trim());
    var items = ranked.filter(function (e) {
      if (S.fam && e.fam !== S.fam) return false;
      if (S.prov && e.provinces.indexOf(S.prov) < 0) return false;
      if (q && norm(e.name + " " + e.alt).indexOf(q) < 0) return false;
      return true;
    });
    if (S.sort === "az") items.sort(function (a, b) { return a.name.localeCompare(b.name, "vi"); });
    if (S.sort === "region") items.sort(function (a, b) { return REG[a.region].order - REG[b.region].order || b.pop - a.pop; });

    var html = "", lastReg = null;
    items.forEach(function (e) {
      if (S.sort === "region" && e.region !== lastReg) { html += '<li class="grp">' + REG[e.region].name + '</li>'; lastReg = e.region; }
      html += '<li class="item' + (S.sel === e.id ? " on" : "") + '" data-id="' + e.id + '">' +
        '<button type="button" aria-expanded="' + (S.sel === e.id) + '"><span class="no">' + pad(e.rank) + '</span>' +
        '<span><span class="nm">' + e.name + (PRO[e.id] ? ' <i class="star" title="Hồ sơ diễn ngôn đầy đủ"></i>' : '') + '</span>' +
        '<span class="meta">' + fmt(e.pop) + ' người · ' + REG[e.region].name + '</span></span>' + famBadge(e) + '</button>' +
        '<div class="more"><p>' + esc(leadOf(e)) + '</p><div class="prv">Địa bàn tập trung: ' + e.provinces.join(", ") + '</div>' +
        '<a class="btn btn-primary btn-small" href="#/dan-toc/' + e.id + '">Khám phá hồ sơ →</a></div></li>';
    });
    $("#list").innerHTML = html || '<li class="empty">Không tìm thấy cộng đồng phù hợp.</li>';

    $$("#list .item").forEach(function (li) {
      var id = li.dataset.id;
      var btn = li.firstElementChild;
      btn.onmouseenter = function () { hoverId = id; applyHighlight(); };
      btn.onmouseleave = function () { hoverId = null; applyHighlight(); };
      btn.onclick = function () { selectGroup(S.sel === id ? null : id, true); };
    });
  }

  function selectGroup(id, fromList) {
    S.sel = id;
    $$("#list .item").forEach(function (li) {
      var on = li.dataset.id === id;
      li.classList.toggle("on", on);
      li.firstElementChild.setAttribute("aria-expanded", on);
    });
    applyHighlight();
    if (!id) { svg.transition().duration(700).call(zoom.transform, d3.zoomIdentity); return; }
    var e = byId[id];
    zoomTo(mainlandOf(e.provinces));
    var m = PRO[id] ? PRO[id].musing : "Người " + e.name + " cư trú tập trung ở " + e.provinces.length + " tỉnh/thành. Bạn có biết tiếng " + e.name + " thuộc nhóm " + FAM[e.fam].name + " không?";
    say(m);
    if (fromList) {
      var li = $('#list .item[data-id="' + id + '"]');
      if (li) li.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }

  $("#q").addEventListener("input", function (ev) { S.q = ev.target.value; renderList(); });
  $$(".seg button").forEach(function (b) {
    b.onclick = function () { S.sort = b.dataset.sort; $$(".seg button").forEach(function (x) { x.classList.toggle("on", x === b); }); renderList(); };
  });

  /* =====================================================================
     BẢN ĐỒ ĐỊNH VỊ (trang hồ sơ)
     ===================================================================== */
  function locatorSVG(e) {
    var W = 340, H = 380;
    var p = d3.geoMercator().fitExtent([[8, 8], [W - 8, H - 8]], { type: "MultiPoint", coordinates: [[102.1, 8.3], [116.2, 23.4]] });
    var pth = d3.geoPath(p);
    var s = '<svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Bản đồ địa bàn cư trú của người ' + e.name + '">';
    neighbours.forEach(function (f) { s += '<path d="' + pth(f) + '" fill="#E7DCC4" stroke="#CDBF9F" stroke-width=".5"/>'; });
    provinces.forEach(function (f) {
      var hit = e.provinces.indexOf(f.properties.TinhThanh) > -1;
      s += '<path d="' + pth(f) + '" fill="' + (hit ? "#D9A13A" : "#DCE0C3") + '" stroke="' + (hit ? "#A63A2B" : "#F7F1E4") + '" stroke-width="' + (hit ? .9 : .5) + '"><title>' + esc(f.properties.TinhThanh) + '</title></path>';
    });
    s += '<path d="' + pth(vnOutline) + '" fill="none" stroke="#24372A" stroke-width=".8"/>';
    ["hs", "ts"].forEach(function (k) { window.GEO.islands[k].forEach(function (pt) { var q = p(pt); if (q[0] < W) s += '<circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r=".9" fill="#4F6B34"/>'; }); });
    var hs = p([112, 17.6]), ts = p([113.6, 11.6]);
    s += '<text x="' + hs[0] + '" y="' + hs[1] + '" font-family="Newsreader,serif" font-style="italic" font-size="10" fill="#2E3F5C" text-anchor="middle">QĐ. Hoàng Sa</text>';
    s += '<text x="' + ts[0] + '" y="' + ts[1] + '" font-family="Newsreader,serif" font-style="italic" font-size="10" fill="#2E3F5C" text-anchor="middle">QĐ. Trường Sa</text>';
    var hn = p([105.84, 21.03]);
    s += '<path d="' + d3.symbol(d3.symbolStar, 30)() + '" transform="translate(' + hn + ')" fill="#A63A2B"/>';
    return s + '</svg>';
  }

  /* =====================================================================
     TRANG HỒ SƠ
     ===================================================================== */
  var TABS = [
    ["culture", "01", "Văn hóa"], ["language", "02", "Tiếng nói"], ["works", "03", "Kho văn"],
    ["faces", "04", "Gương mặt"], ["today", "05", "Hôm nay"]
  ];
  function renderDetail(id, tab) {
    var e = byId[id];
    if (!e) { location.hash = "#/"; return; }
    var pr = PRO[id], f = FAM[e.fam];
    S.detailId = id;
    if (S.visited.indexOf(id) < 0) { S.visited.push(id); store.set("visited", S.visited); }
    var prev = ranked[(e.rank - 2 + ranked.length) % ranked.length], next = ranked[e.rank % ranked.length];

    var h = '<div class="page-bar"><a class="back" href="#/">← Bản đồ</a>' +
      '<span class="crumb">Atlas / Dân tộc / <b>' + e.name + '</b></span>' +
      '<span class="pn"><a href="#/dan-toc/' + prev.id + '" title="' + prev.name + '">← ' + prev.name + '</a><a href="#/dan-toc/' + next.id + '" title="' + next.name + '">' + next.name + ' →</a></span></div>';

    h += '<div class="detail"><div class="d-main">';
    h += '<div class="hero"><div>' +
      '<div class="idx"><span>Hồ sơ ' + pad(e.rank) + ' / 53</span><span>' + (pr ? "Hồ sơ diễn ngôn đầy đủ" : "Hồ sơ đang biên soạn") + '</span></div>' +
      '<p class="kicker">Dân tộc</p><h1>' + e.name + '</h1>' +
      (e.alt ? '<p class="alt"><i>Tên gọi khác, nhóm địa phương:</i> ' + esc(e.alt) + '</p>' : '') +
      '<div class="chips"><span class="chip k">' + REG[e.region].name + '</span>' + e.provinces.map(function (p) { return '<span class="chip">' + p + '</span>'; }).join("") + '</div>' +
      '<dl class="facts">' +
        '<div><dt>Dân số (2019)</dt><dd>' + fmt(e.pop) + '<small>đứng thứ ' + (e.rank + 1) + ' trong 54 dân tộc' + (e.pop < 10000 ? " · dân tộc rất ít người" : "") + '</small></dd></div>' +
        '<div><dt>Nhóm ngôn ngữ</dt><dd>' + f.name + '<small>ngữ hệ ' + f.stock + '</small></dd></div>' +
        '<div><dt>Vùng cư trú chính</dt><dd>' + REG[e.region].name + '<small>' + e.provinces.length + ' tỉnh/thành cư trú tập trung</small></dd></div>' +
        '<div><dt>Tỷ lệ trong cộng đồng DTTS</dt><dd>' + (e.pop / totalPop * 100).toLocaleString("vi-VN", { maximumFractionDigits: e.pop / totalPop < 0.001 ? 3 : 1 }) + ' %<small>trên ' + fmt(totalPop) + ' người</small></dd></div>' +
      '</dl></div>' +
      '<figure class="figure">' + locatorSVG(e) + '<figcaption><b>HÌNH 1.</b> Địa bàn cư trú tập trung của người ' + e.name + ', thể hiện trên 34 đơn vị hành chính cấp tỉnh (từ 01/7/2025).</figcaption></figure></div>';

    if (pr && pr.epigraph) {
      h += '<div class="epi"><p class="eyebrow">Tiếng nói từ cộng đồng</p><blockquote>“' + esc(pr.epigraph.text) + '”</blockquote><cite><b>' + esc(pr.epigraph.by) + '</b> — ' + esc(pr.epigraph.src) + '</cite></div>';
      h += '<p class="sec-sub" style="margin-top:22px">' + esc(pr.lead) + '</p>';
    } else {
      h += '<div class="epi"><p class="eyebrow">Lời dẫn</p><p class="lead">' + esc(leadOf(e)) + '</p></div>';
    }

    h += '<div class="parts" id="parts"><div class="parts-row">' +
      '<div><div class="parts-lbl k">Phần I · Diễn ngôn kiến tạo</div><div class="tabs k">' +
      TABS.map(function (t) { return '<button data-tab="' + t[0] + '"><small>' + t[1] + '</small><b>' + t[2] + '</b></button>'; }).join("") + '</div></div>' +
      '<div><div class="parts-lbl d">Phần II</div><div class="tabs d"><button data-tab="myths"><small>06</small><b>Định kiến</b></button></div></div>' +
      '</div></div><div id="tab-body"></div>';
    h += '</div>';

    // aside
    h += '<aside class="d-aside"><div class="d-aside-in">' +
      '<div class="aside-card"><p class="eyebrow">● ' + compName() + ' · ghi chú</p><p>' + esc(pr ? pr.musing : "Mình chưa biết nhiều về người " + e.name + ". Hồ sơ này còn đang được biên soạn — cùng mình tìm hiểu từ những gì đã có nhé.") + '</p></div>' +
      '<div class="aside-card"><p class="eyebrow">Hỏi ' + compName() + '</p><div class="aside-q">' +
        '<button data-ask="Người ' + e.name + ' sống ở đâu?">Người ' + e.name + ' sống ở đâu?</button>' +
        '<button data-ask="Tiếng ' + e.name + ' thuộc nhóm ngôn ngữ nào?">Tiếng ' + e.name + ' thuộc nhóm nào?</button>' +
        '<button data-ask="Định kiến về người ' + e.name + '">Định kiến thường gặp?</button>' +
        '<button data-ask="Nên gọi, nói về người dân tộc thiểu số thế nào cho đúng?">Nên nói thế nào cho đúng?</button>' +
      '</div><div class="progress"><div class="bar"><i style="width:' + (S.visited.length / 53 * 100) + '%"></i></div><small>Bạn đã mở ' + S.visited.length + ' / 53 hồ sơ</small></div></div>' +
      '<div class="aside-fig">' + companionSVG(S.comp || "may", { uid: "aside" }) + '</div>' +
      '</div></aside></div>';

    var v = $("#view-detail");
    v.innerHTML = h;
    v.scrollTop = 0;
    $$(".tabs button", v).forEach(function (b) { b.onclick = function () { showTab(e, b.dataset.tab, true); }; });
    $$("[data-ask]", v).forEach(function (b) { b.onclick = function () { openChat(); ask(b.dataset.ask); }; });
    showTab(e, tab || "culture", false);
  }

  function pending(what) {
    return '<div class="pending"><b>Đang biên soạn.</b> ' + what + ' Atlas chỉ đăng tư liệu đã được kiểm chứng và, khi có thể, do chính người trong cộng đồng cung cấp. Bạn có tư liệu? Xem mục <a href="#/du-an">Về dự án</a> để đóng góp.</div>';
  }
  function mythCard(m, i) {
    return '<div class="myth" data-i="' + i + '"><div class="ms"><p class="eyebrow">Câu nói thường gặp</p><q><span>' + esc(m.s) + '</span></q>' +
      '<div class="reveal"><button class="btn btn-small">Đọc ngược câu này ↺</button></div>' +
      '<p class="why" hidden><b>Vì sao là định kiến</b>' + esc(m.why) + '</p></div>' +
      '<div class="ma"><div class="cover"><span class="eyebrow" style="color:var(--muted)">Lật lại để xem góc nhìn khác</span></div><p class="eyebrow">Góc nhìn khác</p><p>' + esc(m.alt) + '</p>' +
      '<div class="say"><b>Có thể nói</b>' + esc(m.say) + '</div></div><span class="stamp">Định kiến</span></div>';
  }

  function showTab(e, tab, scroll) {
    var pr = PRO[e.id], f = FAM[e.fam], body = $("#tab-body"), h = "";
    $$("#parts .tabs button").forEach(function (b) { b.classList.toggle("on", b.dataset.tab === tab); });

    if (tab === "culture") {
      h += '<h3 class="sec-h">Văn hóa</h3><p class="sec-sub">Những thực hành văn hóa được kể từ góc nhìn tôn trọng: đặt trong bối cảnh, gọi đúng tên, hiểu đúng ý nghĩa.</p>';
      if (pr) h += '<div class="cards">' + pr.culture.map(function (c, i) { return '<article class="c-card"><span class="n">' + pad(i + 1) + '</span><h4>' + esc(c.t) + '</h4><p>' + esc(c.d) + '</p></article>'; }).join("") + '</div>';
      else h += '<div class="cards"><article class="c-card"><span class="n">NHÓM NGÔN NGỮ</span><h4>' + f.name + '</h4><p>' + esc(f.desc) + '</p></article>' +
        '<article class="c-card"><span class="n">VÙNG CƯ TRÚ</span><h4>' + REG[e.region].name + '</h4><p>Người ' + e.name + ' cư trú tập trung tại ' + e.provinces.join(", ") + '. Mỗi địa bàn có điều kiện sinh thái riêng, định hình sinh kế, kiến trúc và lịch nghi lễ của cộng đồng.</p></article></div>' +
        '<div style="height:16px"></div>' + pending("Phần văn hóa của người " + e.name + " đang được nhóm biên soạn.");
    }
    if (tab === "language") {
      h += '<h3 class="sec-h">Tiếng nói</h3><p class="sec-sub">Ngôn ngữ là cách một cộng đồng đặt tên cho thế giới. Mất một ngôn ngữ là mất một cách nhìn.</p>';
      if (pr) h += '<div class="lang"><p class="prose">' + esc(pr.language.text) + '</p><ul>' + pr.language.notes.map(function (n) { var p = n.split(": "); return '<li><b>' + esc(p[0]) + '</b>' + esc(p.slice(1).join(": ")) + '</li>'; }).join("") + '</ul></div>';
      else h += '<div class="lang"><p class="prose">Tiếng ' + e.name + ' thuộc nhóm ' + f.name + ' (ngữ hệ ' + f.stock + '). ' + esc(f.desc) + '</p><ul><li><b>Ngữ hệ</b>' + f.stock + '</li><li><b>Nhóm</b>' + f.name + '</li><li><b>Văn tự</b>Đang cập nhật</li></ul></div>';
      var sibs = ranked.filter(function (x) { return x.fam === e.fam; });
      h += '<div class="family-tree"><h4>Cùng nhóm ' + f.name + '</h4><p>' + sibs.length + ' dân tộc thiểu số' + (e.fam === "vm" ? " (và người Kinh)" : "") + ' có ngôn ngữ cùng nhóm. Chọn để so sánh.</p><div class="ft-row">' +
        sibs.map(function (x) { return '<a href="#/dan-toc/' + x.id + '/language" class="' + (x.id === e.id ? "me" : "") + '">' + x.name + '</a>'; }).join("") + '</div></div>';
    }
    if (tab === "works") {
      h += '<h3 class="sec-h">Kho văn</h3><p class="sec-sub">Sử thi, truyện thơ, dân ca và những văn bản hiện đại — cả những văn bản do người ngoài cộng đồng viết, để đọc với câu hỏi: ai đang kể?</p>';
      if (pr && pr.works.length) h += '<div class="works">' + pr.works.map(function (w, i) {
        return '<div class="work"><button type="button"><span class="wn">' + pad(i + 1) + '</span><span><span class="wt">' + esc(w.t) + '</span><br><span class="wk">' + esc(w.k) + '</span></span><span class="plus">+</span></button><div class="wb"><p>' + esc(w.d) + '</p></div></div>';
      }).join("") + '</div>';
      else h += pending("Kho văn của người " + e.name + " đang được sưu tầm.");
    }
    if (tab === "faces") {
      h += '<h3 class="sec-h">Gương mặt</h3><p class="sec-sub">Những người ' + e.name + ' đã để lại dấu ấn trên bản đồ văn hóa Việt Nam — tự kể câu chuyện của mình.</p>';
      if (pr && pr.faces.length) h += '<div class="faces">' + pr.faces.map(function (p) {
        var ini = p.n.replace(/\(.*\)/, "").trim().split(" ").pop().charAt(0);
        return '<article class="face"><div class="ph"><span>' + esc(ini) + '</span></div><div class="tx"><b>' + esc(p.n) + '</b>' + (p.y ? '<small>' + esc(p.y) + '</small>' : '') + '<p>' + esc(p.r) + '</p></div></article>';
      }).join("") + '</div><p class="note">Ảnh chân dung chỉ được đăng khi có sự đồng ý của nhân vật hoặc nguồn ảnh được cấp phép. Danh sách mang tính gợi mở, không xếp hạng.</p>';
      else if (pr) h += '<div class="pending"><b>Danh sách mở.</b> Atlas chưa ghi tên nhân vật nào của người ' + e.name + ' mà chưa kiểm chứng được. Mục này dành cho chính cộng đồng đề cử: nghệ nhân, nhà giáo, người giữ tiếng, người trẻ đang làm mới văn hóa của mình. Xem <a href="#/du-an">Về dự án</a> để đóng góp.</div>';
      else h += pending("Danh sách gương mặt người " + e.name + " đang được tuyển chọn.");
    }
    if (tab === "today") {
      h += '<h3 class="sec-h">' + e.name + ' · hôm nay</h3><p class="sec-sub">Văn hóa không đứng yên trong bảo tàng. Đây là cộng đồng đang sống, đang thay đổi.</p>';
      if (pr) h += '<div class="muse"><div class="mf">' + companionSVG(S.comp || "may", { uid: "muse" }) + '</div><div><p class="eyebrow">● ' + compName() + ' · giữa hai phần</p><p>' + esc(pr.musing) + '</p></div></div><div class="today"><p class="eyebrow" style="color:var(--son)">' + e.name + ' · hôm nay</p><p>' + esc(pr.today) + '</p></div>';
      else h += pending("Phần đời sống đương đại của người " + e.name + " đang được biên soạn.");
    }
    if (tab === "myths") {
      h += '<h3 class="sec-h" style="color:var(--son)">Diễn ngôn định kiến</h3><p class="sec-sub">Mỗi thẻ là một câu nói có thật trong đời sống, truyền thông, sách vở. Bấm “Đọc ngược” để thấy cơ chế định kiến và một cách nói khác.</p>';
      var own = pr && pr.myths ? pr.myths : [];
      if (own.length) h += '<div class="sub-h">Về người ' + e.name + '</div>' + own.map(mythCard).join("");
      h += '<div class="sub-h">Khuôn mẫu chung “người Kinh – người thiểu số”</div>' + window.COMMON_MYTHS.map(function (m, i) { return mythCard(m, 100 + i); }).join("");
    }
    body.innerHTML = '<div class="tab-body">' + h + '</div>';

    $$(".work > button", body).forEach(function (b) { b.onclick = function () { b.parentNode.classList.toggle("on"); }; });
    $$(".myth", body).forEach(function (m) {
      $(".reveal button", m).onclick = function () {
        m.classList.toggle("struck");
        $(".why", m).hidden = !m.classList.contains("struck");
        this.textContent = m.classList.contains("struck") ? "Đọc lại câu gốc" : "Đọc ngược câu này ↺";
      };
    });
    var hash = "#/dan-toc/" + e.id + (tab === "culture" ? "" : "/" + tab);
    if (location.hash !== hash) history.replaceState(null, "", hash);   // replaceState không phát sự kiện hashchange
    if (scroll) {
      var vw = $("#view-detail"), y = vw.scrollTop + body.getBoundingClientRect().top - vw.getBoundingClientRect().top - 120;
      if (y < vw.scrollTop || y > vw.scrollTop + 200) vw.scrollTo({ top: y, behavior: "smooth" });
    }
  }

  /* =====================================================================
     KHUNG DIỄN NGÔN
     ===================================================================== */
  function renderLens() {
    var h = '<div class="page-bar"><a class="back" href="#/">← Bản đồ</a><span class="crumb">Atlas / <b>Khung diễn ngôn</b></span></div><article class="article">' +
      '<p class="eyebrow">Khung lý thuyết · đọc trước khi khám phá</p><h1>Nhận diện <em>diễn ngôn</em></h1>' +
      '<p class="lede">Diễn ngôn dân tộc thiểu số là tập hợp các cách nói, cách viết, quan điểm và hệ thống ý tưởng dùng để định hình, thảo luận hoặc phán xét về các cộng đồng dân tộc thiểu số trong xã hội. Diễn ngôn không chỉ phản ánh thực tế — nó tạo ra thực tế.</p>' +
      '<h2><small>01</small>Hai kiểu diễn ngôn</h2>' +
      '<div class="duo"><div><h3>Diễn ngôn kiến tạo</h3><ul><li>Gọi đúng tên dân tộc, đúng tên thực hành văn hóa</li><li>Đặt hiện tượng trong bối cảnh lịch sử, sinh thái</li><li>Để cộng đồng tự kể về mình</li><li>Nhìn thấy sự đa dạng bên trong mỗi cộng đồng</li><li>Nhìn con người như chủ thể đang sống, đang thay đổi</li></ul></div>' +
      '<div><h3>Diễn ngôn định kiến</h3><ul><li>Lấy một nhóm làm “chuẩn”, nhóm khác là “khác”</li><li>Quy vấn đề xã hội thành “bản chất” dân tộc</li><li>Kỳ lạ hóa, thần bí hóa, “du lịch hóa”</li><li>Ban ơn, coi cộng đồng là đối tượng thụ động</li><li>Đóng băng văn hóa trong quá khứ</li></ul></div></div>' +
      '<h2><small>02</small>Năm câu hỏi để đọc một văn bản</h2><p>Khi đọc một bài báo, một trang sách giáo khoa, một bài đăng du lịch hay một bộ phim về dân tộc thiểu số, hãy tự hỏi:</p>' +
      '<ol class="qs"><li>Ai đang nói? Người trong cộng đồng hay người ngoài?</li><li>Cộng đồng xuất hiện như chủ thể hành động hay như đối tượng được mô tả, được giúp đỡ?</li><li>Văn bản đang so sánh với ai, và ai được coi là “chuẩn”?</li><li>Điều gì được kể, và điều gì bị bỏ qua?</li><li>Nếu chính người được nói đến đọc văn bản này, họ sẽ cảm thấy thế nào?</li></ol>' +
      '<h2><small>03</small>Bảng chuyển đổi ngôn từ</h2><p>Ngôn từ không trung tính. Một vài thay đổi nhỏ có thể làm khác đi cả cách nhìn:</p>' +
      '<table class="lex"><thead><tr><th>Thay vì nói</th><th>Có thể nói</th></tr></thead><tbody>' +
      window.LEXICON.map(function (r) { return '<tr><td>' + esc(r[0]) + '</td><td>' + esc(r[1]) + '</td></tr>'; }).join("") + '</tbody></table>' +
      '<h2><small>04</small>Ứng xử khi gặp gỡ</h2>' +
      '<p>Hỏi tên dân tộc của người đối diện thay vì đoán qua trang phục hay giọng nói. Xin phép trước khi chụp ảnh — đặc biệt là trẻ em và nghi lễ. Tìm hiểu ý nghĩa trước khi mặc thử trang phục truyền thống. Không biến câu chuyện của người khác thành “nội dung lạ” trên mạng xã hội. Và khi nghe một câu đùa dựa trên định kiến, hãy lên tiếng nhẹ nhàng.</p>' +
      '<h2><small>05</small>Tài liệu tham khảo</h2><ul class="refs">' +
      '<li>Tổng cục Thống kê (2020). <i>Kết quả toàn bộ Tổng điều tra dân số và nhà ở năm 2019.</i> Hà Nội: NXB Thống kê.</li>' +
      '<li>Ủy ban Dân tộc &amp; Tổng cục Thống kê (2020). <i>Kết quả điều tra thu thập thông tin về thực trạng kinh tế – xã hội của 53 dân tộc thiểu số năm 2019.</i></li>' +
      '<li>Quốc hội (2025). <i>Nghị quyết 202/2025/QH15 về việc sắp xếp đơn vị hành chính cấp tỉnh.</i></li>' +
      '<li>Foucault, M. (1969). <i>L’Archéologie du savoir.</i> Paris: Gallimard.</li>' +
      '<li>Said, E. (1978). <i>Orientalism.</i> New York: Pantheon.</li>' +
      '<li>Hall, S. (ed.) (1997). <i>Representation: Cultural Representations and Signifying Practices.</i> London: Sage.</li>' +
      '<li>UNESCO. Danh sách di sản văn hóa phi vật thể: Không gian văn hóa Cồng chiêng Tây Nguyên (2005/2008); Thực hành Then (2019); Nghệ thuật Xòe Thái (2021); Nghệ thuật làm gốm của người Chăm (2022).</li></ul>' +
      '<p style="margin-top:30px"><a class="btn btn-primary" href="#/">Bắt đầu khám phá bản đồ →</a></p></article>';
    $("#view-lens").innerHTML = h;
  }

  function renderAbout() {
    var h = '<div class="page-bar"><a class="back" href="#/">← Bản đồ</a><span class="crumb">Atlas / <b>Về dự án</b></span></div><article class="article">' +
      '<p class="eyebrow">Về dự án</p><h1>Bản đồ để <em>học cách nhìn</em></h1>' +
      '<p class="lede">Atlas Diễn ngôn là một bản đồ số dùng cho học tập, hướng tới mục đích bình đẳng: giúp người học biết cách ứng xử, hiểu các nét đẹp văn hóa truyền thống của các dân tộc ít người để trân trọng, tránh cái nhìn phán xét.</p>' +
      '<h2><small>01</small>Cách dùng</h2><ol class="qs"><li>Chọn một người đồng hành — Mây hoặc Núi.</li><li>Rê chuột trên bản đồ để xem mỗi tỉnh có bao nhiêu dân tộc thiểu số cư trú tập trung; bấm vào tỉnh để lọc danh sách.</li><li>Rê chuột trên danh sách để thấy địa bàn của từng dân tộc; chọn “Khám phá hồ sơ”.</li><li>Trong hồ sơ, đi qua Phần I (diễn ngôn kiến tạo) rồi Phần II (định kiến).</li><li>Khám phá xong, vào “Khung cửi” để dệt tấm vải tri thức của bạn.</li></ol>' +
      '<h2><small>02</small>Về người đồng hành</h2><p>Hai nhân vật có cùng trang phục, cùng vai trò, cùng lời thoại; khác biệt duy nhất là kiểu tóc. Thứ tự hiển thị được xáo ngẫu nhiên mỗi lần chọn, để không nhân vật nào được mặc định là “mặc định”. Đây là một lựa chọn thiết kế có chủ đích nhằm tránh diễn ngôn về giới.</p>' +
      '<h2><small>03</small>Dữ liệu</h2><p>Dân số theo Tổng điều tra dân số và nhà ở 01/4/2019. Ranh giới hành chính theo 34 đơn vị cấp tỉnh từ 01/7/2025 (dữ liệu mở của cộng đồng GIS, đã giản lược). Bản đồ thể hiện đầy đủ quần đảo Hoàng Sa và quần đảo Trường Sa thuộc chủ quyền Việt Nam. “Địa bàn cư trú tập trung” là các tỉnh nơi cộng đồng sinh sống đông, không phải toàn bộ nơi có người của dân tộc đó.</p>' +
      '<h2><small>04</small>Giới hạn &amp; đóng góp</h2><p>Hiện có ' + Object.keys(PRO).length + ' hồ sơ diễn ngôn đầy đủ; các hồ sơ còn lại đang được biên soạn. Nội dung cần được rà soát bởi chuyên gia và, quan trọng nhất, bởi chính người trong cộng đồng. Người đồng hành trả lời dựa trên dữ liệu trong Atlas, không phải một mô hình ngôn ngữ, nên sẽ không bịa đặt thông tin ngoài dữ liệu.</p>' +
      '<p>Mọi đóng góp tư liệu, ảnh có cấp phép, hoặc góp ý về cách diễn đạt xin gửi về nhóm thực hiện.</p></article>';
    $("#view-about").innerHTML = h;
  }

  /* =====================================================================
     TRÒ CHƠI — KHUNG CỬI
     ===================================================================== */
  var WEFTS = [
    "var(--band)", "var(--band-red)",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34'%3E%3Crect width='34' height='34' fill='%234F6B34'/%3E%3Cpath d='M17 4 L30 17 L17 30 L4 17Z' fill='none' stroke='%23F1D9A0' stroke-width='2'/%3E%3Cpath d='M17 11 L23 17 L17 23 L11 17Z' fill='%23D9A13A'/%3E%3C/svg%3E\")",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='34'%3E%3Crect width='20' height='34' fill='%23D9A13A'/%3E%3Cpath d='M0 10 L10 2 L20 10 M0 24 L10 32 L20 24' fill='none' stroke='%232E3F5C' stroke-width='2.2'/%3E%3Ccircle cx='10' cy='17' r='3' fill='%23A63A2B'/%3E%3C/svg%3E\")",
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34'%3E%3Crect width='34' height='34' fill='%231F1A15'/%3E%3Cpath d='M17 5 L20 14 L29 17 L20 20 L17 29 L14 20 L5 17 L14 14Z' fill='%23E9DFC6'/%3E%3Ccircle cx='17' cy='17' r='2.5' fill='%23A63A2B'/%3E%3C/svg%3E\")"
  ];
  var G;
  function weave(ok) {
    var w = document.createElement("div");
    w.className = "weft" + (ok ? "" : " plain");
    if (ok) w.style.backgroundImage = WEFTS[G.woven % WEFTS.length];
    G.woven++;
    $("#warp").appendChild(w);
    requestAnimationFrame(function () { requestAnimationFrame(function () { w.classList.add("in"); }); });
  }
  function renderGame() {
    G = { i: 0, score: 0, res: [], woven: 0, phase: "quiz" };
    var v = $("#view-game");
    v.innerHTML = '<div class="page-bar"><a class="back" href="#/">← Bản đồ</a><span class="crumb">Atlas / <b>Khung cửi tri thức</b></span></div>' +
      '<div class="game"><div class="loom"><p class="eyebrow">Tấm vải của bạn</p><div class="loom-frame"><div class="warp" id="warp"></div></div>' +
      '<small>Mỗi câu trả lời đúng dệt thêm một dải hoa văn. Câu sai vẫn là một sợi mộc — vì nhận ra mình từng nghĩ sai cũng là một phần của việc học.</small></div>' +
      '<div class="g-main" id="g-main"></div></div>';
    gQuiz();
  }
  function gQuiz() {
    var Q = window.QUIZ, it = Q[G.i];
    var dots = Q.map(function (_, k) { return '<i class="' + (k < G.i ? (G.res[k] ? "ok" : "no") : k === G.i ? "cur" : "") + '"></i>'; }).join("");
    $("#g-main").innerHTML = '<h1>Sự thật hay <em>định kiến</em>?</h1><p class="lead lede">Đọc mỗi câu và quyết định: đó là một sự thật có cơ sở, hay một định kiến đang lưu hành?</p>' +
      '<div class="g-meta"><span>Vòng 1 · Câu ' + (G.i + 1) + ' / ' + Q.length + '</span><span class="g-dots">' + dots + '</span></div>' +
      '<div class="qcard" id="qcard"><div class="qcard-in"><div class="qface"><p class="eyebrow">Câu ' + pad(G.i + 1) + '</p><p class="qt">“' + esc(it.q) + '”</p></div>' +
      '<div class="qface qback" id="qback"></div></div></div>' +
      '<div class="answers"><button class="t" data-a="1">Sự thật<small>có cơ sở</small></button><button class="f" data-a="0">Định kiến<small>cần đọc ngược</small></button></div><div class="g-next" id="g-next"></div>';
    $$(".answers button").forEach(function (b) {
      b.onclick = function () {
        var pick = b.dataset.a === "1", ok = pick === it.a;
        G.res.push(ok); if (ok) G.score++;
        $$(".answers button").forEach(function (x) { x.disabled = true; });
        var back = $("#qback");
        back.className = "qface qback " + (ok ? "ok" : "no");
        back.innerHTML = '<p class="verdict">' + (ok ? "Chính xác." : "Chưa đúng.") + '</p><p>' + esc(it.e) + '</p>';
        $("#qcard").classList.add("flip");
        weave(ok);
        var last = G.i === window.QUIZ.length - 1;
        $("#g-next").innerHTML = '<button class="btn btn-primary">' + (last ? "Sang vòng 2: Ghép đôi →" : "Câu tiếp theo →") + '</button>';
        $("#g-next button").onclick = function () { if (last) gMatch(); else { G.i++; gQuiz(); } };
        $("#g-next button").focus();
      };
    });
  }
  function gMatch() {
    var M = window.MATCH, left = d3.shuffle(M.map(function (p, i) { return { t: p[0], k: i }; })), right = d3.shuffle(M.map(function (p, i) { return { t: p[1], k: i }; }));
    var done = 0, sel = null, tries = 0;
    $("#g-main").innerHTML = '<h1>Ghép <em>đôi</em></h1><p class="lede">Nối mỗi thực hành văn hóa với cộng đồng đã sáng tạo và gìn giữ nó. Mỗi cặp đúng là một dải hoa văn mới.</p>' +
      '<div class="g-meta"><span>Vòng 2 · Ghép đôi</span><span id="m-count">0 / ' + M.length + '</span></div>' +
      '<div class="match"><div class="col" id="m-l">' + left.map(function (x) { return '<button data-k="' + x.k + '" data-s="l">' + esc(x.t) + '</button>'; }).join("") + '</div>' +
      '<div class="col" id="m-r">' + right.map(function (x) { return '<button data-k="' + x.k + '" data-s="r">' + esc(x.t) + '</button>'; }).join("") + '</div></div>';
    $$(".match button").forEach(function (b) {
      b.onclick = function () {
        if (b.classList.contains("done")) return;
        if (!sel || sel.dataset.s === b.dataset.s) { if (sel) sel.classList.remove("sel"); sel = b; b.classList.add("sel"); return; }
        tries++;
        if (sel.dataset.k === b.dataset.k) {
          sel.classList.remove("sel"); sel.classList.add("done"); b.classList.add("done"); sel.disabled = b.disabled = true;
          done++; G.score++; weave(true);
          $("#m-count").textContent = done + " / " + M.length;
          if (done === M.length) setTimeout(function () { gResult(tries); }, 700);
        } else {
          [sel, b].forEach(function (x) { x.classList.remove("err"); void x.offsetWidth; x.classList.add("err"); });
          sel.classList.remove("sel");
        }
        sel = null;
      };
    });
  }
  function gResult(tries) {
    var total = window.QUIZ.length + window.MATCH.length;
    var msg = G.score >= total - 2 ? "Tấm vải của bạn gần như kín hoa văn. Bạn đã có một “kính đọc” khá tốt để nhận ra định kiến." :
      G.score >= total / 2 ? "Tấm vải đã có nhiều dải hoa văn đẹp. Những sợi mộc còn lại là gợi ý để bạn quay lại vài hồ sơ trên bản đồ." :
      "Tấm vải còn nhiều sợi mộc — không sao cả. Nhận ra mình từng nghĩ sai là bước đầu tiên để nhìn khác đi.";
    $("#g-main").innerHTML = '<div class="result"><p class="eyebrow">Tấm vải đã dệt xong</p><div class="big">' + G.score + ' / ' + total + '</div>' +
      '<p>' + msg + '</p><p style="font-size:15px">' + compName() + ': “Mình cũng từng sai ở vài câu. Điều mình học được là: trước khi nói về một cộng đồng, hãy hỏi xem chính họ nói gì về mình.”</p>' +
      '<p style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-primary" id="g-again">Dệt lại tấm mới</button><a class="btn" href="#/khung">Đọc Khung diễn ngôn</a><a class="btn" href="#/">Về bản đồ</a></p></div>';
    $("#g-again").onclick = renderGame;
    void tries;
  }

  /* =====================================================================
     NGƯỜI ĐỒNG HÀNH TRẢ LỜI — dựa hoàn toàn trên dữ liệu Atlas
     ===================================================================== */
  var groupKeys = [];
  ETH.forEach(function (e) {
    groupKeys.push({ k: e.name.toLowerCase(), id: e.id, exact: true });
    if (e.id === "bru") { groupKeys.push({ k: "vân kiều", id: e.id, exact: true }); groupKeys.push({ k: "bru", id: e.id, exact: true }); }
    if (e.id === "stieng") groupKeys.push({ k: "stiêng", id: e.id, exact: true });
    if (e.id === "mong") groupKeys.push({ k: "h'mông", id: e.id, exact: true }), groupKeys.push({ k: "hmong", id: e.id, exact: false });
    if (e.id === "ede") groupKeys.push({ k: "êđê", id: e.id, exact: true });
    if (e.id === "giarai") groupKeys.push({ k: "jrai", id: e.id, exact: false }), groupKeys.push({ k: "gia-rai", id: e.id, exact: false });
    if (e.id === "bana") groupKeys.push({ k: "bahnar", id: e.id, exact: false });
    if (e.id === "coho") groupKeys.push({ k: "k'ho", id: e.id, exact: true }), groupKeys.push({ k: "k’ho", id: e.id, exact: true });
    if (norm(e.name).length >= 5) groupKeys.push({ k: norm(e.name), id: e.id, exact: false });
  });
  groupKeys.sort(function (a, b) { return b.k.length - a.k.length; });
  var provKeys = Object.keys(oldToNew).sort(function (a, b) { return b.length - a.length; });

  function wordHas(text, key) {
    var re = new RegExp("(^|[^\\p{L}])" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?=$|[^\\p{L}])", "u");
    return re.test(text);
  }
  function findProvince(raw) {
    var low = raw.toLowerCase(), nl = norm(raw);
    for (var i = 0; i < provKeys.length; i++) {
      var k = provKeys[i];
      if (wordHas(low, k.toLowerCase()) || (norm(k).length > 4 && wordHas(nl, norm(k)))) return { hit: k, name: oldToNew[k] };
    }
    return null;
  }
  function findGroup(raw, strip) {
    var low = raw.toLowerCase(), nl;
    if (strip) { low = low.split(strip.toLowerCase()).join(" "); }
    nl = norm(low);
    for (var i = 0; i < groupKeys.length; i++) {
      var g = groupKeys[i];
      if (g.exact ? wordHas(low, g.k) : wordHas(nl, g.k)) return byId[g.id];
    }
    return null;
  }
  var link = function (e, tab) { return '<a href="#/dan-toc/' + e.id + (tab ? "/" + tab : "") + '">' + e.name + '</a>'; };

  function answer(raw) {
    var n = norm(raw);
    var has = function () { for (var i = 0; i < arguments.length; i++) if (n.indexOf(arguments[i]) > -1) return true; return false; };
    var prov = findProvince(raw);
    var g = findGroup(raw, prov && prov.hit);
    if (!g && S.view === "detail" && has("dan toc nay", "ho ", "nguoi nay", "cong dong nay")) g = byId[S.detailId];

    if (/^(xin )?chao|^hi\b|^hello|^alo/.test(n)) return "Chào bạn! Mình là " + compName() + ". Bạn có thể hỏi mình về một dân tộc (ví dụ “người Ê Đê sống ở đâu?”), một tỉnh (“Lai Châu có những dân tộc nào?”), hay về cách nói tránh định kiến.";

    if (has("dinh kien", "ky thi", "phan biet", "rap khuon", "khuon mau")) {
      if (g && PRO[g.id] && PRO[g.id].myths.length) {
        var m = PRO[g.id].myths[0];
        return "Một định kiến hay gặp về người " + g.name + ": <i>“" + esc(m.s) + "”</i><br><br>" + esc(m.why) + "<br><br><b>Góc nhìn khác:</b> " + esc(m.alt) + "<br>Xem thêm ở tab " + link(g, "myths") + " → Định kiến.";
      }
      var c = window.COMMON_MYTHS[Math.floor(Math.random() * window.COMMON_MYTHS.length)];
      return (g ? "Hồ sơ người " + g.name + " chưa có phần định kiến riêng, nhưng khuôn mẫu chung vẫn áp dụng. " : "") + "Ví dụ: <i>“" + esc(c.s) + "”</i> — " + esc(c.why) + "<br><br><b>Có thể nói:</b> " + esc(c.say) + "<br>Đọc thêm ở <a href=\"#/khung\">Khung diễn ngôn</a>.";
    }
    if (has("nen goi", "xung ho", "ung xu", "cach noi", "nen noi", "tu ngu", "goi the nao", "noi the nao", "lich su", "ton trong")) {
      return "Vài gợi ý nhỏ:<br>• " + window.LEXICON.slice(0, 4).map(function (r) { return "Thay “" + esc(r[0]) + "” → “" + esc(r[1]) + "”"; }).join("<br>• ") +
        "<br><br>Và quan trọng nhất: hãy hỏi tên dân tộc của người đối diện thay vì đoán, xin phép trước khi chụp ảnh. Bảng đầy đủ ở <a href=\"#/khung\">Khung diễn ngôn</a>.";
    }
    if (prov && (!g || has("tinh", "co nhung", "nhung dan toc", "bao nhieu"))) {
      var p = provInfo[prov.name];
      var pre = prov.hit !== prov.name ? esc(prov.hit) + " nay thuộc <b>" + esc(prov.name) + "</b> (từ 01/7/2025). " : "";
      if (!p.ids.length) return pre + "Theo dữ liệu Atlas, " + esc(prov.name) + " không phải địa bàn cư trú tập trung của dân tộc thiểu số nào — dù vẫn có nhiều người thiểu số sống, học tập, làm việc ở đây.";
      return pre + "<b>" + esc(prov.name) + "</b> là địa bàn cư trú tập trung của " + p.ids.length + " dân tộc thiểu số: " + p.ids.map(function (i) { return link(byId[i]); }).join(", ") + ".";
    }
    if (g && has("ngon ngu", "tieng", "chu viet", "ngu he", "van tu")) {
      var f = FAM[g.fam];
      var t = PRO[g.id] ? esc(PRO[g.id].language.text) : "Tiếng " + g.name + " thuộc nhóm " + f.name + " (ngữ hệ " + f.stock + "). " + esc(f.desc);
      return t + "<br>Xem tab " + link(g, "language") + " → Tiếng nói.";
    }
    if (g && has("van hoa", "le hoi", "phong tuc", "trang phuc", "nha ")) {
      if (PRO[g.id]) return "Về văn hóa người " + g.name + ": " + PRO[g.id].culture.slice(0, 2).map(function (c) { return "<b>" + esc(c.t) + "</b> — " + esc(c.d); }).join("<br><br>") + "<br>Còn nữa ở " + link(g) + ".";
      return "Phần văn hóa của người " + g.name + " đang được biên soạn, mình không muốn kể điều chưa được kiểm chứng. Bạn có thể xem những gì đã có ở " + link(g) + ".";
    }
    if (g && (wordHas(n, "ai") || has("nguoi noi tieng", "guong mat", "nha tho", "nghe si", "nha van"))) {
      var fc = PRO[g.id] && PRO[g.id].faces;
      if (fc && fc.length) return "Một vài gương mặt người " + g.name + ": " + fc.map(function (x) { return "<b>" + esc(x.n) + "</b>" + (x.y ? " (" + esc(x.y) + ")" : ""); }).join(", ") + ". Xem " + link(g, "faces") + ".";
      return "Mục gương mặt người " + g.name + " đang được tuyển chọn.";
    }
    if (g) {
      var e = g;
      return "<b>Người " + e.name + "</b> — " + fmt(e.pop) + " người (2019), đứng thứ " + (e.rank + 1) + " trong 54 dân tộc. Ngôn ngữ thuộc nhóm " + FAM[e.fam].name + ". Cư trú tập trung ở " + e.provinces.join(", ") + " (vùng " + REG[e.region].name + ")." +
        (PRO[e.id] ? "<br><br>" + esc(PRO[e.id].lead) : "") + "<br>Mở hồ sơ: " + link(e) + ".";
    }
    if (has("bao nhieu dan toc", "may dan toc", "54 dan toc", "53 dan toc")) return "Việt Nam có 54 dân tộc: người Kinh và 53 dân tộc thiểu số, với tổng số khoảng " + fmt(totalPop) + " người thiểu số theo Tổng điều tra 2019 — khoảng 14,7% dân số.";
    if (has("dong nhat", "dong dan nhat", "nhieu nguoi nhat", "lon nhat")) return "Năm dân tộc thiểu số đông dân nhất (2019): " + ranked.slice(0, 5).map(function (e) { return link(e) + " (" + fmt(e.pop) + ")"; }).join(", ") + ".";
    if (has("it nhat", "it nguoi nhat", "it dan nhat", "rat it nguoi")) return "Các dân tộc có dân số ít nhất: " + ranked.slice(-5).reverse().map(function (e) { return link(e) + " (" + fmt(e.pop) + ")"; }).join(", ") + ". Những dân tộc dưới 10.000 người được xác định là “dân tộc rất ít người”, có chính sách hỗ trợ riêng.";
    if (has("ngu he", "nhom ngon ngu", "ngon ngu")) return "Các dân tộc ở Việt Nam thuộc 8 nhóm ngôn ngữ: " + Object.keys(FAM).map(function (k) { return "<b>" + FAM[k].name + "</b> (" + ETH.filter(function (e) { return e.fam === k; }).length + ")"; }).join(", ") + ". Con số trong ngoặc là số dân tộc thiểu số.";
    if (has("unesco", "di san")) return "Một số di sản của các dân tộc thiểu số được UNESCO ghi danh: Không gian văn hóa Cồng chiêng Tây Nguyên (2005), Thực hành Then của người Tày, Nùng, Thái (2019), Nghệ thuật Xòe Thái (2021), Nghệ thuật làm gốm của người Chăm (2022).";
    for (var rk in REG) if (n.indexOf(norm(REG[rk].name)) > -1) {
      var list = ranked.filter(function (e) { return e.region === rk; });
      return "Vùng <b>" + REG[rk].name + "</b> là nơi cư trú chính của " + list.length + " dân tộc thiểu số: " + list.map(function (e) { return link(e); }).join(", ") + ".";
    }
    if (has("tro choi", "choi", "quiz", "trac nghiem")) return "Khám phá xong rồi thì vào <a href=\"#/tro-choi\">Khung cửi tri thức</a> nhé — mỗi câu đúng sẽ dệt thêm một dải hoa văn.";
    if (has("dien ngon")) return "Diễn ngôn là cách chúng ta nói, viết và nghĩ về một cộng đồng. <b>Diễn ngôn kiến tạo</b> gọi đúng tên, đặt trong bối cảnh, để cộng đồng tự kể; <b>diễn ngôn định kiến</b> quy chụp, kỳ lạ hóa, ban ơn. Xem <a href=\"#/khung\">Khung diễn ngôn</a>.";
    if (has("cam on", "thank")) return "Không có gì! Cảm ơn bạn đã cùng mình học cách nhìn.";
    return "Câu này mình chưa trả lời được từ dữ liệu của Atlas — và mình không muốn đoán bừa về một cộng đồng. Bạn thử hỏi theo tên một dân tộc, một tỉnh, hoặc về “định kiến”, “cách nói” nhé.";
  }

  function addMsg(html, who) {
    var d = document.createElement("div");
    d.className = "msg " + who;
    d.innerHTML = html;
    $("#chat-log").appendChild(d);
    $("#chat-log").scrollTop = 1e6;
    return d;
  }
  function ask(q) {
    if (!q.trim()) return;
    addMsg(esc(q), "me");
    var t = addMsg(compName() + " đang tra sổ…", "bot typing");
    setTimeout(function () {
      t.classList.remove("typing");
      t.innerHTML = answer(q) + '<span class="src">Nguồn: dữ liệu Atlas · TĐTDS 2019</span>';
      $("#chat-log").scrollTop = 1e6;
    }, 450 + Math.random() * 400);
  }
  function suggestions() {
    var g = S.view === "detail" && S.detailId ? byId[S.detailId] : null;
    var s = g ? ["Người " + g.name + " sống ở đâu?", "Văn hóa người " + g.name, "Định kiến về người " + g.name, "Nên nói thế nào cho đúng?"]
              : ["Lai Châu có những dân tộc nào?", "Dân tộc nào đông nhất?", "Định kiến thường gặp?", "Các nhóm ngôn ngữ", "Di sản UNESCO"];
    $("#chat-sugg").innerHTML = s.map(function (x) { return '<button type="button">' + esc(x) + '</button>'; }).join("");
    $$("#chat-sugg button").forEach(function (b) { b.onclick = function () { ask(b.textContent); }; });
  }
  function openChat() {
    var c = $("#chat");
    c.classList.toggle("right", S.view !== "map");
    if (c.hidden) {
      c.hidden = false;
      if (!$("#chat-log").children.length) addMsg("Chào bạn, mình là " + compName() + ". Mình trả lời dựa trên dữ liệu đã được kiểm chứng của Atlas. Bạn muốn hỏi gì về các dân tộc thiểu số?", "bot");
    }
    suggestions();
    $("#bubble").classList.add("hide");
    setTimeout(function () { $("#chat-in").focus(); }, 50);
  }
  $("#chat-x").onclick = function () { $("#chat").hidden = true; };
  $("#dock-fig").onclick = function () { $("#chat").hidden ? openChat() : ($("#chat").hidden = true); };
  $("#bubble-ask").onclick = openChat;
  $("#chat-form").onsubmit = function (ev) { ev.preventDefault(); var i = $("#chat-in"); ask(i.value); i.value = ""; };
  document.addEventListener("keydown", function (ev) { if (ev.key === "Escape") $("#chat").hidden = true; });

  /* =====================================================================
     ĐIỀU HƯỚNG
     ===================================================================== */
  function route() {
    var h = location.hash.replace(/^#\/?/, "").split("/");
    var views = { map: "#view-map", detail: "#view-detail", lens: "#view-lens", game: "#view-game", about: "#view-about" };
    var v = "map";
    if (h[0] === "dan-toc" && h[1]) { v = "detail"; renderDetail(h[1], h[2]); }
    else if (h[0] === "khung") { v = "lens"; renderLens(); }
    else if (h[0] === "tro-choi") { v = "game"; renderGame(); }
    else if (h[0] === "du-an") { v = "about"; renderAbout(); }
    S.view = v;
    Object.keys(views).forEach(function (k) { if (k !== "map") $(views[k]).hidden = k !== v; });
    $$(".nav a").forEach(function (a) { a.classList.toggle("on", a.dataset.nav === v || (v === "detail" && a.dataset.nav === "map")); });
    $("#chat").classList.toggle("right", v !== "map");
    if (!$("#chat").hidden) suggestions();
    if (v === "map" && S.detailId && S.sel !== S.detailId) { selectGroup(S.detailId, true); }
  }
  window.addEventListener("hashchange", route);

  /* ---------- khởi động ---------- */
  $("#st-pop").textContent = (totalPop / 1e6).toLocaleString("vi-VN", { maximumFractionDigits: 1 }) + " tr";
  paintCompanion();
  renderFamFilter();
  renderList();
  drawMap();
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(drawMap, 200); });
  route();
  if (!S.comp) openIntro();
  else { $("#intro").hidden = true; say("Chào bạn quay lại! Rê chuột lên bản đồ hoặc chọn một dân tộc để tiếp tục hành trình.", {}); }
})();
