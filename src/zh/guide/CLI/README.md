---
title: 命令行工具
icon: code
---

## `doc2x` 命令使用说明<Badge text="需要0.4.2+版本" type="warning" />

`doc2x` 命令用于批量处理 PDF 或图片文件，将其转换为多种输出格式。

您可以直接输入`pythom -m doc2x`，其会引导您输入剩余的必须参数。

## 位置参数

- `filename`: 待处理的 PDF 文件或文件夹。

## 可选参数

- `-h, --help`: 显示帮助信息并退出。
- `-y`: 跳过任何需要用户二次输入的场景。
- `-k, --api_key API_KEY`: Doc2X 的 API 密钥，如果未设置，将从环境变量中读取。
- `--thread THREAD`: 请求的线程限制，默认为5。除非您确信您需要修改，请使用默认值。
- `--max_pages MAX_PAGES`: 同时处理的最大页数，默认为 1000。除非您确信您需要修改，请使用默认值。
- `-o, --output OUTPUT`: 结果的输出文件夹，如果未设置，默认为 './Output'。
- `-f, --format {md,md_dollar,tex,docx}`: 结果的输出格式，接受 md、md_dollar、tex、docx，默认为 md_dollar。
- `--graphrag`: 将 md 文档转换为 txt 形式，用于输出为 graphRAG 接受的 txt 形式。此时输出格式需要为 md 或 md_dollar。
- `--unzip`: 解压输出文件，仅在输出为 zip 文件时有效。

## 示例

### 将./pdf 文件夹中所有 pdf 转换为 graphRAG 接受的 txt 格式

```bash
doc2x -k "YOUR_KEY_HERE" -o ./ragtest/input --graphrag ./pdf
```

### 将./pdf 文件夹中所有 pdf 文件转换为 md 文件并自动解压

```bash
doc2x -o ./Output --unzip ./pdf
```
