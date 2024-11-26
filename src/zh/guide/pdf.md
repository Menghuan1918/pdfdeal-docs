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
| `output_format`| `str`              | 所需的输出格式。支持的文本格式包括：`md_dollar`、`md`、`tex`、`docx`，其成功返回值将是文件所在地址。支持的变量格式包括：`text`、`texts`、`detailed`，其成功返回值将是：`md形式的字符串`，`list形式的按页分割的字符串`，`list形式的按页分割的字符串(包含详细页面信息)`，其也支持同时输出多种格式<Badge text="需要0.4.8b3+版本" type="warning" />，详细参见下方说明。   | 是       | `md_dollar`  |
| `ocr`         | `bool`              | 是否使用OCR。                                                        | 是       | `True`       |
| `convert`     | `bool`              | 是否将 `[` 和 `[[` 转换为 `$` 和 `$$`，仅在 `output_format` 为变量格式(`text`、`texts`、`detailed`)时有效。 | 是       | `False`      |
| `oss_choose`<Badge text="需要0.4.8b1+版本" type="warning" />  | `str`               | 现在可以通过API直接上传文件或通过API提供的OSS链接上传文件。可接受的值：`auto`、`always`、`never`（即`仅>=100MB的文件将上传到OSS`，`所有文件都将上传到OSS`，`所有文件都将直接上传`）。 | 是      | `"always"`   |

### 输出多种格式<Badge text="需要0.4.8b3+版本" type="warning" />


您可以直接使用类csv格式传入多种格式：

```python
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf/sample.pdf",
    output_format="docx,md",
)
```
**导出为多种格式不会消耗额外额度，但是由于导出接口速率限制，会延长少许转换时间。**

如此时您还需要自定义输出文件名，您需要传入双重嵌套的列表，形如：`output_names=[["sample1.docx", "sample2.zip"]],`，详细请参见下方示范代码。

此时返回值元组第一个值将会变为一个包含成功转换文件路径的列表，例如：`['./Output/sample1.docx', './Output/sample1.zip']`。每个路径指向一个成功转换的文件，可能是不同格式的文件集合。详细请参见下方示范代码。

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
    pdf_file="tests/pdf/test",
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

### 处理指定文件夹中所有 PDF 文件-导出为多种格式<Badge text="需要0.4.8b3+版本" type="warning" />

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="/home/menghuan/文档/Test/pdf",
    output_path="./Output",
    output_format="docx,md",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-11-09 11:22:07,394 - pdfdeal.doc2x - WARNING - You are using multiple output formats, this will increase many time, please be patient.(您正在使用多个输出格式，这将增加很多时间，请耐心等待。)
