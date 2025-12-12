---
sidebar_position: 5
id: glogg-plugin
title: G-Logger
description: Documentation for the Glogg plugin in PacOS, including functionality and configuration.
keywords: [pacos, glogg, plugin, logs, file reader, streaming, pooling, search, explorer integration]
---

# G-Logger

The Glogg plugin provides lightweight tools for accessing files in read-only mode.  
It is especially suited for working with log files, as it can efficiently display very large files through data streaming.  
Glogg also supports **pooling** (tracking changes in a file) and includes a built-in **search engine** for quick navigation.

![Glogg plugin screenshot](/img/docs/plugins/glogg-overview.png)

:::tip Explorer Integration
If the **Explorer plugin** is installed, text files and logs can be opened by simply double-clicking the file.  
In this case, Glogg will automatically launch with the selected file.  
Additionally, Glogg remembers the last opened files and bookmarks for each user, making it easy to return to previous work.
:::

---

## Configuration

The Glogg plugin do not require any configuration  
You can open any file in read-only mode, and Glogg will handle streaming and pooling automatically.  
The search functionality is available directly in the plugin interface.

