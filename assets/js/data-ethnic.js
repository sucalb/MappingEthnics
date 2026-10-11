/* =====================================================================
   DỮ LIỆU 53 DÂN TỘC THIỂU SỐ
   - Dân số: Tổng điều tra dân số và nhà ở 01/4/2019 (TCTK).
   - Địa bàn cư trú tập trung: quy về 34 đơn vị hành chính cấp tỉnh
     theo Nghị quyết 202/2025/QH15 (hiệu lực 01/7/2025).
   - Danh sách tỉnh là các địa bàn cư trú TẬP TRUNG, không phải toàn bộ
     nơi có người của dân tộc đó sinh sống.
   ===================================================================== */

window.FAMILIES = {
  vm:  { name: "Việt – Mường", stock: "Nam Á", color: "#7A5C3E",
         desc: "Nhánh ngôn ngữ thuộc ngữ hệ Nam Á, gồm tiếng Việt, Mường, Thổ, Chứt. Các ngôn ngữ này cùng tách ra từ một tiền ngôn ngữ chung, nên có nhiều lớp từ vựng và hệ thanh điệu tương ứng." },
  tt:  { name: "Tày – Thái", stock: "Kra – Dai", color: "#5E7A3A",
         desc: "Nhóm ngôn ngữ Tai thuộc ngữ hệ Kra – Dai. Các cộng đồng nói tiếng Tày – Thái thường định cư ở thung lũng, gắn với ruộng nước và hệ thống thủy lợi mương – phai – lái – lịn." },
  md:  { name: "H’Mông – Dao", stock: "H’Mông – Miền", color: "#2B3A55",
         desc: "Ngữ hệ H’Mông – Miền, gồm tiếng Mông, Dao, Pà Thẻn. Đây là những cộng đồng có lịch sử di cư dài qua vùng núi Nam Trung Hoa và Đông Nam Á lục địa." },
  mk:  { name: "Môn – Khmer", stock: "Nam Á", color: "#9C6B2F",
         desc: "Nhóm ngôn ngữ đông dân tộc nhất ở Việt Nam (21 dân tộc thiểu số), trải từ Tây Bắc qua Trường Sơn – Tây Nguyên đến Nam Bộ. Phần lớn không có thanh điệu, khác hẳn tiếng Việt." },
  nd:  { name: "Nam Đảo", stock: "Austronesian", color: "#A63A2B",
         desc: "Ngữ hệ Nam Đảo (Malayo – Polynesia), chung gốc với các ngôn ngữ ở Indonesia, Malaysia, Philippines. Ở Việt Nam gồm tiếng Chăm, Gia Rai, Ê Đê, Ra Glai, Chu Ru." },
  han: { name: "Hán", stock: "Hán – Tạng", color: "#6E4A5E",
         desc: "Nhóm Hán thuộc ngữ hệ Hán – Tạng, gồm người Hoa, Sán Dìu, Ngái. Các cộng đồng này hình thành qua nhiều đợt di cư, mang theo nhiều phương ngữ khác nhau." },
  tm:  { name: "Tạng – Miến", stock: "Hán – Tạng", color: "#3F6A6A",
         desc: "Nhóm Tạng – Miến gồm Hà Nhì, La Hủ, Phù Lá, Lô Lô, Cống, Si La. Phần lớn là các cộng đồng nhỏ, sống ở vùng cao biên giới Việt – Trung – Lào." },
  kd:  { name: "Kađai", stock: "Kra – Dai", color: "#8A7A3A",
         desc: "Nhánh Kađai (Kra) thuộc ngữ hệ Kra – Dai, gồm La Chí, La Ha, Cờ Lao, Pu Péo. Đây là những cộng đồng rất nhỏ, ngôn ngữ đang ở tình trạng cần được bảo tồn khẩn cấp." }
};

window.REGIONS = {
  TB:   { name: "Tây Bắc", order: 1 },
  DB:   { name: "Đông Bắc", order: 2 },
  BTB:  { name: "Bắc Trung Bộ", order: 3 },
  DHMT: { name: "Duyên hải miền Trung", order: 4 },
  TN:   { name: "Tây Nguyên", order: 5 },
  DNB:  { name: "Đông Nam Bộ", order: 6 },
  TNB:  { name: "Tây Nam Bộ", order: 7 }
};

