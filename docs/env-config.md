---
title: Cài đặt môi trường
sidebar_label: "Cài đặt môi trường"
sidebar_position: 2
slug: /env-congif
---

Các công cụ, phần mềm dùng chung cho tất cả dự án mà bạn nên cài:

- SSMS: Thao tác với cơ sở dữ liệu. Tải về [tại đây][ssms]
- Git: Tải về [tại đây][git]
- Source Tree: công cụ quản lý mã nguồn. Tải về [tại đây][source tree]

## ERP

Bước 1: cài đặt `NodeJs` tại [https://nodejs.org/en](https://nodejs.org/en).

- Chú ý: Tích chọn tự động cài các phụ thuộc
- Ưu tiên cài đặt bản `LTS`
- Có thể chọn các bản từ 16x

Bước 2: Cài đặt `Visual Code` tại [https://code.visualstudio.com/download](https://code.visualstudio.com/download).

Bước 3: Cài các extentions cần thiết cho việc code

- JavaScript (ES6) code snippets, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets)
- Material Icon Theme, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- Path Intellisense, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- Prettier - Code formatter, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Simple React Snippets, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- Typescript React code snippets, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)
- GitLens — Git supercharged, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- Color Picker, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=anseki.vscode-color)
- CodeSnap, link [Tại đây](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)

Bước 4: Cấu hình `Visual code`

- Truy cập cấu hình VS Code bằng tổ hợp phím `Cltr ,`
- Cấu hình `Editor: Format On Save` thành true
- Cấu hình `Editor: Default Formatter`: Chọn Prettier

## IoT

- UI: QT design 5, Python, database: SQL Lite 3
- Trình soạn thảo đề xuất: Pycharm. Tải về [tại đây][pycharm]
- Python. Tải về [tại đây][python]
- DB Browser for SQLite. Tải về [tại đây][sqlite]

## Mobile

- Frontend: Flutter, backend: Nestjs, Database: SQL Lite, MS SQL
- Trình soạn thảo đề xuất: Visual Studio Code.

## Khắc phục lỗi Policy trên visual code

Mở Powershell với quyền admin

```bash title="Chạy lệnh,  chọn yes to all"
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

```bash title="Nếu báo lỗi thì chạy thử câu sau, chọn yes to all"
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>

[ssms]: https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16
[git]: https://git-scm.com/
[source tree]: https://www.sourcetreeapp.com/
[pycharm]: https://www.jetbrains.com/pycharm/download/#section=windows
[python]: https://www.python.org/downloads/
[sqlite]: https://sqlitebrowser.org/dl/
