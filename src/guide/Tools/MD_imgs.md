---
title: MD Document Image Processing
icon: photo-film
---
This tool requires you to use version ==0.2.4== or higher.

This tool searches for image links (local/online) in MD documents, and first tries to download all the online links to local, and then passes them to the subsequent processing functions for processing (save to local/upload to AliCloud OSS/custom function processing).

If you want to upload to a remote storage service, you need to work with the [Image Upload Tool](. /Upload.md).

If you only need to download online images to local, you just need to pass the string `local` to the entry `replace`.

> [!warning]
> This tool will replace the contents of the source file, please take care to backup your file data.

Catalog:
- [Processing a single MD document](#md-replace-imgs)
- [Process MD documents in a directory](#mds-replace-imgs)

## `md_replace_imgs`

Replace image links in a single Markdown file (CDN Links -> Local Files/AliOSS/Custom).

### Parameters

| Parameter | Type | Default | Description |
|------|------|----------|--------|
| `mdfile` | `str` | Required | Markdown file path |
| `replace` | `str` or `function` | `“local”` | Strings or **functions** used to replace image links. Only accepts `“local”` | `str` or `function` | `“local”` | strings for replacing image links.
| ``skip` | `str` | `None` | URLs that start with this string will be skipped. For example, `“https://menghuan1918.github.io/pdfdeal-docs”` |
| ``outputpath` | `str` | `“”` | saves the output path of the image. If not set, a folder with the same name as the Markdown file will be created with `_img` added. **Only works if `replace` is `“local”` |
| `relative` | `bool` | `False` | Saves images using relative paths. **Valid only if `replace` is `“local”` |
| `threads` | `int` | `5` | Number of threads to download the image |

### Return Value

| Type | Description |
|------|--------|
| `bool` | Returns `True` if all images were downloaded successfully, otherwise returns `False` |

### Notes

- The `outputpath` and `relative` parameters are valid when `replace` is `“local”`.
- If `outputpath` is not set, a folder with the same name as the Markdown file and the addition of `_img` is automatically created to hold the images.

### Example

> [!note]
> If you want to see examples of uploads to different remote storage services, see [here](./Upload.md)

```python
from pdfdeal.file_tools import md_replace_imgs
md_replace_imgs(
    mdfile="Output/1706.03762-2024-08-11 17-06-35.md",
    outputpath="./ABC"
    replace="local",
    threads=5,
)
```

## `mds_replace_imgs`

Replace image links in all Markdown files in the specified path (CDN Links -> Local Files/AliOSS/Custom).

### Parameters

| Parameter | Type | Default | Description |
|------|------|----------|--------|
| `path` | `str` | Required | Markdown file path |
| `replace` | `str` or `function` | `“local”` | Strings or **functions** used to replace image links. Only accepts `“local”` | `str` or `function` | `“local”` | for replacing image links.
| ``outputpath` | `str` | `“”` | Save the output path of the image. If not set, a folder with the same name as the Markdown file will be created with `_img` added. **Only works if `replace` is `“local”`** |
| `relative` | `bool` | `False` | Whether to save the image as a relative path.  **Only valid if `replace` is `"loca"`** |
| ``skip` | `str` | `None` | URLs starting with this string will be skipped. For example, `“https://menghuan1918.github.io/pdfdeal-docs”` |
| `threads` | `int` | `2` | Number of MD documents processed simultaneously |
| `down_load_threads` | `int` | `3` | Number of threads downloading images in a Markdown file |

### Return value

Returns a tuple `(list1, list2, bool)` with three elements:

1. `list1` (`list`): A list of successfully processed Markdown file paths.
   - element is the path to the processed file (string)
   - The element is the path of the processed file (a string).

2. `list2` (`list`): A list of files that failed to be processed.
   - The element is a dictionary with two keys:
     - `'error'`: error message (string)
     - `'path'`: path to the file that failed processing (string)
   - The value of both keys is the empty string if processing was successful.

3. `bool` (`bool`): Processing state
   - `True`: All files were processed successfully.
   - `False`: At least one file was not processed.

### Note

- `list1` and `list2` are the same length.
- The `outputpath` and `relative` parameters are only valid if `replace` is `“local”`.

### Example

> [!note]
> If you want to see examples of uploads to different remote storage services, see [here]( /Upload.md)

```python
mds_replace_imgs(
    path="Output",
    replace="local",
    skip="https://menghuan1918.github.io/pdfdeal-docs",
    threads=5,
)
```