---
title: Server file
sidebar_label: "Server file"
sidebar_position: 3
slug: /nestjs/basic/server-file
---

Tạo server file cho các ứng dụng front-end truy cập, tải lên tài nguyên là các hình ảnh, file từ backend nestjs

### Cấu trúc dự án

Tạo thư mục tên `uploads` ngang cấp với `src`

```ts
my-project-name
.dist
├──src
    [...]
├──uploads //Nơi lưu trữ các tệp tải lên của người dùng
[...]
```

### Cài đặt thư viện

```bash
npm install --save @nestjs/serve-static
```

### Cấu hình

Khai báo module trong module gốc `app.module.ts`

```ts
ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/',
}),
```

Trường hợp nếu có nhiều hơn 1 folder lưu file cùng cấp:

```ts
ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'uploads'),
    serveRoot: '/',
}),
ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'images'),
    serveRoot: '/images',
}),
```

> File trong folder `uploads` sẽ được truy cập trực tiếp qua đường dẫn localhosst:port/filename.file_ext  
> File trong folder `images` sẽ được truy cập trực tiếp qua đường dẫn localhosst:port/images/filename.file_ext

### Api

1. Controler

```ts
@UseGuards(JwtAuthGuard)
@ApiTags('File Upload Api')
@Post()
@UseInterceptors(
    FilesInterceptor('files', 20, {
        storage: diskStorage({
            destination: (req, file, cb) => {
                cb(null, getDirPathUpload(req.user));
            },
            filename: (req, file, cb) => {
                cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
            },
        }),
    })
)
async uploadMultipleFiles(@UploadedFiles() files, @Request() req) {
    const jwtPayload: JWTPayload = req.user;
    return this.fileUploadService.uploadFiles(files, jwtPayload);
}
```

2. Service lưu file

```ts
async uploadFiles(files: any) {
    const response = [];
    files.forEach((file) => {
        const fileReponse = {
        originalname: file.originalname,
        filename: file.filename,
        path: getDatePath() + '/' + file.filename,
        size: file.size,
        };
        response.push(fileReponse);
    });
    return response;
}
```

3. Service xóa file

```ts
async deleteFileFromFilePath(fullPath: string) {
    await fs.unlink(`uploads/${fullPath}`, (err) => {
        if (err) {
        return err;
        }
    });
}
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
