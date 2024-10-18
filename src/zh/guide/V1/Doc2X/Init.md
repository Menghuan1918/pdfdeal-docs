---
title: 初始化
icon: key
order: 0
---

## 配置API密匙

对于个人使用，请登录[https://doc2x.noedgeai.com](https://doc2x.noedgeai.com/)，点击`个人信息`，复制其中的身份令牌作为您的API密匙。

## 使用环境变量(推荐)

运行以下代码以导入您的API密匙：

```python
from pdfdeal import Doc2X
Client = Doc2X()
```

### MacOS/Linux

请使用以下命令为当前终端设置环境变量：

```bash
export DOC2X_APIKEY = "Your API Key"
```

您也可以将以上命令添加到`~/.zshrc`或`~/.bashrc`以持久化环境变量。

### Windows

请使用以下命令为当前终端设置环境变量：

```PowerShell
set "DOC2X_APIKEY" "Your API Key"
```

您可以使用命令`setx "DOC2X_APIKEY" "Your API Key"`中以持久化保存变量(而不是当前终端会话)。

## 为项目单独设置API密匙

若您希望 API 密钥仅对单个项目可见，可创建一个包含您的API密钥的本地`.env`文件。以下是一个`.env`文件的示范：

```
DOC2X_APIKEY = "Your API Key"
```

导入的代码与使用环境变量的方法相同。

> 注意这可能需要您使用集成开发环境，例如VSCode

## 指定API密匙(不推荐)

如果您想指定您的API密匙，您可以通过以下代码导入：

```python
from pdfdeal import Doc2X
Client = Doc2X(apikey="Your API key")
```

## 自定义：同时请求限制

> [!caution]
> 除非您确信您需要修改请求频率，请不要修改同时请求限制，请使用默认的设置。


```python
from pdfdeal import Doc2X
Client = Doc2X(thread=123)
```