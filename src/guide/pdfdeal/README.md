---
title: deal_pdf
icon: book-open
---

Use local OCR to recognize image text and clean up the format. Currently, built-in support includes: `easyocr` and `pytesseract`, of course, you can also customize the OCR function--this is also very simple.

## `deal_pdf`

Process PDF files and use OCR to improve their readability, suitable for RAG (Retrieval-Augmented Generation).

### Parameters

| Parameter | Type | Required | Default Value | Description |
|-----------|------|----------|---------------|-------------|
| `pdf_file` | `str` or `list` | Yes | - | Input PDF file path, supports string or string list |
| `output_format` | `str` | No | `"pdf"` | Output format, optional values: `"texts"`, `"md"`, `"pdf"` |
| `output_names` | `list` | No | `None` | Custom output file name list, length must be the same as `pdf_file` |
| `ocr` | `function` or `str` | No | `None` | Custom OCR/tool function, uses `easyocr` if not defined. Optional values: `"pytesseract"` to use pytesseract, `"pass"` to skip OCR |
| `language` | `list` | No | `["ch_sim", "en"]` | Languages used by OCR, default value is `["ch_sim", "en"]` (for easyocr), `["eng"]` (for pytesseract) |
| `GPU` | `bool` | No | `False` | Whether to use GPU in OCR, default value is `False`, not applicable for pytesseract |
| `output_path` | `str` | No | `"./Output"` | Output folder path, used only when output format is `"md"` or `"pdf"` |
| `option` | `dict` | No | `{}` | Options for OCR/tool |

### Return Values

Returns a tuple containing three elements `(list1, list2, status)`:

1. `list1` (`list`): List of successfully processed file paths
   - Elements are paths of processed files (strings)
   - Empty string if processing failed

2. `list2` (`list`): List of failed files
   - Elements are dictionaries containing two keys:
     - `'error'`: Error message (string)
     - `'file'`: Path of the failed file (string)
   - Both keys are empty strings if processing succeeded

3. `status` (`bool`): Processing status
   - `True`: At least one file processing failed
   - `False`: All files processed successfully

### Notes

- Lengths of both lists, `list1`, and `list2`, are the same
- When the output format is `"texts"`, text is returned directly without saving to a file
- The parameter ocr can be a custom OCR function or the name of a built-in OCR tool (such as `"easyocr"` or `"pytesseract"`)
- If output_names is not None, successfully processed files will be renamed as specified

## Using pytesseract

When using “pytesseract”, make sure tesseract is installed first [tesseract](https://github.com/tesseract-ocr/tesseract):

```bash
pip install 'pdfdeal[pytesseract]'
```

Example:

```python
from pdfdeal import deal_pdf, get_files

files, rename = get_files("tests/pdf", "pdf", "md")
output_path, failed, flag = deal_pdf(
    pdf_file=files,
    output_format="md",
    ocr="pytesseract",
    language=["eng"],
    output_path="Output",
    output_names=rename,
)
for f in output_path:
    print(f"Save processed file to {f}")
```

## Using easyocr:

```bash
pip install 'pdfdeal[easyocr]'
```

Example: Since I am running on a device without CUDA acceleration, set GPU to False.

```python
from pdfdeal import deal_pdf, get_files

files, rename = get_files("tests/pdf", "pdf", "md")
output_path, failed, flag = deal_pdf(
    pdf_file=files,
    output_format="md",
    ocr="easyocr",
    language=["en"],
    GPU=False,
    output_path="Output",
    output_names=rename,
)
for f in output_path:
    print(f"Save processed file to {f}")
```

## Custom OCR Function!

It’s very simple; you only need to customize a function:

```python
def ocr(path, language:list, options: dict) -> Tuple[str, bool]:
    # Your OCR implementation
    return texts, All_Done
```

The options will at least pass in {"GPU": GPU} information; here the GPU value is determined by the input parameters of deal_pdf. You need to implement OCR for this path file or folder and concatenate the results returned by OCR. For example, here is an example of a custom function that skips OCR:

```python
from pdfdeal import deal_pdf, get_files

def ocr(path, language=["auto"], options: dict = None):
    return "", True

files, rename = get_files("tests/pdf", "pdf", "md")
output_path, failed, flag = deal_pdf(
    pdf_file=files,
    output_format="md",
    ocr=ocr,
    output_path="Output",
    output_names=rename,
)
for f in output_path:
    print(f"Save processed file to {f}")
```

## Doc2X?

Please use [`Client.pdfdeal`](../Doc2X/3.md) function; however it will be merged into this function in future versions.
