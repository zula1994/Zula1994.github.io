---
uid: 20240703152936
cdate: 2024-07-03
mdate: 2024-07-03 星期三 15:29:35
cssclasses:
  - max
comment: true
tags:
  - nodejs
---

## 安装
```zsh
yarn add node-html-to-image
```

## 使用

### 简单使用

```js

nodeHtmlToImage({

output: './image_.png',

html: '<html><body>Hello world!</body></html>'

})

.then((dataUrl) => {

console.log("Image saved!");

})

.catch((error) => {

console.error("Error:", error);

});
```
