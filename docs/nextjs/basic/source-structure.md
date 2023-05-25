---
title: Cấu trúc dự án
sidebar_label: "Cấu trúc dự án"
sidebar_position: 1
slug: /frontend/nextjs/basic/1
---

```bash title="Khởi tạo dự án mới"
npx create-next-app --typescript example-app-name
```

```ts title="Các lệnh khác"
npm run dev //chạy dự án ở local
npm run build --prod //chạy build dự án
npm run start //chạy dự án đã build
```

## Cấu trúc dự án

```ts
my-project-name
.next //Thư mục build của nextjs
├──api-client //Code xử lý api giao tiếp với backend
├──components //Các component dùng chung
├──constants //Nơi lưu trữ các biến toàn cục
├──hooks //Nơi chứa các custom hook
├──mocks //Nơi chứa các dữ liệu mẫu
├──models //Nơi viết interface
├──pages //Router chính của nextjs
├──public //Nơi chứa các tài nguyên public của dự án
├──store //Cấu hình redux toolkit
├──styles //Style
├──theme //Cấu hình material UI
├──translate //Lưu trữ dữ liệu phiên dịch cho các ngôn ngữ
├──utils //Cái hàm dùng chung cho cả dự án
.env //Tệp lưu trữ các biến dùng chung cho mọi môi trường
.env.development //Tệp lưu trữ các biến dùng chung cho môi trường dev - thực thi lúc npm run dev
.env.production //Tệp lưu trữ các biến dùng chung cho môi trường product - thực thi lúc npm run start
.eslintrc.json
.gitignore //Cấu hình không tải cho git
.prettierrc //Làm đẹp code
next.config.js //File cấu hình của nextjs
package.json //File lưu trữ phụ thuộc của dự án
tsconfig.json //File cấu hình typescript
```

- Mỗi thư mục đều có 1 file index.ts để export tất cả file bên trong thư mục đó ra

> Chú ý:
>
> - Các biến môi trường muốn truy cập được trên trình duyệt phải thêm tiền tố \*\*NEXT_PUBLIC\*\*  
>   Ví dụ: NEXT_PUBLIC_API_PATH=http://localhost:3100/

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
