import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as d,c as p,a,b as s,d as e,e as n,f as l,r}from"./app-DbZrl9ib.js";const k={},o={class:"hint-container caution"},g={class:"hint-container warning"};function c(u,i){const t=r("RouteLink");return d(),p("div",null,[i[8]||(i[8]=a(`<div class="hint-container warning"><p class="hint-container-title">Warning</p><p><mark>After version 0.3.1</mark> the output has been updated to <code>logging</code>, which by default only outputs Warning and above. If you want to see the processing, set the <code>logging</code> level to INFO:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">httpx_logger </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">getLogger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;httpx&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">httpx_logger.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">setLevel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">WARNING</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">basicConfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">level</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">logging.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;">INFO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For demonstration purposes, the following code examples all set the <code>logging</code> level to INFO.</p></div><h2 id="client-pdfdeal" tabindex="-1"><a class="header-anchor" href="#client-pdfdeal"><span><code>Client.pdfdeal</code></span></a></h2><p>Process PDF files and convert them into files more suitable for the RAG system.</p>`,3)),s("div",o,[i[3]||(i[3]=s("p",{class:"hint-container-title"},"Caution",-1)),s("p",null,[i[1]||(i[1]=e("If you want to convert PDF files to other formats, please use the ")),n(t,{to:"/guide/V1/Doc2X/2.html"},{default:l(()=>i[0]||(i[0]=[e("Client.pdf2file")])),_:1}),i[2]||(i[2]=e(" function"))])]),i[9]||(i[9]=a('<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h3><table><thead><tr><th>Parameter</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>pdf_file</code></td><td><code>str</code> or <code>list</code></td><td>Yes</td><td>-</td><td>Input file path, or a list of input file paths</td></tr><tr><td><code>output_format</code></td><td><code>str</code></td><td>No</td><td><code>&quot;pdf&quot;</code></td><td>Output format, accepts <code>&#39;pdf&#39;</code>, <code>&#39;md&#39;</code> or <code>&#39;texts&#39;</code>. Default is <code>&quot;pdf&quot;</code></td></tr><tr><td><code>output_names</code></td><td><code>list</code></td><td>No</td><td><code>None</code></td><td>Custom output file names, must match the length of <code>pdf_file</code>. If the file name contains a folder path, the system will automatically create the corresponding folder structure. Default is <code>None</code></td></tr><tr><td><code>output_path</code></td><td><code>str</code></td><td>No</td><td><code>&quot;./Output&quot;</code></td><td>Output path. Default is <code>&quot;./Output&quot;</code></td></tr><tr><td><code>convert</code></td><td><code>bool</code></td><td>No</td><td><code>True</code></td><td>Whether to convert <code>[</code> to <code>$</code>, and <code>[[</code> to <code>$$</code>. Default is <code>True</code></td></tr></tbody></table><h3 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values"><span>Return Values</span></a></h3><p>Returns a tuple <code>(list1, list2, bool)</code> containing three elements in the same order as the input files:</p><ol><li><p><code>list1</code> (<code>list</code>): List of successfully processed file paths</p><ul><li>Elements are the paths of processed files (strings)</li><li>Empty string if processing failed</li></ul></li><li><p><code>list2</code> (<code>list</code>): List of failed files</p><ul><li>Elements are dictionaries containing two keys: <ul><li><code>&#39;error&#39;</code>: Error message (string)</li><li><code>&#39;path&#39;</code>: Path of the failed file (string)</li></ul></li><li>Both keys have empty string values if processing succeeded</li></ul></li><li><p><code>bool</code>: Processing status</p><ul><li><code>True</code>: At least one file processing failed</li><li><code>False</code>: All files processed successfully</li></ul></li></ol><h3 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h3><ul><li>The lengths of <code>list1</code> and <code>list2</code> are the same</li><li>When the output format is <code>&quot;texts&quot;</code>, text is returned directly without saving to a file</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2>',8)),s("div",g,[i[7]||(i[7]=s("p",{class:"hint-container-title"},"Warning",-1)),s("p",null,[i[5]||(i[5]=e("Please ensure you have configured your key in environment variables as per the ")),n(t,{to:"/guide/V1/Doc2X/Init.html"},{default:l(()=>i[4]||(i[4]=[e("initialization section")])),_:1}),i[6]||(i[6]=e("."))])]),i[10]||(i[10]=a(`<div class="hint-container warning"><p class="hint-container-title">Warning</p><p>When the output format is PDF, the conversion process does not retain the original document&#39;s layout. The converted PDF only contains recognized text content and generates a new PDF according to the original page numbers. This approach may cause text to exceed page boundaries, affecting human reading. However, it does not affect RAG system content reading.</p><p>The advantage is that it retains the PDF page number where the text is located, making it easier to trace back in the RAG system.</p></div><h3 id="recognize-all-pdfs-in-a-folder-and-output-as-recognized-pdfs" tabindex="-1"><a class="header-anchor" href="#recognize-all-pdfs-in-a-folder-and-output-as-recognized-pdfs"><span>Recognize all PDFs in a folder and output as recognized PDFs</span></a></h3><p>To maintain the original file structure, use the built-in directory generation tool to generate paths for images that need processing:</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Doc2X</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> pdfdeal </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> get_files</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">client </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> Doc2X</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">file_list, rename </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;"> get_files</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;tests/pdf&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">mode</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pdf&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pdf&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">success, failed, flag </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> client.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF;">pdfdeal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    pdf_file</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">file_list,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    output_path</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./Output/test/multiple/pdfdeal&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">    output_names</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">rename,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(success)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(failed)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(flag)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The file structure of <code>./tests/pdf</code> is:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pdf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sample_bad.pdf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sample.pdf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sampleB.pdf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note that <code>sample_bad.pdf</code> is a corrupted file used for testing exception handling; it is normal for processing to fail.</p></blockquote><p>Expected output:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exception</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 400:{&quot;code&quot;:&quot;bad_request&quot;,&quot;msg&quot;:&quot;Invalid parameters or bad request&quot;}.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Retrying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> second.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Waiting</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> for</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> processing:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uuid:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 49993be3-d3b6-4990-b8bf-9989a2942bfb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Processing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uuid:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0199cdd8-48b0-4987-a795-2dd11e73918e</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exception</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 400:{&quot;code&quot;:&quot;bad_request&quot;,&quot;msg&quot;:&quot;Invalid parameters or bad request&quot;}.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Retrying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seconds.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Processing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 6%</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    --</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> uuid:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 49993be3-d3b6-4990-b8bf-9989a2942bfb</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> exception</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 400:{&quot;code&quot;:&quot;bad_request&quot;,&quot;msg&quot;:&quot;Invalid parameters or bad request&quot;}.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Retrying</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 4</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> seconds.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PDFDEAL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Progress:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2/3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> files</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> successfully</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> processed.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-----</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Failed</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> deal</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> tests/pdf/sample_bad.pdf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> with</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error:</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Upload</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> error!</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 400:{&quot;code&quot;:&quot;bad_request&quot;,&quot;msg&quot;:&quot;Invalid parameters or bad request&quot;}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">-----</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;./Output/test/multiple/pdfdeal/sample.pdf&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;./Output/test/multiple/pdfdeal/test/sampleB.pdf&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[{</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;error&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;path&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;error&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: Exception(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Upload file error! 400:{&quot;code&quot;:&quot;bad_request&quot;,&quot;msg&quot;:&quot;Invalid parameters or bad request&quot;}&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;path&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;tests/pdf/sample_bad.pdf&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, {</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;error&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;path&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}]</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Processed file structure:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">pdfdeal</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">├──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sample.pdf</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">└──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    └──</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sampleB.pdf</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11))])}const F=h(k,[["render",c],["__file","3.html.vue"]]),m=JSON.parse('{"path":"/guide/V1/Doc2X/3.html","title":"For RAG Enhancement","lang":"en-US","frontmatter":{"title":"For RAG Enhancement","icon":"tachometer-alt","description":"Warning After version 0.3.1 the output has been updated to logging, which by default only outputs Warning and above. If you want to see the processing, set the logging level to ...","head":[["meta",{"property":"og:url","content":"https://menghuan1918.github.io/pdfdeal-docs/pdfdeal-docs/guide/V1/Doc2X/3.html"}],["meta",{"property":"og:site_name","content":"pdfdeal"}],["meta",{"property":"og:title","content":"For RAG Enhancement"}],["meta",{"property":"og:description","content":"Warning After version 0.3.1 the output has been updated to logging, which by default only outputs Warning and above. If you want to see the processing, set the logging level to ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-18T14:17:39.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T14:17:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"For RAG Enhancement\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T14:17:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Menghuan1918\\",\\"url\\":\\"https://github.com/Menghuan1918\\"}]}"]]},"headers":[{"level":2,"title":"Client.pdfdeal","slug":"client-pdfdeal","link":"#client-pdfdeal","children":[{"level":3,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":3,"title":"Return Values","slug":"return-values","link":"#return-values","children":[]},{"level":3,"title":"Notes","slug":"notes","link":"#notes","children":[]}]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Recognize all PDFs in a folder and output as recognized PDFs","slug":"recognize-all-pdfs-in-a-folder-and-output-as-recognized-pdfs","link":"#recognize-all-pdfs-in-a-folder-and-output-as-recognized-pdfs","children":[]}]}],"git":{"createdTime":1720786317000,"updatedTime":1729261059000,"contributors":[{"name":"Menghuan1918","email":"Menghuan2003@outlook.com","commits":1}]},"readingTime":{"minutes":2.16,"words":649},"filePathRelative":"guide/V1/Doc2X/3.md","localizedDate":"July 12, 2024","autoDesc":true}');export{F as comp,m as data};