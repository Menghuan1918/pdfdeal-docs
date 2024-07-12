---
title: File Processing Tools
icon: file-import
---

Please refer to the directory on the right to find the tool you want to use.

## Replace Image Links in Markdown Files with Local File Links

`from pdfdeal.file_tools import md_replace_imgs`

### Parameters

| Parameter | Type | Required | Default Value | Description |
|-----------|------|----------|---------------|-------------|
| `mdfile` | `str` | Yes | - | Path to the Markdown file |
| `replace` | `str` | Yes | - | Replacement type, currently only supports `"local"`, future options will include `"R2"`, `"S3"`, `"OSS"` etc. |
| `outputpath` | `str` | Yes | - | Output path for saving images |
| `relative` | `bool` | No | `False` | Whether to save images using relative paths, default is `False` |

### Return Value

Returns a boolean value:

- `True`: All images downloaded successfully and links replaced
- `False`: Some or all images failed to download

### Notes

- If no image links are found in the Markdown file, the function will print a prompt and return `True`
- If some images fail to download, the function will print an error message and return `False`
- Downloaded images will be saved in the specified output path, and whether to use relative paths is determined by the `relative` parameter

### Example

```python
from pdfdeal.file_tools import md_replace_imgs

md_replace_imgs(
    mdfile="Output/sample.md",
    replace="local",
    outputpath="./Output/test/md_replace_imgs",
)
```

## Get PDF/Image Files from a Folder

`from pdfdeal.file_tools import get_files`

Generates a list of files in a folder, maintaining the structure before and after processing.

### Parameters

| Parameter | Type | Required | Default Value | Description |
|-----------|------|----------|---------------|-------------|
| `path` | `str` | Yes | - | Path of the folder to process |
| `mode` | `str` | Yes | - | Type of files to process, `'pdf'` or `'img'` |
| `out`  | `str`  | Yes  | -  | Type of output files, `'md'`, `'md_dollar'`, `'latex'`, `'docx'`, or `'pdf'` (used for RAG) |

### Return Value

Returns a tuple `(full_paths, relative_paths)` containing two lists:

1. `full_paths` (`list`) : List of full file paths
   - Elements are complete file paths (strings)

2. `relative_paths` (`list`) : List of relative file paths
   - Elements are relative file paths (strings), used for input and output formats

### Notes

- The lengths of `full_paths` and `relative_paths` are identical
- If the `path` is a file instead of a folder and its extension matches the type specified by `mode`, it directly returns its full path and relative path
- If the output type is not `'pdf'`, it converts it to the corresponding output format and sets it as `'zip'`, unless it is `'docx'`

## Get Specified Files from a Folder

`from pdfdeal.file_tools import gen_folder_list`

Generates a list of all specified types of files in a given folder.

### Parameters

| Parameter  | Type  | Required  | Default Value  | Description  |
|-|-|-|-|-|
| path    |'str'    |'Yes'    |-    |'Path of the folder to process'
|'mode'    |'str'    |'Yes'    |-    |'Type of files to search for, options: `"pdf"`, `"img"`, `"md"`|

### Exceptions

|Except|Why|
|-|-|
|'ValueError'    |'Raised when mode is not `"pdf"`, `"img"` or `"md"`|

### Return Value

|Except|Why|
|-|-|
|'list'    |'List containing full paths of all specified types of files'

### Notes

- When mode is `"img"`, image file types include `.png`, `.jpg`, and `.jpeg`.