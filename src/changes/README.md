---
title: Update Log
icon: wrench
---

## V0.2.0

> [!caution]
> This version has major interface updates (impact range: all)
>
> - Function return parameters have changed, please check [update details](0.2.0.md) to see how to migrate

### ✨ Feature Changes

- Added CLI command line program `doc2x`, for quickly using doc2x to batch process PDF or image files, please refer to [here](../guide/CLI/README.md) for usage
- Adaptation of CLI commands to graphrag has been added, please refer to [here](../guide/CLI/README.md) for usage
- Updated Doc2X document translation functions to use [see here](../guide/Doc2X/5.md)
- Enhanced exception handling
- Function return parameters have changed, will return more detailed content
- Decoupled various parts of the processing process

### 🔧 BUG Fixes

- [Doc2X] When using personal API, if the input file has multiple corrupted files, it may cause an infinite loop
- [FileTool] The `get_files` function cannot accept `pdf` output format

### 🚀 Others

- Documentation updated to a separate repository [pdfdeal-docs](https://github.com/Menghuan1918/pdfdeal-docs)
- Updated unit tests