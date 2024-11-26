import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as u,c as p,a as e,b as l,d as n,e as t,f as a,r as o}from"./app-DbZrl9ib.js";const h={},k={id:"md-replace-imgs",tabindex:"-1"},g={class:"header-anchor",href:"#md-replace-imgs"},m={class:"hint-container note"},c={id:"mds-replace-imgs",tabindex:"-1"},y={class:"header-anchor",href:"#mds-replace-imgs"},b={class:"hint-container note"};function A(f,i){const d=o("RouteLink"),s=o("Badge");return u(),p("div",null,[i[36]||(i[36]=e('<p>您可能需要安装一些额外依赖以使用：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pdfdeal[rag]&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。</p>',3)),l("p",null,[i[1]||(i[1]=n("如果您想要上传到远端储存服务，您需要与")),t(d,{to:"/zh/guide/Tools/Upload.html"},{default:a(()=>i[0]||(i[0]=[n("图片上传工具")])),_:1}),i[2]||(i[2]=n("结合使用。"))]),i[37]||(i[37]=l("p",null,[n("如果您仅需要将在线图片下载到本地，您仅需要给入参"),l("code",null,"replace"),n("传递字符串"),l("code",null,"local"),n("即可。")],-1)),i[38]||(i[38]=l("div",{class:"hint-container warning"},[l("p",{class:"hint-container-title"},"注意"),l("p",null,"这个工具将会替换源文件中的内容，请注意您的文件数据备份")],-1)),i[39]||(i[39]=l("p",null,"目录：",-1)),l("ul",null,[l("li",null,[i[3]||(i[3]=l("a",{href:"#md-replace-imgs"},"处理单个MD文档",-1)),t(s,{text:"需要0.2.4+版本",type:"warning"})]),l("li",null,[i[4]||(i[4]=l("a",{href:"#mds-replace-imgs"},"处理某个目录中的MD文档",-1)),t(s,{text:"需要0.2.4+版本",type:"warning"})])]),l("h2",k,[l("a",g,[l("span",null,[i[5]||(i[5]=l("code",null,"md_replace_imgs",-1)),t(s,{text:"需要0.2.4+版本",type:"warning"})])])]),i[40]||(i[40]=l("p",null,"替换单个 Markdown 文件中的图片链接（CDN 链接 -> 本地文件/阿里OSS/自定义）。",-1)),i[41]||(i[41]=l("h3",{id:"参数",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#参数"},[l("span",null,"参数")])],-1)),l("table",null,[i[16]||(i[16]=l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"描述")])],-1)),l("tbody",null,[i[10]||(i[10]=l("tr",null,[l("td",null,[l("code",null,"mdfile")]),l("td",null,[l("code",null,"str")]),l("td",null,"必填"),l("td",null,"Markdown 文件路径")],-1)),i[11]||(i[11]=l("tr",null,[l("td",null,[l("code",null,"replace")]),l("td",null,[l("code",null,"str"),n(" 或 "),l("code",null,"function")]),l("td",null,[l("code",null,'"local"')]),l("td",null,[n("用于替换图片链接的字符串或"),l("strong",null,"函数"),n("。当为字符串时仅接受 "),l("code",null,'"local"')])],-1)),i[12]||(i[12]=l("tr",null,[l("td",null,[l("code",null,"skip")]),l("td",null,[l("code",null,"str")]),l("td",null,[l("code",null,"None")]),l("td",null,[n("以该字符串开头的 URL 将被跳过。例如，"),l("code",null,'"https://menghuan1918.github.io/pdfdeal-docs"')])],-1)),i[13]||(i[13]=l("tr",null,[l("td",null,[l("code",null,"outputpath")]),l("td",null,[l("code",null,"str")]),l("td",null,[l("code",null,'""')]),l("td",null,[n("保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 "),l("code",null,"_img"),n(" 的文件夹。"),l("strong",null,[n("仅在 "),l("code",null,"replace"),n(" 为 "),l("code",null,'"local"'),n(" 时有效")])])],-1)),i[14]||(i[14]=l("tr",null,[l("td",null,[l("code",null,"relative")]),l("td",null,[l("code",null,"bool")]),l("td",null,[l("code",null,"False")]),l("td",null,[n("使用相对路径保存图片。"),l("strong",null,[n("仅在 "),l("code",null,"replace"),n(" 为 "),l("code",null,'"local"'),n(" 时有效")])])],-1)),i[15]||(i[15]=l("tr",null,[l("td",null,[l("code",null,"threads")]),l("td",null,[l("code",null,"int")]),l("td",null,[l("code",null,"5")]),l("td",null,"下载图片的线程数")],-1)),l("tr",null,[l("td",null,[i[6]||(i[6]=l("code",null,"path_style",-1)),t(s,{text:"需要0.4.10+版本",type:"warning"})]),i[7]||(i[7]=l("td",null,[l("code",null,"bool")],-1)),i[8]||(i[8]=l("td",null,[l("code",null,"False")],-1)),i[9]||(i[9]=l("td",null,[n("上传到OSS时是否使用路径样式。如果为True，路径将为"),l("code",null,"/{filename}/{md5}.{extension}"),n("。")],-1))])])]),i[42]||(i[42]=e('<h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>bool</code></td><td>如果所有图片都成功下载，返回 <code>True</code>，否则返回 <code>False</code></td></tr></tbody></table><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>当 <code>replace</code> 为 <code>&quot;local&quot;</code> 时，<code>outputpath</code> 和 <code>relative</code> 参数才有效。</li><li>如果 <code>outputpath</code> 未设置，将自动创建一个与 Markdown 文件同名并添加 <code>_img</code> 的文件夹来保存图片。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>',5)),l("div",m,[i[19]||(i[19]=l("p",{class:"hint-container-title"},"注",-1)),l("p",null,[i[18]||(i[18]=n("如您想查看上传到不同远端储存服务的示例，请参见")),t(d,{to:"/zh/guide/Tools/Upload.html"},{default:a(()=>i[17]||(i[17]=[n("此处")])),_:1})])]),i[43]||(i[43]=e(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> md_replace_imgs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">md_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    mdfile</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output/1706.03762-2024-08-11 17-06-35.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    outputpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./ABC&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">，</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1)),l("h2",c,[l("a",y,[l("span",null,[i[20]||(i[20]=l("code",null,"mds_replace_imgs",-1)),t(s,{text:"需要0.2.4+版本",type:"warning"})])])]),i[44]||(i[44]=l("p",null,"替换指定路径中所有 Markdown 文件中的图片链接（CDN 链接 -> 本地文件/阿里OSS/自定义）。",-1)),i[45]||(i[45]=l("h3",{id:"参数-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#参数-1"},[l("span",null,"参数")])],-1)),l("table",null,[i[32]||(i[32]=l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"描述")])],-1)),l("tbody",null,[i[25]||(i[25]=l("tr",null,[l("td",null,[l("code",null,"path")]),l("td",null,[l("code",null,"str")]),l("td",null,"必填"),l("td",null,"Markdown 文件路径")],-1)),i[26]||(i[26]=l("tr",null,[l("td",null,[l("code",null,"replace")]),l("td",null,[l("code",null,"str"),n(" 或 "),l("code",null,"function")]),l("td",null,[l("code",null,'"local"')]),l("td",null,[n("用于替换图片链接的字符串或"),l("strong",null,"函数"),n("。当为字符串时仅接受 "),l("code",null,'"local"')])],-1)),i[27]||(i[27]=l("tr",null,[l("td",null,[l("code",null,"outputpath")]),l("td",null,[l("code",null,"str")]),l("td",null,[l("code",null,'""')]),l("td",null,[n("保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 "),l("code",null,"_img"),n(" 的文件夹。"),l("strong",null,[n("仅在 "),l("code",null,"replace"),n(" 为 "),l("code",null,'"local"'),n(" 时有效")])])],-1)),i[28]||(i[28]=l("tr",null,[l("td",null,[l("code",null,"relative")]),l("td",null,[l("code",null,"bool")]),l("td",null,[l("code",null,"False")]),l("td",null,[n("是否以相对路径保存图片。"),l("strong",null,[n("仅在 "),l("code",null,"replace"),n(" 为 "),l("code",null,'"local"'),n(" 时有效")])])],-1)),i[29]||(i[29]=l("tr",null,[l("td",null,[l("code",null,"skip")]),l("td",null,[l("code",null,"str")]),l("td",null,[l("code",null,"None")]),l("td",null,[n("以该字符串开头的 URL 将被跳过。例如，"),l("code",null,'"https://menghuan1918.github.io/pdfdeal-docs"')])],-1)),i[30]||(i[30]=l("tr",null,[l("td",null,[l("code",null,"threads")]),l("td",null,[l("code",null,"int")]),l("td",null,[l("code",null,"2")]),l("td",null,"同时处理的MD文档数量")],-1)),i[31]||(i[31]=l("tr",null,[l("td",null,[l("code",null,"down_load_threads")]),l("td",null,[l("code",null,"int")]),l("td",null,[l("code",null,"3")]),l("td",null,"在一个 Markdown 文件中下载图片的线程数")],-1)),l("tr",null,[l("td",null,[i[21]||(i[21]=l("code",null,"path_style",-1)),t(s,{text:"需要0.4.10+版本",type:"warning"})]),i[22]||(i[22]=l("td",null,[l("code",null,"bool")],-1)),i[23]||(i[23]=l("td",null,[l("code",null,"False")],-1)),i[24]||(i[24]=l("td",null,[n("上传到OSS时是否使用路径样式。如果为True，路径将为"),l("code",null,"/{filename}/{md5}.{extension}"),n("。")],-1))])])]),i[46]||(i[46]=e('<h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h3><p>返回一个包含三个元素的元组 <code>(list1, list2, bool)</code>：</p><ol><li><p><code>list1</code> (<code>list</code>): 成功处理的 Markdown 文件路径列表</p><ul><li>元素为处理后的文件路径（字符串）</li><li>处理失败时为空字符串</li></ul></li><li><p><code>list2</code> (<code>list</code>): 处理失败的文件列表</p><ul><li>元素为字典，包含两个键： <ul><li><code>&#39;error&#39;</code>: 错误信息（字符串）</li><li><code>&#39;path&#39;</code>: 处理失败的文件路径（字符串）</li></ul></li><li>处理成功时，两个键的值均为空字符串</li></ul></li><li><p><code>bool</code> (<code>bool</code>): 处理状态</p><ul><li><code>True</code>: 全部文件处理成功</li><li><code>False</code>: 至少有一个文件处理失败</li></ul></li></ol><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1"><span>注意事项</span></a></h3><ul><li><code>list1</code> 和 <code>list2</code> 的长度相同</li><li>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时，<code>outputpath</code> 和 <code>relative</code> 参数才有效</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>',6)),l("div",b,[i[35]||(i[35]=l("p",{class:"hint-container-title"},"注",-1)),l("p",null,[i[34]||(i[34]=n("如您想查看上传到不同远端储存服务的示例，请参见")),t(d,{to:"/zh/guide/Tools/Upload.html"},{default:a(()=>i[33]||(i[33]=[n("此处")])),_:1})])]),i[47]||(i[47]=e(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">mds_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    skip</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://menghuan1918.github.io/pdfdeal-docs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const F=r(h,[["render",A],["__file","MD_imgs.html.vue"]]),C=JSON.parse('{"path":"/zh/guide/Tools/MD_imgs.html","title":"MD文档图片处理","lang":"zh-CN","frontmatter":{"title":"MD文档图片处理","icon":"photo-film","description":"您可能需要安装一些额外依赖以使用： 这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。 如果您想要上传到远端储存服务，您需要与结合使用。 如果您仅需要将在线图片下载到本地，您仅需要给入参replace传递字符串local即可。 注意...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"MD文档图片处理"}],["meta",{"property":"og:description","content":"您可能需要安装一些额外依赖以使用： 这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。 如果您想要上传到远端储存服务，您需要与结合使用。 如果您仅需要将在线图片下载到本地，您仅需要给入参replace传递字符串local即可。 注意..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-26T07:23:22.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-26T07:23:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MD文档图片处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-26T07:23:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"md_replace_imgs","slug":"md-replace-imgs","link":"#md-replace-imgs","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"mds_replace_imgs","slug":"mds-replace-imgs","link":"#mds-replace-imgs","children":[{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回值","slug":"返回值-1","link":"#返回值-1","children":[]},{"level":3,"title":"注意事项","slug":"注意事项-1","link":"#注意事项-1","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]}],"git":{"createdTime":1723530045000,"updatedTime":1732605802000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":2},{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":2},{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":3.5,"words":1051},"filePathRelative":"zh/guide/Tools/MD_imgs.md","localizedDate":"2024年8月13日","autoDesc":true}');export{F as comp,C as data};