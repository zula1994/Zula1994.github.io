---
uid: 20240625101121
cdate: 2024-06-25
mdate: 2024-06-25 星期二 10:11:19
cssclasses:
    - max
comment: true
tags:
    - seo
---
## 简介
robots. txt 文件规定了搜索引擎抓取工具可以访问您网站上的哪些网址

## robots. txt 文件的限制
- 并非所有搜索引擎都支持 robots. txt 规则。
- 不同的抓取工具会以不同的方式解析语法。
- 如果其他网站上有链接指向被 robots. txt 文件屏蔽的网页，则此网页仍可能会被编入索引。
>[!note]
 要正确阻止您的网址出现在 Google 搜索结果中，您应[为服务器上的文件设置密码保护](https://developers.google.com/search/docs/crawling-indexing/control-what-you-share?hl=zh-cn)、[使用 `noindex` `meta` 标记或响应标头](https://developers.google.com/search/docs/crawling-indexing/block-indexing?hl=zh-cn)，或者彻底移除网页

## robots. txt**格式和位置规则**：
### 位置
- 文件必须命名为 robots. txt。
- 网站只能有 1 个 robots. txt 文件。
- robots. txt 文件必须位于其要应用到的网站主机的根目录下。
- robots. txt 文件必须是采用 UTF-8 编码（包括 ASCII）的文本文件。

### 格式
- `user-agent:` 【必需，每个组需含一个或多个 User-agent 条目 】 该规则指定了规则适用的自动客户端（即搜索引擎抓取工具）的名称。
- `disallow:` 【每条规则需含至少一个或多个 `disallow` 或 `allow` 条目】 您不希望用户代理抓取的目录或网页（相对于根网域而言）。
- `allow:` 【每条规则需含至少一个或多个 `disallow` 或 `allow` 条目】上文中提到的用户代理可以抓取的目录或网页（相对于根网域而言）。
- `sitemap:` 【可选，每个文件可含零个或多个 sitemap 条目】相应网站的站点地图的位置。**站点地图网址必须是完全限定的网址；**

```xml
# Example 1: Block only Googlebot
User-agent: Googlebot
Disallow: /

# Example 2: Block Googlebot and Adsbot
User-agent: Googlebot
User-agent: AdsBot-Google
Disallow: /

# Example 3: Block all crawlers except AdsBot (AdsBot crawlers must be named explicitly)
User-agent: *
Disallow: /

Sitemap: https://example.com/sitemap.xml
Sitemap: https://www.example.com/sitemap.xml
```

## 实用的 robots.txt 规则

| 实用规则                                     |                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 禁止抓取整个网站                                 | 请注意，在某些情况下，Google 即使未抓取网站中的网址，仍可能将其编入索引。<br><br>**注意**：这不适用于[各种 AdsBot 抓取工具](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers?hl=zh-cn)，此类抓取工具必须明确指定。<br><br>User-agent: *<br>Disallow: /                                                               |
| 禁止抓取某一目录及其内容                             | 在目录名后添加一道正斜线，即可禁止抓取整个目录。<br><br>**注意**：请勿使用 robots.txt 禁止访问私密内容；请改用正确的身份验证机制。对于 robots.txt 文件所禁止抓取的网址，Google 仍可能会在不进行抓取的情况下将其编入索引；另外，由于 robots.txt 文件可供任何人随意查看，因此可能会泄露您的私密内容的位置。<br><br>User-agent: *<br>Disallow: /calendar/<br>Disallow: /junk/<br>Disallow: /books/fiction/contemporary/ |
| 仅允许某一抓取工具访问网站内容                          | 只有 `googlebot-news` 可以抓取整个网站。<br><br>User-agent: Googlebot-news<br>Allow: /<br><br>User-agent: *<br>Disallow: /                                                                                                                                                                             |
| 允许除某一抓取工具以外的其他所有抓取工具访问网站内容               | `Unnecessarybot` 不能抓取相应网站，所有其他漫游器都可以。<br><br>User-agent: Unnecessarybot<br>Disallow: /<br><br>User-agent: *<br>Allow: /                                                                                                                                                                     |
| 禁止抓取某一网页                                 | 例如，禁止抓取位于 `https://example.com/useless_file.html` 的 `useless_file.html` 页面和 `junk` 目录中的 `other_useless_file.html`。<br><br>User-agent: *<br>Disallow: /useless_file.html<br>Disallow: /junk/other_useless_file.html                                                                          |
| 禁止抓取除子目录以外的整个网站                          | 抓取工具只能访问 `public` 子目录。<br><br>User-agent: *<br>Disallow: /<br>Allow: /public/                                                                                                                                                                                                               |
| 禁止 Google 图片访问某一特定图片                     | 例如，禁止访问 `dogs.jpg` 图片。<br><br>User-agent: Googlebot-Image<br>Disallow: /images/dogs.jpg                                                                                                                                                                                                     |
| 禁止 Google 图片访问您网站上的所有图片                  | 如果无法抓取图片和视频，则 Google 无法将其编入索引。<br><br>User-agent: Googlebot-Image<br>Disallow: /                                                                                                                                                                                                            |
| 禁止抓取某一特定文件类型的文件                          | 例如，禁止抓取所有 `.gif` 文件。<br><br>User-agent: Googlebot<br>Disallow: /*.gif$                                                                                                                                                                                                                      |
| 禁止抓取整个网站，但允许 `Mediapartners-Google` 访问内容 | 实施此规则会阻止您的网页显示在搜索结果中，但 `Mediapartners-Google` 网页抓取工具仍能分析这些网页，以确定要向访问您网站的用户显示哪些广告。<br><br>User-agent: *<br>Disallow: /<br><br>User-agent: Mediapartners-Google<br>Allow: /                                                                                                                   |
| 使用 `*` 和 `$` 通配符匹配以特定字符串结尾的网址            | 例如，禁止抓取所有 `.xls` 文件。<br><br>User-agent: Googlebot<br>Disallow: /*.xls$                                                                                                                                                                                                                      |