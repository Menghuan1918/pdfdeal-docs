---
title: deal_pdf
icon: book-open
---

使用本地OCR识别图像文本并清理格式。目前内置有支持：`easyocr`以及`pytesseract`，当然您也可以自定义OCR函数--这同样也很简单。

## `deal_pdf`

处理 PDF 文件并使用 OCR 提高其可读性，适用于 RAG（Retrieval-Augmented Generation）。

### 参数

| 参数 | 类型 | 是否必须 | 默认值 | 描述 |
|------|------|----------|--------|------|
| `pdf_file` | `str` 或 `list` | 是 | - | 输入 PDF 文件路径，支持字符串或字符串列表 |
| `output_format` | `str` | 否 | `"pdf"` | 输出格式，可选值：`"texts"`, `"md"`, `"pdf"` |
| `output_names` | `list` | 否 | `None` | 自定义输出文件名列表，长度必须与 `pdf_file` 相同 |
| `ocr` | `function` 或 `str` | 否 | `None` | 自定义 OCR/工具函数，未定义时使用 `easyocr`。可选值：`"pytesseract"` 使用 pytesseract，`"pass"` 跳过 OCR |
| `language` | `list` | 否 | `["ch_sim", "en"]` | OCR 使用的语言，默认值为 `["ch_sim", "en"]`（适用于 easyocr），`["eng"]`（适用于 pytesseract） |
| `GPU` | `bool` | 否 | `False` | 是否在 OCR 中使用 GPU，默认值为 `False`，不适用于 pytesseract |
| `output_path` | `str` | 否 | `"./Output"` | 输出文件夹路径，仅在输出格式为 `"md"` 或 `"pdf"` 时使用 |
| `option` | `dict` | 否 | `{}` | OCR/工具的选项 |

### 返回值

返回一个包含三个元素的元组 `(list1, list2, status)`：

1. `list1` (`list`): 成功处理的文件路径列表
   - 元素为处理后的文件路径（字符串）
   - 处理失败时为空字符串

2. `list2` (`list`): 处理失败的文件列表
   - 元素为字典，包含两个键：
     - `'error'`: 错误信息（字符串）
     - `'file'`: 处理失败的文件路径（字符串）
   - 处理成功时，两个键的值均为空字符串

3. `status` (`bool`): 处理状态
   - `True`: 至少有一个文件处理失败
   - `False`: 全部文件处理成功

### 注意事项

- `list1` 和 `list2` 的长度相同
- 当 `output_format` 为 `"texts"` 时，直接返回文本，不会保存到文件
- `ocr` 参数可以是自定义的 OCR 函数或内置的 OCR 工具名称（如 `"easyocr"` 或 `"pytesseract"`）
- 如果 `output_names` 不为 `None`，则成功处理的文件将被重命名为指定的名称

## 使用pytesseract

使用 “pytesseract ”时，请确保首先安装了 [tesseract](https://github.com/tesseract-ocr/tesseract)：

```bash
pip install 'pdfdeal[pytesseract]'
```

示例：

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

## 使用easyocr：

```bash
pip install 'pdfdeal[easyocr]'
```

示例，由于此处我在没有CUDA加速的设备上运行，因此`GPU`设置为`False`。

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

## 自定义OCR函数！

非常简单，您仅需要自定义一个函数：

```python
def ocr(path, language:list, options: dict) -> Tuple[str, bool]:
    # 您的OCR实现
    return texts, All_Done
```

其中`options`会至少传入`{"GPU": GPU}`信息，此处的GPU值由`deal_pdf`的传入参数决定。您需要实现对`path`这个文件或文件夹进行OCR，并拼接返回OCR的结果。例如，以下是一个自定义函数(跳过OCR)的例子：

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

## Doc2X？

请使用[`Client.pdfdeal`函数](../Doc2X/3.md)，不过在未来的版本将会将其合并到这个函数中。