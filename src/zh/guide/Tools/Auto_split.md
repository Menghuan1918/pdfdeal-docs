---
title: MD文档拆分
icon: scissors
---
此工具需要您使用 ==0.2.4== 或更高版本。

这个工具将会尝试按照标题对MD文档进行拆分，并为其添加分段标识符，以方便与其他RAG工具结合使用。

目录：
- [处理单个MD文档](#md_replace_imgs)
- [处理某个目录中的MD文档](#mds_replace_imgs)

## `auto_split_md`

自动分割 Markdown 文件。

### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|----------|--------|
| `mdfile` | `str` | 必填 | Markdown 文件路径 |
| `mode` | `str` | `"title"` | 分割方式。**目前仅支持 `title`（按标题分割）** |
| `out_type` | `str` | `"single"` | 输出方式。目前仅支持 `single`（输出为一个文件）和 `replace`（替换原文件） |
| `split_str` | `str` | `"=+=+=+=+=+=+=+=+="` | 用于分割 Markdown 文件的字符串 |
| `output_path` | `str` | `"./Output"` | 输出文件路径。当 `out_type` 为 `replace` 时无效 |

### 返回值

返回一个包含两个元素的元组 `(str, bool)`：

1. `str`: 输出文件路径
2. `bool`: 文件是否被分割

### 注意事项

- 目前仅支持按标题分割
- 输出方式目前仅支持输出为一个文件或替换原文件

