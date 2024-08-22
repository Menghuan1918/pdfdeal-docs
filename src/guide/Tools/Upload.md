---
title: Built-in upload tool
icon: upload
---

This tool requires you to be using ==0.2.4== or higher.

`pdfdeal` has built-in upload tools for some common storage services, but of course you can write your own function for uploading - it's also very simple.

You need to work with [document image processing tools](./MD_imgs.md) in combination.

Currently supported:

- [Custom Functions](#custom-functions)
- [Ali OSS](#alicloud-oss)
- [S3 Object Storage](#s3)

## Custom Functions

Please define an incoming parameter to accept as:

- `local_file_path` local file address
- `remote_file_path` remote_file_path

The return value is:

- `str` The accessible URL of the file
- `bool` Whether the upload was successful

function passed into the [Document Image Processing Tool](./MD_imgs.md) in `replace`.

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

If you have a good new file upload implementation, feel free to [Submit PR!](#more)

## AliCloud OSS

Please import the function first and initialize it with your AliCloud ACCESS_KEY.

```python
from pdfdeal.FileTools.Img.Ali_OSS import Ali_OSS
```

The `Ali_OSS` function requires the following parameters for initialization:

- OSS_ACCESS_KEY_ID: your AliCloud ACCESS_KEY ID
- OSS_ACCESS_KEY_SECRET: your AliCloud ACCESS_KEY SECRET
- Endpoint: Your OSS Service Endpoint
- Bucket: your OSS Bucket name

> [!warning]
> First you need to install the package `oss2` to use it: `pip install -U oss2`
>
> Make sure your OSS has the permissions set to public readable.

Example:

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

# Or you want to replace the images of all MD documents in a specified path with the OSS address.
# mds_replace_imgs(
#     path="Output",
#     replace=ossupload,
#     threads=5,
# )
```

## S3

Please first import the function and initialize it with your S3 authentication key.

```python
from pdfdeal.FileTools.Img.S3 import S3
```

The `S3` function requires the following parameters for initialization:
- S3_ACCESS_KEY_ID: your S3 ACCESS_KEY ID
- S3_ACCESS_KEY_SECRET: your S3 ACCESS_KEY SECRET
- Endpoint: Your S3 service endpoint.
- Bucket: your S3 Bucket name
- Customized_Domain: your S3 customized domain name, note that `{Customized_Domain}/{remote_file_path}` will be returned as the final image address. Please don't forget to add `http://` or `https://` prefix to the customized domain name.

> [!warning]
> First you need to install the package `boto3` to use it: `pip install -U boto3`
>
> Make sure your S3 has the permissions set to public readable!

Example:

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

# Or you want to replace the images of all MD documents in a specified path with S3 addresses.
# mds_replace_imgs(
#     path="Output",
#     replace=ossupload,
#     threads=5,
# )
```

## More...

On the way~

If you want to submit a PR about file upload, please first fork [project](https://github.com/Menghuan1918/pdfdeal), then create a new `.py` file in the project's `src/pdfdeal/FileTools/Img` folder, and you can imitate the other uploads in the folder. Realization to complete your upload operation, and finally launch PR🥳
