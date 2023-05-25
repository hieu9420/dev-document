---
title: Cấu hình đường dẫn tương đối với ts config
sidebar_label: "Cấu hình đường dẫn tương đối"
sidebar_position: 2
slug: /nextjs/extra/path-config
---

Thêm đoạn code sau vào **compilerOptions** trong file `tsconfig.json`

```ts
{
  "compilerOptions": {
    //[...]
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./components/*"],
      "@/styles/*": ["./styles/*"],
      "@/mocks/*": ["./mocks/*"],
      "@/hooks/*": ["./hooks/*"],
      "@/utils/*": ["./utils/*"],
      "@/models/*": ["./models/*"],
      "@/api/*": ["./api-client/*"],
      "@/images/*": ["./images/*"],
      "@/constants/*": ["./constants/*"],
      "@/translate/*": ["./translate/*"],
      "@/redux/*": ["./store/*"],
    }
  },
  //[...]
}
```

Sử dụng

```ts
import { CodeComp, MainLayout } from "@/components/common";
```
