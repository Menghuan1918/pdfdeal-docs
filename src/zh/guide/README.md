---
title: 手册
icon: lightbulb
---

## 使用指南

库支持 python 3.8-3.12 版本，并已使用GitHub Action在Windows/Linux/MacOS 系统中进行测试，从PYPI上安装：

::: code-tabs#python

@tab pip

```bash
pip install --upgrade pdfdeal
```

@tab conda

```bash
conda create -n pdfdeal python=3.11
conda activate pdfdeal
pip install --upgrade pdfdeal
```

@tab uv

```bash
uv venv
source .venv/bin/activate # For Linux
source .venv/Scripts/activate # For Windows
uv pip install --upgrade pdfdeal
```

:::

### 使用CLI工具

目前有命令行工具`doc2x`，其用于使用Doc2X的API快速批量处理PDF或者图片。

您可以在[此处查看帮助](CLI/README.md)，或者输入`python -m doc2x -h`查看帮助。

### Doc2X支持

您可以单独使用库中的Doc2X相关部分，除了请求的封装外，其还附带有RPM限制，批处理，自动处理异常的功能。

详细请参见[Doc2X使用手册](Doc2X/README.md)

如果您想直接使用封装的异步请求函数，请使用`from pdfdeal.Doc2X.Convert import *`导入函数，并参照[这个文件](https://github.com/Menghuan1918/pdfdeal/blob/main/src/pdfdeal/Doc2X/Convert.py)中的函数说明。

### 内置的文件处理工具

pdfdeal内置了一些方便的文件处理工具，例如快速解压zip文件，批量重命名，将一个列表保存到PDF等工具。

请查看[使用文档](Tools.md)

### 对PDF文件进行处理

您还可以使用离线OCR对PDF进行处理。目前内建有`easyocr`以及`pytesseract`的支持，您也可以自定义OCR函数进行处理。

注意相对Doc2X而言，离线OCR表现很差。

请查看[使用文档](pdfdeal/README.md)