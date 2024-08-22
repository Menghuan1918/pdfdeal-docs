import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as d,a as i}from"./app-BWGxfZod.js";const o={},l=i(`<p>此工具需要您使用 <mark>0.2.4</mark> 或更高版本。</p><p>这个工具将会尝试按照标题对 MD 文档进行拆分，并为其添加分段标识符，以方便与其他 RAG 工具(例如fastgpt，Dify等)结合使用。</p><p>目录：</p><ul><li><a href="#auto-split-md">处理单个 MD 文档</a></li><li><a href="#auto-split-mds">处理某个目录中的 MD 文档</a></li></ul><h2 id="auto-split-md" tabindex="-1"><a class="header-anchor" href="#auto-split-md"><span>auto_split_md</span></a></h2><p>自动分割 Markdown 文件。</p><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>mdfile</code></td><td><code>str</code></td><td>必填</td><td>Markdown 文件路径</td></tr><tr><td><code>mode</code></td><td><code>str</code></td><td><code>&quot;title&quot;</code></td><td>分割方式。<strong>目前仅支持 <code>title</code>（按标题分割）</strong></td></tr><tr><td><code>out_type</code></td><td><code>str</code></td><td><code>&quot;single&quot;</code></td><td>输出方式。目前支持 <code>single</code>（输出为一个文件）和 <code>replace</code>（替换原文件）以及<code>multi</code>（按段输出多个文件）</td></tr><tr><td><code>split_str</code></td><td><code>str</code></td><td><code>&quot;=+=+=+=+=+=+=+=+=&quot;</code></td><td>用于分割 Markdown 文件的字符串</td></tr><tr><td><code>output_path</code></td><td><code>str</code></td><td><code>&quot;./Output&quot;</code></td><td>输出文件路径。当 <code>out_type</code> 为 <code>replace</code> 时无效</td></tr></tbody></table><h3 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span>返回值</span></a></h3><p>返回一个包含两个元素的元组 <code>(str, bool)</code>：</p><ol><li><code>str</code>: 输出文件路径</li><li><code>bool</code>: 文件是否被分割</li></ol><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>目前仅支持按标题分割</li><li>输出方式为<code>multi</code>时，将会按段输出多个文件，其会以<code>源文件名+分段标题.md</code>命名，且此时返回的是文件夹路径</li></ul><h2 id="auto-split-mds" tabindex="-1"><a class="header-anchor" href="#auto-split-mds"><span>auto_split_mds</span></a></h2><p>将文件夹中的 Markdown 文件进行分割。</p><h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><code>mdpath</code></td><td><code>str</code></td><td>必填</td><td>包含 Markdown 文件的文件夹路径</td></tr><tr><td><code>mode</code></td><td><code>str</code></td><td><code>&quot;title&quot;</code></td><td>分割方式。<strong>目前仅支持 <code>title</code>（按标题分割）</strong></td></tr><tr><td><code>out_type</code></td><td><code>str</code></td><td><code>&quot;single&quot;</code></td><td>输出方式。目前支持 <code>single</code>（输出为一个文件）和 <code>replace</code>（替换原文件）以及<code>multi</code>（按段输出多个文件）</td></tr><tr><td><code>split_str</code></td><td><code>str</code></td><td><code>&quot;=+=+=+=+=+=+=+=+=&quot;</code></td><td>用于分割 Markdown 文件的字符串</td></tr><tr><td><code>output_path</code></td><td><code>str</code></td><td><code>&quot;./Output&quot;</code></td><td>输出分割文件的路径。当 <code>out_type</code> 为 <code>replace</code> 时无效</td></tr><tr><td><code>recursive</code></td><td><code>bool</code></td><td><code>True</code></td><td>是否递归搜索子目录</td></tr></tbody></table><h3 id="返回值-1" tabindex="-1"><a class="header-anchor" href="#返回值-1"><span>返回值</span></a></h3><p>返回一个包含三个元素的元组 <code>(list1, list2, bool)</code>：</p><ol><li><p><code>list1</code> (<code>list</code>): 输出文件列表</p><ul><li>元素为输出文件路径（字符串）</li><li>如果某些文件未成功分割，则元素为空字符串 <code>&quot;&quot;</code></li></ul></li><li><p><code>list2</code> (<code>list</code>): 错误信息及其原始文件路径列表</p><ul><li>元素为字典，包含两个键： <ul><li><code>&#39;error&#39;</code>: 错误信息（字符串）</li><li><code>&#39;path&#39;</code>: 原始文件路径（字符串）</li></ul></li><li>如果某些文件成功分割，则元素为空字符串 <code>&quot;&quot;</code></li></ul></li><li><p><code>bool</code> (<code>bool</code>): 处理状态</p><ul><li><code>True</code>: 至少有一个文件处理失败</li><li><code>False</code>: 全部文件处理成功</li></ul></li></ol><h3 id="注意事项-1" tabindex="-1"><a class="header-anchor" href="#注意事项-1"><span>注意事项</span></a></h3><ul><li><code>list1</code> 和 <code>list2</code> 的长度相同</li><li>当 <code>out_type</code> 为 <code>replace</code> 时，<code>output_path</code> 参数无效</li><li>输出方式为<code>multi</code>时，将会按段输出多个文件，其会以<code>源文件名+分段标题.md</code>命名，且此时返回的是文件夹路径</li></ul><h3 id="示范代码" tabindex="-1"><a class="header-anchor" href="#示范代码"><span>示范代码</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.file_tools </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> auto_split_mds</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">succese, failed, flag </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> auto_split_mds</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">mdpath</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Output&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">out_type</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;replace&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(succese, failed, flag)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),s=[l];function a(c,n){return d(),e("div",null,s)}const p=t(o,[["render",a],["__file","Auto_split.html.vue"]]),u=JSON.parse('{"path":"/zh/guide/Tools/Auto_split.html","title":"MD文档拆分","lang":"zh-CN","frontmatter":{"title":"MD文档拆分","icon":"scissors","description":"此工具需要您使用 0.2.4 或更高版本。 这个工具将会尝试按照标题对 MD 文档进行拆分，并为其添加分段标识符，以方便与其他 RAG 工具(例如fastgpt，Dify等)结合使用。 目录： 处理单个 MD 文档 处理某个目录中的 MD 文档 auto_split_md 自动分割 Markdown 文件。 参数 返回值 返回一个包含两个元素的元组 (...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/Tools/Auto_split.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Tools/Auto_split.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"MD文档拆分"}],["meta",{"property":"og:description","content":"此工具需要您使用 0.2.4 或更高版本。 这个工具将会尝试按照标题对 MD 文档进行拆分，并为其添加分段标识符，以方便与其他 RAG 工具(例如fastgpt，Dify等)结合使用。 目录： 处理单个 MD 文档 处理某个目录中的 MD 文档 auto_split_md 自动分割 Markdown 文件。 参数 返回值 返回一个包含两个元素的元组 (..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-22T15:18:56.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-08-22T15:18:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MD文档拆分\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-22T15:18:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"auto_split_md","slug":"auto-split-md","link":"#auto-split-md","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"auto_split_mds","slug":"auto-split-mds","link":"#auto-split-mds","children":[{"level":3,"title":"参数","slug":"参数-1","link":"#参数-1","children":[]},{"level":3,"title":"返回值","slug":"返回值-1","link":"#返回值-1","children":[]},{"level":3,"title":"注意事项","slug":"注意事项-1","link":"#注意事项-1","children":[]},{"level":3,"title":"示范代码","slug":"示范代码","link":"#示范代码","children":[]}]}],"git":{"createdTime":1723530045000,"updatedTime":1724339936000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":3}]},"readingTime":{"minutes":2.25,"words":675},"filePathRelative":"zh/guide/Tools/Auto_split.md","localizedDate":"2024年8月13日","autoDesc":true}');export{p as comp,u as data};
