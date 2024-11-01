---
title: 处理PDF
icon: file-pdf
order: 2
---

> [!info]
> 如您想要完全自己掌控处理PDF文件的过程(例如集成在您的GUI软件中)，您可以参见[异步实现](./async.md)

## 转换PDF

## 描述
`pdf2file` 方法用于将PDF文件转换为指定的格式。该方法提供了一个同步接口。

## 参数

| 参数名        | 类型                | 描述                                                                 | 是否可选 | 默认值       |
|---------------|---------------------|----------------------------------------------------------------------|----------|--------------|
| `pdf_file`    | `str`或`List[str]`  | 单个PDF文件的路径或PDF文件路径的列表。                               | 否       | N/A          |
| `output_names`| `List[str]`         | 输出文件名的列表。一般而言不需要使用。                                                   | 是       | `None`       |
| `output_path` | `str`               | 输出文件的目录路径。                                                 | 是       | `"./Output"` |
| `output_format`| `str`              | 所需的输出格式。支持的文本格式包括：`md_dollar`、`md`、`tex`、`docx`，其成功返回值将是文件所在地址。支持的变量格式包括：`text`、`texts`、`detailed`，其成功返回值将是：`md形式的字符串`，`list形式的按页分割的字符串`，`list形式的按页分割的字符串(包含详细页面信息)`   | 是       | `md_dollar`  |
| `ocr`         | `bool`              | 是否使用OCR。                                                        | 是       | `True`       |
| `convert`     | `bool`              | 是否将 `[` 和 `[[` 转换为 `$` 和 `$$`，仅在 `output_format` 为变量格式(`text`、`texts`、`detailed`)时有效。 | 是       | `False`      |
| `oss_choose`  | `str`               | 现在可以通过API直接上传文件或通过API提供的OSS链接上传文件。可接受的值：`auto`、`always`、`never`（即`仅>=100MB的文件将上传到OSS`，`所有文件都将上传到OSS`，`所有文件都将直接上传`）。 | 是==仅在`0.4.8b1`或更高版本可用==       | `"always"`   |

## 返回值
返回一个包含以下内容的元组：
1. 成功转换的文件路径或内容的列表。
2. 包含失败转换错误信息的字典列表。
3. 一个布尔值，指示转换过程中是否发生任何错误。

## 注意

### pdf_file参数
`pdf_file`会自动识别输入是`文件夹路径`/`文件路径`/`列表形式的文件路径`并进行处理。

当`pdf_file`输入为文件夹或文件路径时，输出文件会自动保持原有文件结构。例如，将`/pdf`文件夹中文件转换为docx并储存到`/Output/newfolder`文件夹中：

::: tabs

@tab 源目录文件结构
```bash
pdf
├── sample.pdf
└── test
    └── sampleB.pdf
```
@tab 处理后文件结果
```bash
Output
└── newfolder
    ├── sample.docx
    └── test
        └── sampleB.docx
```
:::

## 示范代码

### 处理指定 PDF 文件

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf/sample.pdf",
    output_path="./Output",
    output_format="docx",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-10-20 15:14:37,801 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
2024-10-20 15:14:41,059 - pdfdeal.doc2x - INFO - Conversion successful for tests/pdf/sample.pdf with uid 0192a8c7-2f21-71ef-a918-c3a42e290732
2024-10-20 15:14:41,059 - pdfdeal.doc2x - INFO - Parsing 0192a8c7-2f21-71ef-a918-c3a42e290732 to docx...
2024-10-20 15:14:43,770 - pdfdeal.doc2x - INFO - Downloading 0192a8c7-2f21-71ef-a918-c3a42e290732 docx file to ./Output...
2024-10-20 15:14:45,841 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s).
```
@tab success，failed，flag变量结果
```python
['./Output/sample.docx']
[{'error': '', 'path': ''}]
False
```
:::


### 处理指定文件夹中所有 PDF 文件

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf",
    output_path="./Output",
    output_format="docx",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-10-18 22:49:10,691 - pdfdeal.doc2x - INFO - Uploading tests/pdf/test/sampleB.pdf...
2024-10-18 22:49:12,281 - pdfdeal.doc2x - INFO - Processing 0192a01a-9b64-75eb-94d1-9c0ddef43089 : 2%
2024-10-18 22:49:13,983 - pdfdeal.doc2x - INFO - Conversion successful for tests/pdf/test/sampleB.pdf with uid 0192a01a-9b64-75eb-94d1-9c0ddef43089
2024-10-18 22:49:13,983 - pdfdeal.doc2x - INFO - Parsing 0192a01a-9b64-75eb-94d1-9c0ddef43089 to docx...
2024-10-18 22:49:20,066 - pdfdeal.doc2x - INFO - Downloading 0192a01a-9b64-75eb-94d1-9c0ddef43089 docx file to ./Output...
2024-10-18 22:49:22,351 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s).
```
@tab success，failed，flag变量结果
```python
['./Output/sampleB.docx']
[{'error': '', 'path': ''}]
False
```
:::

