---
title: Update Log
icon: wrench
---
## V0.3.0

### ✨ Feature Changes

- [Document Splitting](... /guide/Tools/Auto_split.md) supports outputting multiple files by paragraph.
- New [Document Unzip](... /guide/Tools/Unzip.md).

### 🔧 BUG Fixes

- Fixed terminology for switching state prompts
- Fixed not being able to print error report stacks

### 🚀 Others

- Documentation page improved for Linux users (more friendly font designation)

## V0.2.5

### ✨ Feature Changes

- Added built-in upload tool: S3

### 🔧 Bug Fixes

- MD Document Image Uploader could not handle relative path images.

### 🚀 Others

- Introduced Ruff in GitHub Action for code checking and code formatting.

## V0.2.4

### ✨ Feature changes

- New MD Document Auto Split tool
- New MD document image upload tool
- New built-in upload tool: AliCloud OSS
- CLI tool will keep the source name of the file (instead of UUID name).

### 🔧 BUG Fixes

- Fixed an issue where an error message was not displayed when a status request failed

## V0.2.3

### 🔧 BUG Fixes

- Fixed issue that did not work in Jupyter Notebook
- Fixed rate limiter not working in `pdfdeal` function.

## V0.2.2

### ✨ Feature Changes

- CLI command line program `doc2x` supports automatic decompression of downloaded zip files

### 🔧 BUG Fixes

- The CLI command line program `doc2x` does not save the key locally in some cases.
- The `Replace image links in Markdown files with links to local files` function saves images in the wrong format (saves jpg images as png).

## V0.2.1

### ✨ Feature Changes

- Updated to adapt new doc2x rate limiting rules from requests per minute RPM -> simultaneous task requests.

### 🔧 BUG Fixes

- CLI command line program `doc2x` does not save error logs, only prints them in the terminal.

## V0.2.0

> [!caution]
> This version has major interface updates (impact range: all)
>
> - Function return parameters have changed, please check [update details](0.2.0.md) to see how to migrate

### ✨ Feature Changes

- Added CLI command line program `doc2x`, for quickly using doc2x to batch process PDF or image files, please refer to [here](../guide/CLI/README.md) for usage
- Adaptation of CLI commands to graphrag has been added, please refer to [here](../guide/CLI/README.md) for usage
- Updated Doc2X document translation functions to use [see here](../demo/graphrag.md)
- Enhanced exception handling
- Function return parameters have changed, will return more detailed content
- Decoupled various parts of the processing process

### 🔧 BUG Fixes

- [Doc2X] When using personal API, if the input file has multiple corrupted files, it may cause an infinite loop
- [FileTool] The `get_files` function cannot accept `pdf` output format

### 🚀 Others

- Documentation updated to a separate repository [pdfdeal-docs](https://github.com/Menghuan1918/pdfdeal-docs)
- Updated unit tests
