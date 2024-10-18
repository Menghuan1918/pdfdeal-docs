import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,b as e,f as i,d as a,e as l,r as h,o as r}from"./app-CcUXGwTT.js";const c={},p={class:"hint-container note"},k={class:"hint-container note"};function g(u,t){const d=h("RouteLink");return r(),n("div",null,[t[9]||(t[9]=s('<p>您可能需要安装一些额外依赖以使用：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --upgrade</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;pdfdeal[rag]&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。</p>',3)),e("p",null,[t[1]||(t[1]=i("如果您想要上传到远端储存服务，您需要与")),a(d,{to:"/zh/guide/Tools/Upload.html"},{default:l(()=>t[0]||(t[0]=[i("图片上传工具")])),_:1}),t[2]||(t[2]=i("结合使用。"))]),t[10]||(t[10]=s('<p>如果您仅需要将在线图片下载到本地，您仅需要给入参<code>replace</code>传递字符串<code>local</code>即可。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这个工具将会替换源文件中的内容，请注意您的文件数据备份</p></div><p>目录：</p><ul><li><a href="#md-replace-imgs">处理单个MD文档</a></li><li><a href="#mds-replace-imgs">处理某个目录中的MD文档</a></li></ul><h2 id="md-replace-imgs" tabindex="-1"><a class="header-anchor" href="#md-replace-imgs"><span><code>md_replace_imgs</code></span></a></h2><p>替换单个 Markdown 文件中的图片链接（CDN 链接 -&gt; 本地文件/阿里OSS/自定义）。</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>mdfile</code></td><td><code>str</code></td><td>必填</td><td>Markdown 文件路径</td></tr><tr><td><code>replace</code></td><td><code>str</code> 或 <code>function</code></td><td><code>&quot;local&quot;</code></td><td>用于替换图片链接的字符串或<strong>函数</strong>。当为字符串时仅接受 <code>&quot;local&quot;</code></td></tr><tr><td><code>skip</code></td><td><code>str</code></td><td><code>None</code></td><td>以该字符串开头的 URL 将被跳过。例如，<code>&quot;https://menghuan1918.github.io/pdfdeal-docs&quot;</code></td></tr><tr><td><code>outputpath</code></td><td><code>str</code></td><td><code>&quot;&quot;</code></td><td>保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 <code>_img</code> 的文件夹。<strong>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时有效</strong></td></tr><tr><td><code>relative</code></td><td><code>bool</code></td><td><code>False</code></td><td>使用相对路径保存图片。<strong>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时有效</strong></td></tr><tr><td><code>threads</code></td><td><code>int</code></td><td><code>5</code></td><td>下载图片的线程数</td></tr></tbody></table><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><code>bool</code></td><td>如果所有图片都成功下载，返回 <code>True</code>，否则返回 <code>False</code></td></tr></tbody></table><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>当 <code>replace</code> 为 <code>&quot;local&quot;</code> 时，<code>outputpath</code> 和 <code>relative</code> 参数才有效。</li><li>如果 <code>outputpath</code> 未设置，将自动创建一个与 Markdown 文件同名并添加 <code>_img</code> 的文件夹来保存图片。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>',13)),e("div",p,[t[5]||(t[5]=e("p",{class:"hint-container-title"},"注",-1)),e("p",null,[t[4]||(t[4]=i("如您想查看上传到不同远端储存服务的示例，请参见")),a(d,{to:"/zh/guide/Tools/Upload.html"},{default:l(()=>t[3]||(t[3]=[i("此处")])),_:1})])]),t[11]||(t[11]=s(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> md_replace_imgs</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">md_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    mdfile</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output/1706.03762-2024-08-11 17-06-35.md&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    outputpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./ABC&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mds-replace-imgs" tabindex="-1"><a class="header-anchor" href="#mds-replace-imgs"><span><code>mds_replace_imgs</code></span></a></h2><p>替换指定路径中所有 Markdown 文件中的图片链接（CDN 链接 -&gt; 本地文件/阿里OSS/自定义）。</p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>path</code></td><td><code>str</code></td><td>必填</td><td>Markdown 文件路径</td></tr><tr><td><code>replace</code></td><td><code>str</code> 或 <code>function</code></td><td><code>&quot;local&quot;</code></td><td>用于替换图片链接的字符串或<strong>函数</strong>。当为字符串时仅接受 <code>&quot;local&quot;</code></td></tr><tr><td><code>outputpath</code></td><td><code>str</code></td><td><code>&quot;&quot;</code></td><td>保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 <code>_img</code> 的文件夹。<strong>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时有效</strong></td></tr><tr><td><code>relative</code></td><td><code>bool</code></td><td><code>False</code></td><td>是否以相对路径保存图片。<strong>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时有效</strong></td></tr><tr><td><code>skip</code></td><td><code>str</code></td><td><code>None</code></td><td>以该字符串开头的 URL 将被跳过。例如，<code>&quot;https://menghuan1918.github.io/pdfdeal-docs&quot;</code></td></tr><tr><td><code>threads</code></td><td><code>int</code></td><td><code>2</code></td><td>同时处理的MD文档数量</td></tr><tr><td><code>down_load_threads</code></td><td><code>int</code></td><td><code>3</code></td><td>在一个 Markdown 文件中下载图片的线程数</td></tr></tbody></table><h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h3><p>返回一个包含三个元素的元组 <code>(list1, list2, bool)</code>：</p><ol><li><p><code>list1</code> (<code>list</code>): 成功处理的 Markdown 文件路径列表</p><ul><li>元素为处理后的文件路径（字符串）</li><li>处理失败时为空字符串</li></ul></li><li><p><code>list2</code> (<code>list</code>): 处理失败的文件列表</p><ul><li>元素为字典，包含两个键： <ul><li><code>&#39;error&#39;</code>: 错误信息（字符串）</li><li><code>&#39;path&#39;</code>: 处理失败的文件路径（字符串）</li></ul></li><li>处理成功时，两个键的值均为空字符串</li></ul></li><li><p><code>bool</code> (<code>bool</code>): 处理状态</p><ul><li><code>True</code>: 全部文件处理成功</li><li><code>False</code>: 至少有一个文件处理失败</li></ul></li></ol><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1"><span>注意事项</span></a></h3><ul><li><code>list1</code> 和 <code>list2</code> 的长度相同</li><li>仅在 <code>replace</code> 为 <code>&quot;local&quot;</code> 时，<code>outputpath</code> 和 <code>relative</code> 参数才有效</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>`,11)),e("div",k,[t[8]||(t[8]=e("p",{class:"hint-container-title"},"注",-1)),e("p",null,[t[7]||(t[7]=i("如您想查看上传到不同远端储存服务的示例，请参见")),a(d,{to:"/zh/guide/Tools/Upload.html"},{default:l(()=>t[6]||(t[6]=[i("此处")])),_:1})])]),t[12]||(t[12]=s(`<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">mds_replace_imgs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    path</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    replace</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;local&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    skip</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://menghuan1918.github.io/pdfdeal-docs&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    threads</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1))])}const b=o(c,[["render",g],["__file","MD_imgs.html.vue"]]),A=JSON.parse('{"path":"/zh/guide/Tools/MD_imgs.html","title":"MD文档图片处理","lang":"zh-CN","frontmatter":{"title":"MD文档图片处理","icon":"photo-film","description":"您可能需要安装一些额外依赖以使用： 这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。 如果您想要上传到远端储存服务，您需要与结合使用。 如果您仅需要将在线图片下载到本地，您仅需要给入参replace传递字符串local即可。 注意...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools/MD_imgs.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"MD文档图片处理"}],["meta",{"property":"og:description","content":"您可能需要安装一些额外依赖以使用： 这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。 如果您想要上传到远端储存服务，您需要与结合使用。 如果您仅需要将在线图片下载到本地，您仅需要给入参replace传递字符串local即可。 注意..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-18T14:17:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T14:17:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MD文档图片处理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T14:17:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"md_replace_imgs","slug":"md-replace-imgs","link":"#md-replace-imgs","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"mds_replace_imgs","slug":"mds-replace-imgs","link":"#mds-replace-imgs","children":[{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回值","slug":"返回值-1","link":"#返回值-1","children":[]},{"level":3,"title":"注意事项","slug":"注意事项-1","link":"#注意事项-1","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]}],"git":{"createdTime":1723530045000,"updatedTime":1729261059000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":2},{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":3.1,"words":931},"filePathRelative":"zh/guide/Tools/MD_imgs.md","localizedDate":"2024年8月13日","autoDesc":true}');export{b as comp,A as data};
