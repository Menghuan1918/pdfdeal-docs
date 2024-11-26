---
title: 转换HTML表格
icon: table
---
您可能需要安装一些额外依赖以使用：

```bash
pip install --upgrade "pdfdeal[tools]"
```

## `html_table_to_md`<Badge text="需要0.4.10+版本" type="warning" />

此函数会查找并转换给定字符串中的HTML表格为Markdown表格。

> [!warning]
> 请注意，由于Markdown表格并**不支持合并单元格**，因此在有合并单元格(尤其是纵向的合并单元格)时可能会出现**数据错位**的现象。

```python
from pdfdeal.file_tools import html_table_to_md

with open("Output/1706.03762v7.md", "r") as f:
    html = f.read()
    md = html_table_to_md(html)
    with open("Output/new.md", "w") as f:
        f.write(md)
```