2024-11-09 11:22:07,394 - pdfdeal.doc2x - INFO - Uploading /home/menghuan/文档/Test/pdf/sample (1).pdf...
2024-11-09 11:22:07,495 - pdfdeal.doc2x - INFO - Uploading /home/menghuan/文档/Test/pdf/sample (2).pdf...
2024-11-09 11:22:07,596 - pdfdeal.doc2x - INFO - Uploading /home/menghuan/文档/Test/pdf/sample (3).pdf...
2024-11-09 11:22:08,899 - pdfdeal.doc2x - INFO - Uploading successful for /home/menghuan/文档/Test/pdf/sample (1).pdf with uid 01930ef1-7ed5-71a3-a94f-7738406a4186
2024-11-09 11:22:09,063 - pdfdeal.doc2x - INFO - Uploading successful for /home/menghuan/文档/Test/pdf/sample (2).pdf with uid 01930ef1-7f40-77b7-8461-2438653d1f66
2024-11-09 11:22:09,470 - pdfdeal.doc2x - INFO - Uploading successful for /home/menghuan/文档/Test/pdf/sample (3).pdf with uid 01930ef1-8082-7a68-b90d-200720d8976b
2024-11-09 11:22:09,707 - pdfdeal.doc2x - INFO - Processing 01930ef1-7f40-77b7-8461-2438653d1f66 : 0%
2024-11-09 11:22:09,883 - pdfdeal.doc2x - INFO - Processing 01930ef1-7ed5-71a3-a94f-7738406a4186 : 0%
2024-11-09 11:22:10,122 - pdfdeal.doc2x - INFO - Processing 01930ef1-8082-7a68-b90d-200720d8976b : 0%
2024-11-09 11:22:13,342 - pdfdeal.doc2x - INFO - Processing 01930ef1-7f40-77b7-8461-2438653d1f66 : 91%
2024-11-09 11:22:13,926 - pdfdeal.doc2x - INFO - Parsing successful for /home/menghuan/文档/Test/pdf/sample (1).pdf with uid 01930ef1-7ed5-71a3-a94f-7738406a4186
2024-11-09 11:22:13,927 - pdfdeal.doc2x - INFO - Converting 01930ef1-7ed5-71a3-a94f-7738406a4186 to docx...
2024-11-09 11:22:14,125 - pdfdeal.doc2x - INFO - Parsing successful for /home/menghuan/文档/Test/pdf/sample (3).pdf with uid 01930ef1-8082-7a68-b90d-200720d8976b
2024-11-09 11:22:14,125 - pdfdeal.doc2x - INFO - Converting 01930ef1-8082-7a68-b90d-200720d8976b to docx...
2024-11-09 11:22:14,587 - pdfdeal.doc2x - INFO - Converting 01930ef1-7ed5-71a3-a94f-7738406a4186 docx file...
2024-11-09 11:22:15,132 - pdfdeal.doc2x - INFO - Converting 01930ef1-8082-7a68-b90d-200720d8976b docx file...
2024-11-09 11:22:17,043 - pdfdeal.doc2x - INFO - Parsing successful for /home/menghuan/文档/Test/pdf/sample (2).pdf with uid 01930ef1-7f40-77b7-8461-2438653d1f66
2024-11-09 11:22:17,043 - pdfdeal.doc2x - INFO - Converting 01930ef1-7f40-77b7-8461-2438653d1f66 to docx...
2024-11-09 11:22:17,768 - pdfdeal.doc2x - INFO - Converting 01930ef1-7f40-77b7-8461-2438653d1f66 docx file...
2024-11-09 11:22:18,571 - pdfdeal.doc2x - INFO - Downloading 01930ef1-7ed5-71a3-a94f-7738406a4186 docx file to ./Output...
2024-11-09 11:22:18,781 - pdfdeal.doc2x - INFO - Downloading 01930ef1-8082-7a68-b90d-200720d8976b docx file to ./Output...
2024-11-09 11:22:19,206 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting /home/menghuan/文档/Test/pdf/sample (1).pdf to thedocx format.
2024-11-09 11:22:19,997 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting /home/menghuan/文档/Test/pdf/sample (3).pdf to thedocx format.
2024-11-09 11:22:21,399 - pdfdeal.doc2x - INFO - Downloading 01930ef1-7f40-77b7-8461-2438653d1f66 docx file to ./Output...
2024-11-09 11:22:22,032 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting /home/menghuan/文档/Test/pdf/sample (2).pdf to thedocx format.
2024-11-09 11:22:54,238 - pdfdeal.doc2x - INFO - Converting 01930ef1-7ed5-71a3-a94f-7738406a4186 to md...
2024-11-09 11:22:54,998 - pdfdeal.doc2x - INFO - Converting 01930ef1-8082-7a68-b90d-200720d8976b to md...
2024-11-09 11:22:55,283 - pdfdeal.doc2x - INFO - Converting 01930ef1-7ed5-71a3-a94f-7738406a4186 md file...
2024-11-09 11:22:55,645 - pdfdeal.doc2x - INFO - Converting 01930ef1-8082-7a68-b90d-200720d8976b md file...
2024-11-09 11:22:57,033 - pdfdeal.doc2x - INFO - Converting 01930ef1-7f40-77b7-8461-2438653d1f66 to md...
2024-11-09 11:22:58,020 - pdfdeal.doc2x - INFO - Converting 01930ef1-7f40-77b7-8461-2438653d1f66 md file...
2024-11-09 11:22:59,273 - pdfdeal.doc2x - INFO - Downloading 01930ef1-7ed5-71a3-a94f-7738406a4186 md file to ./Output...
2024-11-09 11:22:59,299 - pdfdeal.doc2x - INFO - Downloading 01930ef1-8082-7a68-b90d-200720d8976b md file to ./Output...
2024-11-09 11:23:01,816 - pdfdeal.doc2x - INFO - Downloading 01930ef1-7f40-77b7-8461-2438653d1f66 md file to ./Output...
2024-11-09 11:23:02,361 - pdfdeal.doc2x - INFO - Successfully converted 3 file(s) and failed to convert 0 file(s).
```
@tab success，failed，flag变量结果
```python
[['./Output/sample (1).docx', './Output/sample (1).zip'], ['./Output/sample (2).docx', './Output/sample (2).zip'], ['./Output/sample (3).docx', './Output/sample (3).zip']]
[{'error': ['', ''], 'path': ''}, {'error': ['', ''], 'path': ''}, {'error': ['', ''], 'path': ''}]
False
```
:::

### 处理指定的 PDF 文件并指定导出的文件名-导出为单种格式

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
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
2024-11-09 10:36:22,095 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
2024-11-09 10:36:23,505 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample.pdf with uid 01930ec7-9ab7-7ea8-a292-8fb96b4af152
2024-11-09 10:36:24,042 - pdfdeal.doc2x - INFO - Processing 01930ec7-9ab7-7ea8-a292-8fb96b4af152 : 0%
2024-11-09 10:36:42,253 - pdfdeal.doc2x - INFO - Parsing successful for tests/pdf/sample.pdf with uid 01930ec7-9ab7-7ea8-a292-8fb96b4af152
2024-11-09 10:36:42,253 - pdfdeal.doc2x - INFO - Converting 01930ec7-9ab7-7ea8-a292-8fb96b4af152 to md_dollar...
2024-11-09 10:36:42,872 - pdfdeal.doc2x - INFO - Converting 01930ec7-9ab7-7ea8-a292-8fb96b4af152 md_dollar file...
2024-11-09 10:36:46,760 - pdfdeal.doc2x - INFO - Downloading 01930ec7-9ab7-7ea8-a292-8fb96b4af152 md_dollar file to ./Output/test/single/pdf2file...
2024-11-09 10:36:47,539 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s) and failed to convert 0 file(s).
```
@tab success，failed，flag变量结果
```python
['./Output/test/single/pdf2file/ChangName.zip']
[{'error': '', 'path': ''}]
False
```
:::

