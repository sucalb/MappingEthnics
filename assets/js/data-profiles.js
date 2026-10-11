/* =====================================================================
   HỒ SƠ NGÔN NGỮ — 44 dân tộc còn lại
   Nguyên tắc biên soạn:
   - Chỉ nêu chi tiết có trong các tài liệu dân tộc học phổ biến; khi chưa
     chắc chắn, dùng cách diễn đạt khái quát thay vì bịa chi tiết.
   - “Gương mặt” chỉ ghi nhân vật đã được kiểm chứng; mục để trống là mục
     mở cho cộng đồng đề cử.
   - Cấu trúc gọn: P(id, {...}) được chuyển thành cùng định dạng PROFILES.
   ===================================================================== */
(function () {
  var FAM = window.FAMILIES;
  function P(id, o) {
    var e = window.ETHNIC.filter(function (x) { return x.id === id; })[0];
    var f = FAM[e.fam];
    window.PROFILES[id] = {
      lead: o.lead,
      culture: o.culture.map(function (c) { return { t: c[0], d: c[1] }; }),
      language: {
        text: o.lang,
        notes: ["Ngữ hệ: " + f.stock + ", nhóm " + f.name, "Văn tự: " + (o.script || "chủ yếu truyền khẩu"), "Gần gũi: " + o.near]
      },
      works: (o.works || []).map(function (w) { return { t: w[0], k: w[1], d: w[2] }; }),
      faces: (o.faces || []).map(function (p) { return { n: p[0], y: p[1], r: p[2] }; }),
      today: o.today,
      musing: o.musing,
      myths: (o.myths || []).map(function (m) { return { s: m[0], why: m[1], alt: m[2], say: m[3] }; })
    };
  }

  /* Định kiến dùng chung cho các dân tộc rất ít người (dưới 10.000 người) */
  var TINY = [
    "Dân tộc này “sắp tuyệt chủng”, cần được “bảo tồn”.",
    "“Tuyệt chủng” là từ dùng cho loài sinh vật. Áp vào con người, nó biến một cộng đồng thành hiện vật cần lưu giữ, không phải những chủ thể có quyền tự quyết.",
    "Dân số ít không có nghĩa là văn hóa “yếu”. Điều cộng đồng cần là điều kiện để tự duy trì tiếng nói, sinh kế và nghi lễ — theo cách chính họ lựa chọn.",
    "“Dân tộc rất ít người”, “cộng đồng có dân số ít”."
  ];
  var THUONG = [
    "Gọi chung là “người Thượng”, “dân tộc Tây Nguyên”.",
    "Gộp hàng chục cộng đồng với ngôn ngữ, luật tục, lịch sử khác nhau vào một nhãn chung do người bên ngoài đặt.",
    "Tây Nguyên và Trường Sơn có nhiều dân tộc thuộc hai ngữ hệ khác nhau (Nam Á và Nam Đảo). Mỗi cộng đồng có tên gọi riêng của mình.",
    "Gọi đúng tên dân tộc."
  ];

  /* ============================ ĐÔNG BẮC – VIỆT BẮC ============================ */
  P("nung", {
    lead: "Người Nùng sống xen cư với người Tày ở các tỉnh biên giới Đông Bắc, gồm nhiều nhóm địa phương mang tên vùng gốc: Nùng Giang, Nùng An, Nùng Phàn Slình, Nùng Cháo, Nùng Inh… Từ giữa thế kỷ XX, một bộ phận đã di cư vào Tây Nguyên.",
    culture: [
      ["Sli — hát đối hai bè", "Sli là lối hát giao duyên đặc trưng của người Nùng, thường do hai người hát bè đôi, không dùng nhạc cụ. Nội dung là đối đáp về tình yêu, lao động và đạo lý."],
      ["Then và tín ngưỡng", "Người Nùng cùng người Tày, Thái là chủ thể của “Thực hành Then” được UNESCO ghi danh năm 2019."],
      ["Vườn hồi, ruộng bậc", "Ở Lạng Sơn, nhiều cộng đồng Nùng gắn với cây hồi — một tri thức canh tác lâu năm tạo nên đặc sản của vùng biên."],
      ["Áo chàm", "Trang phục Nùng nhuộm chàm, đơn giản, có những chi tiết phân biệt giữa các nhóm địa phương — một hệ ký hiệu chỉ người trong cuộc mới đọc được hết."]
    ],
    lang: "Tiếng Nùng thuộc nhóm Tày – Thái, rất gần tiếng Tày; mỗi nhóm Nùng có những khác biệt phương ngữ riêng. Chữ Nôm Nùng được dùng để chép sli, truyện thơ, sách cúng. Chữ Tày – Nùng hệ Latin (1961) được dùng chung cho hai ngôn ngữ.",
    script: "chữ Nôm Nùng; chữ Tày – Nùng Latin (1961)", near: "Tày, Thái, Giáy, Bố Y",
    works: [["Sli", "Dân ca", "Kho bài sli truyền miệng và chép tay, phản ánh đời sống tình cảm và quan niệm đạo đức."], ["Truyện thơ Nôm Nùng", "Truyện thơ", "Nhiều truyện thơ được người Tày và Nùng cùng lưu truyền, chép bằng chữ Nôm."]],
    faces: [["Chu Văn Tấn", "1909 – 1984", "Nhà cách mạng, Thượng tướng, người Nùng ở Thái Nguyên."]],
    today: "Người Nùng hôm nay có mặt ở cả vùng biên Đông Bắc lẫn Tây Nguyên, nơi nhiều gia đình đã lập nghiệp từ nhiều thập kỷ. Các câu lạc bộ hát sli, các lớp tiếng Tày – Nùng giúp thế hệ trẻ giữ liên hệ với tiếng mẹ đẻ.",
    musing: "Mình từng nghĩ Tày và Nùng là “một”. Hóa ra họ gần gũi, nhưng mỗi cộng đồng có tên gọi, lịch sử và lối hát riêng.",
    myths: [["Tày, Nùng thì cũng như nhau thôi.", "Gộp hai cộng đồng gần gũi thành một là xóa đi lịch sử và cách tự nhận diện của họ.", "Người Nùng có nhóm địa phương, phương ngữ, lối hát (sli) và nhiều phong tục riêng, dù chia sẻ nhiều điểm với người Tày.", "Gọi đúng: người Nùng, người Tày."]]
  });

  P("sanchay", {
    lead: "Sán Chay là tên gọi chung của hai nhóm Cao Lan và Sán Chỉ, sống ở vùng trung du, đồi núi thấp Đông Bắc. Hai nhóm có nhiều nét văn hóa chung nhưng nói hai ngôn ngữ khác nhau.",
    culture: [
      ["Sình ca", "Lối hát đối đáp của người Cao Lan, hát bằng thơ thất ngôn, có thể kéo dài nhiều đêm. Sình ca là kho thơ ca và tri thức của cộng đồng."],
      ["Múa Tắc xình", "Điệu múa tập thể trong lễ cầu mùa của người Sán Chay, mô phỏng các động tác lao động và săn bắt."],
      ["Làng trung du", "Người Sán Chay làm ruộng nước kết hợp nương đồi, cư trú ở vùng tiếp giáp giữa đồng bằng và miền núi — một vị trí giao lưu văn hóa đặc biệt."]
    ],
    lang: "Nhóm Cao Lan nói một ngôn ngữ thuộc nhóm Tày – Thái; nhóm Sán Chỉ nói một phương ngữ thuộc nhóm Hán. Việc hai cộng đồng nói hai thứ tiếng khác nhau nhưng cùng được xác định là một dân tộc cho thấy: tên gọi dân tộc là một phân loại xã hội, không chỉ là phân loại ngôn ngữ.",
    script: "chữ Nôm (chép sình ca, sách cúng)", near: "Tày, Nùng (Cao Lan); Sán Dìu, Hoa (Sán Chỉ)",
    works: [["Sình ca Cao Lan", "Dân ca", "Những bài hát đối đáp bằng thơ, được chép trong các sách hát chữ Nôm."]],
    today: "Ở các tỉnh trung du, người Sán Chay đang phục dựng sình ca và múa Tắc xình trong đời sống cộng đồng, đồng thời tham gia mạnh vào kinh tế đồi rừng và dịch vụ.",
    musing: "Một dân tộc mà hai nhóm nói hai thứ tiếng khác nhau! Vậy “dân tộc” được xác định bằng gì nhỉ?",
    myths: [["Đã cùng một dân tộc thì phải cùng một ngôn ngữ.", "Giả định này đơn giản hóa cách các cộng đồng tự nhận diện.", "Trường hợp Sán Chay cho thấy bản sắc dân tộc được tạo nên từ lịch sử, phong tục, ký ức chung — không chỉ từ ngôn ngữ.", "“Người Sán Chay, gồm nhóm Cao Lan và Sán Chỉ”."]]
  });

  P("sandiu", {
    lead: "Người Sán Dìu (tự gọi San Déo Nhín) cư trú ở vùng trung du Bắc Bộ, quanh chân núi Tam Đảo và các tỉnh Thái Nguyên, Phú Thọ, Bắc Ninh, Quảng Ninh. Họ là cư dân nông nghiệp ruộng nước thạo nghề.",
    culture: [
      ["Soọng cô", "Hát đối đáp nam nữ bằng thơ, dùng trong hội hè, đám cưới, lúc nghỉ ngơi. Soọng cô là “tiếng nói” của tình cảm và ứng xử trong cộng đồng."],
      ["Nhà đất, làng trung du", "Khác với hình dung “dân tộc miền núi ở nhà sàn”, người Sán Dìu chủ yếu ở nhà đất, quần cư thành làng giữa ruộng và đồi."],
      ["Nghề nông thâm canh", "Người Sán Dìu có kỹ thuật thủy lợi, làm phân và luân canh rất phát triển, phản ánh quá trình thích nghi lâu dài với vùng trung du."]
    ],
    lang: "Tiếng Sán Dìu thuộc nhóm Hán, gần với phương ngữ Quảng Đông. Người Sán Dìu dùng chữ Hán để ghi sách cúng, ca dao, gia phả. Hầu hết người Sán Dìu song ngữ Sán Dìu – Việt.",
    script: "chữ Hán (sách cúng, soọng cô)", near: "Hoa, Ngái, Sán Chỉ",
    works: [["Soọng cô", "Dân ca", "Kho thơ hát đối đáp, được chép bằng chữ Hán và truyền khẩu."]],
    today: "Nhiều làng Sán Dìu nằm sát các khu công nghiệp lớn của vùng trung du. Người trẻ đi làm công nhân, kỹ sư, giáo viên, trong khi các câu lạc bộ soọng cô vẫn sinh hoạt đều đặn.",
    musing: "Mình từng nghĩ người dân tộc thì ở nhà sàn. Người Sán Dìu ở nhà đất, cạnh khu công nghiệp — và vẫn hát soọng cô.",
    myths: [["Sán Dìu là người Hoa.", "Đồng nhất các cộng đồng nói ngôn ngữ nhóm Hán thành “người Hoa” bỏ qua lịch sử và bản sắc riêng.", "Sán Dìu là một dân tộc riêng trong 54 dân tộc, có tên tự gọi, phong tục và lịch sử cư trú riêng ở trung du Bắc Bộ.", "“Người Sán Dìu”."]]
  });

  P("giay", {
    lead: "Người Giáy (tự gọi Dẩng) sống ở vùng thung lũng của Lào Cai, Lai Châu, Hà Giang cũ. Họ là cư dân ruộng nước, thường định cư ở ven suối giữa những dãy núi cao.",
    culture: [
      ["Roóng poọc — xuống đồng", "Lễ hội đầu xuân cầu mùa, với nghi lễ cúng thần, ném còn và các trò chơi dân gian, đánh dấu khởi đầu năm sản xuất."],
      ["Ruộng nước giữa núi", "Người Giáy khai phá ruộng bậc thang và ruộng thung lũng, cùng các dân tộc láng giềng tạo nên những cảnh quan nông nghiệp vùng cao."],
      ["Hát đối", "Lối hát giao duyên của người Giáy gần với lượn của Tày và sli của Nùng, nhưng có giai điệu và lời riêng."]
    ],
    lang: "Tiếng Giáy thuộc nhóm Tày – Thái, gần tiếng Bố Y và có thể giao tiếp ở mức độ nhất định với Tày, Nùng.",
    near: "Bố Y, Tày, Nùng",
    works: [["Thơ Lò Ngân Sủn", "Thơ hiện đại", "Thơ của một tác giả người Giáy, viết về quê hương vùng cao từ cái nhìn người trong cuộc."]],
    faces: [["Lò Ngân Sủn", "", "Nhà thơ người Giáy, quê Lào Cai."]],
    today: "Ở vùng du lịch Sa Pa, Bát Xát, nhiều gia đình Giáy làm du lịch cộng đồng. Thách thức là giữ cho lễ hội Roóng poọc là lễ của làng, không chỉ là chương trình cho khách.",
    musing: "Một nhà thơ người Giáy đã viết về quê mình bằng tiếng Việt. Mình tò mò không biết có bao nhiêu điều không thể dịch được?",
    myths: [["Dân tộc ít người thì không có văn chương.", "Đánh đồng quy mô dân số với giá trị văn hóa.", "Người Giáy có kho dân ca phong phú và cả những tác giả văn học hiện đại.", "Nói về văn chương của chính cộng đồng."]]
  });

  P("lachi", {
    lead: "Người La Chí sống chủ yếu ở huyện Hoàng Su Phì và Xín Mần (Hà Giang cũ, nay thuộc Tuyên Quang). Họ là những người khai phá ruộng bậc thang lâu đời ở vùng này.",
    culture: [
      ["Ruộng bậc thang", "Những bậc ruộng của Hoàng Su Phì có phần đóng góp lâu đời của người La Chí, cùng với Dao, Nùng, Mông — một di sản nông nghiệp tập thể."],
      ["Dệt nhuộm chàm", "Phụ nữ La Chí tự trồng bông, dệt vải, nhuộm chàm, may trang phục áo dài xẻ nách màu chàm sẫm."],
      ["Tết tháng Bảy", "Bên cạnh Tết Nguyên đán, người La Chí coi trọng Tết tháng Bảy âm lịch như một Tết lớn trong năm."]
    ],
    lang: "Tiếng La Chí thuộc nhánh Kađai (ngữ hệ Kra – Dai), gần với tiếng La Ha, Cờ Lao, Pu Péo. Ngôn ngữ chủ yếu truyền khẩu, nhiều người trẻ song ngữ hoặc đa ngữ.",
    near: "La Ha, Cờ Lao, Pu Péo",
    works: [["Truyện cổ, dân ca La Chí", "Văn học dân gian", "Hệ thống truyện kể và bài hát nghi lễ truyền miệng, phần lớn chưa được công bố đầy đủ."]],
    today: "Ruộng bậc thang Hoàng Su Phì thu hút du khách, mở ra cơ hội du lịch cộng đồng. Người La Chí đặt câu hỏi: làm sao để người làm ra cảnh quan được hưởng lợi từ cảnh quan đó?",
    musing: "Mỗi bức ảnh ruộng bậc thang đẹp đều có tên người làm ra nó. Mình thử tìm, và thấy tên của người La Chí.",
    myths: [["Ruộng bậc thang là “kỳ quan thiên nhiên”.", "Gọi là “thiên nhiên” là xóa đi lao động và tri thức của những người đã tạo ra nó.", "Ruộng bậc thang là công trình của con người, kết quả tri thức thủy lợi qua nhiều thế hệ.", "“Cảnh quan văn hóa ruộng bậc thang do người La Chí, Dao, Nùng… tạo dựng”."]]
  });

  P("pathen", {
    lead: "Người Pà Thẻn sống tập trung ở vùng Bắc Quang, Quang Bình (Hà Giang cũ, nay thuộc Tuyên Quang). Dù dân số ít, họ là chủ thể của một trong những nghi lễ nổi tiếng nhất miền núi phía Bắc.",
    culture: [
      ["Lễ nhảy lửa", "Nghi lễ diễn ra vào dịp cuối năm, người tham gia đi chân trần trên đống than hồng dưới sự dẫn dắt của thầy cúng. Đó là nghi lễ tạ ơn và cầu an, không phải màn trình diễn mạo hiểm."],
      ["Sắc đỏ", "Trang phục phụ nữ Pà Thẻn nổi bật với sắc đỏ, dệt và thêu cầu kỳ — kỹ thuật được truyền dạy từ mẹ sang con gái."],
      ["Làng ven đồi", "Người Pà Thẻn làm ruộng, nương, sống trong các làng nhỏ ở vùng đồi núi thấp."]
    ],
    lang: "Tiếng Pà Thẻn thuộc ngữ hệ H’Mông – Miền, gần với tiếng Mông và Dao. Ngôn ngữ chủ yếu truyền khẩu.",
    near: "Mông, Dao",
    today: "Lễ nhảy lửa ngày càng được biết đến rộng rãi qua báo chí và du lịch. Cộng đồng Pà Thẻn đang tìm cách cân bằng giữa việc giới thiệu nghi lễ và giữ tính thiêng của nó.",
    musing: "Đọc báo, mình thấy nhảy lửa được giật tít như “màn biểu diễn rợn người”. Nhưng với người Pà Thẻn, đó là nghi lễ cầu an.",
    myths: [["Nhảy lửa là màn biểu diễn kỳ bí, ly kỳ.", "Lăng kính giật tít biến nghi lễ tôn giáo thành “show” giải trí, nhấn mạnh sự lạ thay vì ý nghĩa.", "Nhảy lửa là nghi lễ có trình tự, có vai trò của thầy cúng và ý nghĩa tạ ơn, cầu an cho cộng đồng.", "“Nghi lễ nhảy lửa của người Pà Thẻn”."], TINY]
  });

  P("lolo", {
    lead: "Người Lô Lô sống ở cực Bắc — Mèo Vạc, Đồng Văn (Hà Giang cũ) và Bảo Lạc (Cao Bằng). Họ được biết đến như một trong số ít cộng đồng ở Việt Nam còn sử dụng trống đồng trong nghi lễ.",
    culture: [
      ["Trống đồng trong tang lễ", "Người Lô Lô dùng trống đồng theo cặp (trống đực, trống cái) trong tang lễ và nghi lễ quan trọng — một sợi dây sống động nối với văn hóa đồng thau cổ ở khu vực."],
      ["Trang phục ghép vải", "Trang phục Lô Lô nổi tiếng với kỹ thuật ghép nhiều mảnh vải màu thành hình học — tam giác, răng cưa — đòi hỏi độ chính xác rất cao."],
      ["Lô Lô Đen, Lô Lô Hoa", "Cộng đồng gồm các nhóm Lô Lô Đen và Lô Lô Hoa, có những khác biệt về trang phục và phương ngữ."]
    ],
    lang: "Tiếng Lô Lô thuộc nhóm Tạng – Miến (ngữ hệ Hán – Tạng). Ngôn ngữ chủ yếu truyền khẩu; một số tài liệu dạy tiếng đã được biên soạn ở địa phương.",
    near: "Phù Lá, Hà Nhì, La Hủ, Si La, Cống",
    today: "Trên cao nguyên đá, nhiều gia đình Lô Lô làm homestay, dệt may thủ công. Các nghệ nhân lớn tuổi đang truyền dạy kỹ thuật ghép vải và các bài cúng cho lớp trẻ.",
    musing: "Trống đồng mình thấy trong sách lịch sử, ở đây người Lô Lô vẫn đánh trong lễ. Lịch sử hóa ra không chỉ nằm trong bảo tàng.",
    myths: [["Trang phục Lô Lô sặc sỡ, chụp ảnh rất “ăn hình”.", "Biến trang phục thành phông nền cho ảnh của người khác, bỏ qua ý nghĩa và lao động đằng sau.", "Mỗi bộ trang phục là hàng tháng trời lao động, mang dấu hiệu nhóm, tuổi và nghi lễ.", "Hỏi ý nghĩa và xin phép trước khi chụp."], TINY]
  });

  P("colao", {
    lead: "Người Cờ Lao là một cộng đồng nhỏ ở vùng cao Đồng Văn, Hoàng Su Phì (Hà Giang cũ, nay thuộc Tuyên Quang), gồm các nhóm Cờ Lao Xanh, Cờ Lao Trắng, Cờ Lao Đỏ.",
    culture: [
      ["Canh tác hốc đá", "Ở cao nguyên đá, người Cờ Lao trồng ngô trong từng hốc đá, gùi đất lên để giữ màu — một tri thức sinh tồn đặc biệt."],
      ["Đan lát", "Nam giới Cờ Lao giỏi đan lát đồ dùng bằng tre, mây, phục vụ sinh hoạt và trao đổi ở chợ phiên."],
      ["Ba nhóm, ba sắc", "Tên các nhóm gắn với màu sắc trang phục, cho thấy trang phục là dấu hiệu nhận diện cộng đồng."]
    ],
    lang: "Tiếng Cờ Lao thuộc nhánh Kađai (ngữ hệ Kra – Dai). Do sống xen cư, nhiều người Cờ Lao nói thạo tiếng Mông, tiếng Quan Hỏa hoặc tiếng Việt.",
    near: "La Chí, La Ha, Pu Péo",
    today: "Người Cờ Lao trẻ đi học, đi làm ở các thị trấn và thành phố, đồng thời trở về trong các dịp lễ Tết. Việc ghi chép ngôn ngữ đang là ưu tiên của các nhà nghiên cứu và chính cộng đồng.",
    musing: "Trồng ngô trong hốc đá — mình thử hình dung bao nhiêu kiên nhẫn để làm điều đó, mỗi năm.",
    myths: [TINY, ["Sống trên núi đá thì chắc chẳng có gì ngoài khó khăn.", "Chỉ nhìn cộng đồng qua lăng kính thiếu thốn khiến tri thức của họ trở nên vô hình.", "Canh tác hốc đá, quản lý nước, đan lát… là tri thức thích nghi tinh tế với môi trường khắc nghiệt.", "Nói về tri thức, không chỉ nói về khó khăn."]]
  });

  P("boy", {
    lead: "Người Bố Y là cộng đồng nhỏ sống ở Mường Khương (Lào Cai) và Quản Bạ (Hà Giang cũ). Họ thuộc nhóm ngôn ngữ Tày – Thái, có quan hệ gần với người Giáy.",
    culture: [
      ["Ruộng nước và nương", "Người Bố Y làm ruộng nước ở thung lũng và nương ở sườn đồi, kết hợp chăn nuôi."],
      ["Thêu thùa, trang phục", "Trang phục phụ nữ Bố Y có những đường thêu tinh xảo ở cổ áo, tay áo."],
      ["Đời sống đa ngữ", "Sống xen cư với nhiều dân tộc, người Bố Y thường nói được nhiều thứ tiếng — một kỹ năng xã hội đáng chú ý."]
    ],
    lang: "Tiếng Bố Y thuộc nhóm Tày – Thái, gần tiếng Giáy. Một bộ phận người Bố Y dùng tiếng Quan Hỏa trong giao tiếp hằng ngày.",
    near: "Giáy, Tày, Nùng",
    today: "Cộng đồng Bố Y nhỏ nhưng đang được quan tâm ghi chép ngôn ngữ và phong tục. Người trẻ Bố Y đi học, làm việc ở thị trấn và các thành phố lớn.",
    musing: "Nói được ba, bốn thứ tiếng là chuyện bình thường ở vùng cao. Vậy mà mình từng nghĩ họ “không giỏi ngôn ngữ”.",
    myths: [TINY, ["Người vùng cao nói tiếng Việt chưa sõi là kém hiểu biết.", "Lấy tiếng Việt làm thước đo duy nhất cho năng lực ngôn ngữ.", "Nhiều người vùng cao thành thạo ba, bốn ngôn ngữ — một năng lực đa ngữ mà nhiều người đô thị không có.", "Ghi nhận năng lực đa ngữ."]]
  });

  P("ngai", {
    lead: "Người Ngái là cộng đồng rất nhỏ, sống rải rác ở Quảng Ninh, Bắc Giang (nay thuộc Bắc Ninh), Thái Nguyên, Lạng Sơn. Họ thuộc nhóm ngôn ngữ Hán, có lịch sử cư trú ven biển và vùng đồi Đông Bắc.",
    culture: [
      ["Nghề biển và nông nghiệp", "Một bộ phận người Ngái từng gắn với nghề đánh bắt ven biển Quảng Ninh, bộ phận khác làm ruộng ở vùng đồi."],
      ["Hát sơn ca", "Người Ngái có lối hát đối đáp, dùng trong lễ hội, cưới hỏi."],
      ["Đời sống xen cư", "Sống xen kẽ với người Kinh, Tày, Sán Dìu, người Ngái vừa giữ phong tục riêng vừa tiếp thu nhiều yếu tố của láng giềng."]
    ],
    lang: "Tiếng Ngái thuộc nhóm Hán, gần với tiếng Hẹ (Khách Gia). Chữ Hán được dùng trong sách cúng và gia phả.",
    script: "chữ Hán (sách cúng, gia phả)", near: "Hoa, Sán Dìu",
    today: "Với dân số rất ít và sống phân tán, người Ngái đối mặt nguy cơ mai một ngôn ngữ. Một số gia đình và dòng họ đang tự sưu tầm gia phả, bài hát để lưu giữ cho con cháu.",
    musing: "Chỉ khoảng một nghìn sáu trăm người. Mình tự hỏi, ở trường, các bạn Ngái có bao giờ được nghe nhắc tên dân tộc mình không?",
    myths: [["Ngái cũng là người Hoa.", "Gộp mọi cộng đồng nói ngôn ngữ nhóm Hán vào “người Hoa” khiến một dân tộc nhỏ biến mất trong một nhãn lớn.", "Người Ngái là một trong 54 dân tộc, có tên gọi và lịch sử riêng.", "“Người Ngái”."], TINY]
  });

  P("pupeo", {
    lead: "Người Pu Péo (tự gọi Ka Pèo) là một trong những cộng đồng nhỏ nhất Việt Nam, sống ở Đồng Văn, Yên Minh, Mèo Vạc (Hà Giang cũ, nay thuộc Tuyên Quang).",
    culture: [
      ["Thờ cúng tổ tiên", "Nghi lễ thờ cúng tổ tiên giữ vai trò trung tâm, gắn kết các dòng họ trong một cộng đồng nhỏ."],
      ["Canh tác núi đá", "Như các cư dân cao nguyên đá khác, người Pu Péo trồng ngô, đậu trên đất dốc, hốc đá."],
      ["Trang phục", "Trang phục Pu Péo có các mảng vải ghép và đường viền màu, với những chi tiết riêng giúp phân biệt với láng giềng."]
    ],
    lang: "Tiếng Pu Péo thuộc nhánh Kađai (Kra – Dai), hiện có số người nói rất ít. Ngôn ngữ đang ở tình trạng cần được ghi chép và hỗ trợ khẩn cấp.",
    near: "La Chí, Cờ Lao, La Ha",
    today: "Người Pu Péo trẻ phần lớn đa ngữ. Các nỗ lực ghi âm, ghi hình người cao tuổi kể chuyện bằng tiếng mẹ đẻ đang được thực hiện bởi các nhà nghiên cứu cùng cộng đồng.",
    musing: "Dưới một nghìn người. Mình chợt hiểu vì sao mỗi người cao tuổi biết tiếng Pu Péo đều quý như một thư viện.",
    myths: [TINY]
  });

  /* ============================ TÂY BẮC ============================ */
  P("khomu", {
    lead: "Người Khơ Mú là một trong những cư dân sinh sống lâu đời nhất ở Tây Bắc và miền Tây Nghệ An. Họ cư trú ở vùng núi giữa, canh tác nương rẫy và có truyền thống đan lát nổi tiếng.",
    culture: [
      ["Đan lát", "Người Khơ Mú nổi tiếng với kỹ thuật đan lát tre, mây tinh xảo: gùi, giỏ, mâm, ghế… Sản phẩm đan được trao đổi rộng rãi với các dân tộc láng giềng."],
      ["Hát Tơm", "Lối hát dân ca đặc trưng, dùng trong lễ hội, đám cưới và sinh hoạt thường ngày."],
      ["Lễ cúng lúa, cơm mới", "Các nghi lễ gắn với chu kỳ nương rẫy thể hiện mối quan hệ giữa con người, cây lúa và thần linh."]
    ],
    lang: "Tiếng Khơ Mú thuộc nhóm Môn – Khmer (ngữ hệ Nam Á), là một ngôn ngữ xuyên biên giới, có người nói ở Lào, Thái Lan. Ở Việt Nam, ngôn ngữ chủ yếu truyền khẩu.",
    near: "Kháng, Xinh Mun, Mảng",
    works: [["Hát Tơm", "Dân ca", "Kho dân ca giao duyên và nghi lễ."], ["Truyện cổ Khơ Mú", "Văn học dân gian", "Hệ thống truyện về nguồn gốc loài người, nạn lụt và sự hình thành các dân tộc."]],
    today: "Người Khơ Mú trẻ học tập, làm việc ở nhiều nơi; nghề đan lát được một số hợp tác xã phát triển thành sản phẩm thủ công có thương hiệu.",
    musing: "Mình nghe nói trong truyện cổ Khơ Mú, các dân tộc là anh em cùng chui ra từ một quả bầu. Một câu chuyện về sự bình đẳng!",
    myths: [["Gọi người Khơ Mú là “Xá”.", "“Xá” là tên gọi cũ do người ngoài đặt, từng được dùng để gọi gộp các cộng đồng Môn – Khmer ở Tây Bắc, mang dấu vết thứ bậc xã hội cũ.", "Người Khơ Mú có tên tự gọi của mình. Gọi đúng tên là bước đầu tiên của sự tôn trọng.", "“Người Khơ Mú”."]]
  });

  P("hanhi", {
    lead: "Người Hà Nhì sống ở vùng núi cao biên giới Mường Tè (Lai Châu), Mường Nhé (Điện Biên) và Bát Xát (Lào Cai). Ngôi nhà trình tường và ruộng bậc thang là dấu ấn văn hóa nổi bật của họ.",
    culture: [
      ["Nhà trình tường", "Nhà Hà Nhì có tường đất nện dày, giữ ấm mùa đông, mát mùa hè — một giải pháp kiến trúc thích nghi tài tình với khí hậu núi cao."],
      ["Ruộng bậc thang", "Người Hà Nhì là những người làm ruộng bậc thang lành nghề, với hệ thống dẫn nước từ rừng đầu nguồn."],
      ["Lễ Khô già già", "Lễ hội lớn của người Hà Nhì, cầu mùa và cầu sức khỏe cho cộng đồng, thường diễn ra vào giữa năm."]
    ],
    lang: "Tiếng Hà Nhì thuộc nhóm Tạng – Miến, là ngôn ngữ xuyên biên giới với cộng đồng Hani ở Vân Nam (Trung Quốc). Ở Việt Nam, ngôn ngữ chủ yếu truyền khẩu.",
    near: "La Hủ, Phù Lá, Lô Lô, Si La, Cống",
    today: "Bản Hà Nhì ở Y Tý (Bát Xát) trở thành điểm đến nổi tiếng. Cộng đồng đang đứng trước câu hỏi giữ nhà trình tường khi vật liệu mới và nhu cầu du lịch thay đổi.",
    musing: "Trên mạng gọi Y Tý là “thiên đường săn mây”. Nhưng mây ở đó cũng là mây trên mái nhà của ai đó.",
    myths: [["Bản Hà Nhì là “thiên đường săn mây” hoang sơ.", "Ngôn ngữ du lịch biến quê hương của một cộng đồng thành phông nền cho ảnh của khách.", "Đó là nơi người Hà Nhì sống, làm ruộng, đi học, có những lo toan thường ngày.", "Giới thiệu cảnh quan cùng con người và câu chuyện của họ."]]
  });

  P("lao", {
    lead: "Người Lào ở Việt Nam sống ở các thung lũng biên giới Điện Biên, Lai Châu, Sơn La, gồm hai nhóm Lào Bốc (Lào Cạn) và Lào Nọi (Lào Nhỏ). Họ là cư dân lâu đời của Việt Nam, không phải “người nước ngoài”.",
    culture: [
      ["Bản ven sông", "Người Lào định cư ở thung lũng ven sông suối, làm ruộng nước, có hệ thống thủy lợi tinh tế."],
      ["Dệt vải", "Phụ nữ Lào dệt vải với hoa văn tinh xảo, đặc biệt là váy và khăn."],
      ["Ảnh hưởng Phật giáo", "Văn hóa của người Lào có ảnh hưởng của Phật giáo Nam tông, đan xen với tín ngưỡng bản địa."]
    ],
    lang: "Tiếng Lào thuộc nhóm Tày – Thái, gần tiếng Thái. Người Lào có chữ viết riêng gốc Brahmi, dùng ghi chép kinh sách, truyện thơ.",
    script: "chữ Lào (gốc Brahmi)", near: "Thái, Lự, Tày",
    today: "Sống ở vùng biên giới, người Lào là cầu nối văn hóa và kinh tế giữa hai nước. Nhiều người trẻ song ngữ Lào – Việt, làm việc trong thương mại, giáo dục.",
    musing: "“Người Lào ở Việt Nam” — nghe lạ tai, nhưng họ đã ở đây từ rất lâu rồi.",
    myths: [["Người Lào ở Việt Nam là người nước ngoài.", "Nhầm lẫn giữa tên dân tộc và quốc tịch.", "Người Lào là một trong 54 dân tộc của Việt Nam, công dân Việt Nam, cư trú lâu đời ở vùng Tây Bắc.", "“Người dân tộc Lào”."]]
  });

  P("khang", {
    lead: "Người Kháng sống ở vùng núi Sơn La, Điện Biên, Lai Châu, thường gần các sông suối lớn. Họ nổi tiếng với nghề đóng thuyền độc mộc và đan lát.",
    culture: [
      ["Thuyền độc mộc", "Người Kháng có tay nghề đóng thuyền độc mộc từ thân cây lớn, dùng để đi lại và đánh cá trên sông Đà, sông Mã."],
      ["Đan lát", "Các sản phẩm đan lát của người Kháng bền, đẹp, có giá trị trao đổi cao trong vùng."],
      ["Nương rẫy và rừng", "Đời sống gắn với nương rẫy và tri thức về rừng, sông."]
    ],
    lang: "Tiếng Kháng thuộc nhóm Môn – Khmer (ngữ hệ Nam Á). Ngôn ngữ chủ yếu truyền khẩu; nhiều người Kháng nói thạo tiếng Thái.",
    near: "Khơ Mú, Xinh Mun, Mảng",
    today: "Các công trình thủy điện lớn trên sông Đà đã làm thay đổi nhiều không gian sống ven sông. Người Kháng đang thích nghi với sinh kế mới trong khi tìm cách giữ nghề truyền thống.",
    musing: "Đóng một con thuyền từ một thân cây — đó là tri thức về gỗ, về nước, về cân bằng. Mình chưa bao giờ nghĩ đó là “công nghệ”.",
    myths: [["Gọi người Kháng là “Xá”.", "Tên gọi chung mang dấu vết thứ bậc xã hội cũ, không phải tên tự gọi.", "Người Kháng có tên tự gọi và các nhóm địa phương của mình.", "“Người Kháng”."]]
  });

  P("xinhmun", {
    lead: "Người Xinh Mun sống ở vùng biên giới Sơn La (Yên Châu, Sông Mã) và Điện Biên, xen cư với người Thái và Lào.",
    culture: [
      ["Nhà sàn", "Người Xinh Mun ở nhà sàn, với cách bố trí không gian riêng giữa khu vực thờ cúng và sinh hoạt."],
      ["Nương rẫy", "Canh tác nương rẫy luân canh, trồng lúa, ngô, kết hợp săn bắt, hái lượm."],
      ["Giao lưu văn hóa", "Do sống gần người Thái lâu đời, người Xinh Mun tiếp thu nhiều yếu tố văn hóa Thái nhưng vẫn giữ tiếng nói và nghi lễ riêng."]
    ],
    lang: "Tiếng Xinh Mun thuộc nhóm Môn – Khmer. Phần lớn người Xinh Mun cũng nói thạo tiếng Thái.",
    near: "Khơ Mú, Kháng, Mảng",
    today: "Người Xinh Mun trẻ học tập, làm việc trong nhiều ngành nghề. Cộng đồng đang tự ghi chép lại các nghi lễ vòng đời.",
    musing: "Biết nói tiếng Thái không có nghĩa là trở thành người Thái. Cũng như mình nói tiếng Anh đâu có thành người Anh.",
    myths: [["Người Xinh Mun đã bị “Thái hóa”, không còn gì riêng.", "Coi giao lưu văn hóa là sự đánh mất, coi một cộng đồng như “bản sao” của cộng đồng lớn hơn.", "Tiếp thu và giao lưu là quy luật chung; người Xinh Mun vẫn giữ tiếng nói, tên gọi và các nghi lễ riêng.", "“Giao lưu văn hóa giữa người Xinh Mun và người Thái”."]]
  });

  P("phula", {
    lead: "Người Phù Lá sống rải rác ở Lào Cai, Hà Giang cũ, Sơn La, Lai Châu, gồm nhiều nhóm địa phương với tên gọi khác nhau. Đây là một cộng đồng có lịch sử di cư dài trong vùng núi biên giới.",
    culture: [
      ["Dệt và thêu", "Phụ nữ Phù Lá dệt vải và thêu những hoa văn hình học tinh tế trên áo, túi."],
      ["Nhà sàn, nhà đất", "Tùy nhóm và vùng cư trú, người Phù Lá ở nhà sàn hoặc nhà đất."],
      ["Lễ cúng rừng", "Các nghi lễ liên quan đến rừng và nguồn nước thể hiện mối quan hệ chặt chẽ giữa cộng đồng và môi trường."]
    ],
    lang: "Tiếng Phù Lá thuộc nhóm Tạng – Miến. Các nhóm địa phương có những khác biệt phương ngữ đáng kể.",
    near: "Lô Lô, Hà Nhì, La Hủ",
    today: "Nhiều người Phù Lá sống ở vùng du lịch Bắc Hà, Si Ma Cai; sản phẩm thêu thủ công đang được đưa ra thị trường.",
    musing: "Một dân tộc mà mỗi nhóm có một tên riêng. Tên gọi hóa ra có cả một lịch sử.",
    myths: [["Người dân tộc nào ở vùng cao cũng giống nhau.", "Đồng nhất hóa những cộng đồng có ngôn ngữ, lịch sử, trang phục khác nhau.", "Người Phù Lá có tiếng nói Tạng – Miến, khác với láng giềng Mông (H’Mông – Miền) hay Tày (Tày – Thái).", "Gọi đúng tên dân tộc."]]
  });

  P("lahu", {
    lead: "Người La Hủ sống chủ yếu ở huyện Mường Tè (Lai Châu), vùng núi cao biên giới Việt – Trung. Trước đây họ sống du canh, gắn bó mật thiết với rừng; từ cuối thế kỷ XX, họ định cư thành bản.",
    culture: [
      ["Tri thức rừng", "Người La Hủ có hiểu biết sâu sắc về cây rừng, động vật, dược liệu — tích lũy qua nhiều thế hệ sống gắn với rừng."],
      ["Đan lát", "Nghề đan lát mây tre là kỹ năng quan trọng của người La Hủ."],
      ["Nhảy sạp và lễ hội", "Các điệu múa tập thể trong lễ hội là không gian gắn kết cộng đồng."]
    ],
    lang: "Tiếng La Hủ thuộc nhóm Tạng – Miến, là ngôn ngữ xuyên biên giới (Lahu ở Trung Quốc, Lào, Thái Lan, Myanmar).",
    near: "Hà Nhì, Si La, Cống, Phù Lá",
    today: "Người La Hủ trẻ đã đến trường nhiều hơn, một số theo học đại học và trở về làm cán bộ, giáo viên tại địa phương.",
    musing: "Báo hay viết “người La Hủ nghèo nhất”. Mình tự hỏi: các bạn La Hủ đọc những bài đó sẽ cảm thấy thế nào?",
    myths: [["La Hủ là “dân tộc nghèo nhất”, “cuộc sống khổ cực”.", "Lặp đi lặp lại một nhãn tiêu cực khiến cả một cộng đồng bị đóng khung trong sự thiếu thốn.", "Nói về khó khăn cần đi kèm nguyên nhân (địa lý, hạ tầng, chính sách) và cả tri thức, nỗ lực của chính cộng đồng.", "“Cộng đồng La Hủ ở vùng có điều kiện đặc biệt khó khăn”."]]
  });

  P("laha", {
    lead: "Người La Ha sống ở Sơn La và Lào Cai, gần các sông suối, xen cư với người Thái. Đây là một cộng đồng nhỏ thuộc nhánh ngôn ngữ Kađai.",
    culture: [
      ["Nương rẫy", "Người La Ha canh tác nương rẫy, trồng lúa, ngô, gắn với tri thức về rừng."],
      ["Nhà sàn", "Người La Ha ở nhà sàn, cách bố trí gần với nhà của người Thái."],
      ["Lễ cúng bản", "Các nghi lễ cộng đồng nhằm cầu an cho bản làng, mùa màng."]
    ],
    lang: "Tiếng La Ha thuộc nhánh Kađai (Kra – Dai), gần La Chí, Cờ Lao, Pu Péo. Nhiều người La Ha song ngữ La Ha – Thái.",
    near: "La Chí, Cờ Lao, Pu Péo",
    today: "Người La Ha đang chuyển đổi sinh kế, kết hợp nông nghiệp hàng hóa với các nghề mới.",
    musing: "Tên “Xá Khao” trong danh sách tên gọi khác — mình muốn biết người La Ha thích được gọi là gì.",
    myths: [["Gọi người La Ha là “Xá”.", "Tên gọi chung cũ mang dấu vết thứ bậc xã hội.", "Người La Ha có tên tự gọi và nên được gọi bằng tên đó.", "“Người La Ha”."]]
  });

  P("lu", {
    lead: "Người Lự sống ở Tam Đường, Phong Thổ (Lai Châu) và Điện Biên. Họ là một nhánh của cộng đồng Tai Lue rộng lớn ở Đông Nam Á, nổi tiếng với nghề dệt.",
    culture: [
      ["Dệt vải", "Phụ nữ Lự là những người dệt vải lành nghề, với các hoa văn tinh xảo trên váy, khăn và chăn."],
      ["Ruộng nước", "Người Lự làm ruộng nước ở thung lũng, có hệ thống thủy lợi phát triển."],
      ["Ảnh hưởng Phật giáo", "Văn hóa Lự có dấu ấn Phật giáo Nam tông, thể hiện trong chữ viết và một số nghi lễ."]
    ],
    lang: "Tiếng Lự thuộc nhóm Tày – Thái. Người Lự có chữ viết riêng gốc Brahmi (chữ Tai Lue), dùng để chép kinh sách, truyện.",
    script: "chữ Lự cổ (gốc Brahmi)", near: "Thái, Lào, Tày",
    today: "Nghề dệt của người Lự đang được phục hồi qua các tổ hợp tác, sản phẩm được giới thiệu tại các hội chợ thủ công.",
    musing: "Người Lự có chữ viết riêng hàng trăm năm. Vậy mà mình từng nghĩ các dân tộc nhỏ “chưa có chữ”.",
    myths: [TINY, ["Dân tộc nhỏ thì không có chữ viết.", "Đánh đồng quy mô dân số với trình độ văn hóa.", "Người Lự có truyền thống chữ viết riêng, dùng để ghi kinh sách và văn học.", "Tìm hiểu trước khi khẳng định."]]
  });

  P("mang", {
    lead: "Người Mảng sống ở Mường Tè, Sìn Hồ (Lai Châu) và Điện Biên, dọc các thung lũng sông Đà. Đây là cộng đồng nhỏ thuộc nhóm Môn – Khmer.",
    culture: [
      ["Nương rẫy và sông", "Đời sống gắn với nương rẫy, săn bắt, đánh bắt cá trên sông suối."],
      ["Trang phục", "Phụ nữ Mảng có trang phục và cách trang điểm riêng, dù chịu ảnh hưởng của người Thái láng giềng."],
      ["Định cư", "Từ cuối thế kỷ XX, nhiều bản Mảng chuyển sang định cư ổn định, thay đổi sâu sắc nếp sống."]
    ],
    lang: "Tiếng Mảng thuộc nhóm Môn – Khmer, là một ngôn ngữ có số người nói ít, cần được ghi chép.",
    near: "Khơ Mú, Kháng, Xinh Mun",
    today: "Người Mảng trẻ đi học nhiều hơn; một số trở thành cán bộ, giáo viên người Mảng đầu tiên ở bản mình.",
    musing: "Có những bản mà người đầu tiên tốt nghiệp đại học vẫn còn rất trẻ. Câu chuyện của họ mới là câu chuyện mình muốn nghe.",
    myths: [TINY]
  });

  P("cong", {
    lead: "Người Cống sống ở Mường Nhé (Điện Biên) và Lai Châu, gần sông Đà. Đây là một trong những cộng đồng có dân số ít nhất Việt Nam.",
    culture: [
      ["Đan lát", "Người Cống có kỹ năng đan lát mây tre tinh tế, đồ đan dùng trong sinh hoạt và trao đổi."],
      ["Nương rẫy", "Canh tác nương rẫy gắn với tri thức về rừng và đất."],
      ["Lễ cơm mới", "Các nghi lễ nông nghiệp như lễ cơm mới thể hiện lòng biết ơn với tổ tiên, thần linh."]
    ],
    lang: "Tiếng Cống thuộc nhóm Tạng – Miến. Nhiều người Cống nói thạo tiếng Thái.",
    near: "Si La, Hà Nhì, La Hủ",
    today: "Cộng đồng Cống đang nhận được các chương trình hỗ trợ dành cho dân tộc rất ít người; điều quan trọng là các chương trình ấy lắng nghe chính cộng đồng.",
    musing: "Hơn hai nghìn bảy trăm người. Ít, nhưng mỗi người là một câu chuyện riêng.",
    myths: [TINY]
  });

  P("sila", {
    lead: "Người Si La là một trong những cộng đồng nhỏ nhất Việt Nam, sống ở Mường Tè (Lai Châu) và Mường Nhé (Điện Biên).",
    culture: [
      ["Trang phục", "Phụ nữ Si La có trang phục với chi tiết trang trí bằng bạc và các mảng màu đặc trưng."],
      ["Đời sống cộng đồng", "Với dân số rất ít, các mối quan hệ dòng họ và láng giềng là nền tảng duy trì văn hóa."],
      ["Nương rẫy", "Canh tác nương rẫy kết hợp hái lượm, gắn bó với rừng."]
    ],
    lang: "Tiếng Si La thuộc nhóm Tạng – Miến. Ngôn ngữ có số người nói rất ít, đang được các nhà nghiên cứu cùng cộng đồng ghi chép.",
    near: "Hà Nhì, La Hủ, Cống",
    today: "Người Si La trẻ đang học tập ở các trường dân tộc nội trú; nhiều gia đình nỗ lực dạy tiếng mẹ đẻ cho con.",
    musing: "Dưới một nghìn người. Nếu cả dân tộc mình chỉ đủ ngồi trong một hội trường, mình sẽ muốn người khác nói về mình thế nào?",
    myths: [TINY, ["Si La là dân tộc “lạ”, “bí ẩn” nhất Việt Nam.", "Kỳ lạ hóa một cộng đồng vì họ ít được biết đến.", "Sự “lạ” nằm ở người nhìn, không nằm ở cộng đồng được nhìn.", "“Người Si La”."]]
  });

  /* ============================ ĐÔNG NAM BỘ – HOA ============================ */
  P("hoa", {
    lead: "Người Hoa ở Việt Nam hình thành qua nhiều đợt di cư trong nhiều thế kỷ, tập trung đông nhất ở TP. Hồ Chí Minh (khu Chợ Lớn) và các tỉnh Nam Bộ. Cộng đồng gồm nhiều nhóm phương ngữ: Quảng Đông, Triều Châu, Phúc Kiến, Hải Nam, Hẹ.",
    culture: [
      ["Hội quán", "Các hội quán như Ôn Lăng, Tuệ Thành, Nghĩa An ở Chợ Lớn vừa là nơi thờ tự, vừa là trung tâm tương trợ của từng nhóm đồng hương."],
      ["Lễ Nguyên tiêu", "Rằm tháng Giêng là dịp lễ hội lớn với rước đèn, múa lân, các hoạt động tại hội quán."],
      ["Ẩm thực và thủ công", "Ẩm thực Hoa đã trở thành một phần của ẩm thực Nam Bộ; nhiều nghề thủ công truyền thống vẫn được duy trì."],
      ["Giáo dục cộng đồng", "Các trường dạy tiếng Hoa, các tổ chức tương trợ là một phần quan trọng của đời sống cộng đồng."]
    ],
    lang: "Tiếng Hoa thuộc nhóm Hán (ngữ hệ Hán – Tạng). Cộng đồng sử dụng nhiều phương ngữ, trong đó tiếng Quảng Đông phổ biến ở Chợ Lớn; chữ Hán là văn tự chung.",
    script: "chữ Hán", near: "Sán Dìu, Ngái",
    works: [["Hát Quảng (Quảng kịch)", "Sân khấu", "Nghệ thuật sân khấu truyền thống của người Hoa gốc Quảng Đông, từng rất phổ biến ở Chợ Lớn."], ["Báo chí tiếng Hoa", "Báo chí", "Ở TP. Hồ Chí Minh có báo in tiếng Hoa, là không gian thông tin và văn hóa của cộng đồng."]],
    today: "Người Hoa là một phần không thể tách rời của đời sống đô thị Nam Bộ: kinh doanh, giáo dục, y tế, nghệ thuật. Thế hệ trẻ thường đa ngữ Hoa – Việt – Anh.",
    musing: "Mình từng hay nghe câu “người Hoa giỏi buôn bán”. Nghe như lời khen, nhưng thật ra nó đóng khung cả một cộng đồng vào một nghề.",
    myths: [["Người Hoa ai cũng giỏi buôn bán.", "Một “định kiến tích cực” vẫn là định kiến: gán một năng lực cho cả cộng đồng, bỏ qua sự đa dạng nghề nghiệp và hoàn cảnh.", "Người Hoa làm mọi nghề: công nhân, giáo viên, bác sĩ, nghệ sĩ, nông dân. Nhiều gia đình người Hoa cũng gặp khó khăn kinh tế.", "Nói về từng người, không nói về “người Hoa nói chung”."], ["Người Hoa là người nước ngoài.", "Nhầm lẫn giữa dân tộc và quốc tịch.", "Người Hoa là một trong 54 dân tộc của Việt Nam, đã sinh sống qua nhiều thế hệ.", "“Người Hoa ở Việt Nam”."]]
  });

  P("stieng", {
    lead: "Người Xtiêng là một trong những cư dân bản địa lâu đời của Đông Nam Bộ, sống chủ yếu ở Bình Phước cũ (nay thuộc Đồng Nai) và Tây Ninh, nơi rừng chuyển dần thành vườn cao su, điều.",
    culture: [
      ["Làng và rừng", "Người Xtiêng truyền thống sống thành sóc, gắn bó với rừng và nương rẫy; một số nhóm làm ruộng nước."],
      ["Cồng chiêng và rượu cần", "Cồng chiêng, rượu cần có mặt trong các nghi lễ vòng đời và nông nghiệp."],
      ["Dệt thổ cẩm", "Phụ nữ Xtiêng dệt thổ cẩm với những hoa văn đặc trưng."]
    ],
    lang: "Tiếng Xtiêng thuộc nhóm Môn – Khmer (nhánh Bahnaric). Đã có chữ viết hệ Latin, được dùng trong một số tài liệu giáo dục.",
    script: "chữ Xtiêng hệ Latin", near: "Mạ, Mnông, Chơ Ro, Cơ Ho",
    today: "Đông Nam Bộ đô thị hóa và công nghiệp hóa rất nhanh. Người Xtiêng đang chuyển đổi sinh kế sang trồng cây công nghiệp và làm công nhân, đồng thời tìm cách giữ cồng chiêng, thổ cẩm.",
    musing: "Mình sống ở thành phố gần đó bao năm mà không biết người bản địa của vùng là ai.",
    myths: [["Đông Nam Bộ là vùng đất của người Kinh và người Hoa.", "Ngôn ngữ “khai hoang” khiến cư dân bản địa trở nên vô hình trong lịch sử vùng đất.", "Người Xtiêng, Mạ, Chơ Ro, Mnông… là những cư dân lâu đời của Đông Nam Bộ.", "Nhắc đến cư dân bản địa khi kể về lịch sử vùng đất."]]
  });

  P("choro", {
    lead: "Người Chơ Ro là cư dân bản địa của vùng đồi Đồng Nai và Bà Rịa – Vũng Tàu cũ (nay thuộc TP. Hồ Chí Minh). Họ đã sinh sống ở miền Đông Nam Bộ từ trước khi có các làn sóng di dân lớn.",
    culture: [
      ["Lễ cúng thần lúa", "Lễ cúng thần lúa (Sa Yang Va) là nghi lễ quan trọng nhất trong năm, tạ ơn và cầu mùa màng."],
      ["Đan lát", "Người Chơ Ro có tay nghề đan lát cao, sản phẩm dùng trong sinh hoạt và nghi lễ."],
      ["Tri thức rừng", "Người Chơ Ro am hiểu cây thuốc, cây ăn được và động vật rừng."]
    ],
    lang: "Tiếng Chơ Ro thuộc nhóm Môn – Khmer (nhánh Bahnaric). Hầu hết người Chơ Ro song ngữ Chơ Ro – Việt; số người trẻ nói thạo tiếng mẹ đẻ đang giảm.",
    near: "Mạ, Xtiêng, Cơ Ho",
    today: "Giữa vùng công nghiệp sôi động, các làng Chơ Ro đang tìm cách giữ lễ cúng thần lúa và tiếng nói của mình.",
    musing: "Từ khu công nghiệp chạy xe vài chục phút là tới một làng Chơ Ro. Gần mà xa.",
    myths: [["Người bản địa ở Đông Nam Bộ đã “hòa tan” hết.", "Đô thị hóa không có nghĩa là các cộng đồng bản địa biến mất.", "Người Chơ Ro vẫn duy trì nghi lễ, tiếng nói và bản sắc, dù sống giữa không gian đô thị – công nghiệp.", "“Cộng đồng Chơ Ro ở Đồng Nai”."]]
  });

  P("ma", {
    lead: "Người Mạ — tên gọi có nghĩa gắn với dòng sông Đồng Nai — sống ở Lâm Đồng (Bảo Lộc, Cát Tiên, Đạ Huoai) và Đồng Nai. Họ là cư dân lâu đời của lưu vực sông Đồng Nai.",
    culture: [
      ["Dệt thổ cẩm", "Người Mạ có nghề dệt thổ cẩm lâu đời, với những hoa văn và bảng màu đặc trưng."],
      ["Cồng chiêng", "Cồng chiêng Mạ là một phần của Không gian văn hóa Cồng chiêng Tây Nguyên (UNESCO, 2005)."],
      ["Nương rẫy và ruộng", "Người Mạ làm nương rẫy và một số nơi làm ruộng nước ven sông."]
    ],
    lang: "Tiếng Mạ thuộc nhóm Môn – Khmer (nhánh Bahnaric), gần tiếng Cơ Ho, Xtiêng, Chơ Ro.",
    near: "Cơ Ho, Xtiêng, Chơ Ro, Mnông",
    today: "Người Mạ đang phát triển du lịch cộng đồng ở vùng Cát Tiên; nghề dệt và cồng chiêng được truyền dạy trong các lớp học cộng đồng.",
    musing: "Sông Đồng Nai chảy qua nhà mình, nhưng mình chưa từng nghe tên người Mạ — những người đã sống bên sông từ lâu lắm.",
    myths: [THUONG]
  });

  /* ============================ TÂY NGUYÊN ============================ */
  P("giarai", {
    lead: "Người Gia Rai (Jrai) là dân tộc đông nhất Tây Nguyên, sống tập trung ở Gia Lai, Kon Tum cũ (nay thuộc Quảng Ngãi) và Đắk Lắk. Xã hội Gia Rai tổ chức theo dòng mẹ.",
    culture: [
      ["Lễ bỏ mả (Pơ thi)", "Lễ bỏ mả là nghi lễ chia tay vĩnh viễn với người đã khuất, kèm tượng gỗ nhà mồ. Sau lễ, người sống trở lại đời thường — một quan niệm về vòng đời rất sâu sắc."],
      ["Tượng nhà mồ", "Tượng gỗ Gia Rai mô tả con người trong những tư thế đời thường — một dòng điêu khắc dân gian đặc sắc."],
      ["Cồng chiêng", "Cồng chiêng Gia Rai là một phần của Không gian văn hóa Cồng chiêng Tây Nguyên (UNESCO, 2005)."],
      ["Dòng mẹ", "Con cái mang họ mẹ (Ksor, Rơ Mah, Siu, Rơ Lan, Nay…), người chồng về ở nhà vợ."]
    ],
    lang: "Tiếng Gia Rai thuộc ngữ hệ Nam Đảo (nhánh Chamic), gần tiếng Ê Đê, Chăm. Chữ Gia Rai hệ Latin được dùng trong giáo dục song ngữ và phát thanh.",
    script: "chữ Gia Rai hệ Latin", near: "Ê Đê, Chăm, Ra Glai, Chu Ru",
    works: [["Hơri", "Thơ ca dân gian", "Thể thơ hát dài của người Gia Rai, dùng để kể chuyện, giáo huấn, giao duyên."], ["Sử thi Gia Rai", "Sử thi", "Các sử thi được hát kể trong đêm, một phần đã được sưu tầm trong bộ Kho tàng sử thi Tây Nguyên."]],
    today: "Người Gia Rai trẻ đang có mặt trong nhiều lĩnh vực: giáo dục, y tế, âm nhạc. Nhiều nghệ nhân trẻ học tạc tượng nhà mồ và chơi cồng chiêng từ thế hệ trước.",
    musing: "Lễ bỏ mả là lễ chia tay để người sống tiếp tục sống. Mình thấy đó là một cách nhìn cái chết rất nhân văn.",
    myths: [["Nhà mồ Tây Nguyên là nơi u ám, rùng rợn.", "Áp quan niệm về cái chết của mình lên nghi lễ của người khác.", "Tượng nhà mồ và lễ bỏ mả thể hiện quan niệm về sự tiếp nối giữa sống và chết, với nhiều hình tượng sinh động, hài hước.", "“Không gian nghi lễ nhà mồ”."], THUONG]
  });

  P("xodang", {
    lead: "Người Xơ Đăng sống ở vùng núi Kon Tum cũ (nay thuộc Quảng Ngãi) và Quảng Nam cũ (nay thuộc Đà Nẵng), gồm nhiều nhóm địa phương: Xơ Teng, Tơ Đrá, Mơ Nâm, Ca Dong, Hà Lăng.",
    culture: [
      ["Làng (plây) và nhà rông", "Làng Xơ Đăng có nhà rông ở trung tâm, nơi cộng đồng hội họp và tổ chức nghi lễ."],
      ["Nghề rèn", "Một số nhóm Xơ Đăng nổi tiếng với nghề rèn, làm nông cụ và vũ khí từ quặng sắt địa phương."],
      ["Lễ hội nông nghiệp", "Lễ mừng lúa mới, lễ cầu mưa gắn với chu kỳ nương rẫy và ruộng nước."]
    ],
    lang: "Tiếng Xơ Đăng thuộc nhóm Môn – Khmer (nhánh Bahnaric), với nhiều phương ngữ theo nhóm địa phương. Chữ Xơ Đăng hệ Latin được dùng trong giáo dục song ngữ.",
    script: "chữ Xơ Đăng hệ Latin", near: "Ba Na, Giẻ Triêng, Hrê, Co",
    works: [["Sử thi Xơ Đăng", "Sử thi", "Các sử thi được sưu tầm trong bộ Kho tàng sử thi Tây Nguyên."]],
    today: "Người Xơ Đăng trẻ có mặt trong nhiều lĩnh vực; các làng đang phục dựng nhà rông và lễ hội với sự tham gia của chính cộng đồng.",
    musing: "Nghề rèn ở làng — mình từng nghĩ đó là chuyện của đồng bằng. Hóa ra không phải.",
    myths: [THUONG]
  });

  P("coho", {
    lead: "Người Cơ Ho (K’Ho) là cư dân bản địa đông nhất của cao nguyên Lâm Viên – Di Linh, gồm các nhóm Xrê, Nốp, Cơ Don, Chil, Lạch, Tơ Ring. Đà Lạt được xây dựng trên vùng đất của người Lạch, một nhóm Cơ Ho.",
    culture: [
      ["Truyền thuyết Lang Biang", "Câu chuyện tình K’Lang và H’Biang — hai người thuộc hai nhóm khác nhau — gắn với tên núi Lang Biang. Đó là một câu chuyện về hôn nhân vượt rào cản cộng đồng."],
      ["Cồng chiêng", "Cồng chiêng Cơ Ho là một phần của Không gian văn hóa Cồng chiêng Tây Nguyên (UNESCO, 2005)."],
      ["Dòng mẹ", "Xã hội Cơ Ho truyền thống theo dòng mẹ."],
      ["Ruộng và vườn", "Nhóm Xrê có truyền thống làm ruộng nước; ngày nay nhiều gia đình Cơ Ho trồng cà phê, rau, hoa."]
    ],
    lang: "Tiếng Cơ Ho thuộc nhóm Môn – Khmer (nhánh Bahnaric). Chữ Cơ Ho hệ Latin được dùng trong giáo dục, xuất bản và tôn giáo.",
    script: "chữ Cơ Ho hệ Latin", near: "Mạ, Chơ Ro, Xtiêng, Mnông",
    works: [["Truyền thuyết K’Lang – H’Biang", "Truyền thuyết", "Câu chuyện tình gắn với núi Lang Biang. Khi kể lại cho du khách, câu chuyện thường bị lãng mạn hóa, ít nhắc đến luật tục và xung đột cộng đồng trong nguyên bản."], ["Tơlơi pơdao (hát kể)", "Dân ca", "Các lối hát kể, hát đối của người Cơ Ho trong sinh hoạt và lễ hội."]],
    today: "Đà Lạt là thành phố du lịch lớn, nhưng người Cơ Ho thường chỉ xuất hiện trong các chương trình “giao lưu cồng chiêng”. Nhiều người trẻ Cơ Ho đang tự kể câu chuyện của mình qua nghệ thuật, nhiếp ảnh, mạng xã hội.",
    musing: "Đi Đà Lạt bao lần mà mình chưa từng biết Lang Biang là tên của hai người Cơ Ho.",
    myths: [["Đà Lạt là “thành phố do người Pháp xây dựng”.", "Ngôn ngữ thuộc địa xóa đi sự hiện diện của cư dân bản địa trên vùng đất.", "Cao nguyên Lâm Viên là quê hương của người Lạch (Cơ Ho) từ trước khi có thành phố.", "Nhắc đến người Cơ Ho khi kể lịch sử Đà Lạt."], THUONG]
  });

  P("mnong", {
    lead: "Người Mnông sống ở Đắk Nông cũ (nay thuộc Lâm Đồng), Đắk Lắk và Bình Phước cũ (nay thuộc Đồng Nai), gồm nhiều nhóm: Mnông Gar, Mnông Nông, Mnông Chil, Mnông Rlăm…",
    culture: [
      ["Người và voi", "Ở vùng Bản Đôn, người Mnông cùng người Lào, Ê Đê có truyền thống thuần dưỡng voi — một tri thức đặc biệt về quan hệ giữa người và động vật."],
      ["Sử thi Ot N’rong", "Ot N’rong là một trong những bộ sử thi đồ sộ nhất Việt Nam, hát kể qua nhiều đêm."],
      ["Đàn đá", "Đàn đá — loại nhạc cụ cổ được tìm thấy ở Tây Nguyên — có liên quan mật thiết với vùng cư trú của người Mnông."],
      ["Cồng chiêng", "Cồng chiêng Mnông là một phần của Không gian văn hóa Cồng chiêng Tây Nguyên."]
    ],
    lang: "Tiếng Mnông thuộc nhóm Môn – Khmer (nhánh Bahnaric), với nhiều phương ngữ. Chữ Mnông hệ Latin được dùng trong giáo dục song ngữ.",
    script: "chữ Mnông hệ Latin", near: "Xtiêng, Mạ, Cơ Ho",
    works: [["Ot N’rong", "Sử thi", "Bộ sử thi dài, kể về các anh hùng và đời sống cộng đồng, được sưu tầm và xuất bản nhiều tập."]],
    faces: [["N’Trang Lơng", "? – 1935", "Thủ lĩnh người Mnông, lãnh đạo cuộc kháng chiến chống thực dân Pháp ở Tây Nguyên đầu thế kỷ XX."]],
    today: "Người Mnông trẻ đang tham gia ghi âm, phiên âm sử thi Ot N’rong cùng các nghệ nhân cao tuổi. Câu chuyện voi Bản Đôn cũng chuyển hướng từ “cưỡi voi” sang du lịch thân thiện với voi.",
    musing: "Một bộ sử thi dài hàng chục nghìn câu, được thuộc lòng và hát kể. Mình chép bài thôi cũng đã mệt rồi!",
    myths: [["Đến Tây Nguyên phải “cưỡi voi, uống rượu cần”.", "Gói cả một nền văn hóa thành vài “trải nghiệm” cho khách, bỏ qua ý nghĩa và cả quyền lợi của động vật.", "Mối quan hệ người – voi ở Bản Đôn là một tri thức văn hóa, đang được nhìn lại theo hướng tôn trọng voi.", "Giới thiệu văn hóa qua câu chuyện của người trong cuộc."], THUONG]
  });

  P("gietrieng", {
    lead: "Người Giẻ Triêng sống ở vùng núi phía Bắc Kon Tum cũ (nay thuộc Quảng Ngãi) và Quảng Nam cũ (nay thuộc Đà Nẵng), gồm các nhóm Giẻ (Đgiéh), Triêng, Ve, Bnoong.",
    culture: [
      ["Nhà rông và làng", "Làng Giẻ Triêng tổ chức quanh nhà rông, nơi diễn ra sinh hoạt cộng đồng và nghi lễ."],
      ["Nương rẫy", "Canh tác nương rẫy luân canh, gắn với lịch nông nghiệp và các lễ cúng lúa."],
      ["Âm nhạc", "Cồng chiêng và các nhạc cụ tre nứa có mặt trong đời sống nghi lễ."]
    ],
    lang: "Tiếng Giẻ Triêng thuộc nhóm Môn – Khmer (nhánh Bahnaric), với các phương ngữ theo nhóm địa phương.",
    near: "Xơ Đăng, Ba Na, Co, Brâu",
    today: "Người Giẻ Triêng đang thích nghi với các thay đổi lớn về sinh kế; nhiều làng phục dựng nhà rông với sự tham gia của thanh niên.",
    musing: "Một tên dân tộc ghép từ nhiều nhóm — mình muốn biết mỗi nhóm tự gọi mình là gì.",
    myths: [THUONG]
  });

  P("brau", {
    lead: "Người Brâu là một trong những cộng đồng nhỏ nhất Việt Nam, sống chủ yếu ở làng Đắk Mế, huyện Ngọc Hồi (Kon Tum cũ, nay thuộc Quảng Ngãi), gần ngã ba biên giới Việt Nam – Lào – Campuchia.",
    culture: [
      ["Cồng chiêng", "Người Brâu có truyền thống cồng chiêng; một số bộ chiêng có cách đánh và chức năng nghi lễ riêng."],
      ["Làng biên giới", "Cộng đồng Brâu (Brao) có người thân ở Lào và Campuchia — một dân tộc xuyên biên giới."],
      ["Nương rẫy", "Đời sống truyền thống gắn với nương rẫy và rừng."]
    ],
    lang: "Tiếng Brâu thuộc nhóm Môn – Khmer (nhánh Bahnaric). Ở Việt Nam, số người nói ít; ngôn ngữ cần được ghi chép.",
    near: "Rơ Măm, Giẻ Triêng, Ba Na",
    today: "Làng Đắk Mế đã có những thế hệ học sinh, sinh viên người Brâu đầu tiên. Cộng đồng duy trì cồng chiêng trong các dịp lễ.",
    musing: "Năm trăm hai mươi lăm người ở Việt Nam, nhưng họ có họ hàng ở ba nước. Biên giới vẽ trên bản đồ, còn dòng họ thì không.",
    myths: [TINY]
  });

  P("romam", {
    lead: "Người Rơ Măm sống chủ yếu ở làng Le, huyện Sa Thầy (Kon Tum cũ, nay thuộc Quảng Ngãi). Đây là một trong những cộng đồng nhỏ nhất Việt Nam.",
    culture: [
      ["Làng Le", "Gần như toàn bộ cộng đồng sống trong một làng — nơi mọi nghi lễ, ký ức và ngôn ngữ được giữ gìn."],
      ["Dệt vải", "Người Rơ Măm có truyền thống trồng bông, dệt vải."],
      ["Ruộng và rẫy", "Canh tác lúa rẫy và ruộng, gắn với các lễ cúng nông nghiệp."]
    ],
    lang: "Tiếng Rơ Măm thuộc nhóm Môn – Khmer (nhánh Bahnaric). Ngôn ngữ đang ở tình trạng cần được hỗ trợ và ghi chép khẩn cấp.",
    near: "Brâu, Ba Na, Giẻ Triêng",
    today: "Người Rơ Măm trẻ đi học xa nhà nhiều hơn; các buổi sinh hoạt của làng là dịp để họ trở về với tiếng mẹ đẻ.",
    musing: "Một dân tộc trong một làng. Mỗi đám cưới ở làng Le là một sự kiện của cả một dân tộc.",
    myths: [TINY]
  });

  P("churu", {
    lead: "Người Chu Ru sống chủ yếu ở huyện Đơn Dương (Lâm Đồng) và vùng giáp ranh Khánh Hòa. Khác với hình dung phổ biến về Tây Nguyên, họ là cư dân làm ruộng nước lâu đời.",
    culture: [
      ["Ruộng nước và đập nước", "Người Chu Ru có truyền thống thủy lợi, với lễ cúng thần đập nước để cầu mùa — hiếm thấy ở Tây Nguyên."],
      ["Gốm và đan lát", "Người Chu Ru có nghề làm gốm và đan lát truyền thống."],
      ["Quan hệ với người Chăm", "Truyền thống của người Chu Ru có nhiều mối liên hệ lịch sử, ngôn ngữ với người Chăm."]
    ],
    lang: "Tiếng Chu Ru thuộc ngữ hệ Nam Đảo (nhánh Chamic), gần tiếng Chăm, Ra Glai.",
    near: "Chăm, Ra Glai, Ê Đê, Gia Rai",
    today: "Nhiều gia đình Chu Ru ở Đơn Dương làm nông nghiệp công nghệ cao (rau, hoa), đồng thời duy trì lễ cúng thần đập nước như một ngày hội của cộng đồng.",
    musing: "Mình cứ tưởng Tây Nguyên chỉ có nương rẫy. Người Chu Ru làm ruộng nước và có cả lễ cúng đập nước!",
    myths: [["Tây Nguyên chỉ có nương rẫy, đốt rừng làm rẫy.", "Một hình ảnh khái quát che đi sự đa dạng sinh kế và tri thức nông nghiệp.", "Người Chu Ru, Xrê (Cơ Ho), Hrê… có truyền thống ruộng nước; nương rẫy luân canh cũng là một hệ thống canh tác có quy tắc.", "Mô tả cụ thể sinh kế của từng cộng đồng."], THUONG]
  });

  /* ============================ DUYÊN HẢI MIỀN TRUNG – TRƯỜNG SƠN ============================ */
  P("hre", {
    lead: "Người Hrê sống chủ yếu ở vùng núi phía Tây Quảng Ngãi (Ba Tơ, Sơn Hà, Minh Long). Khác với nhiều cộng đồng Trường Sơn, người Hrê có truyền thống làm ruộng nước lâu đời.",
    culture: [
      ["Ruộng nước miền núi", "Người Hrê khai phá ruộng nước ở các thung lũng hẹp, với hệ thống mương dẫn nước từ suối."],
      ["Hát kể", "Người Hrê có các lối hát kể, hát giao duyên phong phú, dùng trong sinh hoạt và lễ hội."],
      ["Đàn ra-ngói, cồng chiêng", "Các nhạc cụ truyền thống có mặt trong các nghi lễ và sinh hoạt cộng đồng."]
    ],
    lang: "Tiếng Hrê thuộc nhóm Môn – Khmer (nhánh Bahnaric). Đã có chữ Hrê hệ Latin dùng trong một số chương trình giáo dục.",
    script: "chữ Hrê hệ Latin", near: "Xơ Đăng, Co, Ba Na",
    today: "Người Hrê ở Quảng Ngãi tham gia ngày càng nhiều vào giáo dục, y tế, quản lý địa phương. Các làng Hrê đang phục hồi nghề dệt và âm nhạc truyền thống.",
    musing: "Ruộng nước giữa núi Trường Sơn — mình không ngờ hình dung của mình về “miền núi” lại hẹp đến vậy.",
    myths: [["Người miền núi đều sống bằng nương rẫy.", "Khái quát hóa sinh kế của rất nhiều cộng đồng khác nhau.", "Người Hrê có truyền thống ruộng nước lâu đời, với tri thức thủy lợi phát triển.", "Mô tả cụ thể, không khái quát."], THUONG]
  });

  P("raglai", {
    lead: "Người Ra Glai sống ở vùng núi Khánh Hòa, Ninh Thuận cũ (nay thuộc Khánh Hòa) và Bình Thuận cũ (nay thuộc Lâm Đồng). Họ là chủ nhân của đàn đá Khánh Sơn và bộ sử thi Akhàt Jucar.",
    culture: [
      ["Đàn đá", "Đàn đá Khánh Sơn — nhạc cụ làm từ những thanh đá — được người Ra Glai gìn giữ, gắn với tín ngưỡng và lễ hội."],
      ["Mã la", "Bộ mã la (chiêng bằng không núm) là nhạc cụ quan trọng trong nghi lễ của người Ra Glai."],
      ["Dòng mẹ", "Xã hội Ra Glai truyền thống theo dòng mẹ, con cái mang họ mẹ."]
    ],
    lang: "Tiếng Ra Glai thuộc ngữ hệ Nam Đảo (nhánh Chamic), gần tiếng Chăm, Chu Ru. Chữ Ra Glai hệ Latin đã được xây dựng.",
    script: "chữ Ra Glai hệ Latin", near: "Chăm, Chu Ru, Ê Đê, Gia Rai",
    works: [["Akhàt Jucar", "Sử thi", "Kho sử thi của người Ra Glai, được sưu tầm và công bố — một phát hiện quan trọng của văn học dân gian Việt Nam."]],
    faces: [["Pi Năng Tắc", "", "Anh hùng lực lượng vũ trang nhân dân, người Ra Glai ở Khánh Sơn, Khánh Hòa."]],
    today: "Đàn đá và mã la đang được truyền dạy cho thanh thiếu niên Ra Glai; các nghệ nhân tham gia ghi chép sử thi cùng nhà nghiên cứu.",
    musing: "Một dãy đá phát ra âm nhạc. Mình tò mò người đầu tiên nghe ra âm thanh trong đá đã nghĩ gì.",
    myths: [["Đàn đá là “hiện vật cổ” trong bảo tàng.", "Đặt nhạc cụ vào quá khứ, quên rằng có những người vẫn đang chơi nó.", "Đàn đá vẫn sống trong đời sống âm nhạc và nghi lễ của người Ra Glai hôm nay.", "“Đàn đá của người Ra Glai”."]]
  });

  P("cotu", {
    lead: "Người Cơ Tu sống ở vùng núi phía Tây Quảng Nam cũ (nay thuộc Đà Nẵng) và Thừa Thiên Huế cũ (nay là TP. Huế), dọc dãy Trường Sơn và có cộng đồng ở Lào.",
    culture: [
      ["Nhà Gươl", "Nhà Gươl — nhà chung của làng — là biểu tượng của cộng đồng Cơ Tu, nơi tổ chức nghi lễ, hội họp, tiếp khách. Kiến trúc và chạm khắc gỗ rất tinh xảo."],
      ["Dệt thổ cẩm kết cườm", "Phụ nữ Cơ Tu dệt thổ cẩm kết hạt cườm vào hoa văn — một kỹ thuật đặc sắc."],
      ["Múa tung tung – da dá", "Điệu múa tập thể: nam múa tung tung mạnh mẽ, nữ múa da dá mềm mại, trong các lễ hội lớn."]
    ],
    lang: "Tiếng Cơ Tu thuộc nhóm Môn – Khmer (nhánh Katuic), gần tiếng Tà Ôi, Bru – Vân Kiều.",
    script: "chữ Cơ Tu hệ Latin (dùng hạn chế)", near: "Tà Ôi, Bru – Vân Kiều",
    today: "Nhiều làng Cơ Tu đang làm du lịch cộng đồng, nghề dệt thổ cẩm kết cườm được phục hồi và có thương hiệu. Người trẻ Cơ Tu tham gia gìn giữ nhà Gươl.",
    musing: "Mình đã đọc những tài liệu cũ mô tả người Cơ Tu bằng những từ ngữ đáng sợ. Đến khi xem nhà Gươl, mình chỉ thấy sự tinh tế.",
    myths: [["Người Cơ Tu “hung dữ”, “thượng võ”.", "Một hình ảnh bắt nguồn từ các tài liệu thời thuộc địa, tô đậm bạo lực để biến cộng đồng thành “man rợ”.", "Văn hóa Cơ Tu có hệ thống luật tục, nghệ thuật kiến trúc, điêu khắc, dệt rất phát triển.", "Kể về người Cơ Tu qua nghệ thuật và luật tục của họ."]]
  });

  P("co", {
    lead: "Người Co (Cor) sống ở vùng núi Trà Bồng (Quảng Ngãi) và Bắc Trà My (Quảng Nam cũ, nay thuộc Đà Nẵng). Họ gắn bó với cây quế — đặc sản nổi tiếng của vùng.",
    culture: [
      ["Cây quế", "Rừng quế Trà Bồng là thành quả tri thức canh tác lâu đời của người Co; quế không chỉ là hàng hóa mà còn là một phần đời sống."],
      ["Lễ hội và âm nhạc", "Cồng chiêng, các điệu hát giao duyên có mặt trong lễ hội cộng đồng."],
      ["Làng trên núi", "Làng Co nằm trên sườn núi, với tổ chức xã hội dựa trên quan hệ dòng họ và láng giềng."]
    ],
    lang: "Tiếng Co thuộc nhóm Môn – Khmer (nhánh Bahnaric). Ngôn ngữ chủ yếu truyền khẩu.",
    near: "Hrê, Xơ Đăng, Giẻ Triêng",
    today: "Người Co đang tìm cách để giá trị của quế Trà Bồng mang lại lợi ích công bằng hơn cho người trồng, thông qua hợp tác xã và chỉ dẫn địa lý.",
    musing: "Mình mua quế Trà Bồng rất nhiều lần mà không biết đó là thành quả của người Co.",
    myths: [["“Quế Trà Bồng” — đặc sản của vùng núi Quảng Ngãi.", "Cách nói nhắc đến sản phẩm và địa danh nhưng xóa đi người làm ra sản phẩm.", "Quế Trà Bồng là kết quả tri thức canh tác của người Co qua nhiều thế hệ.", "“Quế Trà Bồng do người Co trồng”."]]
  });

  /* ============================ BẮC TRUNG BỘ ============================ */
  P("bru", {
    lead: "Người Bru – Vân Kiều sống dọc dãy Trường Sơn thuộc Quảng Trị, Quảng Bình cũ (nay thuộc Quảng Trị), và một bộ phận đã chuyển vào Đắk Lắk. Cộng đồng gồm các nhóm Bru, Vân Kiều, Măng Coong, Tri, Khùa.",
    culture: [
      ["Khèn bè", "Khèn bè và các nhạc cụ tre nứa có vai trò quan trọng trong lễ hội và giao duyên."],
      ["Nương rẫy và ruộng", "Canh tác nương rẫy luân canh, ở một số vùng làm ruộng nước."],
      ["Luật tục và già làng", "Già làng và hệ thống luật tục giữ vai trò điều hòa đời sống cộng đồng."]
    ],
    lang: "Tiếng Bru – Vân Kiều thuộc nhóm Môn – Khmer (nhánh Katuic), gần tiếng Tà Ôi, Cơ Tu. Có cộng đồng nói cùng ngôn ngữ ở Lào và Thái Lan.",
    near: "Tà Ôi, Cơ Tu",
    today: "Vùng Hướng Hóa, Khe Sanh đang phát triển cà phê, du lịch. Người Bru – Vân Kiều trẻ tham gia nhiều lĩnh vực, đồng thời làm sống lại âm nhạc truyền thống.",
    musing: "Mình hay nghe nhắc người Vân Kiều trong những câu chuyện về chiến tranh. Mình muốn biết họ hôm nay sống thế nào.",
    myths: [["Người Vân Kiều chỉ được nhắc đến trong câu chuyện chiến tranh.", "Đóng khung một cộng đồng vào một giai đoạn lịch sử, như những nhân vật phụ của câu chuyện lớn.", "Cộng đồng Bru – Vân Kiều có lịch sử, văn hóa và đời sống đương đại phong phú vượt ra ngoài chiến tranh.", "Kể về họ ở hiện tại."]]
  });

  P("taoi", {
    lead: "Người Tà Ôi (Pa Cô, Pa Hi) sống chủ yếu ở huyện A Lưới (Thừa Thiên Huế cũ, nay là TP. Huế) và Quảng Trị, dọc thung lũng giữa dãy Trường Sơn.",
    culture: [
      ["Dệt Zèng", "Dệt Zèng (Dèng) là nghề dệt truyền thống của người Tà Ôi, với kỹ thuật cài hạt cườm vào sợi dệt. Nghề dệt Zèng A Lưới đã được ghi danh Di sản văn hóa phi vật thể quốc gia."],
      ["Nhà Rông và làng", "Làng Tà Ôi có nhà chung, nơi sinh hoạt cộng đồng và tổ chức lễ."],
      ["Lễ mừng lúa mới", "Các nghi lễ nông nghiệp gắn với chu kỳ nương rẫy."]
    ],
    lang: "Tiếng Tà Ôi thuộc nhóm Môn – Khmer (nhánh Katuic), gần tiếng Cơ Tu, Bru – Vân Kiều.",
    near: "Cơ Tu, Bru – Vân Kiều",
    works: [["Hoa văn Zèng", "Văn bản dệt", "Mỗi tấm Zèng là một “văn bản” hoa văn, mang ký hiệu về thiên nhiên, cộng đồng, tín ngưỡng."]],
    faces: [["Kăn Lịch", "", "Anh hùng lực lượng vũ trang nhân dân, người Tà Ôi ở A Lưới."]],
    today: "Vải Zèng A Lưới đã đi vào các bộ sưu tập thời trang và được biết đến rộng rãi. Câu hỏi đặt ra: các nghệ nhân dệt có được ghi tên và hưởng lợi công bằng?",
    musing: "Mình thấy vải Zèng trên sàn diễn thời trang. Mình ước tên của người dệt cũng được in lên đó.",
    myths: [["Thổ cẩm là quà lưu niệm đẹp, rẻ.", "Nhìn sản phẩm như món hàng, bỏ qua thời gian lao động và tri thức của người dệt.", "Một tấm Zèng có thể mất nhiều tuần, thậm chí nhiều tháng để dệt.", "Ghi nhận tên nghệ nhân và trả giá công bằng."]]
  });

  P("tho", {
    lead: "Người Thổ sống ở miền Tây Nghệ An (Nghĩa Đàn, Quỳ Hợp, Tân Kỳ) và Thanh Hóa. Dân tộc Thổ gồm nhiều nhóm địa phương có nguồn gốc khác nhau: Kẹo, Cuối, Họ, Đan Lai, Ly Hà, Tày Poọng.",
    culture: [
      ["Nhiều nhóm, một tên", "Dân tộc Thổ được hình thành từ nhiều nhóm cư dân có lịch sử khác nhau, cùng chung vùng cư trú và nhiều phong tục."],
      ["Nhà sàn, nhà đất", "Tùy nhóm, người Thổ ở nhà sàn hoặc nhà đất, phản ánh quá trình giao lưu với láng giềng Thái, Mường, Kinh."],
      ["Nghề thủ công", "Đan lát, dệt vải, làm nông cụ là những nghề phụ quan trọng."]
    ],
    lang: "Tiếng Thổ thuộc nhánh Việt – Mường (ngữ hệ Nam Á), gần với tiếng Mường và tiếng Việt.",
    near: "Mường, Việt, Chứt",
    today: "Người Thổ sống xen cư với nhiều dân tộc, tham gia mạnh vào kinh tế nông nghiệp hàng hóa ở miền Tây Nghệ An.",
    musing: "“Thổ” từng là tên người ta dùng để gọi người Tày. Nay “Thổ” là tên một dân tộc khác hẳn. Tên gọi cũng có lịch sử của nó.",
    myths: [["Người Thổ là người Tày (vì trước đây người Tày từng bị gọi là “Thổ”).", "Sự nhầm lẫn bắt nguồn từ việc người ngoài dùng một tên gọi chung chung (“thổ” = đất, người bản địa) cho nhiều cộng đồng khác nhau.", "Dân tộc Thổ hiện nay ở Nghệ An, Thanh Hóa thuộc nhóm Việt – Mường, khác với người Tày thuộc nhóm Tày – Thái.", "Gọi đúng: người Thổ, người Tày."]]
  });

  P("chut", {
    lead: "Người Chứt sống ở vùng núi Minh Hóa, Tuyên Hóa, Bố Trạch (Quảng Bình cũ, nay thuộc Quảng Trị) và Hà Tĩnh, gồm các nhóm Sách, Mày, Rục, Arem, Mã Liềng.",
    culture: [
      ["Tri thức rừng núi đá vôi", "Người Chứt có hiểu biết sâu sắc về hệ sinh thái núi đá vôi Kẻ Bàng, về cây thuốc, cây ăn được, nguồn nước."],
      ["Năm nhóm, nhiều lịch sử", "Mỗi nhóm Chứt có lịch sử cư trú và sinh kế khác nhau, từ làm ruộng đến săn bắt hái lượm."],
      ["Lễ hội", "Các nghi lễ cộng đồng gắn với rừng và mùa vụ."]
    ],
    lang: "Tiếng Chứt thuộc nhánh Việt – Mường (ngữ hệ Nam Á) — đặc biệt quan trọng với ngôn ngữ học vì lưu giữ nhiều đặc điểm cổ của nhóm ngôn ngữ chung với tiếng Việt.",
    near: "Việt, Mường, Thổ",
    today: "Người Chứt đã định cư ổn định, trẻ em được đến trường. Các nhà nghiên cứu và cộng đồng đang ghi chép ngôn ngữ, tri thức bản địa.",
    musing: "Có bài báo gọi người Rục là “người tiền sử cuối cùng”. Mình thấy câu đó làm mình không thoải mái.",
    myths: [["Người Rục là “người tiền sử”, “người hang động”.", "Đặt một cộng đồng đương đại vào “quá khứ” của nhân loại — một kiểu ngôn ngữ tiến hóa luận đã bị phê phán từ lâu.", "Người Rục từng sống trong hang đá do hoàn cảnh lịch sử, chiến tranh; họ là những người đương đại với tri thức sinh tồn phức tạp.", "“Người Rục, một nhóm của dân tộc Chứt”."], TINY]
  });

  P("odu", {
    lead: "Người Ơ Đu là dân tộc có dân số ít nhất Việt Nam, sống chủ yếu ở huyện Tương Dương (Nghệ An). Tự gọi là Ơ Đu, với nghĩa liên quan đến tổ tiên và cội nguồn.",
    culture: [
      ["Lễ đón tiếng sấm", "Lễ đón tiếng sấm đầu năm là nghi lễ quan trọng, đánh dấu khởi đầu năm mới và mùa vụ."],
      ["Nương rẫy và sông suối", "Đời sống truyền thống gắn với nương rẫy, đánh bắt cá, săn bắt hái lượm."],
      ["Giao lưu với người Thái, Khơ Mú", "Người Ơ Đu sống xen cư và có nhiều giao lưu văn hóa với người Thái, Khơ Mú."]
    ],
    lang: "Tiếng Ơ Đu thuộc nhóm Môn – Khmer. Ngôn ngữ đang ở tình trạng nguy cấp, số người nói thạo rất ít; nhiều người Ơ Đu sử dụng tiếng Thái hoặc tiếng Việt.",
    near: "Khơ Mú, Kháng",
    today: "Cộng đồng Ơ Đu cùng chính quyền và các nhà nghiên cứu đang phục dựng lễ đón tiếng sấm, ghi chép từ vựng và dạy tiếng cho trẻ em.",
    musing: "Chưa đến năm trăm người. Mỗi lần một cụ già Ơ Đu dạy cháu một từ, đó là một từ được cứu lại.",
    myths: [TINY, ["Dân tộc nhỏ nhất thì không còn gì để giữ.", "Quy mô dân số không quyết định giá trị văn hóa.", "Người Ơ Đu vẫn có nghi lễ, ký ức, tiếng nói — và đang tự phục hồi chúng.", "Nói về nỗ lực của cộng đồng."]]
  });

})();
