---
title: 文件处理工具
icon: file-import
---

请参照右侧的目录查看您要使用的工具。

## 替换Markdown文件中的图片链接为本地文件链接

`from pdfdeal.file_tools import md_replace_imgs`

### 参数

| 参数 | 类型 | 是否必须 | 默认值 | 描述 |
|------|------|----------|--------|------|
| `mdfile` | `str` | 是 | - | Markdown 文件路径 |
| `replace` | `str` | 是 | - | 替换类型，目前仅支持 `"local"`，未来将添加 `"R2"`、`"S3"`、`"OSS"` 等选项 |
| `outputpath` | `str` | 是 | - | 保存图片的输出路径 |
| `relative` | `bool` | 否 | `False` | 是否使用相对路径保存图片，默认为 `False` |

### 返回值

返回一个布尔值：

- `True`: 所有图片下载成功并替换链接
- `False`: 部分或全部图片下载失败

### 注意事项

- 如果 Markdown 文件中没有找到图片链接，函数将打印提示信息并返回 `True`
- 如果部分图片下载失败，函数将打印错误信息并返回 `False`
- 下载的图片将保存在指定的输出路径中，并根据 `relative` 参数决定是否使用相对路径

### 示例

```python
from pdfdeal.file_tools import md_replace_imgs

md_replace_imgs(
    mdfile="Output/sample.md",
    replace="local",
    outputpath="./Output/test/md_replace_imgs",
)
```

## 获得某个文件夹中的PDF/图片文件

`from pdfdeal.file_tools import get_files`

生成文件夹中文件的列表，保持文件处理前后的结构不变。

### 参数

| 参数 | 类型 | 是否必须 | 默认值 | 描述 |
|------|------|----------|--------|------|
| `path` | `str` | 是 | - | 要处理的文件夹路径 |
| `mode` | `str` | 是 | - | 要处理的文件类型，`'pdf'` 或 `'img'` |
| `out` | `str` | 是 | - | 要输出的文件类型，`'md'`, `'md_dollar'`, `'latex'`, `'docx'` 或 `'pdf'`（用于 RAG 时） |

### 返回值

返回一个包含两个列表的元组 `(full_paths, relative_paths)`：

1. `full_paths` (`list`): 文件的完整路径列表
   - 元素为文件的完整路径（字符串）

2. `relative_paths` (`list`): 文件的相对路径列表
   - 元素为文件的相对路径（字符串），用于输入和输出格式

### 注意事项

- `full_paths` 和 `relative_paths` 的长度相同
- 如果 `path` 是一个文件而不是文件夹，并且文件扩展名符合 `mode` 指定的类型，则直接返回该文件的完整路径和相对路径
- 如果 `out` 不是 `'pdf'`，则将其转换为相应的输出格式，并设置为 `'zip'` 除非是 `'docx'`

## 获得某个文件夹中的指定文件

`from pdfdeal.file_tools import gen_folder_list`

生成指定文件夹中所有指定类型的文件列表。

### 参数

| 参数 | 类型 | 是否必须 | 默认值 | 描述 |
|------|------|----------|--------|------|
| `path` | `str` | 是 | - | 要处理的文件夹路径 |
| `mode` | `str` | 是 | - | 要查找的文件类型，可选值：`"pdf"`, `"img"`, `"md"` |

### 异常

| 异常 | 描述 |
|------|------|
| `ValueError` | 当 `mode` 不是 `"pdf"`, `"img"` 或 `"md"` 时抛出 |

### 返回值

| 类型 | 描述 |
|------|------|
| `list` | 包含所有指定类型文件的完整路径的列表 |

### 注意事项

- 当 `mode` 为 `"img"` 时，查找的图像文件类型包括 `.png`, `.jpg`, 和 `.jpeg`。