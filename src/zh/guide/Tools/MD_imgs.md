---
title: MD文档图片处理
icon: photo-film
---
您可能需要安装一些额外依赖以使用：

```bash
pip install --upgrade "pdfdeal[rag]"
```

这个工具会搜索MD文档中的图片链接(本地/在线)，并首先尝试将所有在线链接的图片下载到本地，随后交给后续处理函数进行处理(保存到本地/上传到阿里云OSS/自定义函数处理)。

如果您想要上传到远端储存服务，您需要与[图片上传工具](./Upload.md)结合使用。

如果您仅需要将在线图片下载到本地，您仅需要给入参`replace`传递字符串`local`即可。

> [!warning]
> 这个工具将会替换源文件中的内容，请注意您的文件数据备份

目录：
- [处理单个MD文档](#md-replace-imgs)
- [处理某个目录中的MD文档](#mds-replace-imgs)

## `md_replace_imgs`

替换单个 Markdown 文件中的图片链接（CDN 链接 -> 本地文件/阿里OSS/自定义）。

### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|----------|--------|
| `mdfile` | `str` | 必填 | Markdown 文件路径 |
| `replace` | `str` 或 `function` | `"local"` | 用于替换图片链接的字符串或**函数**。当为字符串时仅接受 `"local"`  |
| `skip` | `str` | `None` | 以该字符串开头的 URL 将被跳过。例如，`"https://menghuan1918.github.io/pdfdeal-docs"` |
| `outputpath` | `str` | `""` | 保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 `_img` 的文件夹。**仅在 `replace` 为 `"local"` 时有效** |
| `relative` | `bool` | `False` | 使用相对路径保存图片。**仅在 `replace` 为 `"local"` 时有效** |
| `threads` | `int` | `5` | 下载图片的线程数 |

### 返回值

| 类型 | 描述 |
|------|--------|
| `bool` | 如果所有图片都成功下载，返回 `True`，否则返回 `False` |

### 注意事项

- 当 `replace` 为 `"local"` 时，`outputpath` 和 `relative` 参数才有效。
- 如果 `outputpath` 未设置，将自动创建一个与 Markdown 文件同名并添加 `_img` 的文件夹来保存图片。

### 示例

> [!note]
> 如您想查看上传到不同远端储存服务的示例，请参见[此处](./Upload.md)

```python
from pdfdeal.file_tools import md_replace_imgs
md_replace_imgs(
    mdfile="Output/1706.03762-2024-08-11 17-06-35.md",
    outputpath="./ABC"，
    replace="local",
    threads=5,
)
```

## `mds_replace_imgs`

替换指定路径中所有 Markdown 文件中的图片链接（CDN 链接 -> 本地文件/阿里OSS/自定义）。

### 参数

| 参数 | 类型 | 默认值 | 描述 |
|------|------|----------|--------|
| `path` | `str` | 必填 | Markdown 文件路径 |
| `replace` | `str` 或 `function` | `"local"` | 用于替换图片链接的字符串或**函数**。当为字符串时仅接受 `"local"` |
| `outputpath` | `str` | `""` | 保存图片的输出路径。如果未设置，将创建一个与 Markdown 文件同名并添加 `_img` 的文件夹。**仅在 `replace` 为 `"local"` 时有效** |
| `relative` | `bool` | `False` | 是否以相对路径保存图片。**仅在 `replace` 为 `"local"` 时有效** |
| `skip` | `str` | `None` | 以该字符串开头的 URL 将被跳过。例如，`"https://menghuan1918.github.io/pdfdeal-docs"` |
| `threads` | `int` | `2` | 同时处理的MD文档数量 |
| `down_load_threads` | `int` | `3` | 在一个 Markdown 文件中下载图片的线程数 |

### 返回值

返回一个包含三个元素的元组 `(list1, list2, bool)`：

1. `list1` (`list`): 成功处理的 Markdown 文件路径列表
   - 元素为处理后的文件路径（字符串）
   - 处理失败时为空字符串

2. `list2` (`list`): 处理失败的文件列表
   - 元素为字典，包含两个键：
     - `'error'`: 错误信息（字符串）
     - `'path'`: 处理失败的文件路径（字符串）
   - 处理成功时，两个键的值均为空字符串

3. `bool` (`bool`): 处理状态
   - `True`: 全部文件处理成功
   - `False`: 至少有一个文件处理失败

### 注意事项

- `list1` 和 `list2` 的长度相同
- 仅在 `replace` 为 `"local"` 时，`outputpath` 和 `relative` 参数才有效

### 示例

> [!note]
> 如您想查看上传到不同远端储存服务的示例，请参见[此处](./Upload.md)

```python
mds_replace_imgs(
    path="Output",
    replace="local",
    skip="https://menghuan1918.github.io/pdfdeal-docs",
    threads=5,
)
```