### 处理指定的 PDF 文件并指定导出的文件名-导出为多种格式<Badge text="需要0.4.8b3+版本" type="warning" />

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
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
2024-11-09 11:02:24,342 - pdfdeal.doc2x - WARNING - You are using multiple output formats, this will increase many time, please be patient.(您正在使用多个输出格式，这将增加很多时间，请耐心等待。)
2024-11-09 11:02:24,342 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
2024-11-09 11:02:25,710 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample.pdf with uid 01930edf-712f-7bff-99fa-4d773501e6e2
2024-11-09 11:02:26,639 - pdfdeal.doc2x - INFO - Processing 01930edf-712f-7bff-99fa-4d773501e6e2 : 0%
2024-11-09 11:02:30,434 - pdfdeal.doc2x - INFO - Parsing successful for tests/pdf/sample.pdf with uid 01930edf-712f-7bff-99fa-4d773501e6e2
2024-11-09 11:02:30,434 - pdfdeal.doc2x - INFO - Converting 01930edf-712f-7bff-99fa-4d773501e6e2 to docx...
2024-11-09 11:02:31,224 - pdfdeal.doc2x - INFO - Converting 01930edf-712f-7bff-99fa-4d773501e6e2 docx file...
2024-11-09 11:02:35,146 - pdfdeal.doc2x - INFO - Downloading 01930edf-712f-7bff-99fa-4d773501e6e2 docx file to ./Output/test/multiple_outtypes/pdf2file...
2024-11-09 11:02:35,692 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting tests/pdf/sample.pdf to thedocx format.
2024-11-09 11:03:10,728 - pdfdeal.doc2x - INFO - Converting 01930edf-712f-7bff-99fa-4d773501e6e2 to md...
2024-11-09 11:03:11,629 - pdfdeal.doc2x - INFO - Converting 01930edf-712f-7bff-99fa-4d773501e6e2 md file...
2024-11-09 11:03:15,358 - pdfdeal.doc2x - INFO - Downloading 01930edf-712f-7bff-99fa-4d773501e6e2 md file to ./Output/test/multiple_outtypes/pdf2file...
2024-11-09 11:03:16,174 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s) and failed to convert 0 file(s).
```
@tab success，failed，flag变量结果
```python
[['./Output/test/multiple_outtypes/pdf2file/sample1.docx', './Output/test/multiple_outtypes/pdf2file/sample2.zip']]
[{'error': ['', ''], 'path': ''}]
False
```
:::


### 报错信息示范-导出为单种格式

以下代码中使用的`tests/pdf/sample_bad.pdf`文件是一个无法打开的损坏的PDF文件：

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
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
2024-11-09 10:35:09,137 - pdfdeal.doc2x - WARNING - Failed to get page count for tests/pdf/sample_bad.pdf: Stream has ended unexpectedly
2024-11-09 10:35:09,137 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample_bad.pdf...
2024-11-09 10:35:10,273 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample_bad.pdf with uid 01930ec6-7d96-7348-b517-79af9d70c78e
2024-11-09 10:35:11,153 - pdfdeal.doc2x - INFO - Processing 01930ec6-7d96-7348-b517-79af9d70c78e : 0%
ERROR:root:Error in 'uid_status': RequestError - parse_error: 解析失败 (Parsing failed)
UID: 01930ec6-7d96-7348-b517-79af9d70c78e
Trace ID: 86694cddc571f3c4e51f1bd46a7ff12f
You can try to do:
短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)
2024-11-09 10:35:15,019 - pdfdeal.doc2x - WARNING - No successful parse tasks, skipping conversion.
2024-11-09 10:35:15,019 - pdfdeal.doc2x - ERROR - Failed to convert 1 file(s), please enable DEBUG mode to check or read the output variable.
=====================
Failed to convert tests/pdf/sample_bad.pdf: parse_error: 解析失败 (Parsing failed)
UID: 01930ec6-7d96-7348-b517-79af9d70c78e
Trace ID: 86694cddc571f3c4e51f1bd46a7ff12f
You can try to do:
短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)
=====================
2024-11-09 10:35:15,019 - pdfdeal.doc2x - INFO - Successfully converted 0 file(s) and failed to convert 1 file(s).
```
@tab success，failed，flag变量结果
```python
['']
[{'error': 'parse_error: 解析失败 (Parsing failed)\nUID: 01930ec6-7d96-7348-b517-79af9d70c78e\nTrace ID: 86694cddc571f3c4e51f1bd46a7ff12f\nYou can try to do:\n短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)', 'path': 'tests/pdf/sample_bad.pdf'}]
True
```
:::