/* id, tên, tên gọi khác / nhóm địa phương, dân số 2019, nhóm ngôn ngữ, vùng, địa bàn tập trung */
window.ETHNIC = [
  ["tay","Tày","Thổ (tên gọi cũ), Ngạn, Phén, Thù Lao, Pa Dí",1845492,"tt","DB",["Cao Bằng","Lạng Sơn","Tuyên Quang","Thái Nguyên","Lào Cai","Quảng Ninh","Bắc Ninh","Đắk Lắk"]],
  ["thai","Thái","Tày Đăm (Thái Đen), Tày Đón (Thái Trắng), Tày Thanh, Tày Mười, Hàng Tổng",1820950,"tt","TB",["Sơn La","Điện Biên","Lai Châu","Thanh Hóa","Nghệ An","Lào Cai","Phú Thọ"]],
  ["muong","Mường","Mol, Mual, Moăn",1452095,"vm","TB",["Phú Thọ","Thanh Hóa","Sơn La","Ninh Bình","Hà Nội"]],
  ["mong","Mông","Hmông, Mông Hoa, Mông Trắng, Mông Đen, Mông Xanh",1393547,"md","TB",["Tuyên Quang","Lào Cai","Điện Biên","Sơn La","Lai Châu","Cao Bằng","Nghệ An","Thanh Hóa"]],
  ["khmer","Khmer","Khơ-me",1319652,"mk","TNB",["Cần Thơ","Vĩnh Long","An Giang","Cà Mau"]],
  ["nung","Nùng","Nùng Giang, Nùng An, Nùng Phàn Slình, Nùng Cháo, Nùng Inh",1083298,"tt","DB",["Lạng Sơn","Cao Bằng","Bắc Ninh","Thái Nguyên","Tuyên Quang","Lào Cai","Đắk Lắk"]],
  ["dao","Dao","Kìm Miền, Kìm Mùn, Dao Đỏ, Dao Tiền, Dao Quần Chẹt, Dao Áo Dài",891151,"md","DB",["Tuyên Quang","Lào Cai","Quảng Ninh","Cao Bằng","Thái Nguyên","Lai Châu","Phú Thọ"]],
  ["hoa","Hoa","Quảng Đông, Phúc Kiến, Triều Châu, Hải Nam, Hẹ",749466,"han","DNB",["TP. Hồ Chí Minh","Đồng Nai","Cần Thơ","An Giang","Quảng Ninh"]],
  ["giarai","Gia Rai","Jrai, Chơ Rai, Hơ Bau, Tơ Buăn",513930,"nd","TN",["Gia Lai","Quảng Ngãi","Đắk Lắk"]],
  ["ede","Ê Đê","Anak Ê Đê, Ra Đê, Kpă, Adham, Mdhur, Bih",398671,"nd","TN",["Đắk Lắk","Khánh Hòa"]],
  ["bana","Ba Na","Bahnar, Tơ Lô, Giơ Lâng, Rơ Ngao, Krem, Kon Kđe",286910,"mk","TN",["Gia Lai","Quảng Ngãi"]],
  ["xodang","Xơ Đăng","Xơ Teng, Tơ Đrá, Mơ Nâm, Ca Dong, Hà Lăng",212277,"mk","TN",["Quảng Ngãi","Đà Nẵng"]],
  ["sanchay","Sán Chay","Cao Lan, Sán Chỉ",201398,"tt","DB",["Tuyên Quang","Thái Nguyên","Bắc Ninh","Quảng Ninh","Lạng Sơn"]],
  ["coho","Cơ Ho","K’Ho, Xrê, Nốp, Cơ Don, Chil, Lát, Tơ Ring",200800,"mk","TN",["Lâm Đồng"]],
  ["sandiu","Sán Dìu","Sán Déo Nhín, Trại Đất",183004,"han","DB",["Thái Nguyên","Phú Thọ","Bắc Ninh","Quảng Ninh","Tuyên Quang"]],
  ["cham","Chăm","Chàm, Chăm Hroi",178948,"nd","DHMT",["Khánh Hòa","Lâm Đồng","An Giang","TP. Hồ Chí Minh","Tây Ninh"]],
  ["hre","Hrê","Chăm Rê, Chom, Krẹ, Luỹ",149460,"mk","DHMT",["Quảng Ngãi"]],
  ["raglai","Ra Glai","Ra Clây, Rai, La Oang",146613,"nd","DHMT",["Khánh Hòa","Lâm Đồng"]],
  ["mnong","Mnông","Mnông Gar, Mnông Nông, Mnông Chil, Mnông Rlăm",127334,"mk","TN",["Lâm Đồng","Đắk Lắk","Đồng Nai"]],
  ["stieng","Xtiêng","Xa Điêng, Bù Lơ, Bù Đek",100752,"mk","DNB",["Đồng Nai","Tây Ninh"]],
  ["bru","Bru – Vân Kiều","Bru, Vân Kiều, Măng Coong, Tri, Khùa",94598,"mk","BTB",["Quảng Trị","Đắk Lắk"]],
  ["tho","Thổ","Kẹo, Cuối, Họ, Đan Lai, Ly Hà, Tày Poọng",91430,"vm","BTB",["Nghệ An","Thanh Hóa"]],
  ["khomu","Khơ Mú","Xá Cẩu, Mứn Xen, Pu Thênh, Tềnh",90612,"mk","TB",["Nghệ An","Điện Biên","Sơn La","Lào Cai","Lai Châu"]],
  ["cotu","Cơ Tu","Ca Tu, Ca Tang, Phương",74173,"mk","DHMT",["Đà Nẵng","Huế"]],
  ["giay","Giáy","Nhắng, Dẩng, Pầu Thìn Nu Nà, Cùi Chu",67858,"tt","TB",["Lào Cai","Lai Châu","Tuyên Quang"]],
  ["gietrieng","Giẻ Triêng","Đgiéh, Ta Riêng, Ve, Triêng, Bnoong",63322,"mk","TN",["Quảng Ngãi","Đà Nẵng"]],
  ["taoi","Tà Ôi","Tôi Ôi, Pa Cô, Pa Hi",52356,"mk","BTB",["Huế","Quảng Trị"]],
  ["ma","Mạ","Châu Mạ, Mạ Ngăn, Mạ Xốp, Mạ Tô, Mạ Krung",50322,"mk","TN",["Lâm Đồng","Đồng Nai"]],
  ["co","Co","Cor, Col, Cùa, Trầu",40442,"mk","DHMT",["Quảng Ngãi","Đà Nẵng"]],
  ["choro","Chơ Ro","Dơ Ro, Châu Ro",29520,"mk","DNB",["Đồng Nai","TP. Hồ Chí Minh"]],
  ["xinhmun","Xinh Mun","Puộc, Pụa",29503,"mk","TB",["Sơn La","Điện Biên"]],
  ["hanhi","Hà Nhì","U Ni, Xá U Ni",25539,"tm","TB",["Lai Châu","Điện Biên","Lào Cai"]],
  ["churu","Chu Ru","Chơ Ru, Chu",23242,"nd","TN",["Lâm Đồng","Khánh Hòa"]],
  ["lao","Lào","Lào Bốc, Lào Nọi",17532,"tt","TB",["Điện Biên","Lai Châu","Sơn La"]],
  ["khang","Kháng","Xá Khao, Xá Súa, Xá Dón, Xá Dẩng, Xá Hốc, Quảng Lâm",16180,"mk","TB",["Sơn La","Điện Biên","Lai Châu"]],
  ["lachi","La Chí","Cù Tê, La Quả",15126,"kd","DB",["Tuyên Quang","Lào Cai"]],
  ["phula","Phù Lá","Bồ Khô Pạ, Mu Di, Pạ Xá, Phó, Va Xơ",12471,"tm","TB",["Lào Cai","Tuyên Quang","Sơn La","Lai Châu"]],
  ["lahu","La Hủ","Lao, Pu Đang, Khù Xung, Cò Xung, Khả Quy",12113,"tm","TB",["Lai Châu"]],
  ["laha","La Ha","Xá Khao, Khlá Phlạo",10157,"kd","TB",["Sơn La","Lào Cai"]],
  ["pathen","Pà Thẻn","Pà Hưng, Tống",8248,"md","DB",["Tuyên Quang"]],
  ["chut","Chứt","Rục, Sách, Mày, Arem, Mã Liềng",7513,"vm","BTB",["Quảng Trị","Hà Tĩnh"]],
  ["lu","Lự","Lừ, Nhuồn, Duôn",6757,"tt","TB",["Lai Châu","Điện Biên"]],
  ["lolo","Lô Lô","Mun Di",4827,"tm","DB",["Cao Bằng","Tuyên Quang"]],
  ["mang","Mảng","Mảng Ư, Xá Lá Vàng",4650,"mk","TB",["Lai Châu","Điện Biên"]],
  ["colao","Cờ Lao","Cờ Lao Xanh, Cờ Lao Trắng, Cờ Lao Đỏ",4003,"kd","DB",["Tuyên Quang"]],
  ["boy","Bố Y","Chủng Chá, Trọng Gia, Tu Dí, Tu Din",3232,"tt","DB",["Lào Cai","Tuyên Quang"]],
  ["cong","Cống","Xắm Khống, Mấng Nhé, Xá Xeng",2729,"tm","TB",["Điện Biên","Lai Châu"]],
  ["ngai","Ngái","Xín, Lê, Đản, Khách Gia",1649,"han","DB",["Quảng Ninh","Bắc Ninh","Thái Nguyên","Lạng Sơn"]],
  ["sila","Si La","Cù Dề Xừ, Khả Pẻ",909,"tm","TB",["Lai Châu","Điện Biên"]],
  ["pupeo","Pu Péo","Ka Pèo, Pen Ti Lô Lô",903,"kd","DB",["Tuyên Quang"]],
  ["romam","Rơ Măm","",639,"mk","TN",["Quảng Ngãi"]],
  ["brau","Brâu","Brao",525,"mk","TN",["Quảng Ngãi"]],
  ["odu","Ơ Đu","Tày Hạt",428,"mk","BTB",["Nghệ An"]]
].map(function (r) {
  return { id: r[0], name: r[1], alt: r[2], pop: r[3], fam: r[4], region: r[5], provinces: r[6] };
});

window.KINH_POP_2019 = 82085826;

/* =====================================================================
   HỒ SƠ NGÔN NGỮ – các dân tộc đã được biên soạn đầy đủ
   ===================================================================== */
