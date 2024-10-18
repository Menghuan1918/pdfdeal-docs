---
title: Doc2X support
icon: file-contract
---

> [!warning]
> ==After version 0.3.1== the output has been updated to `logging`, which by default only outputs Warning and above. If you want to see the processing, set the `logging` level to INFO:
> ```python
> import logging
> httpx_logger = logging.getLogger("httpx")
> httpx_logger.setLevel(logging.WARNING)
> logging.basicConfig(level=logging.INFO)
> ```


You can use abstract wrapped classes or just use asynchronous functions to initiate requests.

The library supports python versions 3.8-3.12 and has been tested on Windows/Linux/MacOS systems using GitHub Action, installed using pip:

```bash
pip install --upgrade pdfdeal
```

You will then need to [initialize](./Init.md).