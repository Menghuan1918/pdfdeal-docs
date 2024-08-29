import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,c as d,b as e,d as a,w as n,e as l,a as s,o as r}from"./app-F8J3bAYb.js";const o={},c=s(`<h2 id="v0-3-1" tabindex="-1"><a class="header-anchor" href="#v0-3-1"><span>V0.3.1</span></a></h2><div class="hint-container caution"><p class="hint-container-title">警告</p><p><mark>0.3.1版本</mark>后更新输出为<code>logging</code>，默认情况下仅会输出Warning及以上等级的信息。如您希望查看处理过程，请设置<code>logging</code>等级为INFO：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">httpx_logger </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">getLogger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;httpx&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">httpx_logger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">setLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">WARNING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">basicConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">level</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="🚀-其他" tabindex="-1"><a class="header-anchor" href="#🚀-其他"><span>🚀 其他</span></a></h3><ul><li>更改包信息输出方式为<code>logging</code>模块，不会再输出一堆东西了</li></ul><h2 id="v0-3-0" tabindex="-1"><a class="header-anchor" href="#v0-3-0"><span>V0.3.0</span></a></h2><h3 id="✨-功能变动" tabindex="-1"><a class="header-anchor" href="#✨-功能变动"><span>✨ 功能变动</span></a></h3>`,6),g=s('<h3 id="🔧-bug-修复" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复"><span>🔧 BUG 修复</span></a></h3><ul><li>修正了转换状态提示的用语</li><li>修复了无法打印报错堆栈的问题</li></ul><h3 id="🚀-其他-1" tabindex="-1"><a class="header-anchor" href="#🚀-其他-1"><span>🚀 其他</span></a></h3><ul><li>文档网页改进了Linux用户的体验(字体指定更加友好)</li><li>新增与RAG应用(例如Fastgpt，Dify等)结合使用的示范</li></ul><h2 id="v0-2-5" tabindex="-1"><a class="header-anchor" href="#v0-2-5"><span>V0.2.5</span></a></h2><h3 id="✨-功能变动-1" tabindex="-1"><a class="header-anchor" href="#✨-功能变动-1"><span>✨ 功能变动</span></a></h3><ul><li>新增内置上传工具：S3</li></ul><h3 id="🔧-bug-修复-1" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-1"><span>🔧 BUG 修复</span></a></h3><ul><li>MD 文档图片上传工具无法处理相对路径图片的问题</li></ul><h3 id="🚀-其他-2" tabindex="-1"><a class="header-anchor" href="#🚀-其他-2"><span>🚀 其他</span></a></h3><ul><li>在 GitHub Action 中引入 Ruff 进行代码检查以及代码格式化检查</li></ul><h2 id="v0-2-4" tabindex="-1"><a class="header-anchor" href="#v0-2-4"><span>V0.2.4</span></a></h2><h3 id="✨-功能变动-2" tabindex="-1"><a class="header-anchor" href="#✨-功能变动-2"><span>✨ 功能变动</span></a></h3><ul><li>新增 MD 文档自动拆分工具</li><li>新增 MD 文档图片上传工具</li><li>新增内置上传工具：阿里云 OSS</li><li>CLI 工具会保留文件的源名字(而不是以 UUID 命名)</li></ul><h3 id="🔧-bug-修复-2" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-2"><span>🔧 BUG 修复</span></a></h3><ul><li>修复了请求 status 失败时不会显示错误信息的问题</li></ul><h2 id="v0-2-3" tabindex="-1"><a class="header-anchor" href="#v0-2-3"><span>V0.2.3</span></a></h2><h3 id="🔧-bug-修复-3" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-3"><span>🔧 BUG 修复</span></a></h3><ul><li>修复了无法在 Jupyter Notebook 中使用的问题</li><li>修复了<code>pdfdeal</code>函数中速率限制器没生效的问题</li></ul><h2 id="v0-2-2" tabindex="-1"><a class="header-anchor" href="#v0-2-2"><span>V0.2.2</span></a></h2><h3 id="✨-功能变动-3" tabindex="-1"><a class="header-anchor" href="#✨-功能变动-3"><span>✨ 功能变动</span></a></h3><ul><li>CLI 命令行程序<code>doc2x</code>支持自动解压下载的压缩包</li></ul><h3 id="🔧-bug-修复-4" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-4"><span>🔧 BUG 修复</span></a></h3><ul><li>某些情况下，CLI 命令行程序<code>doc2x</code>不能保存密匙到本地</li><li><code>替换Markdown文件中的图片链接为本地文件链接</code>功能保存图片格式错误(将 jpg 图片保存为 png 格式)</li></ul><h2 id="v0-2-1" tabindex="-1"><a class="header-anchor" href="#v0-2-1"><span>V0.2.1</span></a></h2><h3 id="✨-功能变动-4" tabindex="-1"><a class="header-anchor" href="#✨-功能变动-4"><span>✨ 功能变动</span></a></h3><ul><li>更新适配新的 doc2x 速率限制规则，由每分钟请求数（RPM） -&gt; 同时任务请求数。</li></ul><h3 id="🔧-bug-修复-5" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-5"><span>🔧 BUG 修复</span></a></h3><ul><li>CLI 命令行程序<code>doc2x</code>不能保存报错日志，仅能打印在终端中</li></ul><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0"><span>V0.2.0</span></a></h2>',30),p={class:"hint-container caution"},u=e("p",{class:"hint-container-title"},"警告",-1),k=e("p",null,"本次版本有重大接口更新(影响范围：全部）",-1),v=e("h3",{id:"✨-功能变动-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#✨-功能变动-5"},[e("span",null,"✨ 功能变动")])],-1),b=e("code",null,"doc2x",-1),m=e("li",null,"增强了异常处理",-1),f=e("li",null,"函数返回参数变动，会返回更多更详细的内容",-1),B=e("li",null,"解耦处理过程中的各个部分",-1),A=s('<h3 id="🔧-bug-修复-6" tabindex="-1"><a class="header-anchor" href="#🔧-bug-修复-6"><span>🔧 BUG 修复</span></a></h3><ul><li>[Doc2X] 使用个人 API 时，如输入的文件有多个文件损坏，可能会导致无限循环</li><li>[FileTool] <code>get_files</code>函数不能接受<code>pdf</code>输出格式</li></ul><h3 id="🚀-其他-3" tabindex="-1"><a class="header-anchor" href="#🚀-其他-3"><span>🚀 其他</span></a></h3><ul><li>文档更新至单独的储存库<a href="https://github.com/Menghuan1918/pdfdeal-docs" target="_blank" rel="noopener noreferrer">pdfdeal-docs</a></li><li>更新了单元测试</li></ul>',4);function _(y,x){const i=h("RouteLink");return r(),d("div",null,[c,e("ul",null,[e("li",null,[a(i,{to:"/zh/guide/Tools/Auto_split.html"},{default:n(()=>[l("文档拆分")]),_:1}),l("支持按照段落输出多个文件")]),e("li",null,[l("新增"),a(i,{to:"/zh/guide/Tools/Unzip.html"},{default:n(()=>[l("文档解压功能")]),_:1})])]),g,e("div",p,[u,k,e("ul",null,[e("li",null,[l("函数返回参数变动，请查看"),a(i,{to:"/zh/changes/0.2.0.html"},{default:n(()=>[l("更新详细")]),_:1}),l("以查看如何迁移")])])]),v,e("ul",null,[e("li",null,[l("新增 CLI 命令行程序"),b,l("，用于快速使用 doc2x 批量处理 PDF 或图片文件，使用请参见"),a(i,{to:"/zh/guide/CLI/"},{default:n(()=>[l("此处")]),_:1})]),e("li",null,[l("新增 CLI 命令对 graphrag 的适配，使用请参见"),a(i,{to:"/zh/demo/graphrag.html"},{default:n(()=>[l("graphrag 集成教程")]),_:1})]),e("li",null,[l("更新 Doc2X 文件翻译功能，支持指定输出语言以及使用的模型，使用"),a(i,{to:"/zh/guide/Doc2X/5.html"},{default:n(()=>[l("参见此处")]),_:1})]),m,f,B]),A])}const U=t(o,[["render",_],["__file","index.html.vue"]]),G=JSON.parse('{"path":"/zh/changes/","title":"更新日志","lang":"zh-CN","frontmatter":{"title":"更新日志","icon":"wrench","description":"V0.3.1 警告 0.3.1版本后更新输出为logging，默认情况下仅会输出Warning及以上等级的信息。如您希望查看处理过程，请设置logging等级为INFO： 🚀 其他 更改包信息输出方式为logging模块，不会再输出一堆东西了 V0.3.0 ✨ 功能变动 支持按照段落输出多个文件 新增 🔧 BUG 修复 修正了转换状态提示的用语 修...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/changes/"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/changes/"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"更新日志"}],["meta",{"property":"og:description","content":"V0.3.1 警告 0.3.1版本后更新输出为logging，默认情况下仅会输出Warning及以上等级的信息。如您希望查看处理过程，请设置logging等级为INFO： 🚀 其他 更改包信息输出方式为logging模块，不会再输出一堆东西了 V0.3.0 ✨ 功能变动 支持按照段落输出多个文件 新增 🔧 BUG 修复 修正了转换状态提示的用语 修..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-29T03:49:27.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-08-29T03:49:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更新日志\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T03:49:27.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"V0.3.1","slug":"v0-3-1","link":"#v0-3-1","children":[{"level":3,"title":"🚀 其他","slug":"🚀-其他","link":"#🚀-其他","children":[]}]},{"level":2,"title":"V0.3.0","slug":"v0-3-0","link":"#v0-3-0","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动","link":"#✨-功能变动","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复","link":"#🔧-bug-修复","children":[]},{"level":3,"title":"🚀 其他","slug":"🚀-其他-1","link":"#🚀-其他-1","children":[]}]},{"level":2,"title":"V0.2.5","slug":"v0-2-5","link":"#v0-2-5","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动-1","link":"#✨-功能变动-1","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-1","link":"#🔧-bug-修复-1","children":[]},{"level":3,"title":"🚀 其他","slug":"🚀-其他-2","link":"#🚀-其他-2","children":[]}]},{"level":2,"title":"V0.2.4","slug":"v0-2-4","link":"#v0-2-4","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动-2","link":"#✨-功能变动-2","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-2","link":"#🔧-bug-修复-2","children":[]}]},{"level":2,"title":"V0.2.3","slug":"v0-2-3","link":"#v0-2-3","children":[{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-3","link":"#🔧-bug-修复-3","children":[]}]},{"level":2,"title":"V0.2.2","slug":"v0-2-2","link":"#v0-2-2","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动-3","link":"#✨-功能变动-3","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-4","link":"#🔧-bug-修复-4","children":[]}]},{"level":2,"title":"V0.2.1","slug":"v0-2-1","link":"#v0-2-1","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动-4","link":"#✨-功能变动-4","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-5","link":"#🔧-bug-修复-5","children":[]}]},{"level":2,"title":"V0.2.0","slug":"v0-2-0","link":"#v0-2-0","children":[{"level":3,"title":"✨ 功能变动","slug":"✨-功能变动-5","link":"#✨-功能变动-5","children":[]},{"level":3,"title":"🔧 BUG 修复","slug":"🔧-bug-修复-6","link":"#🔧-bug-修复-6","children":[]},{"level":3,"title":"🚀 其他","slug":"🚀-其他-3","link":"#🚀-其他-3","children":[]}]}],"git":{"createdTime":1720782386000,"updatedTime":1724903367000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":7},{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":7}]},"readingTime":{"minutes":2.52,"words":757},"filePathRelative":"zh/changes/README.md","localizedDate":"2024年7月12日","autoDesc":true}');export{U as comp,G as data};
