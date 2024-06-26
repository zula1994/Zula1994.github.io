---
uid: 20240625113228
cdate: 2024-06-25
mdate: 2024-06-25 星期二 11:32:28
cssclasses:
  - max
tags: seo
---
## 简介
`noindex` 是一个包含 `<meta>` 标记或 HTTP 响应标头的规则集，用于防止支持 `noindex` 规则的搜索引擎（例如 Google）将内容编入索引。当 Googlebot 抓取该网页并发现该标记或标头时，Google 就会完全阻止该网页出现在 Google 搜索结果中，不论是否有其他网站链接到该网页。
>[!warning]
>**重要提示**：为让 `noindex` 规则生效，网页或资源**不得**被 robots.txt 文件屏蔽，并且必须能被抓取工具访问。如果该网页被 robots.txt 文件屏蔽或抓取工具无法访问该网页，那么抓取工具将永远无法看到 `noindex` 规则，因此该网页可能仍会显示在搜索结果中，例如，如果有其他网页链接到该网页。

## 实施 `noindex`

实施 `noindex` 的方法有两种：将其作为 `<meta>` 标记实施，或作为 HTTP 响应标头实施。这两种方法的效果相同，从中选择更方便您网站采用并且更适合相应内容类型的那一种方法即可。Google 不支持在 robots.txt 文件中指定 `noindex` 规则。

您还可以将 `noindex` 规则与其他控制索引的规则结合使用。例如，您可以结合使用 `nofollow` 提示和 `noindex` 规则： `<meta name="robots" content="**noindex, nofollow**" />`。

### `<meta>` 标记

为防止支持 `noindex` 规则的所有搜索引擎将您网站上的某个网页编入索引，并将以下 `<meta>` 标记添加到网页的 `<head>` 部分：

```html
<meta name="**robots**" content="noindex">
```

若想仅阻止 Google 网页抓取工具将网页编入索引，请使用以下元标记：

```html
<meta name="**googlebot**" content="noindex">
```


请注意，某些搜索引擎对 `noindex` 规则可能会有不同的解读。因此，您的网页可能仍会出现在其他搜索引擎的结果中。

### HTTP 响应标头

您可以在响应中返回值为 `noindex` 或 `none` 的 `X-Robots-Tag` HTTP 标头，而不是 `<meta>` 标记。 响应标头可用于非 HTML 资源，例如 PDF、视频文件和图片文件。下面是一个 HTTP 响应示例，它含有一个 `X-Robots-Tag` 标头，用来指示搜索引擎不要将某一网页编入索引：

```
HTTP/1.1 200 OK
(...)
**X-Robots-Tag: noindex**
(...)
```
