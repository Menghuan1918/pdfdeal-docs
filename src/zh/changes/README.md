---
title: 更新日志
icon: wrench
---

## V0.4.0

> [!caution]
> Doc2X的V1接口将会在近期被弃用！请尽快迁移至V2接口。请查看[接口迁移指南](./v1tov2.md)，以查看您的场景是否有需要代码更改。
>
> **在大部分情况下，您不需要更改任何代码**，`0.4.X`版本会尽可能地向上兼容`0.3.1`版本。

### ✨ 功能变动

- 支持Doc2X V2接口
- `pdf2file`接口将会自动识别输入是`文件夹路径`/`文件路径`/`列表形式的文件路径`并进行处理，[查看](../guide/pdf.md)
- `pdf2file`将会自动保持原有文件结构，不再需要手动介入，[查看](../guide/pdf.md)
- 完善报错提示，现在其会尝试为报错提供解决方案

### 🚀 其他

- 优化包依赖，现在只需`httpx`和`pypdf`这两个小型包
- 提供了更为简便的debug日志开关

## V0.3.1

> [!caution]
> ==0.3.1版本==后更新输出为`logging`，默认情况下仅会输出Warning及以上等级的信息。如您希望查看处理过程，请设置`logging`等级为INFO：
> ```python
> import logging
> httpx_logger = logging.getLogger("httpx")
> httpx_logger.setLevel(logging.WARNING)
> logging.basicConfig(level=logging.INFO)
> ```

### 🚀 其他

- 更改包信息输出方式为`logging`模块，不会再输出一堆东西了

## V0.3.0

### ✨ 功能变动

- [文档拆分](../guide/Tools/Auto_split.md)支持按照段落输出多个文件
- 新增[文档解压功能](../guide/Tools/Unzip.md)

### 🔧 BUG 修复

- 修正了转换状态提示的用语
- 修复了无法打印报错堆栈的问题

### 🚀 其他

- 文档网页改进了Linux用户的体验(字体指定更加友好)
- 新增与RAG应用(例如Fastgpt，Dify等)结合使用的示范

## V0.2.5

### ✨ 功能变动

- 新增内置上传工具：S3

### 🔧 BUG 修复

- MD 文档图片上传工具无法处理相对路径图片的问题

### 🚀 其他

- 在 GitHub Action 中引入 Ruff 进行代码检查以及代码格式化检查

## V0.2.4

### ✨ 功能变动

- 新增 MD 文档自动拆分工具
- 新增 MD 文档图片上传工具
- 新增内置上传工具：阿里云 OSS
- CLI 工具会保留文件的源名字(而不是以 UUID 命名)

### 🔧 BUG 修复

- 修复了请求 status 失败时不会显示错误信息的问题

## V0.2.3

### 🔧 BUG 修复

- 修复了无法在 Jupyter Notebook 中使用的问题
- 修复了`pdfdeal`函数中速率限制器没生效的问题

## V0.2.2

### ✨ 功能变动

- CLI 命令行程序`doc2x`支持自动解压下载的压缩包

### 🔧 BUG 修复

- 某些情况下，CLI 命令行程序`doc2x`不能保存密匙到本地
- `替换Markdown文件中的图片链接为本地文件链接`功能保存图片格式错误(将 jpg 图片保存为 png 格式)

## V0.2.1

### ✨ 功能变动

- 更新适配新的 doc2x 速率限制规则，由每分钟请求数（RPM） -> 同时任务请求数。

### 🔧 BUG 修复

- CLI 命令行程序`doc2x`不能保存报错日志，仅能打印在终端中

## V0.2.0

> [!caution]
> 本次版本有重大接口更新(影响范围：全部）
>
> - 函数返回参数变动，请查看[更新详细](0.2.0.md)以查看如何迁移

### ✨ 功能变动

- 新增 CLI 命令行程序`doc2x`，用于快速使用 doc2x 批量处理 PDF 或图片文件，使用请参见[此处](../guide/CLI/README.md)
- 新增 CLI 命令对 graphrag 的适配，使用请参见[graphrag 集成教程](../demo/graphrag.md)
- 更新 Doc2X 文件翻译功能，支持指定输出语言以及使用的模型，使用[参见此处](../guide/Doc2X/5.md)
- 增强了异常处理
- 函数返回参数变动，会返回更多更详细的内容
- 解耦处理过程中的各个部分

### 🔧 BUG 修复

- [Doc2X] 使用个人 API 时，如输入的文件有多个文件损坏，可能会导致无限循环
- [FileTool] `get_files`函数不能接受`pdf`输出格式

### 🚀 其他

- 文档更新至单独的储存库[pdfdeal-docs](https://github.com/Menghuan1918/pdfdeal-docs)
- 更新了单元测试