# Atlas Diễn ngôn · Dân tộc thiểu số Việt Nam

Bản đồ số tìm hiểu **diễn ngôn kiến tạo** và **diễn ngôn định kiến** về 53 dân tộc thiểu số.

## Chạy thử
Trang web tĩnh, không cần cài đặt. Mở trực tiếp `index.html`, hoặc chạy máy chủ cục bộ:

```bash
node .claude/serve.mjs
```

rồi mở http://localhost:5173. Muốn đưa lên mạng: tải cả thư mục lên GitHub Pages / Netlify / Vercel.

## Cấu trúc
| Tệp | Nội dung |
|---|---|
| `index.html` | Khung trang |
| `assets/css/style.css` | Giao diện (màu chàm · son · nghệ · lá · giấy dó) |
| `assets/js/data-ethnic.js` | Số liệu 53 dân tộc, 9 hồ sơ gốc, định kiến chung, câu hỏi trò chơi |
| `assets/js/data-profiles.js` | Hồ sơ của 44 dân tộc còn lại (cấu trúc gọn qua hàm `P()`) |
| `fonts.html` | Bảng so sánh font có hỗ trợ tiếng Việt |
| `assets/js/data-geo.js` | Ranh giới 34 tỉnh/thành (từ 01/7/2025), quần đảo Hoàng Sa, Trường Sa |
| `assets/js/companion.js` | Hai nhân vật đồng hành Mây và Núi (SVG) |
| `assets/js/app.js` | Bản đồ, danh sách, hồ sơ, chatbox, trò chơi |

## Bổ sung hồ sơ cho một dân tộc
Trong `data-ethnic.js`, thêm một mục vào `window.PROFILES` với khoá là id của dân tộc
(ví dụ `nung`), theo cấu trúc của hồ sơ `tay`: `lead`, `culture`, `language`, `works`,
`faces`, `today`, `musing`, `myths`. Các dân tộc chưa có hồ sơ sẽ hiện trạng thái “đang biên soạn”.

## Nguồn dữ liệu
- Dân số: Tổng điều tra dân số và nhà ở 01/4/2019.
- Ranh giới hành chính: [nguyenduy1133/Free-GIS-Data](https://github.com/nguyenduy1133/Free-GIS-Data) (đã giản lược); nước láng giềng: Natural Earth qua `world-atlas`.
- Thư viện: D3 v7.9.0, topojson-client v3.1.0 (đã đóng gói trong `assets/vendor`).

> Nội dung văn hóa, nhân vật, định kiến cần được chuyên gia và người trong cộng đồng rà soát trước khi công bố rộng rãi.
