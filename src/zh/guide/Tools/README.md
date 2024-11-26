---
title: 文件处理工具
icon: file-import
---

`pdfdeal`内置了一些易用方便的转换前/后的文件处理工具：

- [生成文件路径列表](./Gen_folder.md)
- [将MD中本地/在线图片上传到远端储存服务](./MD_imgs.md)
- [转换MD中的在线图片为本地图片](./MD_imgs.md)
- [为MD文档添加分割符](./Auto_split.md)
- [文件解压处理](./Unzip.md)
- [转换HTML表格为Markdown格式](./Html2MD.md)

但您可能需要安装一些额外依赖以使用：

```bash
pip install --upgrade "pdfdeal[tools]"
```

如您还需要上传文件到远端储存服务：

```bash
pip install --upgrade "pdfdeal[rag]"
```