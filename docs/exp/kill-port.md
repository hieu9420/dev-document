---
title: Kill port
sidebar_label: "Kill port"
sidebar_position: 5
slug: /exp/kill-port
---

Giả sử chương trình bạn đang chạy trên port 3000 bị lỗi và buộc phải đóng không đúng cách dẫn đến port 3000 bị chiếm dụng. Làm sao để giải phóng port này mà không phải dùng hạ sách restart máy?

```bash title="Tìm số PID mà port đang treo"
netstat -ano | findstr :<PORT>
```

```bash title="kill port đang chiếm dụng thông qua PID"
taskkill /PID <PID> /F
```
