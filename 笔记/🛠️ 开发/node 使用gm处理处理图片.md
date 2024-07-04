---
uid: 20240704153125
cdate: 2024-07-04
mdate: 2024-07-04 星期四 15:31:25
cssclasses:
  - max
comment: true
tags:
  - nodejs
---
## 安装

1. 先安装  [GraphicsMagick](http://www.graphicsmagick.org/) 和 [ImageMagick](http://www.imagemagick.org/)， Mac OS X 系统可以直接使用
```zsh
brew install imagemagick
brew install graphicsmagick
```

2. 安装 `gm`
```zsh
npm install gm
```
## 简单使用

```js
gm(`./bgs/${filePath}.jpg`)

	.resize(900, 600)
	
	.font("./11.ttf", 52)
	
	.fill("rgba(0, 0, 0, 0.2)")
	
	.drawRectangle(0, 190, 900, 370)
	
	.fill("#fff")
	
	.drawText(190, 260, "『十二星座每日运势』")
	
	.fontSize(44)
	
	.drawText(338, 320, filePath)
	
	.write(`./${filePath}/q.jpg`, function (err) {
	
		if (!err) {
		
		console.log("done");
		
		} else {
		
		console.log(err.message || "出错了！");
		
	}
});
```

- resize 缩放
- drawText 绘制文本
- drawRectangle 绘制矩形块
- write 输出图片