---
title: MD文档拆分
icon: scissors
---

此工具需要您使用 ==0.2.4== 或更高版本。

这个工具将会尝试按照标题对 MD 文档进行拆分，并为其添加分段标识符，以方便与其他 RAG 工具(例如fastgpt，Dify等)结合使用。

目录：

- [处理单个 MD 文档](#auto-split-md)
- [处理某个目录中的 MD 文档](#auto-split-mds)

## auto_split_md

自动分割 Markdown 文件。

### 参数

| 参数          | 类型  | 默认值                | 描述                                                                      |
| ------------- | ----- | --------------------- | ------------------------------------------------------------------------- |
| `mdfile`      | `str` | 必填                  | Markdown 文件路径                                                         |
| `mode`        | `str` | `"title"`             | 分割方式。**目前仅支持 `title`（按标题分割）**                            |
| `out_type`    | `str` | `"single"`            | 输出方式。目前仅支持 `single`（输出为一个文件）和 `replace`（替换原文件） |
| `split_str`   | `str` | `"=+=+=+=+=+=+=+=+="` | 用于分割 Markdown 文件的字符串                                            |
| `output_path` | `str` | `"./Output"`          | 输出文件路径。当 `out_type` 为 `replace` 时无效                           |

### 返回值

返回一个包含两个元素的元组 `(str, bool)`：

1. `str`: 输出文件路径
2. `bool`: 文件是否被分割

### 注意事项

- 目前仅支持按标题分割
- 输出方式目前仅支持输出为一个文件或替换原文件

## auto_split_mds

将文件夹中的 Markdown 文件进行分割。

### 参数

| 参数          | 类型   | 默认值                | 描述                                                                      |
| ------------- | ------ | --------------------- | ------------------------------------------------------------------------- |
| `mdpath`      | `str`  | 必填                  | 包含 Markdown 文件的文件夹路径                                            |
| `mode`        | `str`  | `"title"`             | 分割方式。**目前仅支持 `title`（按标题分割）**                            |
| `out_type`    | `str`  | `"single"`            | 输出方式。目前仅支持 `single`（输出为一个文件）和 `replace`（替换原文件） |
| `split_str`   | `str`  | `"=+=+=+=+=+=+=+=+="` | 用于分割 Markdown 文件的字符串                                            |
| `output_path` | `str`  | `"./Output"`          | 输出分割文件的路径。当 `out_type` 为 `replace` 时无效                     |
| `recursive`   | `bool` | `True`                | 是否递归搜索子目录                                                        |

### 返回值

返回一个包含三个元素的元组 `(list1, list2, bool)`：

1. `list1` (`list`): 输出文件列表

   - 元素为输出文件路径（字符串）
   - 如果某些文件未成功分割，则元素为空字符串 `""`

2. `list2` (`list`): 错误信息及其原始文件路径列表

   - 元素为字典，包含两个键：
     - `'error'`: 错误信息（字符串）
     - `'path'`: 原始文件路径（字符串）
   - 如果某些文件成功分割，则元素为空字符串 `""`

3. `bool` (`bool`): 处理状态
   - `True`: 至少有一个文件处理失败
   - `False`: 全部文件处理成功

### 注意事项

- `list1` 和 `list2` 的长度相同
- 当 `out_type` 为 `replace` 时，`output_path` 参数无效

```python
from pdfdeal.file_tools import auto_split_mds

succese, failed, flag = auto_split_mds(mdpath="Output", out_type="replace")
print(succese, failed, flag)
```