window.PROFILES = {

  tay: {
    lead: "Cư dân lâu đời của vùng thung lũng Việt Bắc, người Tày là dân tộc thiểu số đông dân nhất Việt Nam. Văn hóa Tày là văn hóa của ruộng nước dưới chân núi đá, của tiếng đàn tính và những câu then hát suốt đêm.",
    epigraph: {
      text: "Người đồng mình thô sơ da thịt / Chẳng mấy ai nhỏ bé đâu con",
      by: "Y Phương",
      src: "“Nói với con” (1980) — bài thơ được đưa vào sách giáo khoa Ngữ văn THCS"
    },
    culture: [
      { t: "Then — tiếng hát nối hai cõi", d: "Then là thực hành tín ngưỡng kết hợp âm nhạc, thơ ca, múa và diễn xướng, do các ông then, bà then thực hiện cùng cây đàn tính và chùm xóc nhạc. Năm 2019, “Thực hành Then của người Tày, Nùng, Thái ở Việt Nam” được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể đại diện của nhân loại." },
      { t: "Bản, nhà sàn và ruộng nước", d: "Bản Tày thường nằm ở chân núi, ven suối, quay mặt ra cánh đồng. Hệ thống mương – phai – lái – lịn dẫn nước từ khe suối vào ruộng là tri thức thủy lợi được tích lũy qua nhiều thế hệ." },
      { t: "Sắc chàm", d: "Trang phục Tày truyền thống giản dị, nhuộm chàm, ít hoa văn. Sự giản dị ấy là một lựa chọn thẩm mỹ, không phải sự “thiếu” trang trí như đôi khi bị so sánh với trang phục nhiều màu của các dân tộc láng giềng." },
      { t: "Lồng tồng — hội xuống đồng", d: "Lễ hội đầu xuân cầu mùa, có nghi lễ cúng thần nông, ném còn, kéo co. Trong lễ hội, cộng đồng tự xác nhận mối quan hệ của mình với đất đai và mùa vụ." }
    ],
    language: {
      text: "Tiếng Tày thuộc nhóm Tày – Thái (ngữ hệ Kra – Dai), rất gần tiếng Nùng và có thể giao tiếp ở mức độ nhất định với người Thái, Giáy, Bố Y. Từ nhiều thế kỷ trước, trí thức Tày đã dùng chữ Nôm Tày (tạo theo nguyên tắc chữ Hán) để ghi then, truyện thơ, gia phả. Năm 1961, chữ Tày – Nùng hệ Latin được xây dựng và đưa vào trường học.",
      notes: ["Ngữ hệ: Kra – Dai, nhánh Tai", "Văn tự: chữ Nôm Tày; chữ Tày – Nùng Latin (1961)", "Gần gũi: Nùng, Thái, Giáy, Bố Y"]
    },
    works: [
      { t: "Khảm hải (Vượt biển)", k: "Truyện thơ Nôm Tày", d: "Truyện thơ dài kể hành trình vượt biển đầy gian khó — một trong những tác phẩm tiêu biểu của văn học viết bằng chữ Nôm Tày, cho thấy truyền thống văn chương thành văn chứ không chỉ truyền miệng." },
      { t: "Lượn và Then", k: "Diễn xướng dân gian", d: "Lượn là lối hát giao duyên (lượn cọi, lượn slương); Then là thể loại diễn xướng nghi lễ. Cả hai là kho tư liệu ngôn ngữ, đạo đức và tri thức về thiên nhiên của người Tày." },
      { t: "Nói với con", k: "Thơ — Y Phương, 1980", d: "Bài thơ về lòng tự hào của “người đồng mình”, được dạy trong nhà trường nhiều năm. Đây là ví dụ hiếm hoi về một tiếng nói thiểu số tự kể về mình đi vào sách giáo khoa." },
      { t: "Những đứa trẻ trong sương", k: "Phim tài liệu — Hà Lệ Diễm, 2021", d: "Phim theo chân một cô bé Mông ở Sa Pa trong quãng đời chuyển giao giữa tuổi thơ và áp lực hôn nhân. Đạo diễn là người Tày, kể chuyện từ vị trí người trong cuộc của miền núi." }
    ],
    faces: [
      { n: "Hoàng Văn Thụ", y: "1909 – 1944", r: "Nhà cách mạng, quê Lạng Sơn." },
      { n: "Nông Quốc Chấn", y: "1923 – 2002", r: "Nhà thơ, nhà hoạt động văn hóa, quê Bắc Kạn (nay thuộc Thái Nguyên)." },
      { n: "Y Phương", y: "1948 – 2022", r: "Nhà thơ, quê Cao Bằng. Tác giả “Nói với con”." },
      { n: "Dương Thuấn", y: "1959", r: "Nhà thơ, nhà báo, quê Bắc Kạn; viết song ngữ Tày – Việt." },
      { n: "Hà Lệ Diễm", y: "1991", r: "Đạo diễn phim tài liệu; giải Đạo diễn xuất sắc tại IDFA 2021 với “Những đứa trẻ trong sương”." },
      { n: "Double2T (Bùi Xuân Trường)", y: "1996", r: "Rapper, quán quân Rap Việt mùa 3 (2023); đưa tiếng Tày vào rap đại chúng." }
    ],
    today: "Người Tày hôm nay không chỉ được nhìn qua nhà sàn, áo chàm, then, lượn hay các món ăn ngày Tết. Họ đang sống, học tập và làm việc trong rất nhiều không gian hiện đại: rời vùng núi Đông Bắc đến các đô thị lớn, làm điện ảnh, âm nhạc, văn học, giáo dục, công nghệ. Thế hệ trẻ Tày không chỉ hòa nhập mà còn quay về với cội nguồn: học lại tiếng mẹ đẻ, hát then, đưa đàn tính vào nhạc đương đại. Văn hóa Tày không đứng yên trong quá khứ mà vẫn tiếp tục được sống, được thay đổi và được kể bằng những cách mới.",
    musing: "Trước đây khi nghe rap có tiếng Tày, mình từng nghĩ ngôn ngữ sẽ là rào cản và cần có bản dịch. Nhưng hóa ra âm nhạc đã tự làm tốt vai trò cầu nối, chẳng cần dịch mà ai nghe cũng thấy cuốn hút.",
    myths: [
      { s: "Người Tày đã bị “Kinh hóa” hết rồi, không còn gì là bản sắc riêng.", why: "Câu nói coi văn hóa như một vật đóng băng: chỉ “thật” khi giữ nguyên như xưa. Nó cũng mặc định văn hóa Kinh là đích đến của mọi sự thay đổi.", alt: "Mọi nền văn hóa đều tiếp biến. Người Tày giao lưu lâu đời với người Kinh, nhưng vẫn duy trì ngôn ngữ, then, lượn, tín ngưỡng và tạo ra những hình thức mới (then trên sân khấu, rap tiếng Tày).", say: "“Văn hóa Tày đang tiếp biến và sáng tạo trong bối cảnh mới.”" },
      { s: "Then là mê tín dị đoan.", why: "Gán nhãn “mê tín” cho tín ngưỡng của người khác là đặt một hệ giá trị lên trên hệ giá trị khác.", alt: "Then là một thực hành văn hóa tổng hợp: văn chương, âm nhạc, y lý dân gian và đạo đức cộng đồng — đã được UNESCO ghi danh năm 2019.", say: "“Then là thực hành tín ngưỡng và nghệ thuật diễn xướng của người Tày.”" }
    ]
  },

  thai: {
    lead: "Người Thái ở Việt Nam gồm hai ngành lớn — Thái Đen (Tày Đăm) và Thái Trắng (Tày Đón) — cùng nhiều nhóm địa phương ở Thanh Hóa, Nghệ An. Họ là chủ nhân của những cánh đồng lớn vùng Tây Bắc như Mường Thanh, Mường Lò, Mường Tấc.",
    culture: [
      { t: "Xòe — vòng tròn cộng đồng", d: "Xòe là múa tập thể, trong đó mọi người nắm tay nhau thành vòng tròn, không phân biệt tuổi tác, vị thế. “Nghệ thuật Xòe Thái” được UNESCO ghi danh năm 2021." },
      { t: "Mường và bản", d: "Đơn vị cư trú cơ bản là bản; nhiều bản hợp thành mường, gắn với một lòng chảo ruộng nước. Cấu trúc này định hình cách người Thái tổ chức xã hội, luật tục và lễ hội." },
      { t: "Khăn piêu", d: "Chiếc khăn đội đầu của phụ nữ Thái Đen, thêu tay nhiều tháng. Hoa văn trên khăn piêu là một hệ ký hiệu: tuổi, tình trạng hôn nhân, tay nghề và cả lời nhắn gửi." },
      { t: "Then Thái và tín ngưỡng", d: "Then của người Thái cùng với người Tày, Nùng được UNESCO ghi danh năm 2019. Các nghi lễ như Hết Chá ở Mường Lò thể hiện mối quan hệ giữa thầy mo, cộng đồng và tổ tiên." }
    ],
    language: {
      text: "Tiếng Thái thuộc nhóm Tày – Thái (Kra – Dai). Người Thái có chữ viết riêng từ nhiều thế kỷ, gốc từ hệ chữ Brahmi qua các văn tự Tai cổ, với nhiều biến thể theo vùng. Chữ Thái được dùng để ghi chép sử thi, gia phả, luật tục, sách bói và truyện thơ — một kho văn bản đồ sộ.",
      notes: ["Ngữ hệ: Kra – Dai, nhánh Tai", "Văn tự: chữ Thái cổ (gốc Brahmi), nhiều biến thể địa phương", "Gần gũi: Lào, Lự, Tày, Nùng"]
    },
    works: [
      { t: "Xống chụ xon xao (Tiễn dặn người yêu)", k: "Truyện thơ", d: "Truyện thơ trữ tình dài, kể mối tình bị ngăn trở bởi tục lệ và của cải. Tác phẩm thường được nhắc đến như một đỉnh cao của văn học dân gian Việt Nam." },
      { t: "Quắm tố mướn", k: "Sử thi – biên niên", d: "“Kể chuyện bản mường” — văn bản ghi lại quá trình hình thành các mường Thái ở Tây Bắc; là nguồn sử liệu bản địa quan trọng." },
      { t: "Khun Lú – Nàng Ủa", k: "Truyện thơ", d: "Câu chuyện tình bi kịch giữa đôi trai gái trong bối cảnh xung đột gia tộc, cho thấy cái nhìn phê phán của người Thái với hôn nhân sắp đặt." },
      { t: "Người Thái ở Tây Bắc Việt Nam", k: "Chuyên khảo — Cầm Trọng, 1978", d: "Công trình dân tộc học do một nhà nghiên cứu người Thái viết về chính cộng đồng mình — một ví dụ của tri thức “từ bên trong”." }
    ],
    faces: [
      { n: "Cầm Trọng", y: "", r: "Giáo sư dân tộc học, người Thái; tác giả nhiều chuyên khảo nền tảng về văn hóa Thái." }
    ],
    today: "Ngày nay, các cánh đồng Mường Thanh, Mường Lò vẫn là những vựa lúa của Tây Bắc, nhưng người Thái cũng có mặt trong các ngành nghề hiện đại, từ y tế, giáo dục đến du lịch cộng đồng do chính người dân bản địa vận hành. Các câu lạc bộ dạy chữ Thái, dịch thư tịch cổ, phục dựng nghi lễ đang được duy trì bởi chính những người trẻ.",
    musing: "Hình ảnh “cô gái Thái” xuất hiện ở khắp nơi trên các tờ quảng cáo du lịch. Mình tự hỏi: họ được nhìn như người kể chuyện, hay chỉ như một phần của phong cảnh?",
    myths: [
      { s: "Con gái Thái đẹp, dịu dàng — Tây Bắc là “xứ sở của những cô gái xòe”.", why: "Lời khen nhưng là định kiến giới và định kiến dân tộc cùng lúc: phụ nữ thiểu số được nhìn như một đối tượng để ngắm, gắn với phong cảnh du lịch, không có tiếng nói riêng.", alt: "Phụ nữ Thái là chủ thể kinh tế, người giữ gìn chữ viết, nghệ nhân dệt, cán bộ, nhà khoa học.", say: "Mô tả con người qua việc họ làm và điều họ nói, không qua ngoại hình." },
      { s: "Tây Bắc xa xôi, hoang sơ.", why: "“Xa” là xa so với ai? Cách nói lấy Hà Nội hay đồng bằng làm trung tâm và biến nơi khác thành ngoại vi.", alt: "Với người Thái, lòng chảo Mường Thanh là trung tâm của thế giới sống của họ, có lịch sử nhà nước, luật tục và chữ viết riêng.", say: "“Vùng Tây Bắc”, “các mường Thái ở Tây Bắc”." }
    ]
  },

  muong: {
    lead: "Người Mường cư trú ở vùng núi và trung du phía tây đồng bằng Bắc Bộ, tập trung đông nhất ở Hòa Bình cũ (nay thuộc Phú Thọ) và Thanh Hóa. Tiếng Mường và tiếng Việt có chung nguồn gốc.",
    culture: [
      { t: "Mo Mường", d: "Mo là hệ thống nghi lễ và văn bản truyền miệng đồ sộ do thầy mo thực hiện, đặc biệt trong tang lễ, dẫn linh hồn người chết về thế giới tổ tiên. Mo Mường đã được ghi danh Di sản văn hóa phi vật thể quốc gia." },
      { t: "Chiêng Mường", d: "Người Mường đánh chiêng theo bộ, mỗi người giữ một chiếc, các âm hòa vào nhau thành giai điệu. Tiếng chiêng có mặt trong lễ mừng nhà mới, lễ cưới, Tết, và tang lễ." },
      { t: "Nhà sàn và bản Mường", d: "Nhà sàn Mường có cấu trúc gần với nhà của người Việt cổ trong mô tả của nhiều nhà nghiên cứu — một điểm thường bị diễn giải sai, sẽ được bàn ở phần Định kiến." }
    ],
    language: {
      text: "Tiếng Mường thuộc nhánh Việt – Mường (ngữ hệ Nam Á). Tiếng Việt và tiếng Mường cùng tách ra từ một tiền ngôn ngữ chung (Việt – Mường chung) khoảng một nghìn năm trước. Tiếng Mường hiện có chữ viết Latin dùng trong một số chương trình dạy học, xuất bản tại địa phương.",
      notes: ["Ngữ hệ: Nam Á, nhánh Việt – Mường", "Văn tự: chữ Mường hệ Latin", "Gần gũi: Việt, Thổ, Chứt"]
    },
    works: [
      { t: "Đẻ đất đẻ nước", k: "Sử thi (Mo)", d: "Sử thi kể về sự hình thành trời đất, muôn loài, con người và các thế hệ thủ lĩnh. Đây là một trong những sử thi tiêu biểu của các dân tộc ở Việt Nam." },
      { t: "Út Lót – Hồ Liêu", k: "Truyện thơ", d: "Truyện thơ về tình yêu và khát vọng tự do trong hôn nhân." },
      { t: "Nàng Nga – Hai Mối", k: "Truyện thơ", d: "Câu chuyện về lòng chung thủy và xung đột giữa tình yêu với quyền lực của dòng họ." }
    ],
    faces: [],
    today: "Người Mường hôm nay sống đan xen với người Kinh ở nhiều địa phương, tham gia mọi lĩnh vực xã hội. Nhiều câu lạc bộ chiêng, nhóm sưu tầm Mo và các lớp dạy tiếng Mường do chính người Mường khởi xướng, coi việc giữ tiếng là giữ ký ức.",
    musing: "Người ta hay nói người Mường là “người Việt cổ”. Nhưng mình đang nói chuyện với một bạn người Mường sinh năm 2006 — bạn ấy rất “nay”, chẳng cổ chút nào!",
    myths: [
      { s: "Người Mường là “người Việt cổ” còn sót lại.", why: "Cách nói này biến một dân tộc đang sống thành “bảo tàng” cho quá khứ của người Kinh. Lịch sử của người Mường bị đọc như một chương trong lịch sử người Kinh.", alt: "Mường và Việt cùng nguồn gốc ngôn ngữ, sau đó phát triển theo những con đường riêng. Người Mường là một dân tộc đương đại với lịch sử và tương lai của riêng mình.", say: "“Tiếng Mường và tiếng Việt có chung nguồn gốc.”" }
    ]
  },

  mong: {
    lead: "Người Mông sống chủ yếu ở vùng cao biên giới phía Bắc, từ cao nguyên đá Đồng Văn đến Mù Cang Chải, Mường Lát và Kỳ Sơn. Họ là một phần của cộng đồng H’Mông toàn cầu trải dài từ Trung Quốc, Lào, Thái Lan đến Mỹ, Pháp, Úc.",
    culture: [
      { t: "Khèn — tiếng nói của người Mông", d: "Tiếng khèn không chỉ là âm nhạc mà còn là “lời nói”: người Mông tin khèn có thể nói, kể chuyện, chỉ đường cho linh hồn. Nghệ thuật khèn Mông đã được ghi danh Di sản văn hóa phi vật thể quốc gia." },
      { t: "Lanh, sáp ong và chàm", d: "Phụ nữ Mông trồng lanh, se sợi, dệt vải, vẽ hoa văn bằng sáp ong rồi nhuộm chàm — một quy trình kéo dài nhiều tháng, đòi hỏi tri thức về thực vật, hóa học tự nhiên và hình học." },
      { t: "Ruộng bậc thang", d: "Những thửa ruộng bậc thang ở vùng cao là thành quả của nhiều thế hệ người Mông, Hà Nhì, Dao, Giáy… thích nghi với địa hình dốc. Đó là tri thức thủy lợi, không phải chỉ là “phong cảnh đẹp”." },
      { t: "Chợ phiên", d: "Chợ phiên vùng cao là không gian kinh tế, đồng thời là nơi gặp gỡ, kết bạn, trao đổi thông tin giữa các bản cách xa nhau." }
    ],
    language: {
      text: "Tiếng Mông thuộc ngữ hệ H’Mông – Miền, có hệ thanh điệu phong phú. Năm 1961, chữ Mông hệ Latin được xây dựng ở Việt Nam. Cộng đồng Mông quốc tế phổ biến dùng chữ RPA (Romanized Popular Alphabet). Tiếng Mông đang được dạy trong một số trường học vùng cao và dùng trên đài phát thanh.",
      notes: ["Ngữ hệ: H’Mông – Miền", "Văn tự: chữ Mông Latin (1961); RPA quốc tế", "Gần gũi: Dao, Pà Thẻn"]
    },
    works: [
      { t: "Tiếng hát làm dâu", k: "Dân ca", d: "Những bài hát của người phụ nữ về thân phận làm dâu — một tiếng nói tự phản tỉnh, phê phán bất bình đẳng giới ngay trong cộng đồng." },
      { t: "Chàng Tróng", k: "Truyện cổ", d: "Truyện cổ về người anh hùng mồ côi vượt qua thử thách, phản ánh lý tưởng đạo đức của người Mông." },
      { t: "Vợ chồng A Phủ", k: "Truyện ngắn — Tô Hoài, 1952", d: "Tác phẩm của một nhà văn người Kinh viết về người Mông, được dạy nhiều thập kỷ trong nhà trường. Khi đọc, hãy đặt câu hỏi: ai đang kể chuyện? Người Mông xuất hiện như chủ thể hay như đối tượng được “giải phóng”?" }
    ],
    faces: [
      { n: "Mã A Lềnh", y: "", r: "Nhà văn người Mông, quê Lào Cai; viết về đời sống vùng cao từ vị trí người trong cuộc." }
    ],
    today: "Người Mông trẻ đang có mặt trên mạng xã hội, làm nội dung về ẩm thực, nông nghiệp, âm nhạc Mông hiện đại; nhiều hợp tác xã do phụ nữ Mông điều hành đưa sản phẩm lanh, chàm ra thị trường quốc tế. Mối liên hệ với cộng đồng Mông toàn cầu cũng tạo ra một không gian văn hóa xuyên biên giới sôi động.",
    musing: "Mình từng đọc một bài báo giật tít “bắt vợ” rồi tưởng đó là chuyện bắt cóc. Tìm hiểu kỹ mới thấy mình đã hiểu sai cả một nghi thức.",
    myths: [
      { s: "Tục “kéo vợ” của người Mông là bắt cóc phụ nữ.", why: "Truyền thông giật tít đã đồng nhất một nghi thức hôn nhân có sự ưng thuận với hành vi cưỡng ép, từ đó quy chụp cho cả một dân tộc.", alt: "Kéo vợ theo truyền thống là nghi thức khi đôi bên đã tìm hiểu và ưng thuận. Các trường hợp cưỡng ép là vi phạm pháp luật và bị chính cộng đồng Mông phản đối — đó là hành vi cá nhân, không phải “bản chất” của văn hóa.", say: "Phân biệt rõ phong tục với các hành vi vi phạm pháp luật." },
      { s: "Người Mông sống trên núi cao vì lạc hậu.", why: "Gắn độ cao địa lý với “trình độ phát triển” là một ẩn dụ phân tầng.", alt: "Cư trú vùng cao là kết quả của lịch sử di cư và lựa chọn sinh thái, đi kèm hệ tri thức canh tác dốc, chăn nuôi, dược liệu rất phong phú.", say: "“Người Mông cư trú ở vùng cao.”" }
    ]
  },

  khmer: {
    lead: "Người Khmer là cư dân lâu đời của đồng bằng sông Cửu Long, tập trung ở Sóc Trăng, Trà Vinh, An Giang, Kiên Giang, Bạc Liêu cũ. Ngôi chùa Phật giáo Nam tông là trung tâm tinh thần của mỗi phum, sóc.",
    culture: [
      { t: "Chùa — trái tim của sóc", d: "Chùa Khmer vừa là nơi tu hành, vừa là trường học dạy chữ, nơi lưu giữ kinh sách, nơi tổ chức lễ hội và hội họp cộng đồng." },
      { t: "Chôl Chnăm Thmây", d: "Tết cổ truyền mừng năm mới, diễn ra vào khoảng giữa tháng 4 dương lịch, với các nghi thức rước kinh, đắp núi cát, tắm Phật." },
      { t: "Ok Om Bok và ghe ngo", d: "Lễ cúng trăng vào rằm tháng Mười âm lịch, tạ ơn Mặt Trăng đã cho mùa màng. Đua ghe ngo là hoạt động nổi bật, thể hiện sức mạnh tập thể của mỗi phum sóc." },
      { t: "Nghệ thuật trình diễn", d: "Rô băm (kịch múa mặt nạ), Dù kê (sân khấu ca kịch) và nhạc ngũ âm là những di sản nghệ thuật tinh tế, gắn liền với nhà chùa và lễ hội." }
    ],
    language: {
      text: "Tiếng Khmer thuộc nhóm Môn – Khmer (ngữ hệ Nam Á). Chữ Khmer có nguồn gốc từ hệ chữ Brahmi Nam Ấn, có lịch sử thành văn hơn một nghìn năm. Ở Nam Bộ, chữ Khmer được dạy chủ yếu tại các trường chùa và một số trường phổ thông song ngữ.",
      notes: ["Ngữ hệ: Nam Á, nhánh Môn – Khmer", "Văn tự: chữ Khmer (gốc Brahmi)", "Không gian dạy chữ: trường chùa (sala)"]
    },
    works: [
      { t: "Reamker", k: "Sử thi", d: "Phiên bản Khmer của sử thi Ramayana Ấn Độ, được bản địa hóa sâu sắc và trở thành nguồn đề tài cho nghệ thuật Rô băm." },
      { t: "Tum Teav", k: "Truyện thơ", d: "Câu chuyện tình bi kịch nổi tiếng, thường được so sánh với “Romeo và Juliet”; phê phán quyền lực và hôn nhân sắp đặt." },
      { t: "Chbap", k: "Văn học giáo huấn", d: "Những bộ “luật” bằng thơ dạy về đạo đức, ứng xử. Khi đọc, có thể phân tích cả những chuẩn mực giới mà chúng đặt ra." }
    ],
    faces: [],
    today: "Thanh niên Khmer ngày càng tham gia nhiều vào giáo dục đại học, y tế, công nghệ, trong khi vẫn duy trì quan hệ gắn bó với ngôi chùa và các lễ hội. Truyền hình, phát thanh tiếng Khmer và các nhóm nhạc ngũ âm trẻ góp phần làm mới di sản.",
    musing: "Có lần mình nghe ai đó gọi người Khmer là “người Miên”. Mình chợt nhận ra một tên gọi cũng có thể mang theo cả một lịch sử phân biệt.",
    myths: [
      { s: "Người Khmer ở Nam Bộ là “người nước ngoài”, “người Campuchia”.", why: "Cách nói phủ nhận vị thế công dân và lịch sử cư trú lâu đời của người Khmer tại đồng bằng sông Cửu Long.", alt: "Người Khmer là một trong 54 dân tộc của Việt Nam, đã sinh sống và góp phần khai phá vùng đất Nam Bộ từ rất sớm.", say: "“Người Khmer”, “đồng bào Khmer Nam Bộ”; tránh các tên gọi miệt thị." },
      { s: "Người Khmer nghèo vì không chịu làm ăn.", why: "Quy nghèo đói về tính cách là bỏ qua các nguyên nhân cấu trúc: đất đai, rào cản ngôn ngữ trong giáo dục, cơ hội việc làm.", alt: "Khoảng cách phát triển cần được giải thích bằng điều kiện xã hội, không phải bằng “bản tính” dân tộc.", say: "Nói về điều kiện và cơ hội, không nói về “bản tính”." }
    ]
  },

  dao: {
    lead: "Người Dao cư trú rải rác khắp vùng núi phía Bắc với nhiều nhóm địa phương mang trang phục và phong tục rất khác nhau: Dao Đỏ, Dao Tiền, Dao Quần Chẹt, Dao Thanh Y, Dao Áo Dài…",
    culture: [
      { t: "Lễ cấp sắc", d: "Nghi lễ trưởng thành quan trọng của nam giới Dao, đánh dấu sự công nhận của cộng đồng và tổ tiên. Lễ kéo dài nhiều ngày với tranh thờ, múa, hát và những bài cúng ghi bằng chữ Nôm Dao." },
      { t: "Tranh thờ", d: "Bộ tranh thờ Dao là một hệ thống thần linh được vẽ theo quy chuẩn nghiêm ngặt — vừa là tác phẩm mỹ thuật, vừa là văn bản tôn giáo." },
      { t: "Tri thức dược liệu", d: "Người Dao có hệ tri thức sâu về cây thuốc và các bài thuốc tắm. Đây là sở hữu trí tuệ của cộng đồng, đang đối mặt với nguy cơ bị thương mại hóa thiếu công bằng." }
    ],
    language: {
      text: "Tiếng Dao thuộc ngữ hệ H’Mông – Miền, với hai nhánh lớn là Kìm Miền và Kìm Mùn. Người Dao dùng chữ Nôm Dao, xây dựng trên cơ sở chữ Hán, để ghi sách cúng, truyện thơ, gia phả và văn bản cấp sắc.",
      notes: ["Ngữ hệ: H’Mông – Miền", "Văn tự: chữ Nôm Dao", "Gần gũi: Mông, Pà Thẻn"]
    },
    works: [
      { t: "Quá Sơn Bảng văn", k: "Văn bản thiêng", d: "Văn bản ghi lại lịch sử di cư và quyền vượt núi của người Dao, gắn với truyền thuyết Bàn Vương — thủy tổ của người Dao." },
      { t: "Pả dung", k: "Hát dân gian", d: "Lối hát đối đáp, hát giao duyên của người Dao, dùng trong lễ hội và sinh hoạt thường ngày." }
    ],
    faces: [
      { n: "Bàn Tài Đoàn", y: "", r: "Nhà thơ người Dao, một trong những tiếng thơ thiểu số tiêu biểu của văn học hiện đại." }
    ],
    today: "Người Dao trẻ đang tham gia vào du lịch cộng đồng, nông nghiệp dược liệu, và nhiều nghề nghiệp ở đô thị. Câu chuyện quan trọng hiện nay là làm sao để tri thức dược liệu được bảo hộ và mang lại lợi ích công bằng cho chính cộng đồng.",
    musing: "Mình từng thấy những gói “thuốc tắm người Dao đỏ” bán ở khắp nơi. Ai là người được hưởng lợi từ tri thức đó nhỉ?",
    myths: [
      { s: "Trang phục Dao đỏ thật “lạ mắt”, chụp ảnh rất đẹp.", why: "Biến trang phục — vốn mang ý nghĩa nghi lễ, nhóm, tuổi tác — thành đạo cụ chụp ảnh là đối xử với văn hóa người khác như một món hàng thị giác.", alt: "Hãy tìm hiểu ý nghĩa của trang phục và hỏi xin phép trước khi chụp ảnh người khác.", say: "“Trang phục truyền thống của người Dao Đỏ.”" }
    ]
  },

  ede: {
    lead: "Người Ê Đê sống tập trung ở cao nguyên Đắk Lắk, nổi tiếng với nhà dài, chế độ mẫu hệ và những bộ sử thi (khan) dài hàng nghìn câu.",
    culture: [
      { t: "Nhà dài", d: "Nhà dài là nơi sinh sống của một đại gia đình mẫu hệ; khi con gái lấy chồng, ngôi nhà được nối dài thêm. Kiến trúc ngôi nhà chính là sơ đồ của quan hệ thân tộc." },
      { t: "Mẫu hệ", d: "Con cái mang họ mẹ, tài sản và nhà cửa truyền theo dòng nữ, người chồng về ở nhà vợ. Nhưng mẫu hệ là một hệ thống phân bổ quyền và trách nhiệm phức tạp, không đơn giản là “phụ nữ nắm hết quyền”." },
      { t: "Cồng chiêng", d: "“Không gian văn hóa Cồng chiêng Tây Nguyên” được UNESCO công nhận năm 2005. Với người Ê Đê, cồng chiêng là phương tiện giao tiếp với thần linh, gắn với vòng đời và chu kỳ nông nghiệp." },
      { t: "Lễ cúng bến nước", d: "Bến nước là nơi bắt đầu một buôn. Lễ cúng bến nước thể hiện quan hệ thiêng liêng giữa cộng đồng và nguồn nước." }
    ],
    language: {
      text: "Tiếng Ê Đê thuộc ngữ hệ Nam Đảo (nhánh Chamic), gần với tiếng Gia Rai, Chăm, Ra Glai, Chu Ru. Chữ Ê Đê hệ Latin được hình thành từ đầu thế kỷ XX và hiện được dạy ở một số trường học, dùng trên báo chí, phát thanh địa phương.",
      notes: ["Ngữ hệ: Nam Đảo, nhánh Chamic", "Văn tự: chữ Ê Đê Latin (đầu thế kỷ XX)", "Gần gũi: Gia Rai, Chăm, Ra Glai, Chu Ru"]
    },
    works: [
      { t: "Khan Đam San", k: "Sử thi", d: "Sử thi về người anh hùng Đam San, dám đi bắt Nữ Thần Mặt Trời. Đoạn trích được học trong chương trình Ngữ văn — nhưng thường chỉ được đọc như chuyện anh hùng, ít khi được đọc như một văn bản về luật tục và quan hệ mẫu hệ." },
      { t: "Khan Xinh Nhã", k: "Sử thi", d: "Sử thi về hành trình đi tìm cha và trả thù, một tác phẩm lớn khác trong kho tàng khan Ê Đê." }
    ],
    faces: [
      { n: "Y Moan", y: "1957 – 2010", r: "Ca sĩ, nghệ sĩ nhân dân; tiếng hát tiêu biểu của Tây Nguyên." },
      { n: "H’Hen Niê", y: "1992", r: "Hoa hậu Hoàn vũ Việt Nam 2017; hoạt động vì giáo dục cho trẻ em vùng khó khăn." },
      { n: "Y Ngông Niê Kđăm", y: "", r: "Nhà giáo, nhà quản lý; người có đóng góp lớn cho giáo dục và chính sách dân tộc." }
    ],
    today: "Buôn làng Ê Đê đang đối diện với đô thị hóa nhanh của Buôn Ma Thuột, chuyển đổi cây trồng và di cư lao động. Nhiều người trẻ Ê Đê đang ghi lại khan bằng video, dạy tiếng mẹ đẻ cho trẻ em và đưa âm nhạc cồng chiêng vào các sáng tác đương đại.",
    musing: "Mình từng nghĩ mẫu hệ nghĩa là “phụ nữ làm chủ tất cả”. Hóa ra mọi hệ thống xã hội đều phức tạp hơn một khẩu hiệu.",
    myths: [
      { s: "Tây Nguyên hoang dã, người dân chỉ biết uống rượu cần và lễ hội.", why: "Hình ảnh du lịch đã cắt rời rượu cần khỏi bối cảnh nghi lễ, biến cả một vùng văn hóa thành không gian “giải trí” cho người ngoài.", alt: "Rượu cần trong nghi lễ là vật thiêng để giao tiếp với thần linh và gắn kết cộng đồng, có quy tắc uống nghiêm ngặt.", say: "Tránh từ “hoang dã”; dùng “cao nguyên”, “buôn làng”." },
      { s: "Chế độ mẫu hệ nghĩa là phụ nữ nắm hết quyền lực.", why: "Đơn giản hóa một cấu trúc xã hội phức tạp thành khẩu hiệu, đôi khi để biến nó thành “điều kỳ lạ”.", alt: "Trong mẫu hệ, quyền thừa kế và cư trú theo dòng mẹ, đồng thời vai trò của anh em trai bên mẹ và người chủ bến nước đều rất quan trọng.", say: "“Xã hội Ê Đê tổ chức theo dòng mẹ.”" }
    ]
  },

  cham: {
    lead: "Người Chăm là hậu duệ của cư dân vương quốc Champa, nay sống chủ yếu ở Ninh Thuận, Bình Thuận cũ (nay thuộc Khánh Hòa, Lâm Đồng) và An Giang, TP. Hồ Chí Minh. Cộng đồng Chăm gồm nhiều nhóm tín ngưỡng: Chăm Ahiêr (Bà-la-môn), Chăm Awal (Bàni) và Chăm Islam.",
    culture: [
      { t: "Đền tháp", d: "Các đền tháp Chăm như Po Klong Garai, Po Nagar vẫn là nơi thờ tự đang hoạt động. Khu đền tháp Mỹ Sơn được UNESCO công nhận Di sản thế giới năm 1999." },
      { t: "Katê", d: "Lễ hội lớn của người Chăm Ahiêr, tưởng nhớ các vị thần và tổ tiên, diễn ra tại tháp, làng và gia đình." },
      { t: "Gốm Bàu Trúc", d: "Gốm Chăm được nặn tay hoàn toàn, không dùng bàn xoay, nung lộ thiên. “Nghệ thuật làm gốm của người Chăm” được UNESCO ghi danh vào Danh sách cần bảo vệ khẩn cấp năm 2022." },
      { t: "Dệt thổ cẩm", d: "Làng dệt Mỹ Nghiệp và nhiều làng khác lưu giữ kỹ thuật dệt và hệ hoa văn Chăm, do phụ nữ truyền dạy qua nhiều thế hệ." }
    ],
    language: {
      text: "Tiếng Chăm thuộc ngữ hệ Nam Đảo (nhánh Chamic). Người Chăm có chữ viết từ rất sớm — văn bia Chăm thuộc hàng cổ nhất Đông Nam Á. Chữ Akhar Thrah (gốc Brahmi) được dùng phổ biến để ghi chép văn học, kinh sách, và hiện vẫn được dạy trong cộng đồng.",
      notes: ["Ngữ hệ: Nam Đảo, nhánh Chamic", "Văn tự: Akhar Thrah (gốc Brahmi)", "Gần gũi: Ê Đê, Gia Rai, Ra Glai, Chu Ru"]
    },
    works: [
      { t: "Ariya Cam – Bini", k: "Trường ca", d: "Trường ca về mối tình giữa chàng trai Chăm và cô gái Bini (Hồi giáo), phản ánh những xung đột tôn giáo – văn hóa trong lịch sử." },
      { t: "Akayet", k: "Sử thi", d: "Thể loại sử thi viết bằng chữ Chăm, như Akayet Dewa Mưno, chứa đựng thế giới quan và hệ giá trị của người Chăm." },
      { t: "Tháp nắng", k: "Thơ — Inrasara, 1996", d: "Tập thơ của một nhà thơ, nhà nghiên cứu người Chăm, viết song hành giữa hai ngôn ngữ và hai thế giới." }
    ],
    faces: [
      { n: "Inrasara (Phú Trạm)", y: "1957", r: "Nhà thơ, nhà nghiên cứu văn hóa Chăm, quê Ninh Thuận (nay thuộc Khánh Hòa)." }
    ],
    today: "Người Chăm hôm nay vừa giữ gìn các nghi lễ ở đền tháp, vừa tham gia giáo dục, nghiên cứu, nghệ thuật đương đại. Nhiều nghệ sĩ Chăm trẻ đưa hoa văn, âm nhạc Chăm vào thiết kế, thời trang và điện ảnh.",
    musing: "Sách vở hay nói về “vương quốc Champa đã mất”. Nhưng mình vừa gặp những bạn Chăm đang học chữ Akhar Thrah trên điện thoại — văn hóa ấy có mất đâu.",
    myths: [
      { s: "Chăm là một nền văn hóa đã biến mất, chỉ còn lại tháp cổ.", why: "Đặt cộng đồng vào quá khứ khiến những con người đang sống trở nên vô hình.", alt: "Hơn 178.000 người Chăm đang sống, thực hành tín ngưỡng, sáng tạo nghệ thuật và đóng góp cho xã hội hôm nay.", say: "“Văn hóa Chăm”, “cộng đồng Chăm hiện nay”." },
      { s: "Người Chăm “huyền bí”, “bùa ngải”.", why: "Thần bí hóa là một hình thức đẩy “người khác” ra xa, kèm theo nghi ngại và sợ hãi.", alt: "Tín ngưỡng Chăm có hệ thống chức sắc, kinh sách, lễ nghi rõ ràng, có thể tìm hiểu như mọi tôn giáo khác.", say: "Gọi đúng tên tín ngưỡng: Chăm Ahiêr, Chăm Awal, Chăm Islam." }
    ]
  },

  bana: {
    lead: "Người Ba Na (Bahnar) cư trú chủ yếu ở Gia Lai và Kon Tum cũ (nay thuộc Quảng Ngãi). Ngôi nhà rông mái cao vút giữa làng là biểu tượng của tinh thần cộng đồng Ba Na.",
    culture: [
      { t: "Nhà rông", d: "Nhà rông là nơi hội họp, xét xử theo luật tục, tiếp khách, là chỗ ngủ của thanh niên chưa vợ và nơi cất giữ cồng chiêng, vật thiêng của làng." },
      { t: "Tượng nhà mồ", d: "Tượng gỗ quanh nhà mồ trong lễ bỏ mả thể hiện quan niệm về vòng đời và cái chết. Đây là một dòng điêu khắc dân gian độc đáo." },
      { t: "Cồng chiêng và lễ ăn cơm mới", d: "Cồng chiêng gắn liền với các nghi lễ nông nghiệp, đặc biệt là lễ ăn cơm mới mừng mùa màng." }
    ],
    language: {
      text: "Tiếng Ba Na thuộc nhánh Bahnaric của nhóm Môn – Khmer (ngữ hệ Nam Á). Chữ Ba Na hệ Latin được hình thành từ cuối thế kỷ XIX ở vùng Kon Tum và hiện được dùng trong giáo dục song ngữ, phát thanh.",
      notes: ["Ngữ hệ: Nam Á, nhánh Bahnaric", "Văn tự: chữ Ba Na Latin (cuối thế kỷ XIX)", "Gần gũi: Xơ Đăng, Giẻ Triêng, Hrê, Brâu, Rơ Măm"]
    },
    works: [
      { t: "Hơmon", k: "Sử thi", d: "Hơmon là thể loại sử thi của người Ba Na, được hát kể trong nhà rông qua nhiều đêm, xoay quanh những người anh hùng như Giông." },
      { t: "Đất nước đứng lên", k: "Tiểu thuyết — Nguyên Ngọc, 1955", d: "Tiểu thuyết về anh hùng Núp và làng Kông Hoa, được dạy trong nhà trường. Một văn bản của nhà văn người Kinh viết về người Ba Na — đáng để đọc kèm câu hỏi về điểm nhìn kể chuyện." }
    ],
    faces: [
      { n: "Anh hùng Núp (Đinh Núp)", y: "1914 – 1999", r: "Anh hùng lực lượng vũ trang nhân dân, người Ba Na ở Gia Lai." },
      { n: "Siu Black", y: "", r: "Ca sĩ, người góp phần đưa âm nhạc Tây Nguyên đến khán giả cả nước." }
    ],
    today: "Nhiều làng Ba Na đang tìm cách để nhà rông không chỉ là điểm tham quan mà vẫn là không gian sinh hoạt thật của cộng đồng. Người trẻ Ba Na học đại học, trở về làm giáo viên, cán bộ, và tham gia ghi chép lại các hơmon.",
    musing: "Một cụ già Ba Na kể rằng cồng chiêng chỉ “sống” khi được đánh trong lễ của làng. Đánh trên sân khấu cho khách xem thì cồng chiêng cũng “buồn”.",
    myths: [
      { s: "Cồng chiêng là tiết mục biểu diễn du lịch hấp dẫn.", why: "Tách cồng chiêng khỏi nghi lễ và cộng đồng là biến di sản thành sản phẩm giải trí.", alt: "Cồng chiêng gắn với lễ nghi, mùa vụ và vòng đời người. Giá trị của nó nằm trong không gian văn hóa, như chính tên gọi của di sản UNESCO.", say: "“Không gian văn hóa cồng chiêng”." }
    ]
  }
};

