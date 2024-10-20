---
title: 使用异步请求
icon: rotate
order: 3
---

```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf, uid_status,convert_parse,get_convert_result
```

## 上传并解析文件
```mermaid
---
title: 上传并解析文件
---
flowchart LR
    A(开始) --> B[上传文件]
    B -->|上传| C[上传文件并获得文件UID]
    C -->|获得文档UID| D[请求接口<br>/api/v2/parse/status]
    D -->|status为success| E(结束)
    D -->|轮询| D
```

### 上传文件并获得文件UID

`upload_pdf` 是一个异步函数，用于将 PDF 文件上传到服务器，并返回文件的唯一标识符（UID）。

#### 参数

- `apikey` (`str`): 用于认证的 API 密钥。
- `pdffile` (`str`): 待上传的 PDF 文件路径。

#### 异常

- `FileError`: 当输入文件过大时抛出。
- `FileError`: 当打开文件出错时抛出。
- `RateLimit`: 当请求超过速率限制时抛出。
- `Exception`: 当上传文件出错时抛出。

#### 返回

- `str`: 上传文件的唯一标识符（UID）。

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf
import asyncio

uid = asyncio.run(upload_pdf(apikey="sk-xxx", pdffile="tests/pdf/sample.pdf"))
print(uid)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import upload_pdf

uid = await upload_pdf(apikey="sk-xxx", pdffile="tests/pdf/sample.pdf")
print(uid)
```
:::

#### 返回示例

```bash
0192a90a-0c17-7729-a436-18320b7e9bf0
```

### 获取文件状态

`uid_status` 是一个异步函数，用于获取文件的处理状态。

#### 参数

- `apikey` (`str`): 用于认证的 API 密钥。
- `uid` (`str`): 文件的唯一标识符。
- `convert` (`bool`, 可选): 是否将 "[" 和 "[[" 转换为 "$" 和 "$$"。默认为 `False`。

#### 异常

- `RequestError`: 当处理文件失败时抛出。
- `Exception`: 当获取状态出错时抛出。

#### 返回

- `Tuple[int, str, list, list]`: 返回一个元组，包含进度、状态、文本和位置。

#### 示范代码

::: tabs#code

@tab Python
```python
from pdfdeal.Doc2X.ConvertV2 import uid_status
import asyncio

process, status, texts, locations = asyncio.run(
    uid_status(
        apikey="sk-xxx",
        uid="0192a90a-0c17-7729-a436-18320b7e9bf0",
    )
)

print(process, status, texts, locations)
```
@tab Jupyter Notebook
```python
from pdfdeal.Doc2X.ConvertV2 import uid_status

process, status, texts, locations = await uid_status(
    apikey="sk-xxx",
    uid="0192a90a-0c17-7729-a436-18320b7e9bf0",
)
process, status, texts, locations
```
:::

#### 返回示范

```
(100,
 'Success',
 ['Test 测试', ''],
 [{'url': '', 'page_idx': 0, 'page_width': 2334, 'page_height': 1313},
  {'url': '', 'page_idx': 1, 'page_width': 2334, 'page_height': 1313}])
```

## 导出文件

```mermaid
---
title: 导出已经解析完成的文件
---
graph LR
    A((开始)) --> B[已经解析完成的文件]
    B --> C[使用文件UID调用接口<br>POST /api/v2/convert/parse]
    C --> D[请求接口<br>GET /api/v2/convert/parse/result]
    D --> |轮询查看导出状态| D
    D --> E((结束))
```