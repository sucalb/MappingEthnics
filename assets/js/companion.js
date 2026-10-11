/* =====================================================================
   NGƯỜI ĐỒNG HÀNH — hai nhân vật cùng trang phục, cùng vai trò.
   Khác biệt duy nhất là kiểu tóc: không gán màu “hồng/xanh”, không gán
   đồ vật theo giới. Cả hai cùng mang sổ ghi chép và túi đeo dệt.
   ===================================================================== */
(function () {
  var C = {
    ink: "#2A231D", skin: "#E7B48C", skinShade: "#D49D76", hair: "#2B211B",
    jacket: "#2E3F5C", jacketShade: "#24334C", shirt: "#F1E8D6",
    pants: "#3B342E", shoe: "#6A4330", bag: "#9A643A", cheek: "#E08A72",
    book: "#B6452F", page: "#F6EEDC"
  };

  function defs(u) {
    return '<defs>' +
      '<pattern id="bc' + u + '" width="10" height="8" patternUnits="userSpaceOnUse">' +
        '<rect width="10" height="8" fill="#A63A2B"/>' +
        '<path d="M0 4 L2.5 1 L5 4 L2.5 7Z M5 4 L7.5 1 L10 4 L7.5 7Z" fill="#E2A93B"/>' +
        '<circle cx="2.5" cy="4" r=".9" fill="#2E3F5C"/><circle cx="7.5" cy="4" r=".9" fill="#2E3F5C"/>' +
      '</pattern>' +
      '<pattern id="st' + u + '" width="8" height="7" patternUnits="userSpaceOnUse">' +
        '<rect width="8" height="7" fill="#E2A93B"/>' +
        '<path d="M0 7 L4 1 L8 7" fill="none" stroke="#A63A2B" stroke-width="1.6"/>' +
        '<path d="M0 0 L8 0" stroke="#2E3F5C" stroke-width="1.4"/>' +
      '</pattern>' +
    '</defs>';
  }

  function hairBack(kind) {
    if (kind === "may") {
      // tóc dài buộc thấp, hai bím trước vai
      return '<path d="M41 62 Q38 104 52 112 L88 112 Q102 104 99 62 Z" fill="' + C.hair + '"/>' +
             '<path d="M44 84 Q40 112 46 132 Q50 136 53 131 Q50 110 52 90 Z" fill="' + C.hair + '" stroke="' + C.ink + '" stroke-width="1.6"/>' +
             '<path d="M96 84 Q100 112 94 132 Q90 136 87 131 Q90 110 88 90 Z" fill="' + C.hair + '" stroke="' + C.ink + '" stroke-width="1.6"/>' +
             '<rect x="44.5" y="122" width="8" height="4" rx="1.5" fill="#A63A2B"/>' +
             '<rect x="87.5" y="122" width="8" height="4" rx="1.5" fill="#A63A2B"/>';
    }
    return '';
  }

  function hairFront(kind) {
    if (kind === "may") {
      return '<path d="M41 66 Q38 30 70 30 Q102 30 99 66 Q96 52 88 47 Q76 54 62 50 Q52 48 46 56 Q43 60 41 66 Z" fill="' + C.hair + '" stroke="' + C.ink + '" stroke-width="2"/>' +
             '<path d="M62 50 Q66 40 76 36" fill="none" stroke="#4A3A30" stroke-width="1.4"/>';
    }
    // tóc ngắn, có lọn dựng
    return '<path d="M40 66 Q36 28 70 28 Q104 28 100 66 Q98 52 92 46 Q86 52 76 47 Q68 54 58 48 Q50 54 44 54 Q41 59 40 66 Z" fill="' + C.hair + '" stroke="' + C.ink + '" stroke-width="2"/>' +
           '<path d="M68 29 Q66 18 76 16 Q72 22 75 29" fill="' + C.hair + '" stroke="' + C.ink + '" stroke-width="1.8" stroke-linejoin="round"/>';
  }

  window.companionSVG = function (kind, opts) {
    opts = opts || {};
    var u = kind + (opts.uid || Math.random().toString(36).slice(2, 7));
    var s = 'stroke="' + C.ink + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"';
    return '<svg class="companion-svg ' + (opts.cls || '') + '" viewBox="0 0 140 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' + (kind === "may" ? "Mây" : "Núi") + ' – người đồng hành">' +
      defs(u) +
      '<ellipse cx="70" cy="222" rx="36" ry="5" fill="#2A231D" opacity=".14"/>' +
      '<g class="cp-body">' +
        hairBack(kind) +
        // chân + giày
        '<path d="M56 152 L54 206 L67 206 L69 156 Z" fill="' + C.pants + '" ' + s + '/>' +
        '<path d="M84 152 L86 206 L73 206 L71 156 Z" fill="' + C.pants + '" ' + s + '/>' +
        '<path d="M50 206 Q50 199 58 200 L68 200 Q70 206 68 211 L51 211 Q49 209 50 206Z" fill="' + C.shoe + '" ' + s + '/>' +
        '<path d="M90 206 Q90 199 82 200 L72 200 Q70 206 72 211 L89 211 Q91 209 90 206Z" fill="' + C.shoe + '" ' + s + '/>' +
        // tay trái (người xem nhìn bên trái)
        '<path d="M48 102 Q36 118 37 146 L47 147 Q47 124 55 110 Z" fill="' + C.jacket + '" ' + s + '/>' +
        '<rect x="36.5" y="138" width="11" height="6" fill="url(#bc' + u + ')" stroke="' + C.ink + '" stroke-width="1.4"/>' +
        '<circle cx="42" cy="150" r="5.5" fill="' + C.skin + '" ' + s + '/>' +
        // áo khoác chàm
        '<path d="M47 100 Q70 90 93 100 L99 154 Q70 162 41 154 Z" fill="' + C.jacket + '" ' + s + '/>' +
        '<path d="M70 102 L70 157" stroke="' + C.jacketShade + '" stroke-width="2"/>' +
        '<path d="M42.6 145 Q70 152 97.6 145 L99 154 Q70 162 41 154 Z" fill="url(#bc' + u + ')" stroke="' + C.ink + '" stroke-width="1.6"/>' +
        '<path d="M61 96 L70 110 L79 96 Q70 93 61 96Z" fill="' + C.shirt + '" ' + s + '/>' +
        // dây túi dệt chéo
        '<path d="M52 99 L57 97 L98 140 L93 144 Z" fill="url(#st' + u + ')" stroke="' + C.ink + '" stroke-width="1.5"/>' +
        '<rect x="86" y="134" width="24" height="20" rx="4" fill="' + C.bag + '" ' + s + '/>' +
        '<path d="M86 141 L110 141" stroke="' + C.ink + '" stroke-width="1.6"/>' +
        '<rect x="95" y="139" width="6" height="5" rx="1" fill="#E2A93B" stroke="' + C.ink + '" stroke-width="1.3"/>' +
        // tay phải ôm sổ
        '<path d="M92 102 Q104 116 100 132 L90 130 Q92 120 85 110 Z" fill="' + C.jacket + '" ' + s + '/>' +
        '<g class="cp-book"><rect x="70" y="116" width="22" height="26" rx="2" transform="rotate(-8 81 129)" fill="' + C.book + '" ' + s + '/>' +
        '<path d="M74 122 L88 120 M74 127 L86 125.4" transform="rotate(-8 81 129)" stroke="' + C.page + '" stroke-width="1.5"/></g>' +
        '<circle cx="92" cy="131" r="5.5" fill="' + C.skin + '" ' + s + '/>' +
        // cổ + đầu
        '<path d="M64 88 L64 98 Q70 101 76 98 L76 88 Z" fill="' + C.skinShade + '" ' + s + '/>' +
        '<circle cx="42.5" cy="70" r="5.5" fill="' + C.skin + '" ' + s + '/>' +
        '<circle cx="97.5" cy="70" r="5.5" fill="' + C.skin + '" ' + s + '/>' +
        '<ellipse cx="70" cy="66" rx="27.5" ry="29" fill="' + C.skin + '" ' + s + '/>' +
        hairFront(kind) +
        '<g class="cp-eyes"><ellipse cx="60" cy="71" rx="2.6" ry="3.4" fill="' + C.ink + '"/><ellipse cx="80" cy="71" rx="2.6" ry="3.4" fill="' + C.ink + '"/>' +
        '<circle cx="60.9" cy="69.8" r=".9" fill="#fff"/><circle cx="80.9" cy="69.8" r=".9" fill="#fff"/></g>' +
        '<path d="M55.5 63 Q60 60.5 64 62.5 M76 62.5 Q80 60.5 84.5 63" fill="none" stroke="' + C.ink + '" stroke-width="1.6" stroke-linecap="round"/>' +
        '<ellipse cx="54" cy="79" rx="4.4" ry="2.8" fill="' + C.cheek + '" opacity=".45"/><ellipse cx="86" cy="79" rx="4.4" ry="2.8" fill="' + C.cheek + '" opacity=".45"/>' +
        '<path d="M65.5 82 Q70 86 74.5 82" fill="none" stroke="' + C.ink + '" stroke-width="1.8" stroke-linecap="round"/>' +
      '</g></svg>';
  };

  window.COMPANIONS = {
    may: { id: "may", name: "Mây", pron: "mình", intro: "Chào bạn, mình là Mây. Mình cũng đang học cách nhìn — cùng đi nhé?" },
    nui: { id: "nui", name: "Núi", pron: "mình", intro: "Chào bạn, mình là Núi. Mình cũng đang học cách nhìn — cùng đi nhé?" }
  };
})();
