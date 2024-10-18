---
title: Command Line Tools
icon: code
---

## `doc2x` Command Usage Instructions

The `doc2x` command is used for batch processing of PDF or image files, converting them into various output formats.

### Positional Arguments

| Parameter  | Description                          |
|------------|--------------------------------------|
| `filename` | The PDF or image file/folder to process |

### Optional Arguments

| Short Flag | Long Flag          | Description                                                                                         |
|------------|--------------------|-----------------------------------------------------------------------------------------------------|
| `-h`       | `--help`           | Show help information and exit                                                                       |
| `-y`       |                    | Skip any scenarios requiring secondary user input                                                    |
| `-k`       | `--api_key`        | Doc2X's API key; if not set, the global setting will be used                                         |
| `-r`       | `--rpm`            | Doc2X's rate limit; do not set if unsure                                                             |
| `-o`       | `--output`         | Output folder for results; if not set, it will default to './Output'                                 |
| `-f`       | `--format`         | Output format for results; supports `md`, `md_dollar`, `latex`, and `docx`; defaults to `md_dollar`  |
| `-i`       | `--image`          | If input is an image, set this flag to True; otherwise, the user will be prompted                    |
| `-p`       | `--pdf`            | If input is a PDF, set this flag to True; otherwise, the user will be prompted                       |
| `--equation`  |                  | Whether to use pure formula mode; only effective for images; defaults to False                      |
| `-c`       | `--clear`          | Clear all global settings related to Doc2X                                                           |
| | `--graphrag`| Change md document to txt form, used for output is converted to the txt form accepted by graphRAG. The output format needs to be md or md_dollar at this time |
| | `--unzip`|Automatically decompress zip files (default output is a zip archive when not in docx output format)|

You can directly run the program by entering 'python -m doc2x', which will guide you through the remaining required parameters. Note that the output path will default to './Output', and the format will default to 'md_dollar'.

![Some Examples](../../images/cli1.png)

## Example

### Convert . /pdf folder into graphRAG accepted txt format

```bash
doc2x -k "YOUR_KEY_HERE" -o ./ragtest/input -p --graphrag ./pdf 
```

### Convert . /pdf folder in all pdf files into md files

```bash
doc2x -p -o ./Output --unzip ./pdf 
```