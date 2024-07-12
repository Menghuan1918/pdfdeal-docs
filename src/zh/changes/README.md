---
title: 更新日志
icon: wrench
---

## V0.2.0

> [!caution]
> 本次版本有重大接口更新(影响范围：全部）
>
> - 函数返回参数变动，请查看[更新详细](0.2.0.md)以查看如何迁移

### ✨ 功能变动

- 新增CLI命令行程序`doc2x`，用于快速使用doc2x批量处理 PDF 或图片文件，使用请参见[此处](../guide/CLI/README.md)
- 更新Doc2X文件翻译函数，使用[参见此处](../guide/Doc2X/5.md)
- 增强了异常处理
- 函数返回参数变动，会返回更多更详细的内容
- 解耦处理过程中的各个部分

### 🔧 BUG修复

- [Doc2X] 使用个人API时，如输入的文件有多个文件损坏，可能会导致无限循环
- [FileTool] `get_files`函数不能接受`pdf`输出格式

### 🚀 其他

- 文档更新至单独的储存库[pdfdeal-docs](https://github.com/Menghuan1918/pdfdeal-docs)
- 更新了单元测试