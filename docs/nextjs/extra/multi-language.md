---
title: Cấu hình đa ngôn ngữ với i18n
sidebar_label: "Đa ngôn ngữ"
sidebar_position: 1
slug: /nextjs/extra/multi-language
---

Thêm đoạn sau vào cấu hình next.config.js

```ts
i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['vi', 'en', 'km', 'ru', 'lo', 'th'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. /hello
    defaultLocale: 'vi',
    localeDetection: false,
},
```

Tạo thư mục lưu trữ data translate và tạo tiếp 1 file `language.ts` để lưu trữ

```ts
type languageOptions = {
  [locate: string]: {
    [term: string]: string;
  };
};

export const languageDirectory: languageOptions = {
  vi: {
    male: "Nam",
    female: "Nữ",
  },
  en: {
    male: "Male",
    female: "Female",
  },
};
```

Tạo custom hook để thông dịch

```ts
import { languageDirectory } from "@/translate/languages";
import { useRouter } from "next/router";

export const useTranslation = () => {
  const { locales = [], defaultLocale, ...nextRouter } = useRouter();
  const locale = locales.includes(nextRouter.locale || "")
    ? nextRouter.locale
    : defaultLocale;
  const localeDetect = locale == undefined ? "vi" : locale;
  return {
    translate: (term: string) => {
      const translation = languageDirectory[localeDetect][term];
      return Boolean(translation) ? translation : term;
    },
  };
};
```

Dùng router và Link để chuyển đổi ngôn ngữ

```ts
<Link href={"/en" + router.asPath} passHref locale="en"></Link>
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
