---
title: Công cụ và môi trường
sidebar_label: "Công cụ và môi trường"
sidebar_position: 2
slug: /docs-tester/tools
authors: Nguyễn Việt Minh Anh
tags: [Tools, Tester]
date: 2021-09-13T18:00
---

# <span class="color-tester" >Cài đặt các công cụ test</span>

## Trình duyệt test

Chuẩn bị các trình duyệt để test:

- Google Chrome. Tải về [tại dây][chrome]
- Firefox. Tải về [tại dây][Firefox]
- Microsoft Edge
- Safari

## Công cụ test

### <span class="color-tester" >Lightshot</span>

_<span class="color-tester" >Bước 1:</span>_ Cài đặt **Lightshot**

- Cài đặt extension Lightshot [tại đây][Lightshot] sử dụng trên trình duyệt web
- Hoặc tải công cụ Lightshot tại [http://app.prntscr.com/](http://app.prntscr.com/) để sử dụng trên thiết bị

_<span class="color-tester" >Bước 2:</span>_ Các tính năng **Lightshot**

- Chụp ảnh màn hình và chia sẻ nó trong vài cú nhấp chuột
- Chọn bất kỳ phần nào của trang
- Chỉnh sửa ảnh chụp màn hình tại chỗ
- Lưu trên đĩa hoặc tải lên đám mây
- Tìm kiếm các ảnh chụp màn hình tương tự

_<span class="color-tester" >Bước 3:</span>_ Tải lên và sao chép link ảnh bỏ vào phần mô tả bug

### <span class="color-tester" >Gyazo</span>

_<span class="color-tester" >Bước 1:</span>_ Cài đặt **Gyazo**

- Cài đặt extension Gyazo [tại đây](https://chrome.google.com/webstore/detail/gyazo-share-new-screensho/ffdaeeijbbijklfcpahbghahojgfgebo?hl=vi) sử dụng trên trình duyệt web
- Hoặc tải công cụ Gyazo tại [https://gyazo.com/download](https://gyazo.com/download) để sử dụng trên thiết bị

_<span class="color-tester" >Bước 2:</span>_ Các tính năng **Gyazo**

- Chụp ảnh màn hình và chia sẻ nó trong vài cú nhấp chuột
- Xem trước ảnh chụp tức thì bên dưới liên kết mà không cần nhấp chuột
- Duyệt, tìm kiếm và thu thập ảnh chụp dễ dàng
- Tạo bộ sưu tập để sắp xếp và chia sẻ

_<span class="color-tester" >Bước 3:</span>_ Tải lên và sao chép link ảnh bỏ vào phần mô tả bug

### <span class="color-tester" >WhatFont</span>

**WhatFont** là công cụ xác định phông chữ trên các trang web.

_<span class="color-tester" >Bước 1:</span>_ **Cài đặt WhatFont**

- Cài đặt extension WhatFont [tại đây](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm?hl=vi) sử dụng trên trình duyệt web
- Hoặc tải công cụ WhatFont tại [https://taimienphi.vn/download-whatfont-for-chrome-76842](https://taimienphi.vn/download-whatfont-for-chrome-76842) để sử dụng trên thiết bị

_<span class="color-tester" >Bước 2:</span>_ Các tính năng **WhatFont**

Công cụ kiểm tra font chữ của website gồm:

- Font chữ
- Font Style
- Font Weight
- Font Size
- Line Height
- Color

_<span class="color-tester" >Bước 3:</span>_ Check web rồi so sánh font chữ với design

### <span class="color-tester" >Google devtools</span>

_<span class="color-tester" >Bước 1:</span>_ Truy cập công cụ **Dev Tools**

- Vào menu Tùy chỉnh Google Chrome, nhấp vào Công cụ khác -> Công cụ dành cho nhà phát triển
- Có thể nhấn phím tắt **`Ctrl` + `Shift` + `I`** hoặc nhấn phím **`F12`**

_<span class="color-tester" >Bước 2:</span>_ Check các thành phần web

- Mở Devtools, chọn tab **"Elements"** xem các phần tử HTML và cấu trúc của chúng
- Check các thuộc tính và giá trị của một phần tử bằng click chọn phần tử -> chọn "Inspect" hoặc "Kiểm tra phần tử" từ menu

_<span class="color-tester" >Bước 3:</span>_ Check Responsive

- Mở Devtools, chọn **"Mobile devices"** hoặc **"Responsive mode"**
- Chọn kích thước màn hình hoặc chế độ tùy chỉnh (điện thoại di động, máy tính bảng,...) hoặc điều chỉnh chiều rộng và chiều cao
- Check xem trang web có phản ứng đúng với kích thước màn hình hay không bằng cách cuộn trang, nhấp vào các liên kết, kiểm tra bố cục và hiển thị nội dung

_<span class="color-tester" >Bước 4:</span>_ Check Console

- Mở Devtools, chọn tab **"Console"**
- Kiểm tra lỗi: Khi web gặp lỗi trong quá trình chạy JavaScript, xem thông báo lỗi, vị trí lỗi và chi tiết
- Cap màn hình bug vào file Bug report

_<span class="color-tester" >Bước 5:</span>_ Test API

- Nắm vững kiến thức về API (định nghĩa, cấu trúc, status code, các phương thức( GET, POST, PUT, DELETE), cách thức hoạt động)
- Mở Devtools, chọn tab **"Network"** và tải lại trang web, tất cả các request sẽ được hiển thị trong danh sách. Xem các yêu cầu HTTP, phương thức (GET, POST, PUT, DELETE), URL, ...
- Chọn Fetch/XHR, hiển thị các API web
- Xem thời gian phản hồi ở tab "Time" và lọc từ thời gian phản hồi lâu nhất (xem xét API có thời gian phản hồi lâu để log bug)
- Xem Status code và so sánh với status trong docs
- Lưu ý khi log bug dẫn kèm URL của API đang lỗi

<div class="text-right">

_Author: **Nguyễn Việt Minh Anh**_

</div>

[chrome]: https://www.google.com/intl/vi_vn/chrome/
[Firefox]: https://www.mozilla.org/vi/firefox/new/
[Lightshot]: https://chrome.google.com/webstore/detail/lightshot-screenshot-tool/mbniclmhobmnbdlbpiphghaielnnpgdp?hl=vi
