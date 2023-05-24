---
title: Quy tắc phòng lập trình
sidebar_label: "Quy tắc"
sidebar_position: 1
slug: /rule
---

## Chung

- Không đẩy tất cả các file biến môi trường: **.env\*** lên git, hoặc để lộ ra bên ngoài
- Đặt tên biến, tên file có ý nghĩa, sát với chức năng đang làm
- Cập nhật công việc, trạng thái công việc lên oteam
- Kéo source code về thì luôn **npm i** lại
- Sai quy tắc chung ký đầu trả bài về làm lại

## FrontEnd

- Sử dụng cú pháp nhanh **`tsdrpfc`** cho pages
- Sử dụng cú pháp nhanh **`tsrpfc`** cho component
- Mỗi folder phải có 1 trang index.ts để export tất cả nội dung bên trong
- Tên thư mục viết thường, nếu dài hơn 1 từ thì phân cách bằng dấu gạch ngang Ex: footer, footer-mobile
- Tên biến, hàm js viết thường từ đầu, viết hoa các từ kế tiếp Ex: value, resultValue
- Hằng số bất biến cả chương trình sử dụng thì viết hoa tất cả các chữ, phân cách bằng shift gạch Ex: API_PATH
- Css viết inline, sử dụng [Material UI](https://mui.com/material-ui/getting-started/overview/)
- Code front-end bật f12 lên, không có lỗi báo đỏ mới được commit code
- Thử chạy lệnh **`npm run build --prod`** trước khi commit code

## Backend

- Interface, Class viết hoa mỗi từ đầu Ex: CreateModel
- Api path viết thường, phân cách bằng dấu gạch ngang Ex: /api/get-all-user
- Tên thư mục viết thường, phân cách bằng dấu gạch ngang
- Module phải viết vào chung file share, trừ các module đặc biệt

## Git

- Nhánh dev, main, master tất cả thành viên không được thay đổi code trên 3 nhánh này
- Nhánh của ai thì bạn đó sẽ thao tác code trên đó
- Sáng 8h15p nhớ kéo source từ nhánh dev về merge lại với nhánh mình đang làm
- Chiều 4h50 nhớ đẩy code lên nhánh, nếu code lỗi báo cáo lại team leader và **không đẩy code**
- Tuân thủ git flow, xem thêm [tại đây](./git-flow)
