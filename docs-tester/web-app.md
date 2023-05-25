---
title: Quy trình kiểm thử web application
sidebar_label: "Web Application Test"
sidebar_position: 3
slug: /docs-tester/web-app
---

# QUY TRÌNH TEST UI (WEB APPLICATIONS)

### <span class="color-tester"  >Kiểm tra page source</span>

---

- Bấm `F12` để xem src
- Kiểm tra title của dự án
- Kiểm tra các thẻ meta: `description`, `keyword`

### <span class="color-tester" >Kiểm tra SEO, validate HTML</span>

---

- Số thẻ tối có thể sử dụng cho mỗi bài viết: h1: 1 thẻ, h2: 5 thẻ, h3: 7 thẻ, h4: 10 thẻ, h5: 12 thẻ, h6: 15 thẻ
- Check Validate html: <https://validator.w3.org>
- Check Validate link: <https://validator.w3.org/checklink>

### <span class="color-tester"  >Kiểm tra Console</span>

---

- Không hiển thị lỗi cú pháp JavaScript
- Lỗi không tìm thấy biến hoặc hàm, lỗi mạng, lỗi bảo mật
- Lỗi không có file hình ảnh và một số lỗi cần chỉnh sửa khác

### <span class="color-tester"  >Kiểm tra Logo</span>

---

- Logo phải set link tới Home page ( cả ở Header và Footer)

### <span class="color-tester"  >Kiểm tra link</span>

---

- Tất cả đều phải set link theo sitemap chưa có có thể để href="#"
- Link external phải có thuộc tính target="blank"
- Link phải là block, không được đơn target
- Tất cả link có hover effect, không có design cụ thể thì để mặc định (opacity: 0.7, transition)

### <span class="color-tester"  >Kiểm tra hình ảnh</span>

---

- Hình ảnh không được có kích thước lớn hơn 1Mb sẽ ảnh hưởng tới perfomance của trang web
- Không để hình vượt quá 2000px
- Tất cả ảnh phải có thuộc tính alt. Đặt tên alt tương tự nội dung chính miêu tả ảnh

```
   1.  Nếu là imgtext thì alt sẽ giống phần text của hình
   2.  Nếu img trong một block có title và đoạn văn, thì alt sẽ giống như title
   3.  Alt của Logo nên để theo tên công ty
```

- Phân loại đúng định dạng ảnh(png,jpg,svg). Ví dụ: ảnh có nền trong suốt sử dụng png, ảnh vật thể, chân dung sử dụng jpg, sử dụng định dạng svg cho logo, icon và hình ảnh đơn giản,...

- Hiển thị rõ nét trên màn hình retina (macOS, iOS)
- Hình ảnh đúng tỉ lệ không bị móp hay méo

### <span class="color-tester"  >Kiểm tra khi click vào các link</span>

---

- Truy cập đến màn hình tương ứng với một mục được chọn

### <span class="color-tester"  >Kiểm tra thứ tự di chuyển của con trỏ</span>

---

- Khi nhấn phím `Tab` liên tục ( con trỏ di chuyển từ trên xuống dưới, từ trái qua phải)
- Khi nhấn phím `Shift`-`Tab` liên tục( con trỏ di chuyển từ dưới lên trên, từ phải qua trái )
- Có thể sử dụng phím `Tab` để di chuyển giữa các mục trên form

### <span class="color-tester"  >Kiểm tra giao diện khi thu nhỏ phóng to</span>

---

- Nhấn phím `Ctrl` `-`, `Ctrl` `+`
- Màn hình thu nhỏ phóng to tương ứng không bị vỡ giao diện

### <span class="color-tester"  >Kiểm tra trường hợp Refresh màn hình(Nhấn F5)</span>

---

- Sau khi refresh các chức năng vẫn thực hiện đúng

### <span class="color-tester"  >Kiểm tra phân trang</span>

---

- Đánh số thứ tự tăng dần và liên tục
- Không hiển thị link [Trước] khi ở trang một
- Không hiển thị link [Sau] khi ở trang cuối
- Chuyển về trang đầu, trang cuối, trước, sau hoặc một trang bất kỳ
- Set active khi click vào mỗi trang

### <span class="color-tester"  >Kiểm tra màu sắc của hyperlink</span>

---

- Đúng với thiết kế

### <span class="color-tester"  >Kiểm tra màu nền chung của toàn bộ màn hình </span>

---

- Đúng với thiết kế

### <span class="color-tester"  >Kiểm tra màu chữ, font chữ, font-size, font-weight của tất cả các textbox </span>

---

- Đúng với thiết kế

### <span class="color-tester"  >Kiểm tra khả năng truy cập trực tiếp từ menu </span>

---

- Tất cả các trang web/cửa sổ đều có thể truy cập từ menu

### <span class="color-tester"  >Kiểm tra menu trên thiết bị SP(iphone, ipad...) </span>

---

- Menu hoạt động đóng mở bình thường
- Không xuất hiện thanh cuộn ngang và dọc không cầN thiết
- Khi mở menu không được xuất hiện thanh cuộn dọc

### <span class="color-tester"  >Dial number( số điện thoại) </span>

---

- Có thể click vào và dial ngay trên thiết bị
- Thường yêu cầu xuất hiện chức nănq này trên các thiết smartphone, ipad vad ẩn trên PC

### <span class="color-tester"  >Landscape dimemsion</span>

---

- Kiểm tra giao diện khi quay ngang thiết bị(ip, ipad...) dưới 768px
- Layout không bị vỡ, đảm bảo hiển thị đầy đủ content

### <span class="color-tester"  >Kiểm tra chính tả</span>

---

- Kiểm tra lỗi chính tả

### <span class="color-tester"  >Breakpoint cho responsive</span>

---

| Breakpoint |        Mô tả         |
| :--------- | :------------------: |
| 320px      | màn hình smart-phone |
| 768px      | màn hình smartphone  |
| 1024px     |   màn hình tablet    |
| 1200px     |     màn hình PC      |
