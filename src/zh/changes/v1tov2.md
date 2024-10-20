---
title: V1接口迁移指南
---

**在大部分情况下，您不需要更改任何代码**，`0.4.X`版本尽可能向上兼容`0.3.1`版本。以下是一些值得注意的变动：

## 初始化部分

[初始化详细页面](../guide/Init.md)

**无需更改代码**

### 新增可选入参

| 参数名     | 类型  | 默认值 | 描述                                                                 |
|------------|-------|--------|----------------------------------------------------------------------|
| `max_pages`| int   | 1000   | 处理的最大页数。除非您确信您需要修改，请使用默认值。                                                     |
| `retry_time`| int  | 15     | 最高重试次数。除非您确信您需要修改，请使用默认值。                                                           |
| `max_time` | int   | 90     | 等待响应的最大时间（以秒为单位）。除非您确信您需要修改，请使用默认值。                                   |
| `debug`    | bool  | False  | 是否启用调试日志记录。                                               |

## PDF转换

[PDF转换详细页面](../guide/pdf.md)

### 参数变动

如您想导出latex文档，**`output_format`参数需从`latex`改为`tex`**。

::: tabs

@tab 0.3.9版本
```python 5
from pdfdeal import Doc2X

client = Doc2X()
filepath, _, _ = client.pdf2file(
    "tests/pdf/sample.pdf", output_format="latex"
)
print(filepath)
```
@tab 0.4.X版本
```python 5
from pdfdeal import Doc2X

client = Doc2X()
filepath, _, _ = client.pdf2file(
    "tests/pdf/sample.pdf", output_format="tex"
)
print(filepath)
```
:::

### 代码简化

`pdf2file`函数将会自动识别输入是`文件夹路径`/`文件路径`/`列表形式的文件路径`并进行处理，同时其将会自动保持原有文件结构，不再需要手动介入。现在您可以**直接将文件夹路径传入**`pdf2file`中：

::: tabs

@tab 0.3.9版本
```python 2,4-6,8,10
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
@tab 0.4.X版本
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

### 新增可选入参

| 参数名        | 类型                | 描述                                                                 | 是否可选 | 默认值       |
|---------------|---------------------|----------------------------------------------------------------------|----------|--------------|
| `output_format`| `str`              | 所需的输出格式。支持的文本格式包括：`md_dollar`,`md`,`tex`,`docx`，其成功返回值将是文件所在地址。支持的变量格式包括：`txt`,`txts`,`detailed`，其成功返回值将是：`md形式的字符串`，`list形式的按页分割的字符串`，`list形式的按页分割的字符串(包含详细页面信息)`   | 是       | `md_dollar`  |
| `retry`       | `bool`              | **实验性选项**，将会在未来几个版本完善：是否重试失败的转换。开启后将会重试转换失败的文件。   | 是       | `False`      |

## 额度获取

Doc2X还未发布任何额度获取API

## 图片转换

Doc2X还未发布任何图片API