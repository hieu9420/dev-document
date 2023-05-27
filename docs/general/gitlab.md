---
title: Cấu hình gitlab
sidebar_label: "Cấu hình gitlab"
sidebar_position: 7
slug: /general/gitlab
---

## Hướng dẫn cập nhật remote url

Vào thư mục source code

```bash
git remote set-url origin git@repo.oryza.vn:oryza/<group>/<project>.git
```

## Hướng dẫn thêm ssh-key vào user settings

Để có thể pull / push / clone code qua ssh, bạn cần thêm ssh-key vào settings của user, các bước thực hiện như sau

Trường hợp 1: Nếu đã có ssh-key trên máy tính

- Kiểm tra ssh-key bằng cách:
- Mở cmd hoặc powershell (Windows)
- Mở terminal (Linux)
- Nhập command

```bash
cat ~/.ssh/id_rsa.pub # Linux
ls C:\Users\username\.ssh\id_rsa.pub
```

- Nếu file tồn tại, copy nội dung của file đó
- Vào https://repo.oryza.vn/-/profile/keys
- Nhập nội dung file vào ô SSH Fingerprints / Key
- Nhấn vào Add Key

Trường hợp 2: Nếu chưa có ssh-key trên máy tính, thực hiện command add ssh key ssh-keygen

Trên window

- Nếu bạn chưa cài OpenSSH client for Windows, tải và cài [tại đây](https://github.com/PowerShell/Win32-OpenSSH/releases)

Ở linux, git được tích hợp sẵn

- Sau đó, mở terminal (Linux) hoặc Powershell, Command Prompt (Windows), nhập lệnh sau:

```bash
ssh-keygen
```

- Nhấn enter hết khi được yêu cầu input (lấy giá trị mặc định)
- Sau khi tạo xong ssh-key, bạn tiến hành các bước như **Trường hợp 1**

## Hướng dẫn clone repo

Sử dụng ssh để clone repo, không dùng https
Yêu cầu: Cần cấu hình ssh-key trước ở Hướng dẫn 2 để có thể clone project thông qua ssh

```bash
git clone git@repo.oryza.vn:oryza/erp/oteam-frontend.git
```

<div class="text-right">

_Author: **Thiều Quang Vinh**_

</div>
