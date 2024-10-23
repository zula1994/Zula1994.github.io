---
uid: 20241023100117
cdate: 2024-10-23
mdate: 2024-10-23 星期三 10:01:17
cssclasses:
  - max
comment: true
tags:
  - 前端/ios
---
react-native中打开whatsApp


 在 iOS 9 及以上版本中，为了确保安全性，你需要在 Info.plist 文件中添加白名单，允许你的应用程序调用指定的 URL scheme。在 Info.plist 文件中添加以下键值对：

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
	<string>whatsapp</string>
</array>
```

```ts
const supported = await Linking.canOpenURL(url);

console.log('supported', supported);

if (supported) {

 await Linking.openURL(url);

}
```