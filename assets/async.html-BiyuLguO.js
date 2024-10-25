import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as n,e as h,f as a,r as k,o as c,d as s,b as i}from"./app-B9nswgQd.js";const g={};function u(A,e){const d=k("Mermaid"),r=k("Tabs");return c(),o("div",null,[e[8]||(e[8]=n('<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal.Doc2X.ConvertV2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> upload_pdf, uid_status,convert_parse,get_convert_result</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="上传并解析文件" tabindex="-1"><a class="header-anchor" href="#上传并解析文件"><span>上传并解析文件</span></a></h2>',2)),h(d,{id:"mermaid-4",code:"eJzT1dXlKsksyUm1Uniyo+vJngVPd257sXzxs3kTnk1rf7J7GxdIQVpOfnlyRmJRiYJPEJcCEDhqPN3T8HR5t6aCrq6dglM0RCtERyxYhRNIpgYiXqPgjKICZEXf9qf7pkO4oZ4uED3OYD1wqWcLFwOlahRcol+s3/5sY9OzvqVP+xfbJBXZ6ScWZOqXGekXJBYVp+oXlySWlBZDjHABGwERebJjV3FpcnJqcXGNgqvG892Tn82dr4mk6sXedS/WLwKazwUABUh5ZA=="}),e[9]||(e[9]=n('<h3 id="上传文件并获得文件uid" tabindex="-1"><a class="header-anchor" href="#上传文件并获得文件uid"><span>上传文件并获得文件UID</span></a></h3><p><code>upload_pdf</code> 是一个异步函数，用于将 PDF 文件上传到服务器，并返回文件的唯一标识符（UID）。</p><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h4><ul><li><code>apikey</code> (<code>str</code>): 用于认证的 API 密钥。</li><li><code>pdffile</code> (<code>str</code>): 待上传的 PDF 文件路径。</li></ul><h4 id="异常" tabindex="-1"><a class="header-anchor" href="#异常"><span>异常</span></a></h4><ul><li><code>FileError</code>: 当输入文件过大时抛出。</li><li><code>FileError</code>: 当打开文件出错时抛出。</li><li><code>RateLimit</code>: 当请求超过速率限制时抛出。</li><li><code>Exception</code>: 当上传文件出错时抛出。</li></ul><h4 id="返回" tabindex="-1"><a class="header-anchor" href="#返回"><span>返回</span></a></h4><ul><li><code>str</code>: 上传文件的唯一标识符（UID）。</li></ul><h4 id="示范代码" tabindex="-1"><a class="header-anchor" href="#示范代码"><span>示范代码</span></a></h4>',9)),h(r,{id:"64",data:[{id:"Python"},{id:"Jupyter Notebook"}],"tab-id":"code"},{title0:a(({value:l,isActive:t})=>e[0]||(e[0]=[s("Python")])),title1:a(({value:l,isActive:t})=>e[1]||(e[1]=[s("Jupyter Notebook")])),tab0:a(({value:l,isActive:t})=>e[2]||(e[2]=[i("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," pdfdeal.Doc2X.ConvertV2 "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," upload_pdf")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," asyncio")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"uid "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," asyncio."),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}},"run"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}},"upload_pdf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"apikey"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"sk-xxx"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"pdffile"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"tests/pdf/sample.pdf"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"print"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(uid)")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:l,isActive:t})=>e[3]||(e[3]=[i("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," pdfdeal.Doc2X.ConvertV2 "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," upload_pdf")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"uid "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," await"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}}," upload_pdf"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"apikey"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"sk-xxx"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"pdffile"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"tests/pdf/sample.pdf"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"print"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(uid)")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),e[10]||(e[10]=n('<h4 id="返回示例" tabindex="-1"><a class="header-anchor" href="#返回示例"><span>返回示例</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">0192a90a-0c17-7729-a436-18320b7e9bf0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="获取文件状态" tabindex="-1"><a class="header-anchor" href="#获取文件状态"><span>获取文件状态</span></a></h3><p><code>uid_status</code> 是一个异步函数，用于获取文件的处理状态。</p><h4 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1"><span>参数</span></a></h4><ul><li><code>apikey</code> (<code>str</code>): 用于认证的 API 密钥。</li><li><code>uid</code> (<code>str</code>): 文件的唯一标识符。</li><li><code>convert</code> (<code>bool</code>, 可选): 是否将 &quot;[&quot; 和 &quot;[[&quot; 转换为 &quot;$&quot; 和 &quot;$$&quot;。默认为 <code>False</code>。</li></ul><h4 id="异常-1" tabindex="-1"><a class="header-anchor" href="#异常-1"><span>异常</span></a></h4><ul><li><code>RequestError</code>: 当处理文件失败时抛出。</li><li><code>Exception</code>: 当获取状态出错时抛出。</li></ul><h4 id="返回-1" tabindex="-1"><a class="header-anchor" href="#返回-1"><span>返回</span></a></h4><ul><li><code>Tuple[int, str, list, list]</code>: 返回一个元组，包含进度、状态、文本和位置。</li></ul><h4 id="示范代码-1" tabindex="-1"><a class="header-anchor" href="#示范代码-1"><span>示范代码</span></a></h4>',11)),h(r,{id:"130",data:[{id:"Python"},{id:"Jupyter Notebook"}],"tab-id":"code"},{title0:a(({value:l,isActive:t})=>e[4]||(e[4]=[s("Python")])),title1:a(({value:l,isActive:t})=>e[5]||(e[5]=[s("Jupyter Notebook")])),tab0:a(({value:l,isActive:t})=>e[6]||(e[6]=[i("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," pdfdeal.Doc2X.ConvertV2 "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," uid_status")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," asyncio")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"process, status, texts, locations "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," asyncio."),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}},"run"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}},"    uid_status"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"        apikey"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"sk-xxx"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"        uid"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"0192a90a-0c17-7729-a436-18320b7e9bf0"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"    )")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"print"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(process, status, texts, locations)")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),tab1:a(({value:l,isActive:t})=>e[7]||(e[7]=[i("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"from"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," pdfdeal.Doc2X.ConvertV2 "),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"import"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," uid_status")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"process, status, texts, locations "),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}}," await"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#61AFEF"}}," uid_status"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"    apikey"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"sk-xxx"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#986801","--shiki-light-font-style":"inherit","--shiki-dark":"#E06C75","--shiki-dark-font-style":"italic"}},"    uid"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#56B6C2"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"0192a90a-0c17-7729-a436-18320b7e9bf0"'),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"process, status, texts, locations")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1)])),_:1}),e[11]||(e[11]=n(`<h4 id="返回示范" tabindex="-1"><a class="header-anchor" href="#返回示范"><span>返回示范</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>(100,</span></span>
<span class="line"><span> &#39;Success&#39;,</span></span>
<span class="line"><span> [&#39;Test 测试&#39;, &#39;&#39;],</span></span>
<span class="line"><span> [{&#39;url&#39;: &#39;&#39;, &#39;page_idx&#39;: 0, &#39;page_width&#39;: 2334, &#39;page_height&#39;: 1313},</span></span>
<span class="line"><span>  {&#39;url&#39;: &#39;&#39;, &#39;page_idx&#39;: 1, &#39;page_width&#39;: 2334, &#39;page_height&#39;: 1313}])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导出文件" tabindex="-1"><a class="header-anchor" href="#导出文件"><span>导出文件</span></a></h2>`,3)),h(d,{id:"mermaid-145",code:"eJzT1dXlKsksyUm1Uni6fs/T9l1Pt296vrv/xfLFz+ZNeLqu51nHhOezWp5Na3+yexsXSHF6UWJBhoJPEJcCEDhqaDzd0/B0ebempoKurp2CUzQe7bFgLU5ghc7RT/bufz5lBUQm1NPlxYZmELdv6dP+xTZJRXYB/sEhCvqJBZn6ZUb6yfl5ZalFJfoFiUXFqRBjnMHGuES/WL/92cYmhD53Vxza9ItSi0tzSiC6XcC6a17sXfdi/aJn85c+n9MN8f3zrm3PGhprFFyQlLlqaDzfPfnZ3PmamlwAxJmLYg=="})])}const B=p(g,[["render",u],["__file","async.html.vue"]]),b=JSON.parse('{"path":"/zh/guide/async.html","title":"使用异步请求","lang":"zh-CN","frontmatter":{"title":"使用异步请求","icon":"rotate","order":3,"description":"上传并解析文件 上传文件并获得文件UID upload_pdf 是一个异步函数，用于将 PDF 文件上传到服务器，并返回文件的唯一标识符（UID）。 参数 apikey (str): 用于认证的 API 密钥。 pdffile (str): 待上传的 PDF 文件路径。 异常 FileError: 当输入文件过大时抛出。 FileError: 当打开文...","head":[["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/async.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"使用异步请求"}],["meta",{"property":"og:description","content":"上传并解析文件 上传文件并获得文件UID upload_pdf 是一个异步函数，用于将 PDF 文件上传到服务器，并返回文件的唯一标识符（UID）。 参数 apikey (str): 用于认证的 API 密钥。 pdffile (str): 待上传的 PDF 文件路径。 异常 FileError: 当输入文件过大时抛出。 FileError: 当打开文..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-20T08:40:50.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-20T08:40:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用异步请求\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-20T08:40:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"上传并解析文件","slug":"上传并解析文件","link":"#上传并解析文件","children":[{"level":3,"title":"上传文件并获得文件UID","slug":"上传文件并获得文件uid","link":"#上传文件并获得文件uid","children":[]},{"level":3,"title":"获取文件状态","slug":"获取文件状态","link":"#获取文件状态","children":[]}]},{"level":2,"title":"导出文件","slug":"导出文件","link":"#导出文件","children":[]}],"git":{"createdTime":1729266816000,"updatedTime":1729413650000,"contributors":[{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":1},{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"zh/guide/async.md","localizedDate":"2024年10月18日","autoDesc":true}');export{B as comp,b as data};