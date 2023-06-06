---
title: Pm2 auto start
sidebar_label: "Pm2"
sidebar_position: 1
slug: /pm2
---

```bash title="Cài đặt Pm2 với cờ global"
npm install pm2 -g
```

> Các câu lệnh cơ bản cần nhớ
>
> - pm2 list: Xem danh sách ứng dụng đang được thực thi bở pm2
> - pm2 log: Xem log các ứng dụng sinh ra khi chạy
> - pm2 stop [id]: Dừng ứng dụng đang chạy bằng id
> - pm2 start [id]: Chạy ứng dụng đang dừng trong danh sách pm2 bằng id
> - pm2 restart [id]: Khởi động lại ứng dụng đang chạy trên pm2 bằng id
> - pm2 delete [id]: Xoá ứng dụng trong danh sách pm2 bằng id
> - pm2 all: Xoá tất cả ứng dụng trong danh sách pm2

## Chạy ứng dụng với pm2

### Backend

```bash title="Tạo file pm2 config bằng câu lệnh sau"
pm2 ecosystem
```

- Đổi giá trị name cho phù hợp
- trỏ lại đường dẫn script thành ./dist/main.js

```ts
module.exports = {
  apps: [
    {
      name: "oesystem.vn",
      script: "./dist/main.js",
      watch: "./dist",
      ignore_watch: ["node_modules", "./uploads"],
      autorestart: true,
      cwd: __dirname,
    },
  ],
};
```

```bash title="Khởi chạy pm2 bằng file config"
pm2 start ecosystem.config.js
```

### FrontEnd

Khác với backend. front end không thể start trực tiếp bằng file config được. Thay vào đó hãy sử dụng câu lệnh sau:

```bash
pm2 start node_modules/next/dist/bin/next --name "[name]" -- start -p [port]
```

- Đổi [name] thành tên bạn muốn đặt
- Đổi [port] thành port ứng dụng sẽ chạy

## Thiết lập auto start trên môi trường windows

Các bước thực hiện đối với môi trường windows:

**Bước 1**:  
Cài đặt môi trường và các gói package sau

```bash
npm config set prefix "C:\\NodeJS\\npm"
```

```bash
npm config set cache "C:\\NodeJS\\npm-cache"
```

```bash
npm config set temp "C:\\NodeJS\\temp"
```

```bash
npm config ls -l
```

```bash
npm install pm2 -g
```

```bash
npm i pm2-windows-service -g
```

```bash
npm install -g npm-check-updates
```

**Bước 2**:  
Thêm các biến môi trường ở System Environments

```bash
PM2_HOME=C:\NodeJS\npm
```

thêm vào PATH giá trị "C:\NodeJS\npm"

```bash
C:\NodeJS\npm
```

**Bước 3**:  
Di chuyển vào pm2-windows-server

```bash
cd C:\NodeJS\npm\node_modules\pm2-windows-service
```

```bash
pm2-service-install -n PM2_STARTUP_SCRIPT
```

> (PM2_STARTUP_SCRIPT có thể thay đổi tên tuỳ thích) xong nhấn ENTER

Chọn Yes và Enter cho đến khi hoàn thành

**Bước 4**:  
Chạy dự án NodeJS với PM2 và chạy

```bash
pm2 -f save
```

Khởi động lại máy và sử dụng lệnh "pm2 ls" để xem kết quả

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
