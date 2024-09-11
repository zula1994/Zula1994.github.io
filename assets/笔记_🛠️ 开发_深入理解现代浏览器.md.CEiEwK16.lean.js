import{_ as l,a as d,I as p,b as t,f as e,w as o,aw as n,E as a,o as f}from"./chunks/framework.Z4-7JWeT.js";const kt=JSON.parse('{"title":"","description":"","frontmatter":{"uid":20240911135625,"cdate":"2024-09-11T00:00:00.000Z","mdate":"2024-09-11 星期三 13:56:25","cssclasses":["max"],"comment":true,"tags":["前端/浏览器"]},"headers":[],"relativePath":"笔记/🛠️ 开发/深入理解现代浏览器.md","filePath":"笔记/🛠️ 开发/深入理解现代浏览器.md"}'),h={name:"笔记/🛠️ 开发/深入理解现代浏览器.md"},u=n("",13),b=n("",10),m=t("strong",null,"读取响应",-1),_=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/90023baacfc642489c9b48eff31edf89~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),k=t("p",null,"如果响应是 HTML 文件，那下一步就是把数据交给渲染器进程。但如果是一个 zip 文件或其他文件，那就意味着是一个下载请求，需要把数据传给下载管理器。",-1),g=n("",11),v=t("code",null,"unload",-1),j=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6886e782d1394d25944f03b07283114e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),A=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f90757305f74f4ca96317bb7b74cd1c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),F=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61956ade7a2a4af59f23b8ce1cf1b6c8~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),C=t("h2",{id:"渲染",tabindex:"-1"},[e("渲染 "),t("a",{class:"header-anchor",href:"#渲染","aria-label":'Permalink to "渲染"'},"​")],-1),S=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/acb60d1b5257454999e8f12235a92ae7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),y=t("p",null,"渲染器进程的核心任务是把 HTML、CSS 和 JavaScript 转换成用户可以交互的网页接下来，我们从整体上过一遍渲染器进程处理 Web 内容的各个阶段。",-1),w=t("h3",{id:"解析-html",tabindex:"-1"},[e("解析 HTML "),t("a",{class:"header-anchor",href:"#解析-html","aria-label":'Permalink to "解析 HTML"'},"​")],-1),T=t("p",null,[t("strong",null,"构建 DOM"),e("。渲染器进程收到导航的提交消息后，开始接收 HTML，其主线程开始解析文本字符串（HTML），并将它转换为 DOM（Document Object Model，文档对象模型）。")],-1),P=t("p",null,"DOM 是浏览器内部对页面的表示，也是 JavaScript 与之交互的数据结构和 API。",-1),R=t("p",null,[t("strong",null,"加载子资源"),e("。网站都会用到图片、CSS 和 JavaScript 等外部资源。浏览器需要从缓存或网络加载这些文件。主线程可以在解析并构建 DOM 的过程中发现一个加载一个，但这样效率太低。为此，Chrome 会在解析同时并发运行 “预加载扫描器”，当发现 HTML 文档中有"),t("code",null,"<img>"),e("或"),t("code",null,"<link>"),e("时，预加载扫描器会将请求提交给浏览器进程中的网络线程。")],-1),I=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a9ff90a080e2428c83ad3158f96e1deb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),L=t("strong",null,"JavaScript 可能阻塞解析",-1),z=t("code",null,"<script>",-1),M=t("code",null,"document.write()",-1),J=t("p",null,[t("strong",null,"提示浏览器你要加载资源")],-1),D=t("code",null,"document.write()",-1),U=t("code",null,"<script>",-1),H=t("code",null,"async",-1),x=t("code",null,"defer",-1),B=t("code",null,'<link rel="preload">',-1),V=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ef66aaa12d0453eb7c134b452f137ac~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),E=t("h3",{id:"计算样式",tabindex:"-1"},[e("计算样式 "),t("a",{class:"header-anchor",href:"#计算样式","aria-label":'Permalink to "计算样式"'},"​")],-1),q=t("p",null,"光有 DOM 还不行，因为并不知道页面应该长啥样。所以接下来，主线程要解析 CSS 并计算每个 DOM 节点的样式。这个过程就是根据 CSS 选择符，确定每个元素要应用什么样式。在 Chrome 开发工具 “计算的样式”（computed）中可以看每个元素计算后的样式。",-1),N=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e71796de6c37427483261e80e3f473ed~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),O=n("",5),G=n("",11),W=t("code",null,"requestAnimationFrame()",-1),X=t("h3",{id:"合成",tabindex:"-1"},[e("合成 "),t("a",{class:"header-anchor",href:"#合成","aria-label":'Permalink to "合成"'},"​")],-1),Z=t("p",null,"知道了文档结构、每个元素的样式、页面的几何关系，以及绘制顺序，接下来就该绘制页面了。具体该怎么绘制呢？把上述信息转换为屏幕上的像素叫做栅格化。",-1),$=t("p",null,"最简单的方式，可能就是把页面在当前视口中的部分先转换为像素。然后随着用户滚动页面，再移动栅格化的画框（frame），填补缺失的部分。Chrome 最早的版本就是这样干的。",-1),Y=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6e4077aafe274db4878e7b14d5f40afd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),K=t("p",null,"但现代浏览器会使用一个更高级的步骤叫合成。什么是合成？合成（composite）是将页面不同部分先分层并分别栅格化，然后再通过独立的合成器线程合成页面。这样当用户滚动页面时，因为层都已经栅格化，所以浏览器唯一要做的就是合成一个新的帧。而动画也可以用同样的方式实现：先移动层，再合成帧。",-1),Q=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91a5edd87d6b420ca0c599a33d50e437~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),tt=t("code",null,"will-change",-1),et=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ecac28295ea34b03966c9dbefbce3deb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),pt=t("p",null,"创建了分层树，确定了绘制顺序，主线程就会把这些信息提交给合成器线程。合成器线程接下来负责将每一层转换为像素——栅格化。一层有可能跟页面一样大，此时合成器线程会将它切成小片（tile），再把每一片发给栅格化线程。栅格化线程将每一小片转换为像素后将它们保存在 GPU 的内存中。",-1),ct=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9840f6c78f984622a096f22b6c3f4d83~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),ot=t("p",null,"合成器线程会安排栅格化线程优先转换视口（及附近）的小片。而构成一层的小片也会转换为不同分辨率的版本，以便在用户缩放时使用。",-1),nt=t("p",null,"所有小片都栅格化以后，合成器线程会收集叫做 “绘制方块”（draw quad）的小片信息，以创建合成器帧。",-1),at=t("ul",null,[t("li",null,"绘制方块：包含小片的内存地址、页面位置等合成页面相关的信息"),t("li",null,"合成器帧：由从多绘制方块拼成的页面中的一帧")],-1),it=t("p",null,"创建好的合成器帧会通过 IPC 提交给浏览器进程。与此同时，为更新浏览器界面，UI 线程可能还会添加另一个合成器帧；或者因为有扩展，其他渲染器进程也可能添加额外的合成器帧。所有这些合成器帧都会发送给 GPU，以便最终显示在屏幕上。如果发生滚动事件，合成器线程会再创建新的合成器帧并发送给 GPU。",-1),rt=t("p",null,[t("img",{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4225e5037c04c8388f4cbc74efa0e07~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp",alt:""})],-1),st=n("",33);function lt(dt,ft,ht,ut,bt,mt){const i=a("NolebasePageProperties"),c=a("VPNolebaseInlineLinkPreview"),r=a("NolebaseGitContributors"),s=a("NolebaseGitChangelog");return f(),d("div",null,[p(i),u,t("p",null,[e("重点说一说站点隔离（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FRgNAwLC",title:"http://t.cn/RgNAwLC",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/RgNAwLC")]),_:1}),e("）。站点隔离是新近引入 Chrome 的一个里程碑式特性，即每个跨站点 iframe 都运行一个独立的渲染器进程。即便像前面说的那样，每个标签页单开一个渲染器进程，但允许跨站点的 iframe 运行在同一个渲染器进程中并共享内存空间，那安全攻击仍然有可能绕开同源策略（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2F8s1ySzx",title:"http://t.cn/8s1ySzx",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/8s1ySzx")]),_:1}),e("），而且有人发现在现代 CPU 中，进程有可能读取任意内存（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FR8FwHoX",title:"http://t.cn/R8FwHoX",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/R8FwHoX")]),_:1}),e("）。")]),b,t("p",null,[e("第三步："),m,e("。服务器返回的响应体到来之后，网络线程会检查接收到的前几个字节。响应的 Content-Type 头部应该包含数据类型，如果没有这个字段，则需要 MIME 类型嗅探（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FRt2gG2J",title:"http://t.cn/Rt2gG2J",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Rt2gG2J")]),_:1}),e("）。看看 Chrome 源码（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9cZI7D",title:"http://t.cn/Ai9cZI7D",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9cZI7D")]),_:1}),e("）中的注释就知道这一块有多难搞。")]),_,k,t("p",null,[e("此时也是 “安全浏览”（"),p(c,{href:"https://link.juejin.cn?target=https%3A%2F%2Fsafebrowsing.google.com%2F",title:"https://safebrowsing.google.com/",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("safebrowsing.google.com/")]),_:1}),e("）检查的环节。如果域名和响应数据匹配已知的恶意网站，网络线程会显示警告页。此外，CORB（Cross Origin Read Blocking，"),p(c,{href:"https://link.juejin.cn?target=https%3A%2F%2Fwww.chromium.org%2FHome%2Fchromium-security%2Fcorb-for-developers",title:"https://www.chromium.org/Home/chromium-security/corb-for-developers",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("www.chromium.org/Home/chromi…")]),_:1}),e("）检查也会执行，以确保敏感的跨站点数据不会发送给渲染器进程。")]),g,t("p",null,[e("导航到不同的网站时，会有一个新的独立渲染器进程负责处理新导航，而老的渲染器进程要负责处理"),v,e("之类的事件。更多细节，可以参考 “页面生命周期 API”："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FRey7RIE",title:"http://t.cn/Rey7RIE",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Rey7RIE")]),_:1}),e("。")]),j,t("p",null,[e("另外，导航阶段还可能涉及 Service Worker，即网页应用中的网络代理服务（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FR3SH3HL",title:"http://t.cn/R3SH3HL",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/R3SH3HL")]),_:1}),e("），开发者可以通过它控制什么缓存在本地，何时从网络获取新数据。Service Worker 说到底也是需要渲染器进程运行的 JavaScript 代码。如果网站注册了 Server Worker，那么导航请求到来时，网络线程会根据 URL 将其匹配出来，此时 UI 线程就会联系一个渲染器进程来执行 Service Worker 的代码：可能只要从本地缓存读取数据，也可能需要发送网络请求。")]),A,t("p",null,[e("如果 Service Worker 最终决定从网络请求数据，浏览器进程与渲染器进程间的这种往返通信会导致延迟。因此，这里会有一个 “导航预加载” 的优化（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9qGJ66",title:"http://t.cn/Ai9qGJ66",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9qGJ66")]),_:1}),e("），即在 Service Worker 启动同时预先加载资源，加载请求通过 HTTP 头部与服务器沟通，服务器决定是否完全更新内容。")]),F,C,t("p",null,[e("渲染是渲染器进程内部的工作，涉及 Web 性能的诸多方面（详细内容可以参考这里 "),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9c4nUu",title:"http://t.cn/Ai9c4nUu",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9c4nUu")]),_:1}),e("）。标签页中的一切都由渲染器进程负责处理，其中主线程负责运行大多数客户端 JavaScript 代码，少量代码可能会由工作线程处理（如果用到了 Web Worker 或 Service Worker）。合成器（compositor）线程和栅格化（raster）线程负责高效、平滑地渲染页面。")]),S,y,w,T,P,t("p",null,[e("如何将 HTML 解析为 DOM 由 HTML 标准（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FR2NREUt",title:"http://t.cn/R2NREUt",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/R2NREUt")]),_:1}),e("）定义。HTML 标准要求浏览器兼容错误的 HTML 写法，因此浏览器会 “忍气吞声”，绝不报错。详情可以看看 “解析器错误处理及怪异情形简介”（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9c8i5D",title:"http://t.cn/Ai9c8i5D",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9c8i5D")]),_:1}),e("）。")]),R,I,t("p",null,[L,e("。如果 HTML 解析器碰到"),z,e("标签，会暂停解析 HTML 文档并加载、解析和执行 JavaScript 代码。因为 JavaScript 有可能通过"),M,e("修改文档，进而改变 DOM 结构（HTML 标准的 “解析模型” 有一张图可以一目了然："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9cupLc",title:"http://t.cn/Ai9cupLc",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9cupLc")]),_:1}),e("）。所以 HTML 解析器必须停下来执行 JavaScript，然后再恢复解析 HTML。至于执行 JavaScript 的细节，大家可以关注 V8 团队相关的分享："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FRB9qP51",title:"http://t.cn/RB9qP51",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/RB9qP51")]),_:1}),e("。")]),t("blockquote",null,[J,t("p",null,[e("为了更好地加载资源，可以通过很多方式告诉浏览器。如果 JavaScript 没有用到"),D,e("，可以在"),U,e("标签上添加"),H,e("或"),x,e("属性。这样浏览器就会异步运行 JavaScript 代码，不会阻塞解析。合适的话，可以考虑使用 JavaScript 模块（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FRDXCctZ",title:"http://t.cn/RDXCctZ",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/RDXCctZ")]),_:1}),e("）。再比如，"),B,e("告诉浏览器该资源对于当前导航绝对必要，应该尽快下载。关于资源加载优先级，可以参考这里："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FEVlIx31",title:"http://t.cn/EVlIx31",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/EVlIx31")]),_:1}),e("。")]),V]),E,q,N,t("p",null,[e("就算网页没有提供任何 CSS，每个 DOM 节点仍然会有计算的样式。这是因为浏览器有一个默认的样式表，Chrome 默认的样式在这里："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9VALCy",title:"http://t.cn/Ai9VALCy",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9VALCy")]),_:1}),e("。")]),O,t("p",null,[e("确定页面的布局要考虑很多很多因素，并不简单。比如，字体大小、文本换行都会影响段落的形状，进而影响后续段落的布局。CSS 可让元素浮动到一边、隐藏溢出边界的内容、改变文本显示方向。可想而知，布局阶段的任务是非常艰巨的。Chrome 有一个工程师团队专司布局，感兴起的话，可以看看他们这个分享："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9VcjFn",title:"http://t.cn/Ai9VcjFn",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9VcjFn")]),_:1}),e("（在 YouTube 上）。")]),G,t("p",null,[e("此时，可以使用"),W,e("将涉及动画的 JavaScript 操作分块并调度到每一帧的开始去运行。对于耗时的不必操作 DOM 的 JavaScript 操作，可以考虑 Web Worker（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9VBqs9",title:"http://t.cn/Ai9VBqs9",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9VBqs9")]),_:1}),e("），避免阻塞主线程。")]),X,Z,$,Y,K,Q,t("p",null,[e("怎么分层？为了确定哪个元素应该在哪一层，主线程会遍历布局树并创建分层树（这一部分在开发工具的 “性能” 面板中叫“Update Layer Tree”）。如果页面某些部分应该独立一层（如滑入的菜单）但却没有，那你可以在 CSS 中给它加上"),tt,e("属性（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FR7IJCx2",title:"http://t.cn/R7IJCx2",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/R7IJCx2")]),_:1}),e("）来提醒浏览器。")]),et,t("p",null,[e("分层并不是越多越好，合成过多的层有可能还不如每帧都对页面中的一小部分执行一次栅格化更快。关于这里边的权衡，可以参考："),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9fiJiM",title:"http://t.cn/Ai9fiJiM",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9fiJiM")]),_:1}),e("。")]),pt,ct,ot,nt,at,it,rt,t("p",null,[e("使用合成的好处是不用牵扯主线程。合成器线程不用等待样式计算或 JavaScript 执行。这也是为什么 “只需合成的动画”（"),p(c,{href:"https://link.juejin.cn?target=http%3A%2F%2Ft.cn%2FAi9fO8OW",title:"http://t.cn/Ai9fO8OW",target:"_blank",rel:"noreferrer"},{default:o(()=>[e("t.cn/Ai9fO8OW")]),_:1}),e("）被认为性能最佳的原因。因为如果布局和绘制需要再次计算，那还得用到主线程。")]),st,p(r),p(s)])}const gt=l(h,[["render",lt]]);export{kt as __pageData,gt as default};