### 报错信息示范-导出为多种格式-导出部分出错<Badge text="需要0.4.8b3+版本" type="warning" />

以下代码运行过程中，在完成前两者的转换后主动断开了网络链接以模拟转换`md`失败的场景：

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf/sample.pdf",
    output_path="Output/TEST/test1",
    output_format="docx,detailed,md",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-11-08 22:30:57,314 - pdfdeal.doc2x - WARNING - You are using multiple output formats, this will increase many time, please be patient.(您正在使用多个输出格式，这将增加很多时间，请耐心等待。)
2024-11-08 22:30:57,315 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
2024-11-08 22:31:01,564 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample.pdf with uid 01930c2f-78e0-717a-a537-529d7daee0c2
2024-11-08 22:31:03,455 - pdfdeal.doc2x - INFO - Processing 01930c2f-78e0-717a-a537-529d7daee0c2 : 0%
2024-11-08 22:31:07,387 - pdfdeal.doc2x - INFO - Parsing successful for tests/pdf/sample.pdf with uid 01930c2f-78e0-717a-a537-529d7daee0c2
2024-11-08 22:31:07,387 - pdfdeal.doc2x - INFO - Converting 01930c2f-78e0-717a-a537-529d7daee0c2 to docx...
2024-11-08 22:31:09,352 - pdfdeal.doc2x - INFO - Converting 01930c2f-78e0-717a-a537-529d7daee0c2 docx file...
2024-11-08 22:31:13,272 - pdfdeal.doc2x - INFO - Downloading 01930c2f-78e0-717a-a537-529d7daee0c2 docx file to Output/TEST/test1...
2024-11-08 22:31:14,200 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting to the next format for sample.pdf.
2024-11-08 22:31:49,235 - pdfdeal.doc2x - INFO - Converting 01930c2f-78e0-717a-a537-529d7daee0c2 to md...
WARNING:root:ConnectError, this is most likely a network link issue, if this problem occurs frequently check your network environment (e.g. turn off your VPN, check your DNS seeting), will retry in 1 seconds...
WARNING:root:ConnectError, this is most likely a network link issue, if this problem occurs frequently check your network environment (e.g. turn off your VPN, check your DNS seeting), will retry in 2 seconds...
ERROR:root:Error in 'convert_parse': ConnectError - All connection attempts failed
2024-11-08 22:31:52,283 - pdfdeal.doc2x - ERROR - Failed to convert 1 file(s), please enable DEBUG mode to check or read the output variable.
==========
Failed to convert tests/pdf/sample.pdf: Error while converting to md: All connection attempts failed
==========
2024-11-08 22:31:52,283 - pdfdeal.doc2x - INFO - Successfully converted 1 file(s) and failed to convert 1 file(s).
['Output/TEST/test1/sample_4.docx', [{'text': '## Test\n\n', 'location': {'url': '', 'page_idx': 0, 'page_width': 2334, 'page_height': 1313}}, {'text': '测试', 'location': {'url': '', 'page_idx': 1, 'page_width': 2334, 'page_height': 1313}}], '']
[{'error': ['', '', 'Error while converting to md: All connection attempts failed'], 'path': 'tests/pdf/sample.pdf'}]
True
```
@tab success，failed，flag变量结果
```python
['Output/TEST/test1/sample_4.docx', [{'text': '## Test\n\n', 'location': {'url': '', 'page_idx': 0, 'page_width': 2334, 'page_height': 1313}}, {'text': '测试', 'location': {'url': '', 'page_idx': 1, 'page_width': 2334, 'page_height': 1313}}], '']
[{'error': ['', '', 'Error while converting to md: All connection attempts failed'], 'path': 'tests/pdf/sample.pdf'}]
True
```
:::

### 报错信息示范-导出为多种格式-解析部分出错<Badge text="需要0.4.8b3+版本" type="warning" />

以下代码中使用的`tests/pdf/sample_bad.pdf`文件是一个无法打开的损坏的PDF文件：

```python
from pdfdeal import Doc2X

