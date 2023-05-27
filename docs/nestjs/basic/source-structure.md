---
title: Cấu trúc dự án
sidebar_label: "Cấu trúc dự án"
sidebar_position: 1
slug: /nestjs/basic/1
---

```bash title="Khởi tạo dự án mới"
npm i -g @nestjs/cli
nest new project-name
```

```ts title="Các lệnh khác"
npm run start:dev //chạy dự án ở local
npm run build --prod //chạy build dự án
npm run start //chạy dự án đã build
```

## Cấu trúc dự án

```ts
my-project-name
.dist //Thư mục build của nestjs
├──src //Thư mục gốc của dự án
    ├──api //Thư mục chứa các api, router
    ├──auth //Module vận hành cơ chế xác thực
    ├──dto //Các class dữ liệu hỗ trợ xử lý
    ├──entities //Lưu cấu trúc bảng
    ├──service //Các module thao tác trực tiếp với bảng, chỉ thao tác với bảng duy nhất
    ├──utils //Các hàm dùng chung cho cả dự án
    app.module.ts //Module gốc
    db.connect.module.ts //File cấu hình multi database - database chính
    db.general.module.ts // File cấu hình multi database - database phụ
    main.ts //File chạy chính của chương trình
├──uploads //Nơi lưu trữ các tệp tải lên của người dùng
.env //Tệp lưu trữ các biến môi trường
.eslintrc.json
.gitignore //Cấu hình không tải cho git
.prettierrc //Làm đẹp code
ecosystem.config.js //File cấu hình pm2
nest-cli.json //File cấu hình của nestjs
package.json //File lưu trữ phụ thuộc của dự án
tsconfig.json //File cấu hình typescript
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
