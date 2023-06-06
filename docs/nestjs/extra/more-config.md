---
title: Cấu hình nâng cao
sidebar_label: "Cấu hình nâng cao"
sidebar_position: 1
slug: /nestjs/extra/1
---

## Các cấu hình nâng cao trong file main.ts

1. Cấu hình prefix mặc định cho tất cả api

```ts
app.setGlobalPrefix("api");
```

2. Cấu hình cookie cho phép tải data qua api đến 500mb

```ts
app.use(cookieParser());
app.use(bodyParser.json({ limit: "500mb" }));
app.use(bodyParser.urlencoded({ limit: "500mb", extended: true }));
```

3. Cấu hình chống xâm nhập

```ts
app.enableCors({
  origin: process.env.CLIENT_HOST.split(", "), //Biến lưu trong file .env
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  credentials: true,
});
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
