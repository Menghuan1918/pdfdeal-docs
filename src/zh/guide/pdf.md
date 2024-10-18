---
title: 处理PDF
icon: file-pdf
order: 2
---

## 转换PDF

## 描述
`pdf2file` 方法用于将PDF文件转换为指定的格式。该方法提供了一个同步接口。

## 参数

| 参数名        | 类型                | 描述                                                                 | 是否可选 | 默认值       |
|---------------|---------------------|----------------------------------------------------------------------|----------|--------------|
| `pdf_file`    | `List[str]`或`str`   |  单个PDF文件的路径，或PDF所在文件夹路径，或列表形式的PDF文件路径。                               | 否       | N/A          |
| `output_names`| `List[str]`         | 输出文件名的列表。一般而言不需要使用。                                                   | 是       | `None`       |
| `output_path` | `str`               | 输出文件的目录路径。                                                 | 是       | `"./Output"` |
| `output_format`| `str`              | 所需的输出格式。支持的文本格式包括：`md_dollar`,`md`,`tex`,`docx`，其成功返回值将是文件所在地址。支持的变量格式包括：`txt`,`txts`,`detailed`，其成功返回值将是：`md形式的字符串`，`list形式的按页分割的字符串`，`list形式的按页分割的字符串(包含详细页面信息)`   | 是       | `md_dollar`  |
| `ocr`         | `bool`              | 是否使用OCR。                                                        | 是       | `True`       |
| `convert`     | `bool`              | 是否转换PDF。如果为 `False`，则仅执行OCR。                           | 是       | `False`      |

## 返回值
返回一个包含以下内容的元组：
1. 成功转换的文件路径或内容的列表。
2. 包含失败转换错误信息的字典列表。
3. 一个布尔值，指示转换过程中是否发生任何错误。

## 注意

### pdf_file参数
`pdf_file`会自动识别输入是`文件夹路径`/`文件路径`/`列表形式的文件路径`并进行处理。

当`pdf_file`输入为文件夹路径时，输出文件会自动保持原有文件结构。例如，将`/pdf`文件夹中文件转换为docx并储存到`/Output/newfolder`文件夹中：

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