---
uid: 20240626140804
cdate: 2024-06-26
mdate: 2024-06-26 星期三 14:08:04
cssclasses:
  - max
comment: true
tags:
  - 爬虫
  - puppeteer
---
```js
const puppeteer = require("puppeteer");

const fs = require("fs");

const run = async () => {

	const proxy = "http://127.0.0.1:8118";
	
	
	const browser = await puppeteer.launch({
	
		headless: false,
		
		devtools: true,
		
		args: [
		
			`--proxy-server=${proxy}`,
			
			"--ignore-certificate-errors",
			
			"--disable-web-security",
			"--disable-features=IsolateOrigins,site-per-process",
			
			"--user-agent=zhuluTest Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.175 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
		
		],
	
	});
	
	const page = await browser.newPage();
	
	console.time("start");
	
	await page.goto("https://www.dchliving.com/tc");
	
	await page.waitForSelector("footer");
	
	console.timeEnd("start");
	
	// 截取整个页面的屏幕截图
	
	await page.screenshot({ path: "screenshot.png" });
	
	// 获取页面的HTML内容
	const html = await page.content();
	
	// 将HTML内容写入文件
	
	await fs.writeFileSync("page.html", html);
	browser.close()

};

  

run();
```
