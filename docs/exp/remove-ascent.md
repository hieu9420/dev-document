---
title: Tìm kiếm gần đúng
sidebar_label: "Tìm kiếm gần đúng"
sidebar_position: 2
slug: /exp/remove-ascent
---

```ts title="Hàm"
export const removeVietnameseAccent = (str: string) => {
  if (!str) return str;
  // Các ký tự tiếng Việt có dấu
  var from =
    "àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ";
  // Các ký tự tiếng Việt không dấu tương ứng
  var to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyy";
  // Thực hiện việc thay thế ký tự có dấu bằng ký tự không dấu
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }
  return str.toLowerCase();
};
```

```ts title="Sử dụng"
const stringWithoutAccent = removeVietnameseAccent(searchKey);
const result = Array.filter((f: any) =>
  removeVietnameseAccent(f.Name).includes(stringWithoutAccent)
);
```

<div class="text-right">

_Author: **Lê Thành Hiếu**_

</div>
