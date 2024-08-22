---
title: 文件解压处理
icon: file-zipper
---

## `unzips`

解压 ZIP 文件并返回提取文件夹的路径。

### 参数

| 参数        | 类型   | 默认值 | 描述                                                        |
| ----------- | ------ | ------ | ----------------------------------------------------------- |
| `zip_paths` | `list` | 必填   | ZIP 文件路径列表                                            |
| `rename`    | `bool` | `True` | 是否将解压后的 `.md` 或 `.tex` 文件重命名为解压文件夹的名称 |

### 返回值

返回一个包含三个元素的元组 `(list1, list2, bool)`：

1. `list1` (`list`): 提取的文件路径列表

   - 元素为提取后的文件路径（字符串）
   - 如果某些文件解压失败，对应的元素为空字符串 `""`

2. `list2` (`list`): 错误信息和原始文件路径列表

   - 元素为字符串，包含错误信息和原始文件路径
   - 如果某些文件成功解压，对应的元素为空字符串 `""`

3. `bool` (`bool`): 处理状态
   - `True`: 至少有一个文件处理失败
   - `False`: 全部文件处理成功

### 注意事项

- `list1` 和 `list2` 的长度相同
- 如果 `rename` 参数为 `True`，解压后的 `.md` 或 `.tex` 文件将被重命名为解压文件夹的名称，这个功能是为 Doc2X 导出 md 文件设计的

### 示范代码

```python
from pdfdeal.file_tools import unzips
zips = []
for file in success:
    if file.endswith(".zip"):
        zips.append(file)

success, failed, flag = unzips(zip_paths=zips)
```
