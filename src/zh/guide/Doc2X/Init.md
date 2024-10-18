---
title: 初始化
icon: key
order: 0
---

## 配置 API 密匙

请登录[Doc2X 开放平台](https://open.noedgeai.com)获取 API 密匙。

## 使用环境变量(推荐)

运行以下代码以导入您的 API 密匙，此时程序将会从环境变量中寻找`DOC2X_APIKEY`：

```python
from pdfdeal import Doc2X
client = Doc2X()
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

## 为项目单独设置 API 密匙

若您希望 API 密钥仅对单个项目可见，可创建一个包含您的 API 密钥的本地`.env`文件。以下是一个`.env`文件的示范：

```
DOC2X_APIKEY = "Your API Key"
```

导入的代码与使用环境变量的方法相同。

> 注意：这可能需要您使用集成开发环境，例如 VSCode

## 指定 API 密匙(不推荐)

如果您想指定您的 API 密匙，您可以通过以下代码导入：

```python
from pdfdeal import Doc2X
client = Doc2X(apikey="Your API key")
```

## 代码示范

### 修改同时请求限制

> [!caution]
> 除非您确信您需要修改请求频率，请不要修改同时请求限制，请使用默认的设置。

```python
from pdfdeal import Doc2X

client = Doc2X(max_pages=100, thread=2)
```

### 修改日志显示等级

默认情况下，程序将仅会显示出错信息，中间过程(例如处理进度)等信息将仅会以`logging.INFO`等级输出。您可以在初始化时传入参数`debug=true`以显示所有日志。

```python
from pdfdeal import Doc2X

client = Doc2X(debug=True)
```