/* =====================================================================
   ĐỊNH KIẾN CHUNG — khuôn mẫu “người Kinh / người thiểu số”
   ===================================================================== */
window.COMMON_MYTHS = [
  { s: "Người Kinh là “người Việt Nam”, còn lại là “người dân tộc”.", why: "Cách nói khiến người Kinh trở thành chuẩn mực trung tính, còn các dân tộc khác là “phần còn lại”. Người Kinh cũng là một dân tộc.", alt: "Việt Nam có 54 dân tộc; người Kinh là dân tộc đa số. Mọi công dân, thuộc dân tộc nào, đều là người Việt Nam.", say: "“Người dân tộc Tày”, “người Kinh”, “các dân tộc thiểu số”." },
  { s: "Dân tộc thiểu số là lạc hậu, chậm phát triển.", why: "Đánh đồng “khác” với “kém”. Thước đo “phát triển” ở đây thường chỉ là lối sống đô thị của nhóm đa số.", alt: "Mỗi cộng đồng có hệ tri thức riêng về sinh thái, y học, kiến trúc, luật tục. Khoảng cách kinh tế phản ánh điều kiện địa lý, hạ tầng, chính sách — không phản ánh năng lực của một dân tộc.", say: "“Vùng có điều kiện kinh tế – xã hội đặc biệt khó khăn”." },
  { s: "Họ nghèo vì lười, quen trông chờ ỷ lại.", why: "Đẩy trách nhiệm của các vấn đề cấu trúc lên tính cách cá nhân hoặc tính cách dân tộc.", alt: "Nghèo đa chiều liên quan đến đất đai, khoảng cách tới thị trường, rào cản ngôn ngữ trong giáo dục và dịch vụ công.", say: "Nói về điều kiện, cơ hội và chính sách." },
  { s: "Cần “giúp đỡ”, “khai hóa”, “nâng cao dân trí” cho đồng bào.", why: "Ngôn ngữ ban ơn đặt người thiểu số vào vị trí bị động, người nhận; người đa số là người cho, người dạy.", alt: "Cộng đồng là chủ thể của sự phát triển của chính mình. Hợp tác, lắng nghe và tôn trọng tri thức bản địa hiệu quả hơn “ban phát”.", say: "“Đồng hành”, “hợp tác”, “cùng cộng đồng”." },
  { s: "Vùng dân tộc thiểu số “hoang sơ, kỳ bí, đẹp như tranh”.", why: "Lăng kính du lịch biến con người thành phong cảnh, biến đời sống thành “điều lạ” để chiêm ngưỡng.", alt: "Đó là quê hương, nơi con người lao động, học tập, có những lo toan và khát vọng như ở bất cứ đâu.", say: "Kể về con người như những chủ thể, không như phông nền." },
  { s: "Phong tục của họ là mê tín dị đoan.", why: "Áp hệ giá trị của mình để phán xét tín ngưỡng của người khác.", alt: "Các nghi lễ là hệ thống biểu tượng có logic nội tại, gắn với sinh thái và đạo đức cộng đồng. Nhiều nghi lễ đã được UNESCO ghi danh.", say: "“Tín ngưỡng”, “nghi lễ”, “thực hành văn hóa”." },
  { s: "Người dân tộc nào cũng giống nhau: ở nhà sàn, mặc thổ cẩm, uống rượu cần.", why: "Đồng nhất hóa 53 cộng đồng với 8 nhóm ngôn ngữ khác nhau thành một hình ảnh “dân tộc” chung chung.", alt: "Người Khmer theo Phật giáo Nam tông ở đồng bằng; người Chăm có đền tháp và chữ viết cổ; người Hoa ở đô thị; người Mông ở vùng cao… Sự đa dạng ấy rất lớn.", say: "Gọi đúng tên từng dân tộc." },
  { s: "Người dân tộc thiểu số lên thành phố là “mất gốc”.", why: "Mặc định bản sắc chỉ tồn tại ở một nơi chốn cố định và một lối sống cố định.", alt: "Bản sắc vận động cùng con người. Nhiều người trẻ ở thành phố lại chính là những người tích cực học tiếng mẹ đẻ và sáng tạo văn hóa của mình.", say: "“Người Tày ở Hà Nội”, “cộng đồng Khmer ở TP. Hồ Chí Minh”." }
];

