import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as s,a as t}from"./app-CwGLIp6C.js";const a={},n=t(`<h2 id="configure-api-key" tabindex="-1"><a class="header-anchor" href="#configure-api-key"><span>Configure API Key</span></a></h2><p>For personal use, please log in to <a href="https://doc2x.com/" target="_blank" rel="noopener noreferrer">https://doc2x.com/</a>, click on <code>Personal Information</code>, and copy the token there as your API key.</p><h2 id="using-environment-variables-recommended" tabindex="-1"><a class="header-anchor" href="#using-environment-variables-recommended"><span>Using Environment Variables (Recommended)</span></a></h2><p>Run the following code to import your API key:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="macos-linux" tabindex="-1"><a class="header-anchor" href="#macos-linux"><span>MacOS/Linux</span></a></h3><p>Please use the following command to set the environment variable for the current terminal:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> DOC2X_APIKEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> = </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can also add the above command to <code>~/.zshrc</code> or <code>~/.bashrc</code> to persist the environment variable.</p><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h3><p>Please use the following command to set the environment variable for the current terminal:</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">setx DOC2X_APIKEY </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>You can add it to <code>This PC</code> -&gt; <code>Properties</code> -&gt; <code>Advanced system settings</code> -&gt; <code>Environment Variables</code> -&gt; <code>System variables</code> to persist it.</p><h2 id="setting-api-key-for-a-single-project" tabindex="-1"><a class="header-anchor" href="#setting-api-key-for-a-single-project"><span>Setting API Key for a Single Project</span></a></h2><p>If you want the API key to be visible only for a single project, you can create a local <code>.env</code> file containing your API key. Here is an example of a <code>.env</code> file:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>DOC2X_APIKEY = &quot;Your API Key&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The import code is the same as using environment variables.</p><blockquote><p>Note that this may require you to use an integrated development environment, such as VSCode.</p></blockquote><h2 id="specifying-api-key-not-recommended" tabindex="-1"><a class="header-anchor" href="#specifying-api-key-not-recommended"><span>Specifying API Key (Not Recommended)</span></a></h2><p>If you want to specify your API key, you can import it with the following code:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">apikey</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Your API key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customization-rpm-request-limit" tabindex="-1"><a class="header-anchor" href="#customization-rpm-request-limit"><span>Customization: RPM Request Limit</span></a></h2><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Unless you are sure you need to modify the request frequency, do not change <code>rpm</code> (requests per minute), please use the default setting.</p></div><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Client </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">rpm</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,24),l=[n];function o(r,h){return s(),i("div",null,l)}const c=e(a,[["render",o],["__file","Init.html.vue"]]),k=JSON.parse('{"path":"/guide/Doc2X/Init.html","title":"At first - Initialization","lang":"en-US","frontmatter":{"title":"At first - Initialization","icon":"key","description":"Configure API Key For personal use, please log in to https://doc2x.com/, click on Personal Information, and copy the token there as your API key. Using Environment Variables (Re...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/guide/Doc2X/Init.html"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/Doc2X/Init.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"At first - Initialization"}],["meta",{"property":"og:description","content":"Configure API Key For personal use, please log in to https://doc2x.com/, click on Personal Information, and copy the token there as your API key. Using Environment Variables (Re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T12:11:57.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-07-12T12:11:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"At first - Initialization\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-12T12:11:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"Configure API Key","slug":"configure-api-key","link":"#configure-api-key","children":[]},{"level":2,"title":"Using Environment Variables (Recommended)","slug":"using-environment-variables-recommended","link":"#using-environment-variables-recommended","children":[{"level":3,"title":"MacOS/Linux","slug":"macos-linux","link":"#macos-linux","children":[]},{"level":3,"title":"Windows","slug":"windows","link":"#windows","children":[]}]},{"level":2,"title":"Setting API Key for a Single Project","slug":"setting-api-key-for-a-single-project","link":"#setting-api-key-for-a-single-project","children":[]},{"level":2,"title":"Specifying API Key (Not Recommended)","slug":"specifying-api-key-not-recommended","link":"#specifying-api-key-not-recommended","children":[]},{"level":2,"title":"Customization: RPM Request Limit","slug":"customization-rpm-request-limit","link":"#customization-rpm-request-limit","children":[]}],"git":{"createdTime":1720786317000,"updatedTime":1720786317000,"contributors":[{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":0.89,"words":267},"filePathRelative":"guide/Doc2X/Init.md","localizedDate":"July 12, 2024","autoDesc":true}');export{c as comp,k as data};
