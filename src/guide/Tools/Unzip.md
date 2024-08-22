---
title: Unzip file processing
icon: file-zipper
---

## `unzips`

Extracts the ZIP file and returns the path to the extracted folder.

### Parameters

| Parameter | Type | Default | Description |
| ----------- | ------ | ------ | ----------------------------------------------------------- |
| `zip_paths` | `list` | Required | List of ZIP file paths |
| `rename` | `bool` | `True` | Whether to rename extracted `.md` or `.tex` files to the name of the extracted folder |

### Return value

Returns a tuple `(list1, list2, bool)` with three elements:

1. `list1` (`list`): list of extracted file paths

   - The elements are the extracted file paths (strings)
   - If some files fail to be extracted, the corresponding element is an empty string `“”`.

2. `list2` (`list`): list of error messages and paths to the original files.

   - The elements are strings containing error messages and paths to the original files.
   - If some files were successfully decompressed, the corresponding element is an empty string `“”`

3. `bool` (`bool`): Processing state
   - `True`: At least one file failed to be processed.
   - `False`: All files were processed successfully.

### Note

- `list1` and `list2` have the same length.
- If the `rename` parameter is `True`, the unpacked `.md` or `.tex` file will be renamed to the name of the unpacked folder, which is designed for Doc2X to export md files.

### Code example

```python
from pdfdeal.file_tools import unzips
zips = []
for file in success:
    if file.endswith(".zip"):
        zips.append(file)

success, failed, flag = unzips(zip_paths=zips)
```
