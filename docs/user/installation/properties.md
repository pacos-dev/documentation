---
sidebar_position: 3
title: Startup Properties
description: PacOS runnable arguments.
keywords: [PacOS, installation, runnable, arguments]
---

# Startup Properties

PacOS can be configured at startup using **JAVA_OPTS**.  
Below is a list of available properties you can pass when launching PacOS (standalone JAR or containerized):

| Parameter | Default                                                         | Description |
|-----------|-----------------------------------------------------------------|-------------|
| `workingDir` | Windows - `{userHome}/.pacos`, <br/>Linux - `/usr/local/.pacos` | The installation directory where all resources including libraries, logs, and DB will be placed. |
| `serverPort` | `8086`                                                          | The port on which PacOS will be launched. |
| `module.list.repo.url` | `https://repo.pacos.devt/repository/pacos-maven-repo`         | The repository URL from which PacOS modules will be downloaded. |
| `plugin.list.repo.url` | `https://repo.pacos.dev/repository/pacos-maven-repo`          | The repository URL from which PacOS plugins will be downloaded. |
| `version` | `---`                                                           | During installation, the selected version will be downloaded. |

> **Note:** All properties must be passed as parameters via `JAVA_OPTS` when launching PacOS using container.