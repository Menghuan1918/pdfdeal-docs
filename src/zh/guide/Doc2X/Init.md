---
title: 初始化
icon: key
---

## 配置API密匙

对于个人使用，请登录[https://doc2x.noedgeai.com](https://doc2x.noedgeai.com/)，点击`个人信息`，复制其中的身份令牌作为你的API密匙。

## 使用环境变量(推荐)

运行以下代码以导入你的API密匙：

```python
from pdfdeal import Doc2X
Client = Doc2X()
```

### MacOS/Linux

请使用以下命令为当前终端设置环境变量：

```bash
export DOC2X_APIKEY = "Your API Key"
```

你也可以将以上命令添加到`~/.zshrc`或`~/.bashrc`以持久化环境变量。

### Windows

请使用以下命令为当前终端设置环境变量：

```PowerShell
setx DOC2X_APIKEY "Your API Key"
```

你可以将其添加至`此电脑` -> `属性` -> `高级系统设置` -> `环境变量` -> `系统变量`中以持久化。

## 为项目单独设置API密匙

若你希望 API 密钥仅对单个项目可见，可创建一个包含你的API密钥的本地`.env`文件。以下是一个`.env`文件的示范：

```
DOC2X_APIKEY = "Your API Key"
```

导入的代码与使用环境变量的方法相同。

> 注意这可能需要你使用集成开发环境，例如VSCode

## 指定API密匙(不推荐)

如果你想指定你的API密匙，你可以通过以下代码导入：

```python
from pdfdeal import Doc2X
Client = Doc2X(apikey="Your API key")
```

## 自定义：RPM请求限制

> [!caution]
> 除非你确信你需要修改请求频率，请不要修改 `rpm`（每分钟请求数），请使用默认的设置。

```python
from pdfdeal import Doc2X
Client = Doc2X(rpm=1)
```