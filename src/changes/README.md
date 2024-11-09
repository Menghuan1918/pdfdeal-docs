---
title: Update Log
icon: wrench
---
## V0.4.8b3
⚠️ This is a beta version, which may contain instabilities and potential issues. It is recommended to use it cautiously in production environments. To install this version, use the following command: `pip install pdfdeal==0.4.8b3`

### ✨ New Features
- Added the ability to output multiple formats (without consuming additional credits). Note that due to export interface rate limitations, this will significantly extend conversion time. [🔍View details](../guide/pdf.md#output-multiple-formats)

### 🚀 Other
- More detailed network error detection


## V0.4.8b2
⚠️ This is a beta version, which may contain instabilities and potential issues. It is recommended to use it cautiously in production environments. To install this version, use the following command: `pip install pdfdeal==0.4.8b2`

### 🚀 Other
- Deprecated the `ocr` option as the upstream API no longer provides an `ocr` toggle option (it is now forced on by default).
- Adapted to new error codes.


## V0.4.8b1
⚠️ This is a beta version, which may contain instabilities and potential issues. It is recommended to use it cautiously in production environments. To install this version, use the following command: `pip install pdfdeal==0.4.8b1`

### ✨ New Features
- Added a new option `oss_choose` to the PDF conversion function, which supports Doc2X's new interface for uploading files via OSS. This offers a significant speed improvement compared to direct uploads. The default is `always` (all files are uploaded via OSS). [🔍View synchronous interface documentation](../guide/pdf.md#parameters), [📦View asynchronous interface documentation](../guide/async.md#upload-files-and-get-file-uid)


## V0.4.7
### ✨ New Features
- Enabled HTTP/2 support for all requests, which theoretically can improve file transfer performance

### 🔧 Bug Fixes
- Fixed a bug where the image replacement tool `mds_replace_imgs` was not functioning
- Fixed a potential deadlock issue when `full_speed` is enabled


### 🚀 Other
- Reintroduced Ruff in GitHub Actions for code checking and formatting verification
- Added prompts for API key authentication failures

## V0.4.6
### ✨ New Features
- Introduced the `full_speed` **beta feature**, which automatically detects the highest available concurrency limit.

### 🔧 Bug Fixes
- Corrected spelling errors in function comments.

### 🚀 Other
- More detailed error descriptions are now provided, with `trace-id` included whenever possible to facilitate problem localization.
- The experimental `retry` option has been removed due to not meeting expected results.

## V0.4.5
### 🔧 Bug Fixes
- Fixed the issue where the error for exceeding the page limit could not be handled

## V0.4.4

### 🔧 Bug Fixes
- Fixed the issue of too small request intervals

## V0.4.3
> [!note]
> The V1 interface of Doc2X will soon be deprecated! Please migrate to the V2 interface as soon as possible. Check the [Interface Migration Guide](./v1tov2.md) to determine if any code changes are necessary.
>
> **In most cases, you will not need to change any code**, as the `0.4.X` version aims to maintain upward compatibility with the `0.3.1` version.

### 🔧 Bug Fixes
- Fixed a potential deadlock issue
- Significantly improved concurrency performance

### 🚀 Other
- Synchronized new error codes for Doc2X
- Improved package dependencies

## V0.4.2
> [!warning]
> The V1 interface of Doc2X will soon be deprecated! Please migrate to the V2 interface as soon as possible. Check the [Interface Migration Guide](./v1tov2.md) to determine if any code changes are necessary.
>
> **In most cases, you will not need to change any code**, as the `0.4.X` version aims to maintain upward compatibility with the `0.3.1` version.

- Fixed an issue where requests could get stuck indefinitely in poor network environments
- Fixed a problem with wrong parameters in CLI programs.

## V0.4.1
> [!warning]
> The V1 interface of Doc2X will soon be deprecated! Please migrate to the V2 interface as soon as possible. Check the [Interface Migration Guide](./v1tov2.md) to determine if any code changes are necessary.
>
> **In most cases, you will not need to change any code**, as the `0.4.X` version aims to maintain upward compatibility with the `0.3.1` version.

### ✨ New Features

- The `pdf2file` function has added an **experimental option** `retry`, which determines whether to retry failed conversions. It is disabled by default. This feature will be further improved in future versions, [🔍view](../guide/pdf.md).
- When a single file path is provided, `pdf2file` will automatically retain the original file name, [🔍view](../guide/pdf.md).
- Updated the CLI program to support the new V2 interface.

### 🔧 Bug Fixes

- Fixed the issue where custom export file names were not effective when a single file path was provided.
- Fixed the issue where downloading converted files could hang in poor network conditions.

### 🚀 Other

- Support for Python 3.13, with related tests added in GitHub Action.
- **Experimental** support for Python 3.13t (nogil).

## V0.4.0

> [!caution]
> The V1 interface of Doc2X will be deprecated in the near future! Please migrate to the V2 interface as soon as possible. Please check the [Interface Migration Guide](. /v1tov2.md) to see if any code changes are required for your scenario.
>
> **In most cases, you will not need to change any code**, and the `0.4.X` version will be as upwardly compatible with the `0.3.1` version as possible.

### ✨ Feature Changes

- Support for Doc2X V2 interface
- The `pdf2file` interface will automatically recognise the input as a `folder path` / `file path` / `list form file path` and process it, [view](../guide/pdf.md)
- `pdf2file` will automatically maintain the original file structure, no longer need to manually intervene, [View](../guide/pdf.md)
- Improve the error reporting hints, now its going to try to provide a solution for the errors reported

### 🚀 Other

- Optimise package dependencies, now only two small packages are needed, `httpx` and `pypdf`.
- Easier debug logging switches.

## V0.3.1

> [!caution]
> ==After version 0.3.1== the output has been updated to `logging`, which by default only outputs Warning and above. If you want to see the processing, set the `logging` level to INFO:
> ```python
> import logging
> httpx_logger = logging.getLogger("httpx")
> httpx_logger.setLevel(logging.WARNING)
> logging.basicConfig(level=logging.INFO)
> ```

### 🚀 Others

- Changed the package information output to the `logging` module, which doesn't output a bunch of stuff anymore

## V0.3.0

### ✨ Feature Changes

- [Document Splitting](../guide/Tools/Auto_split.md) supports outputting multiple files by paragraph.
- New [Document Unzip](../guide/Tools/Unzip.md).

### 🔧 BUG Fixes

- Fixed terminology for switching state prompts
- Fixed not being able to print error report stacks

### 🚀 Others

- Documentation page improved for Linux users (more friendly font designation)
- Added demonstration of use with RAG applications (e.g. Fastgpt, Dify, etc.)

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
