---
title: At first - Initialization
icon: key
---

## Configure API Key

For personal use, please log in to [https://doc2x.com/](https://doc2x.com/), click on `Personal Information`, and copy the token there as your API key.

## Using Environment Variables (Recommended)

Run the following code to import your API key:

```python
from pdfdeal import Doc2X
Client = Doc2X()
```

### MacOS/Linux

Please use the following command to set the environment variable for the current terminal:

```bash
export DOC2X_APIKEY = "Your API Key"
```

You can also add the above command to `~/.zshrc` or `~/.bashrc` to persist the environment variable.

### Windows

Please use the following command to set the environment variable for the current terminal:

```PowerShell
setx "DOC2X_APIKEY" "Your API Key"
```


You can use the command `setx "DOC2X_APIKEY" "Your API Key"` in order to save the variable persistently (instead of the current terminal session).

## Setting API Key for a Single Project

If you want the API key to be visible only for a single project, you can create a local `.env` file containing your API key. Here is an example of a `.env` file:

```
DOC2X_APIKEY = "Your API Key"
```

The import code is the same as using environment variables.

> Note that this may require you to use an integrated development environment, such as VSCode.

## Specifying API Key (Not Recommended)

If you want to specify your API key, you can import it with the following code:

```python
from pdfdeal import Doc2X
Client = Doc2X(apikey="Your API key")
```

## Customization: Simultaneous request limit


> [!caution]
> Unless you are sure you need to modify the request frequency, do not change simultaneous request limit, please use the default setting.

```python
from pdfdeal import Doc2X
Client = Doc2X(thread=123)
```