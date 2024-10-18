---
title: V1 API Migration Guide
---

**In most cases, you do not need to change any code**, as version `0.4.X` is largely backward compatible with version `0.3.1`. Below are some notable changes:

## Initialization

**No code changes required**

### New Optional Parameters

| Parameter Name | Type  | Default Value | Description                                                                 |
|----------------|-------|---------------|-----------------------------------------------------------------------------|
| `max_pages`    | int   | 1000          | Maximum number of pages to process. Unless you are certain you need to change this, please use the default value. |
| `retry_time`   | int   | 15            | Maximum retry attempts. Unless you are certain you need to change this, please use the default value.           |
| `max_time`     | int   | 90            | Maximum response wait time (in seconds). Unless you are certain you need to change this, please use the default value. |
| `debug`        | bool  | False         | Whether to enable debug logging.                                           |

## PDF Conversion


### Parameter Changes

If you wish to export a LaTeX document, the **`output_format` parameter needs to be changed from `latex` to `tex`**.

::: tabs

@tab Version 0.3.9
```python
from pdfdeal import Doc2X

client = Doc2X()
filepath, _, _ = client.pdf2file(
    "tests/pdf/sample.pdf", output_format="latex"
)
print(filepath)
```
@tab Version 0.4.X
```python
from pdfdeal import Doc2X

client = Doc2X()
filepath, _, _ = client.pdf2file(
    "tests/pdf/sample.pdf", output_format="tex"
)
print(filepath)
```
:::

### Code Simplification

The `pdf2file` function will automatically recognize whether the input is a `folder path`/`file path`/`list of file paths` and process it accordingly. It will also automatically maintain the original file structure, eliminating the need for manual intervention. You can now **directly pass the folder path** to `pdf2file`:

::: tabs

@tab Version 0.3.9
```python
from pdfdeal import Doc2X
from pdfdeal import get_files
Client = Doc2X()
file_list, rename_list = get_files(
    path="./tests/pdf", mode="pdf", out="docx"
)
success, failed, flag = Client.pdf2file(
    pdf_file=file_list,
    output_path="./Output/newfolder",
    output_names=rename_list,
    output_format="docx",
)
print(success)
print(failed)
print(flag)
```
@tab Version 0.4.X
```python
from pdfdeal import Doc2X

Client = Doc2X()
success, failed, flag = Client.pdf2file(
    pdf_file="./tests/pdf",
    output_path="./Output/newfolder",
    output_format="docx",
)
print(success)
print(failed)
print(flag)
```
:::

### New Optional Parameters

| Parameter Name  | Type  | Description                                                                                                                                    | Optional | Default Value |
|-----------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------|----------|---------------|
| `output_format` | `str` | Desired output format. Supported text formats include: `md_dollar`, `md`, `tex`, `docx`, with successful return values being the file location. Supported variable formats include: `txt`, `txts`, `detailed`, with successful return values being: `string in markdown format`, `list of strings split by page`, `list of strings split by page (including detailed page information)` | Yes      | `md_dollar`   |

## Quota Retrieval

Doc2X has not yet released any quota retrieval API.

## Image Conversion

Doc2X has not yet released any image API.