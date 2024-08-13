---
title: 内置上传工具
icon: upload
---
此工具需要您使用 ==0.2.4== 或更高版本。

`pdfdeal`内置了一些常见的储存服务的上传工具，当然您也可以自行编写一个上传的函数--这也非常简单。

您需要与[文档图像处理工具](./MD_imgs.md)结合使用。

目前支持：

- [自定义函数](#自定义函数)
- [阿里 OSS](#阿里云-oss)

## 自定义函数

请定义一个入参接受为：

- `local_file_path` 本地文件地址
- `remote_file_path` 远程文件地址

返回值为：

- `str` 文件的可访问 URL
- `bool` 是否上传成功

的函数，并将其传入[文档图像处理工具](./MD_imgs.md)中的`replace`。

```python
def upload_file(local_file_path, remote_file_path):
    """Upload a file

    Args:
        local_file_path (str): The path of the local file to upload.
        remote_file_path (str): The path of the remote file to upload to.

    Returns:
        tuple: A tuple containing the URL of the uploaded file and a boolean indicating whether the upload was successful.
    """
    return ("This is a test",True)
```

如果您有好的新文件上传实现，欢迎提交 PR！

## 阿里云 OSS

请首先导入函数并使用您的阿里云 ACCESS_KEY 进行初始化。

> [!important]
> 首先您需要安装包`oss2`进行使用：`pip install -U oss2`
>
> 请确保您的 OSS 已经将权限设置为公开可读

![确保公开可读](../../../images/ali_oss.png)

```python
from pdfdeal.FileTools.Img.Ali_OSS import Ali_OSS
from pdfdeal.file_tools import md_replace_imgs

ossupload = Ali_OSS(
    OSS_ACCESS_KEY_ID=os.environ.get("OSS_ACCESS_KEY_ID"),
    OSS_ACCESS_KEY_SECRET=os.environ.get("OSS_ACCESS_KEY_SECRET"),
    Endpoint=os.environ.get("Endpoint"),
    Bucket=os.environ.get("Bucket"),
)

md_replace_imgs(
    mdfile="Output/1706.03762-2024-08-11 17-06-35.md",
    replace=ossupload,
    threads=5,
)

# 或者您希望替换指定路径中所有MD文档的图片为OSS地址
# mds_replace_imgs(
#     path="Output",
#     replace=ossupload,
#     threads=5,
# )
```

## 更多...

正在赶来的路上 🥳
