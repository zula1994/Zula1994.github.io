---
uid: 20240627170114
cdate: 2024-06-27
mdate: 2024-06-27 星期四 17:01:13
cssclasses:
  - max
comment: true
tags:
  - 工具
  - nodejs
---

## 使用ffmpeg将视频转换为GIF文件

```js
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const ffmpeg = require("fluent-ffmpeg");

  

const video2Gif = async (videoPath, gifPath, width, fps) => {

ffmpeg.setFfmpegPath(ffmpegPath); // 设置二进制客户端路径

ffmpeg(videoPath) // 读入路径

.outputOptions("-pix_fmt", "rgb24") // 设置像素格式为rgb24

.output(gifPath) // 输出路径

.withFPS(fps) // 设置输出GIF的帧率

.size(`${width}x?`) // 设置输出GIF的宽度，高度等比缩放

.noAudio() // 禁用音频输出

.on("end", () => {

console.log("转换完成！");

})

.on("error", (err) => console.error(err))

.run();

};

video2Gif("2.mov", "2.gif", 300, 10);
```

## 关于outputOptions

`.outputOptions()`方法可以传入多个参数，用于设置输出的参数和选项。下面我列出一些常用的参数和选项：

- `-ss`：指定开始时间，例如：`.outputOptions('-ss', '00:00:10')`表示从视频的第10秒开始转换。
- `-t`：指定转换的持续时间，例如：`.outputOptions('-t', '00:00:05')`表示转换视频的前5秒。
- `-r`：指定输出的帧率，例如：`.outputOptions('-r', '30')`表示输出GIF文件的帧率为30帧/秒。
- `-loop`：指定循环次数，例如：`.outputOptions('-loop', '0')`表示无限循环。
- `-vf`：指定视频过滤器，例如：`.outputOptions('-vf', 'scale=640:-1')`表示将视频缩放为宽度为640像素，高度按比例自动计算。
- `-preset`：指定输出的质量预设，例如：`.outputOptions('-preset', 'slow')`表示使用慢速编码器来获得更好的输出质量。
- `-crf`：指定视频的压缩比，例如：`.outputOptions('-crf', '23')`表示压缩比为23，数值越小表示质量越好但文件越大。

  