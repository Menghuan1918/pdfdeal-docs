---
title: 手册
icon: lightbulb
---

## 使用指南

> [!warning]
> ==0.3.1版本==后更新输出为`logging`，默认情况下仅会输出Warnings及以上等级的信息。如您希望查看处理过程，请设置`logging`等级为INFO：
> ```python
> import logging
> httpx_logger = logging.getLogger("httpx")
> httpx_logger.setLevel(logging.WARNING)
> logging.basicConfig(level=logging.INFO)
> ```

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

Doc2X请求支持，除了请求的封装外，其还附带有RPM限制，批处理，自动处理异常的功能。

详细请参见[Doc2X使用手册](Doc2X/README.md)

如果您想使用封装的异步请求函数，请参见[Doc2X 异步请求](./Doc2X/async.md)

### 内置的文件处理工具

pdfdeal内置了一些方便的[转换前/后的处理工具](./Tools/README.md)，例如将图片上传到远端储存服务(阿里OSS等)，为MD文档添加分割符等。

### 对PDF文件进行处理

您还可以使用离线OCR对PDF进行处理。目前内建有`easyocr`以及`pytesseract`的支持，您也可以自定义OCR函数进行处理。

注意相对Doc2X而言，离线OCR表现很差，不建议使用。

请查看[使用文档](pdfdeal/README.md)