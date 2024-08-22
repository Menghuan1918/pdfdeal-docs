---
title: File Directory Acquisition Tool
icon: folder-tree
---

Directory:
- [Generate only a list of format-specific files in the specified directory](#gen-folder-list)
- [Combine with other functions to generate a list of format-specific files in the specified directory and leave the output file with its original file structure](#get-files)

## `gen_folder_list`

Generates a list of all files of the specified type in the folder.

### Parameters

| Parameter | Type | Default | Description |
|------|------|----------|--------|
| `path` | `str` | Required | Path to folder to process |
| `mode` | `str` | mandatory | File types to look for, optional: `'pdf'`, `'img'`, `'md'` |
| `recursive` | `bool` | `False` | Whether to recursively search subdirectories |

### Exceptions

|Exception | Description |
|------|--------|
| `ValueError` | if `mode` is not `'pdf'`, `'img'` or `'md'` |

| Type | Description

| type | description |
|------|--------|
| `list` | List of full paths to files |

### Example code

```python
files = gen_folder_list("/path/to/folder", "pdf", True)
print(files)
```

### Note

- This function filters files of the specified type according to the `mode` parameter.
- If `recursive` is `True`, files in subdirectories are searched recursively.


## `get_files`

Generates a list of files in a folder, keeping the structure of the files the same before and after processing.

### Parameters

> [!warning]
> Note that the `out` parameter **must** be associated with a conversion function (e.g. [Doc2X PDF conversion function](../Doc2X/2.md)/[Doc2X image conversion function](../Doc2X/1.md)) in `output_format` **consistent**!

| Parameters | Type | Default Value | Description |
|------|------|----------|--------|
| `path` | `str` | Mandatory | Path to folder to process |
| `mode` | `str` | Required | File type to process, ``pdf`` or ``img`` |
| `out` | `str` | Mandatory | Type of file to output, `'md'`, `'md_dollar'`, `'latex'`, `'docx'` or `'pdf'` (when used in a RAG) | `mode` | `str` | Mandatory | Path to the file to process, `'pdf'` or `'img'`.

### Return value

Returns a tuple `(list1, list2)` containing two lists:

1. `list1` (`list`): list of full paths
   - Elements are full paths to files (strings).

2. `list2` (`list`): list of relative paths.
   - The element is the relative path to the file (string).

### Note

- `list1` and `list2` are the same length.
- For `input` and `output_format`, these path lists can be used