client = Doc2X(apikey="Your API key",debug=True)
success, failed, flag = client.pdf2file(
    pdf_file="tests/pdf",
    output_path="./Output",
    output_format="docx,md",
)
print(success)
print(failed)
print(flag)
```

::: tabs#code

@tab 运行中日志输出
```bash
2024-11-09 10:32:07,932 - pdfdeal.doc2x - WARNING - You are using multiple output formats, this will increase many time, please be patient.(您正在使用多个输出格式，这将增加很多时间，请耐心等待。)
2024-11-09 10:32:07,933 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample.pdf...
EOF marker not found
2024-11-09 10:32:07,950 - pdfdeal.doc2x - WARNING - Failed to get page count for tests/pdf/sample_bad.pdf: Stream has ended unexpectedly
2024-11-09 10:32:08,034 - pdfdeal.doc2x - INFO - Uploading tests/pdf/test/sampleB.pdf...
2024-11-09 10:32:09,486 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample.pdf with uid 01930ec3-ba2f-7bd2-9622-f730bfefb155
2024-11-09 10:32:09,676 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/test/sampleB.pdf with uid 01930ec3-bafd-7aca-bf93-c1f27de51da5
2024-11-09 10:32:10,354 - pdfdeal.doc2x - INFO - Processing 01930ec3-ba2f-7bd2-9622-f730bfefb155 : 0%
2024-11-09 10:32:14,078 - pdfdeal.doc2x - INFO - Processing 01930ec3-bafd-7aca-bf93-c1f27de51da5 : 90%
2024-11-09 10:32:17,892 - pdfdeal.doc2x - INFO - Parsing successful for tests/pdf/sample.pdf with uid 01930ec3-ba2f-7bd2-9622-f730bfefb155
2024-11-09 10:32:17,892 - pdfdeal.doc2x - INFO - Converting 01930ec3-ba2f-7bd2-9622-f730bfefb155 to docx...
2024-11-09 10:32:17,993 - pdfdeal.doc2x - INFO - Parsing successful for tests/pdf/test/sampleB.pdf with uid 01930ec3-bafd-7aca-bf93-c1f27de51da5
2024-11-09 10:32:17,993 - pdfdeal.doc2x - INFO - Converting 01930ec3-bafd-7aca-bf93-c1f27de51da5 to docx...
2024-11-09 10:32:18,093 - pdfdeal.doc2x - INFO - Uploading tests/pdf/sample_bad.pdf...
2024-11-09 10:32:18,454 - pdfdeal.doc2x - INFO - Converting 01930ec3-ba2f-7bd2-9622-f730bfefb155 docx file...
2024-11-09 10:32:18,526 - pdfdeal.doc2x - INFO - Converting 01930ec3-bafd-7aca-bf93-c1f27de51da5 docx file...
2024-11-09 10:32:19,319 - pdfdeal.doc2x - INFO - Uploading successful for tests/pdf/sample_bad.pdf with uid 01930ec3-e174-7961-a3f8-6b9d7d075d8a
2024-11-09 10:32:19,867 - pdfdeal.doc2x - INFO - Processing 01930ec3-e174-7961-a3f8-6b9d7d075d8a : 0%
2024-11-09 10:32:22,086 - pdfdeal.doc2x - INFO - Downloading 01930ec3-bafd-7aca-bf93-c1f27de51da5 docx file to ./Output...
2024-11-09 10:32:22,796 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting tests/pdf/test/sampleB.pdf to thedocx format.
2024-11-09 10:32:23,050 - pdfdeal.doc2x - INFO - Downloading 01930ec3-ba2f-7bd2-9622-f730bfefb155 docx file to ./Output...
2024-11-09 10:32:23,625 - pdfdeal.doc2x - INFO - Due to the rate limit, waiting 35 seconds before converting tests/pdf/sample.pdf to thedocx format.
ERROR:root:Error in 'uid_status': RequestError - parse_error: 解析失败 (Parsing failed)
UID: 01930ec3-e174-7961-a3f8-6b9d7d075d8a
Trace ID: e340e916ed5c086bd15ae03169d88405
You can try to do:
短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)
2024-11-09 10:32:57,831 - pdfdeal.doc2x - INFO - Converting 01930ec3-bafd-7aca-bf93-c1f27de51da5 to md...
2024-11-09 10:32:58,626 - pdfdeal.doc2x - INFO - Converting 01930ec3-ba2f-7bd2-9622-f730bfefb155 to md...
2024-11-09 10:32:58,717 - pdfdeal.doc2x - INFO - Converting 01930ec3-bafd-7aca-bf93-c1f27de51da5 md file...
2024-11-09 10:32:59,383 - pdfdeal.doc2x - INFO - Converting 01930ec3-ba2f-7bd2-9622-f730bfefb155 md file...
2024-11-09 10:33:02,612 - pdfdeal.doc2x - INFO - Downloading 01930ec3-bafd-7aca-bf93-c1f27de51da5 md file to ./Output...
2024-11-09 10:33:03,246 - pdfdeal.doc2x - INFO - Downloading 01930ec3-ba2f-7bd2-9622-f730bfefb155 md file to ./Output...
2024-11-09 10:33:04,047 - pdfdeal.doc2x - ERROR - Failed to convert 1 file(s), please enable DEBUG mode to check or read the output variable.
=====================
Failed to convert tests/pdf/sample_bad.pdf: parse_error: 解析失败 (Parsing failed)
UID: 01930ec3-e174-7961-a3f8-6b9d7d075d8a
Trace ID: e340e916ed5c086bd15ae03169d88405
You can try to do:
短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)
=====================
2024-11-09 10:33:04,047 - pdfdeal.doc2x - INFO - Successfully converted 2 file(s) and failed to convert 1 file(s).
```
@tab success，failed，flag变量结果
```python
[['./Output/sample_6.docx', './Output/sample_6.zip'], '', ['./Output/test/sampleB_7.docx', './Output/test/sampleB_7.zip']]
[{'error': ['', ''], 'path': ''}, {'error': 'parse_error: 解析失败 (Parsing failed)\nUID: 01930ec3-e174-7961-a3f8-6b9d7d075d8a\nTrace ID: e340e916ed5c086bd15ae03169d88405\nYou can try to do:\n短暂等待后重试, 如果还出现报错则请联系负责人 (Retry after a short wait, contact support if error persists)', 'path': 'tests/pdf/sample_bad.pdf'}, {'error': ['', ''], 'path': ''}]
True
```
:::