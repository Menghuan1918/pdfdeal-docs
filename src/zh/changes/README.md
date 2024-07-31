---
title: 更新日志
icon: wrench
---

## V0.2.3

### 🔧 BUG修复

- 修复了无法在Jupyter Notebook中使用的问题
- 修复了`pdfdeal`函数中速率限制器没生效的问题

## V0.2.2

### ✨ 功能变动

- CLI命令行程序`doc2x`支持自动解压下载的压缩包

### 🔧 BUG修复

- 某些情况下，CLI命令行程序`doc2x`不能保存密匙到本地
- `替换Markdown文件中的图片链接为本地文件链接`功能保存图片格式错误(将jpg图片保存为png格式)

## V0.2.1

### ✨ 功能变动

- 更新适配新的doc2x速率限制规则，由每分钟请求数（RPM） -> 同时任务请求数。

### 🔧 BUG修复

- CLI命令行程序`doc2x`不能保存报错日志，仅能打印在终端中

## V0.2.0

> [!caution]
> 本次版本有重大接口更新(影响范围：全部）
>
> - 函数返回参数变动，请查看[更新详细](0.2.0.md)以查看如何迁移

### ✨ 功能变动

- 新增CLI命令行程序`doc2x`，用于快速使用doc2x批量处理 PDF 或图片文件，使用请参见[此处](../guide/CLI/README.md)
- 新增CLI命令对graphrag的适配，使用请参见[graphrag集成教程](../demo/graphrag.md)
- 更新Doc2X文件翻译功能，支持指定输出语言以及使用的模型，使用[参见此处](../guide/Doc2X/5.md)
- 增强了异常处理
- 函数返回参数变动，会返回更多更详细的内容
- 解耦处理过程中的各个部分

### 🔧 BUG修复

- [Doc2X] 使用个人API时，如输入的文件有多个文件损坏，可能会导致无限循环
- [FileTool] `get_files`函数不能接受`pdf`输出格式

### 🚀 其他

- 文档更新至单独的储存库[pdfdeal-docs](https://github.com/Menghuan1918/pdfdeal-docs)
- 更新了单元测试