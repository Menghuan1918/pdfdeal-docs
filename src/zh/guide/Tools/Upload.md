---
title: 内置上传工具
icon: upload
---
您可能需要安装一些额外依赖以使用：

```bash
pip install --upgrade "pdfdeal[rag]"
```

此工具需要您使用 ==0.2.4== 或更高版本。

`pdfdeal`内置了一些常见的储存服务的上传工具，当然您也可以自行编写一个上传的函数--这也非常简单。

您需要与[文档图像处理工具](./MD_imgs.md)结合使用。

目前支持：

- [自定义函数](#自定义函数)
- [阿里 OSS](#阿里云-oss)
- [S3 对象储存](#s3)

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

如果您有好的新文件上传实现，欢迎[提交 PR！](#更多)

## 阿里云 OSS

请首先导入函数并使用您的阿里云 ACCESS_KEY 进行初始化。

```python
from pdfdeal.FileTools.Img.Ali_OSS import Ali_OSS
```

`Ali_OSS`函数需要以下参数进行初始化：

- OSS_ACCESS_KEY_ID：您的阿里云 ACCESS_KEY ID
- OSS_ACCESS_KEY_SECRET：您的阿里云 ACCESS_KEY SECRET
- Endpoint：您的 OSS 服务 Endpoint
- Bucket：您的 OSS Bucket 名称

> [!warning]
> 首先您需要安装包`oss2`进行使用：`pip install -U oss2`或`pip install --upgrade "pdfdeal[rag]"`
>
> 请确保您的 OSS 已经将权限设置为公开可读

![确保公开可读](../../../images/ali_oss.png)

示例：

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

## S3

请首先导入函数并使用您的S3验证密匙进行初始化。

```python
from pdfdeal.FileTools.Img.S3 import S3
```

`S3`函数需要以下参数进行初始化：
- S3_ACCESS_KEY_ID：您的S3 ACCESS_KEY ID
- S3_ACCESS_KEY_SECRET：您的S3 ACCESS_KEY SECRET
- Endpoint：您的S3服务Endpoint
- Bucket：您的S3 Bucket名称
- Customized_Domain：您的S3自定义域名，注意`{Customized_Domain}/{remote_file_path}`将作为最终的图片地址返回。请不要忘记为自定义域名添加`http://`或`https://`前缀。

> [!warning]
> 首先您需要安装包`boto3`进行使用：`pip install -U boto3`或`pip install --upgrade "pdfdeal[rag]"`
>
> 请确保您的 S3 已经将权限设置为公开可读

示例：

```python
from pdfdeal.FileTools.Img.S3 import S3
from pdfdeal.file_tools import md_replace_imgs

ossupload = S3(
    S3_ACCESS_KEY_ID=os.environ.get("S3_ACCESS_KEY_ID"),
    S3_ACCESS_KEY_SECRET=os.environ.get("S3_ACCESS_KEY_SECRET"),
    Endpoint=os.environ.get("S3_Endpoint"),
    Bucket=os.environ.get("S3_Bucket"),
    Customized_Domain=os.environ.get("S3_Customized_Domain"),
)

md_replace_imgs(
    mdfile="Output/1706.03762-2024-08-11 17-06-35.md",
    replace=ossupload,
    threads=5,
)

# 或者您希望替换指定路径中所有MD文档的图片为S3地址
# mds_replace_imgs(
#     path="Output",
#     replace=ossupload,
#     threads=5,
# )
```

## MinIO

要使用此工具，您需要确保版本为 ==`0.4.9`== 或更高。

您可以通过 Docker 部署开源的 MinIO 对象存储服务器。此工具同样支持通过 HTTPS 反向代理访问 MinIO 地址。

如果指定的桶（bucket_name）尚未创建，工具将**自动**创建一个公开可读的桶用于存储图片；如果桶已存在，则直接使用该桶。

请首先导入函数并使用您的MinIO地址，管理员账户，密码进行初始化。

```python
from pdfdeal.FileTools.Img.MinIO import Min
```

`Min`函数初始化时需要以下参数：
- minio_address：指定MinIO服务器地址，支持`HTTPS`、`HTTP`或`IP`格式，例如`https://download.xxxx.top`或`127.0.0.1:9000`。若为本地部署，通常为`127.0.0.1:9000`。
- minio_admin：MinIO服务器的管理员账户。
- minio_password：MinIO服务器的管理员账户密码。
- bucket_name：指定存储的桶名称。请确保该桶为公开可读状态；若桶尚未创建，工具将自动创建一个公开可读的桶用于存储图片。

```python
from pdfdeal.FileTools.Img.MinIO import Min
from pdfdeal.file_tools import md_replace_imgs

miupload = Min(
    minio_address = os.environ.get("MINIO_ADDRESS"),
    minio_admin = os.environ.get("MINIO_ADMIN"),
    minio_password = os.environ.get("MINIO_PASSWORD"),
    bucket_name = os.environ.get("BUCKET_NAME")
)
md_replace_imgs(
    mdfile="Output/1706.03762-2024-08-11 17-06-35.md",
    replace=miupload,
    threads=5,
)

# 或者您希望替换指定路径中所有MD文档的图片为S3地址
# mds_replace_imgs(
#     path="Output",
#     replace=miupload,
#     threads=5,
# )
```

## 更多...

正在赶来的路上~

如您想提交一个关于文件上传的 PR，请首先 fork[项目](https://github.com/Menghuan1918/pdfdeal)，随后在项目的`src/pdfdeal/FileTools/Img`文件夹中新建`.py`文件，您可以仿照文件夹中其他上出实现完成您的上传操作，最后发起 PR🥳

感谢[@Huxb12138](https://github.com/Huxb12138)贡献的MinIO上传工具