/* Bảng chuyển đổi ngôn từ — dùng ở trang Khung ngôn ngữ & chatbot */
window.LEXICON = [
  ["người dân tộc (để chỉ người thiểu số)", "người dân tộc + tên dân tộc (người Tày, người Ê Đê) / người dân tộc thiểu số"],
  ["mọi, man, Mán, Mèo, Thổ, Miên… (tên gọi cũ, miệt thị)", "tên gọi chính thức: Ba Na, Dao, Mông, Tày, Khmer…"],
  ["lạc hậu, kém phát triển", "có điều kiện kinh tế – xã hội khó khăn; khác biệt về lối sống"],
  ["vùng sâu vùng xa, hoang sơ", "vùng cao, vùng biên giới, tên cụ thể của địa phương"],
  ["mê tín, hủ tục (khi chưa tìm hiểu)", "tín ngưỡng, nghi lễ, thực hành văn hóa"],
  ["giúp đỡ, khai hóa đồng bào", "hợp tác, đồng hành cùng cộng đồng"],
  ["cô gái dân tộc xinh đẹp", "tên, nghề nghiệp, vai trò của người được nói đến"],
  ["trang phục lạ mắt, độc đáo", "trang phục truyền thống của người…, kèm ý nghĩa của nó"]
];

/* =====================================================================
   TRÒ CHƠI — Khung cửi tri thức
   ===================================================================== */