### 处理指定的 PDF 文件并指定导出的文件名

```python
from pdfdeal import Doc2X

client = Doc2X(debug=True)
success, failed, flag = client.pdf2file(
    pdf_file=["tests/pdf/sample.pdf"],
    #其等效于 pdf_file="tests/pdf/sample.pdf",
    output_path="./Output/test/single/pdf2file",
    output_names=["ChangName.zip"],
    output_format="md_dollar",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-10-20 15:15:46,608 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
2024-10-20 15:15:52,128 - pdfdeal.doc2x - INFO - Conversion successful for tests/pdf/sample.pdf with uid 0192a8c8-3d01-794d-92a3-db1dd584b481
2024-10-20 15:15:52,129 - pdfdeal.doc2x - INFO - Parsing 0192a8c8-3d01-794d-92a3-db1dd584b481 to md_dollar...
2024-10-20 15:15:59,464 - pdfdeal.doc2x - INFO - Downloading 0192a8c8-3d01-794d-92a3-db1dd584b481 md_dollar file to ./Output/test/single/pdf2file...
2024-10-20 15:16:02,079 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s).
```
@tab success，failed，flag变量结果
```python
['./Output/test/single/pdf2file/ChangName.zip']
[{'error': '', 'path': ''}]
False
```
:::

### 报错信息示范

以下代码中使用的`tests/pdf/sample_bad.pdf`文件是一个无法打开的损坏的PDF文件：

```python
from pdfdeal import Doc2X

client = Doc2X(debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf/sample_bad.pdf",
    output_path="./Output/test/single/pdf2file",
    output_names=["sample1.zip"],
    output_format="md_dollar",
)
print(success)
print(failed)
print(flag)
```
::: tabs#code

@tab 运行中日志输出
```bash
EOF marker not found
2024-10-18 22:54:28,870 - pdfdeal.doc2x - WARNING - Failed to get page count for tests/pdf/sample_bad.pdf: Stream has ended unexpectedly
2024-10-18 22:54:28,870 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample_bad.pdf...
ERROR:root:Error in 'upload_pdf': RequestError - parse_pdf_invalid: 传入的文件不是有效的PDF文件 (File is not a valid PDF)
UID: Failed to get uid! Please set DEBUG mode to check the failed file path.
Trace ID: None
You can try to do:
不是有效的PDF文件,考虑PDF可能有兼容性问题, 重新打印后再尝试。仍然失败请反馈request_id给负责人 (File is not a valid PDF. Consider reprinting the PDF if compatibility issues persist. Report request_id if it still fails)
2024-10-18 22:54:29,726 - pdfdeal.doc2x - ERROR - 1 file(s) failed to convert, please enable DEBUG mod to check or read the output variable.
====================================
Failed to convert tests/pdf/sample_bad.pdf: parse_pdf_invalid: 传入的文件不是有效的PDF文件 (File is not a valid PDF)
UID: Failed to get uid! Please set DEBUG mode to check the failed file path.
Trace ID: None
You can try to do:
不是有效的PDF文件,考虑PDF可能有兼容性问题, 重新打印后再尝试。仍然失败请反馈request_id给负责人 (File is not a valid PDF. Consider reprinting the PDF if compatibility issues persist. Report request_id if it still fails)
2024-10-18 22:54:29,726 - pdfdeal.doc2x - INFO - Successfully converted 0 file(s).
```
@tab success，failed，flag变量结果
```python
['']
[{'error': 'parse_pdf_invalid: 传入的文件不是有效的PDF文件 (File is not a valid PDF)\nUID: Failed to get uid! Please set DEBUG mode to check the failed file path.\nTrace ID: None\nYou can try to do:\n不是有效的PDF文件,考虑PDF可能有兼容性问题, 重新打印后再尝试。仍然失败请反馈request_id给负责人 (File is not a valid PDF. Consider reprinting the PDF if compatibility issues persist. Report request_id if it still fails)', 'path': 'tests/pdf/sample_bad.pdf'}]
True
```
:::