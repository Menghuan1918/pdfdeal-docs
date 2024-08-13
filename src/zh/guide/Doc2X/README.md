---
title: Doc2X支持
icon: file-contract
---

![](../../../images/doc2x.png)

您可以使用抽象包装好的类，或者仅仅使用[异步函数](./async.md)发起请求。

库支持 python 3.8-3.12 版本，并已使用 GitHub Action 在 Windows/Linux/MacOS 系统中进行测试，使用 pip 进行安装：

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

随后您需要使用您的个人 Key[进行初始化](./Init.md)。

初始化完成后，您可以进行[图片转换](./1.md)[PDF 转换](./2.md)，详细请参见左侧的目录。
