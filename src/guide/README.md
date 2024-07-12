---
title: Guide
icon: lightbulb
---


## Guidelines for use

### Using CLI tools

There is a command line tool, `doc2x`, which is used to quickly batch process PDFs or images using the Doc2X API.

You can view the help at [view help here](CLI/README.md), or type `python -m doc2x -h` to view the help.

### Doc2X support

You can use the Doc2X-related parts of the library separately, which comes with RPM restrictions, batch processing, and automatic exception handling in addition to request wrapping.

See [Doc2X manual](Doc2X/README.md) for details.

If you want to use the encapsulated asynchronous request function directly, use `from pdfdeal.Doc2X.Convert import *` to import the function, and refer to [this document](https://github.com/Menghuan1918/pdfdeal/blob/main/src/pdfdeal/Doc2X/Convert.py) for function descriptions.

### Built-in document processing tools

pdfdeal has some handy built-in file handling tools, such as tools for quickly unzipping zip files, batch renaming, saving a list to PDF, and so on.

Please see [Documentation](Tools.md)

### Processing of PDF files

To be added