window.QUIZ = [
  { q: "Người Kinh cũng là một dân tộc, một trong 54 dân tộc của Việt Nam.", a: true, e: "Đúng vậy. Dùng “người dân tộc” để chỉ riêng người thiểu số là cách nói vô tình biến người Kinh thành chuẩn mực." },
  { q: "Người dân tộc thiểu số nghèo vì lười lao động.", a: false, e: "Định kiến. Nghèo liên quan đến đất đai, hạ tầng, khoảng cách tới thị trường và rào cản ngôn ngữ — không phải “bản tính” của một dân tộc." },
  { q: "“Thực hành Then của người Tày, Nùng, Thái ở Việt Nam” được UNESCO ghi danh năm 2019.", a: true, e: "Đúng. Then là thực hành văn hóa tổng hợp của âm nhạc, văn chương, diễn xướng và tín ngưỡng." },
  { q: "Các dân tộc thiểu số đều không có chữ viết riêng.", a: false, e: "Sai. Người Chăm, Thái, Khmer có chữ viết hàng trăm năm; người Tày, Dao có chữ Nôm riêng; nhiều dân tộc khác có chữ Latin." },
  { q: "Tục “kéo vợ” của người Mông đồng nghĩa với bắt cóc phụ nữ.", a: false, e: "Định kiến từ truyền thông giật tít. Nghi thức truyền thống dựa trên sự ưng thuận; hành vi cưỡng ép là vi phạm pháp luật và bị cộng đồng phản đối." },
  { q: "Ở người Ê Đê, con cái theo họ mẹ.", a: true, e: "Đúng. Xã hội Ê Đê tổ chức theo dòng mẹ — nhưng điều đó không đơn giản là “phụ nữ nắm hết quyền”." },
  { q: "Người dân tộc thiểu số lên thành phố sống thì sẽ “mất gốc”.", a: false, e: "Định kiến. Bản sắc vận động cùng con người; nhiều người trẻ ở đô thị lại là những người làm mới văn hóa của mình." },
  { q: "Việt Nam có 54 dân tộc thuộc 8 nhóm ngôn ngữ khác nhau.", a: true, e: "Đúng. Gồm Việt – Mường, Tày – Thái, Môn – Khmer, H’Mông – Dao, Kađai, Nam Đảo, Hán và Tạng – Miến." },
  { q: "Tiếng Mường là “tiếng Việt nói sai”.", a: false, e: "Sai. Tiếng Mường và tiếng Việt cùng tách ra từ một tiền ngôn ngữ chung; đó là hai ngôn ngữ ngang hàng." },
  { q: "“Nghệ thuật làm gốm của người Chăm” được UNESCO ghi danh vào danh sách cần bảo vệ khẩn cấp.", a: true, e: "Đúng, năm 2022. Gốm Chăm được nặn tay, không dùng bàn xoay và nung lộ thiên." }
];

window.MATCH = [
  ["Then & đàn tính", "Tày"],
  ["Khèn & vải lanh", "Mông"],
  ["Nhà dài & khan Đam San", "Ê Đê"],
  ["Chôl Chnăm Thmây", "Khmer"],
  ["Tháp & lễ Katê", "Chăm"],
  ["Lễ cấp sắc", "Dao"]
];
