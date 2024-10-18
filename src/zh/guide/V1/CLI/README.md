---
title: 命令行工具
icon: code
---

## `doc2x` 命令使用说明

`doc2x` 命令用于批量处理 PDF 或图片文件，将其转换为多种输出格式。

您可以直接输入`pythom -m doc2x`，其会启动向导程序来引导您输入剩余的必须参数。

### 新版特征

==0.2.4== 或更高版本中将会在解压时自动重命名文件为其源名字，以替换默认的 UUID 命名方式。

::: tabs#python

@tab 0.2.3 或更低版本

使用命令`doc2x -p -o ./Output --unzip ./pdf `，最终得到文件：

```bash
./Output/pdf
├── sample
│   └── 01914b6c-5e17-7bd7-a7ac-ce5835a1ecaa_md_dollar.md
└── test
    └── sampleB
        └── 01914b6c-5e2f-7a7b-bcbc-f3ad5ea6ed6c_md_dollar.md
```

@tab 0.2.4 或更高版本

使用命令`doc2x -p -o ./Output --unzip ./pdf `，最终得到文件：

```bash
./Output/pdf
├── sample
│   └── sample.md
└── test
    └── sampleB
        └── sampleB.md
```

:::

### 位置参数

| 参数       | 描述                           |
| ---------- | ------------------------------ |
| `filename` | 待处理的 PDF 或图片文件/文件夹 |

### 可选参数

| 短标志       | 长标志       | 描述                                                                                                           |
| ------------ | ------------ | -------------------------------------------------------------------------------------------------------------- |
| `-h`         | `--help`     | 显示帮助信息并退出                                                                                             |
| `-y`         |              | 跳过任何需要用户二次输入的场景                                                                                 |
| `-k`         | `--api_key`  | Doc2X 的 API 密钥，如果未设置，将使用全局设置                                                                  |
| `-r`         | `--rpm`      | Doc2X 的速率限制，如果不清楚请不要设置                                                                         |
| `-o`         | `--output`   | 结果的输出文件夹，如果未设置，将默认输出到 './Output'                                                          |
| `-f`         | `--format`   | 结果的输出格式，支持 `md`、`md_dollar`、`latex`、`docx`，默认是 `md_dollar`                                    |
| `-i`         | `--image`    | 如果输入是图片，设置此标志为 True，否则会询问用户                                                              |
| `-p`         | `--pdf`      | 如果输入是 PDF，设置此标志为 True，否则会询问用户                                                              |
| `--equation` |              | 是否使用纯公式模式，仅对图片有效，默认是 False                                                                 |
| `-c`         | `--clear`    | 清除所有关于 Doc2X 的全局设置                                                                                  |
|              | `--graphrag` | 将 md 文档转换为 txt 格式，用于将输出转换为 graphRAG 可接受的 txt 格式。此时输出格式需要指定为 md 或 md_dollar |
|              | `--unzip`    | 自动将 zip 文件解压(当非 docx 输出格式时默认输出是一个 zip 压缩包)                                             |

您可以直接输入`pythom -m doc2x`来运行程序，其会引导您输入剩余所需的参数。注意此时输出路径会是默认的'./Output'，格式为默认的`md_dollar`

## 示例

### 清除本地储存的密匙设定

```bash
doc2x -c
```

### 将./pdf 文件夹中所有 pdf 转换为 graphRAG 接受的 txt 格式

```bash
doc2x -k "YOUR_KEY_HERE" -o ./ragtest/input -p --graphrag ./pdf
```

### 将./pdf 文件夹中所有 pdf 文件转换为 md 文件并自动解压

```bash
doc2x -p -o ./Output --unzip ./pdf
```
