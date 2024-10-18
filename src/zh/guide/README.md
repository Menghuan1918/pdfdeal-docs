---
title: 手册
icon: lightbulb
order: 0
---

## 使用指南

库支持 python 3.8-3.13 版本，并尽可能使用GitHub Action在Windows/Linux/MacOS 系统中进行测试，从PYPI上安装：

::: code-tabs#python

@tab pip

```bash
pip install --upgrade pdfdeal
```

@tab conda

```bash
conda create -n pdfdeal python=3.12
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

### Doc2X支持

Doc2X请求支持，除了请求的封装外，其还附带有速率限制，批处理，自动处理异常的功能。

如您想使用完全的请求封装，请从[初始化实例](./Init.md)开始。

初始化完成后，您可以进行[PDF 转换](./pdf.md)，详细请参见左侧的目录。

如果您自己完成每一步请求，请参见[Doc2X 异步请求](./async.md)，其封装了Doc2X API的所有可用接口的异步请求。

### 内置的文件处理工具

pdfdeal内置了一些方便的[转换前/后的处理工具](./Tools/README.md)，例如将图片上传到远端储存服务(阿里OSS等)，为MD文档添加分割符等。

### V1接口

V1接口已经被弃用，但是您仍然可以在[此处](./V1/README.md)查看。

### 使用CLI工具

~~目前有命令行工具`doc2x`，其用于使用Doc2X的API快速批量处理PDF或者图片。~~

~~您可以在[此处查看帮助](CLI/README.md)，或者输入`python -m doc2x -h`查看帮助。~~

命令行工具将于0.4.1版本重新加入。