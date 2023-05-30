---
title: Maria Database
sidebar_label: "Maria Database"
sidebar_position: 2
slug: /nestjs/basic/maria-db
---

### Cài đặt gói thư viện

```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

Cấu hình module trong file `app.module.ts`

```ts
TypeOrmModule.forRoot({
      type: 'mariadb',
      host: GLOBAL.G_DB_HOST,
      port: GLOBAL.G_DB_PORT,
      username: GLOBAL.G_DB_USERNAME,
      password: GLOBAL.G_DB_PASSWORD,
      database: GLOBAL.G_DB_NAME,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      extra: {
        trustServerCertificate: true,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
```

### Entity

```ts
@Entity({ name: "camera", database: GLOBAL.G_DB_NAME })
export class CameraEntity extends Parrent {
  @Column({ type: "nvarchar", length: 255 })
  Name: string;

  @Column({ type: "nvarchar", length: 255 })
  RTSP: string;

  @ManyToOne(() => ParkingEntity, (parking) => parking.ID)
  @JoinColumn({ name: "ParkingId" })
  ParkingId: ParkingEntity;

  @Column({
    type: "text",
    charset: "utf8mb4",
    collation: "utf8mb4_unicode_ci",
    nullable: true,
  })
  Description: string;
}
```

Chú ý:

- Viết thường tất cả tên bảng. `synchronize: true` sẽ gây lỗi nếu viết hoa tên bảng

### Truy vấn

```ts
//Dùng các phương thức do typeorm hỗ trợ để thao tác với CSDL
this.cameraRepository.find()
this.cameraRepository.findOne()
this.cameraRepository.save()
this.cameraRepository.delete()
this.cameraRepository.softDelete()
[...]
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
