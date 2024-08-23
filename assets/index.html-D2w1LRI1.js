import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,c as r,b as e,d as n,w as i,e as a,a as l,o as h}from"./app-DaHzhP8M.js";const d={},c=e("h2",{id:"v0-3-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#v0-3-0"},[e("span",null,"V0.3.0")])],-1),u=e("h3",{id:"✨-feature-changes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#✨-feature-changes"},[e("span",null,"✨ Feature Changes")])],-1),p=l('<h3 id="🔧-bug-fixes" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes"><span>🔧 BUG Fixes</span></a></h3><ul><li>Fixed terminology for switching state prompts</li><li>Fixed not being able to print error report stacks</li></ul><h3 id="🚀-others" tabindex="-1"><a class="header-anchor" href="#🚀-others"><span>🚀 Others</span></a></h3><ul><li>Documentation page improved for Linux users (more friendly font designation)</li><li>Added demonstration of use with RAG applications (e.g. Fastgpt, Dify, etc.)</li></ul><h2 id="v0-2-5" tabindex="-1"><a class="header-anchor" href="#v0-2-5"><span>V0.2.5</span></a></h2><h3 id="✨-feature-changes-1" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes-1"><span>✨ Feature Changes</span></a></h3><ul><li>Added built-in upload tool: S3</li></ul><h3 id="🔧-bug-fixes-1" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-1"><span>🔧 Bug Fixes</span></a></h3><ul><li>MD Document Image Uploader could not handle relative path images.</li></ul><h3 id="🚀-others-1" tabindex="-1"><a class="header-anchor" href="#🚀-others-1"><span>🚀 Others</span></a></h3><ul><li>Introduced Ruff in GitHub Action for code checking and code formatting.</li></ul><h2 id="v0-2-4" tabindex="-1"><a class="header-anchor" href="#v0-2-4"><span>V0.2.4</span></a></h2><h3 id="✨-feature-changes-2" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes-2"><span>✨ Feature changes</span></a></h3><ul><li>New MD Document Auto Split tool</li><li>New MD document image upload tool</li><li>New built-in upload tool: AliCloud OSS</li><li>CLI tool will keep the source name of the file (instead of UUID name).</li></ul><h3 id="🔧-bug-fixes-2" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-2"><span>🔧 BUG Fixes</span></a></h3><ul><li>Fixed an issue where an error message was not displayed when a status request failed</li></ul><h2 id="v0-2-3" tabindex="-1"><a class="header-anchor" href="#v0-2-3"><span>V0.2.3</span></a></h2><h3 id="🔧-bug-fixes-3" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-3"><span>🔧 BUG Fixes</span></a></h3><ul><li>Fixed issue that did not work in Jupyter Notebook</li><li>Fixed rate limiter not working in <code>pdfdeal</code> function.</li></ul><h2 id="v0-2-2" tabindex="-1"><a class="header-anchor" href="#v0-2-2"><span>V0.2.2</span></a></h2><h3 id="✨-feature-changes-3" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes-3"><span>✨ Feature Changes</span></a></h3><ul><li>CLI command line program <code>doc2x</code> supports automatic decompression of downloaded zip files</li></ul><h3 id="🔧-bug-fixes-4" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-4"><span>🔧 BUG Fixes</span></a></h3><ul><li>The CLI command line program <code>doc2x</code> does not save the key locally in some cases.</li><li>The <code>Replace image links in Markdown files with links to local files</code> function saves images in the wrong format (saves jpg images as png).</li></ul><h2 id="v0-2-1" tabindex="-1"><a class="header-anchor" href="#v0-2-1"><span>V0.2.1</span></a></h2><h3 id="✨-feature-changes-4" tabindex="-1"><a class="header-anchor" href="#✨-feature-changes-4"><span>✨ Feature Changes</span></a></h3><ul><li>Updated to adapt new doc2x rate limiting rules from requests per minute RPM -&gt; simultaneous task requests.</li></ul><h3 id="🔧-bug-fixes-5" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-5"><span>🔧 BUG Fixes</span></a></h3><ul><li>CLI command line program <code>doc2x</code> does not save error logs, only prints them in the terminal.</li></ul><h2 id="v0-2-0" tabindex="-1"><a class="header-anchor" href="#v0-2-0"><span>V0.2.0</span></a></h2>',30),g={class:"hint-container caution"},f=e("p",{class:"hint-container-title"},"Caution",-1),m=e("p",null,"This version has major interface updates (impact range: all)",-1),x=e("h3",{id:"✨-feature-changes-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#✨-feature-changes-5"},[e("span",null,"✨ Feature Changes")])],-1),b=e("code",null,"doc2x",-1),v=e("li",null,"Enhanced exception handling",-1),_=e("li",null,"Function return parameters have changed, will return more detailed content",-1),k=e("li",null,"Decoupled various parts of the processing process",-1),F=l('<h3 id="🔧-bug-fixes-6" tabindex="-1"><a class="header-anchor" href="#🔧-bug-fixes-6"><span>🔧 BUG Fixes</span></a></h3><ul><li>[Doc2X] When using personal API, if the input file has multiple corrupted files, it may cause an infinite loop</li><li>[FileTool] The <code>get_files</code> function cannot accept <code>pdf</code> output format</li></ul><h3 id="🚀-others-2" tabindex="-1"><a class="header-anchor" href="#🚀-others-2"><span>🚀 Others</span></a></h3><ul><li>Documentation updated to a separate repository <a href="https://github.com/Menghuan1918/pdfdeal-docs" target="_blank" rel="noopener noreferrer">pdfdeal-docs</a></li><li>Updated unit tests</li></ul>',4);function y(U,w){const t=o("RouteLink");return h(),r("div",null,[c,u,e("ul",null,[e("li",null,[n(t,{to:"/guide/Tools/Auto_split.html"},{default:i(()=>[a("Document Splitting")]),_:1}),a(" supports outputting multiple files by paragraph.")]),e("li",null,[a("New "),n(t,{to:"/guide/Tools/Unzip.html"},{default:i(()=>[a("Document Unzip")]),_:1}),a(".")])]),p,e("div",g,[f,m,e("ul",null,[e("li",null,[a("Function return parameters have changed, please check "),n(t,{to:"/changes/0.2.0.html"},{default:i(()=>[a("update details")]),_:1}),a(" to see how to migrate")])])]),x,e("ul",null,[e("li",null,[a("Added CLI command line program "),b,a(", for quickly using doc2x to batch process PDF or image files, please refer to "),n(t,{to:"/guide/CLI/"},{default:i(()=>[a("here")]),_:1}),a(" for usage")]),e("li",null,[a("Adaptation of CLI commands to graphrag has been added, please refer to "),n(t,{to:"/guide/CLI/"},{default:i(()=>[a("here")]),_:1}),a(" for usage")]),e("li",null,[a("Updated Doc2X document translation functions to use "),n(t,{to:"/demo/graphrag.html"},{default:i(()=>[a("see here")]),_:1})]),v,_,k]),F])}const B=s(d,[["render",y],["__file","index.html.vue"]]),D=JSON.parse('{"path":"/changes/","title":"Update Log","lang":"en-US","frontmatter":{"title":"Update Log","icon":"wrench","description":"V0.3.0 ✨ Feature Changes supports outputting multiple files by paragraph. New . 🔧 BUG Fixes Fixed terminology for switching state prompts Fixed not being able to print error re...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/zh/changes/"}],["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/changes/"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"Update Log"}],["meta",{"property":"og:description","content":"V0.3.0 ✨ Feature Changes supports outputting multiple files by paragraph. New . 🔧 BUG Fixes Fixed terminology for switching state prompts Fixed not being able to print error re..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-23T06:01:39.000Z"}],["meta",{"property":"article:author","content":"Menghuan1918"}],["meta",{"property":"article:modified_time","content":"2024-08-23T06:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Update Log\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-23T06:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"V0.3.0","slug":"v0-3-0","link":"#v0-3-0","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes","link":"#✨-feature-changes","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes","link":"#🔧-bug-fixes","children":[]},{"level":3,"title":"🚀 Others","slug":"🚀-others","link":"#🚀-others","children":[]}]},{"level":2,"title":"V0.2.5","slug":"v0-2-5","link":"#v0-2-5","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-1","link":"#✨-feature-changes-1","children":[]},{"level":3,"title":"🔧 Bug Fixes","slug":"🔧-bug-fixes-1","link":"#🔧-bug-fixes-1","children":[]},{"level":3,"title":"🚀 Others","slug":"🚀-others-1","link":"#🚀-others-1","children":[]}]},{"level":2,"title":"V0.2.4","slug":"v0-2-4","link":"#v0-2-4","children":[{"level":3,"title":"✨ Feature changes","slug":"✨-feature-changes-2","link":"#✨-feature-changes-2","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-2","link":"#🔧-bug-fixes-2","children":[]}]},{"level":2,"title":"V0.2.3","slug":"v0-2-3","link":"#v0-2-3","children":[{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-3","link":"#🔧-bug-fixes-3","children":[]}]},{"level":2,"title":"V0.2.2","slug":"v0-2-2","link":"#v0-2-2","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-3","link":"#✨-feature-changes-3","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-4","link":"#🔧-bug-fixes-4","children":[]}]},{"level":2,"title":"V0.2.1","slug":"v0-2-1","link":"#v0-2-1","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-4","link":"#✨-feature-changes-4","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-5","link":"#🔧-bug-fixes-5","children":[]}]},{"level":2,"title":"V0.2.0","slug":"v0-2-0","link":"#v0-2-0","children":[{"level":3,"title":"✨ Feature Changes","slug":"✨-feature-changes-5","link":"#✨-feature-changes-5","children":[]},{"level":3,"title":"🔧 BUG Fixes","slug":"🔧-bug-fixes-6","link":"#🔧-bug-fixes-6","children":[]},{"level":3,"title":"🚀 Others","slug":"🚀-others-2","link":"#🚀-others-2","children":[]}]}],"git":{"createdTime":1720786317000,"updatedTime":1724392899000,"contributors":[{"name":"Menghuan","email":"Menghuan2003@outlook.com","commits":7},{"name":"Menghuan1918","email":"menghuan2003@outlook.com","commits":4}]},"readingTime":{"minutes":1.35,"words":405},"filePathRelative":"changes/README.md","localizedDate":"July 12, 2024","autoDesc":true}');export{B as comp,D as data};