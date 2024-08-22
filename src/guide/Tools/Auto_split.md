---
title: MD Document Splitting
icon: scissors
---

This tool requires you to be using version ==0.2.4== or higher.

This tool will attempt to split MD documents by title and add segment identifiers to them for use with other RAG tools (e.g. fastgpt, Dify, etc.).

Catalog:

- [Processing a single MD document](#auto-split-md)
- [Process MD documents in a directory](#auto-split-mds)

## auto_split_md

Automatically split Markdown files.

### Parameters

| Parameter | Type | Default | Description |
| ------------- | ----- | --------------------- | ------------------------------------------------------------------------- |
| `mdfile` | `str` | Required | Markdown File Path |
| `mode` | `str` | `“title”` | Split mode. **Currently only `title` is supported** |
| `out_type` | `str` | `“single”` | Output mode. Currently supports `single` (output as a single file) and `replace` (replacing the original file) and `multi` (outputting multiple files by segment) | | `split_type` | `str` | `“single”` | Output methods.
| `split_str` | `str` | `“=+=+=+=+=+=+=+=+=+=”` | Strings for splitting Markdown files |
| `output_path` | `str` | `”. /Output"` | Output file path. Not valid when `out_type` is `replace` |

### Return value

Returns a tuple `(str, bool)` with two elements:

1. `str`: outputs the path of the file
2. `bool`: whether the file is split or not

### Notes

- Segmentation by title is only supported at present.
- When the output method is `multi`, multiple files will be output by segments, which will be named as `source file name + segment title.md`, and the path of the folder will be returned.

## auto_split_mds

Splits Markdown files in a folder.

### Parameters

| Parameter | Type | Default | Description |
| ------------- | ------ | --------------------- | ------------------------------------------------------------------------- |
| `mdpath` | `str` | Required | Path to the folder containing the Markdown files |
| `mode` | `str` | `“title”` | Split mode. **Currently only `title` is supported** |
| `out_type` | `str` | `“single”` | Output mode. Currently supports `single` (output as a single file) and `replace` (replacing the original file) and `multi` (outputting multiple files by segment) | | `split_type` | `str` | `“single”` | Output methods.
| `split_str` | `str` | `“=+=+=+=+=+=+=+=+=+=”` | Strings for splitting Markdown files |
| `output_path` | `str` | `”. /Output"` | | Output the path to the split file. Invalid when `out_type` is `replace` |
| `recursive` | `bool` | `True` | Whether to recursively search subdirectories |

### Return value

Returns a tuple `(list1, list2, bool)` with three elements:

1. `list1` (`list`): list of output files

   - Elements are output file paths (strings)
   - If some files are not successfully split, the element is the empty string `""`.

2. `list2` (`list`): List of error messages and their original file paths.

   - The elements are dictionaries containing two keys:
     - `'error'`: error message (string)
     - `'path'`: path to original file (string)
   - If some files are successfully split, the element is the empty string `""`.

3. `bool` (`bool`): Processing state
   - `True`: processing failed for at least one file
   - `False`: All files were processed successfully.

### Precautions

The lengths of `list1` and `list2` are the same
When `out_type` is `replace`, the `output_path` parameter is invalid
When the output mode is set to `multi`, multiple files will be outputted by section, named as `source filename + section title.md`, and at this time, the return is the folder path.

### Example code

```python
from pdfdeal.file_tools import auto_split_mds

succese, failed, flag = auto_split_mds(mdpath="Output", out_type="replace")
print(succese, failed, flag)
```
