---
sidebar_position: 3
title: Startup Properties
description: Coupler runnable arguments.
keywords: [Coupler, installation, runnable, arguments]
---

# Startup Properties

Coupler can be configured at startup using **JAVA_OPTS**.  
Below is a list of available properties you can pass when launching Coupler (standalone JAR or containerized):

| Parameter | Default                                                             | Description |
|-----------|---------------------------------------------------------------------|-------------|
| `workingDir` | Windows - `{userHome}/.coupler`, <br/>Linux - `/usr/local/.coupler` | The installation directory where all resources including libraries, logs, and DB will be placed. |
| `serverPort` | `8086`                                                              | The port on which Coupler will be launched. |
| `module.list.repo.url` | `https://repo.coupler.best/repository/coupler-maven-repo`           | The repository URL from which Coupler modules will be downloaded. |
| `plugin.list.repo.url` | `https://repo.coupler.best/repository/coupler-maven-repo`           | The repository URL from which Coupler plugins will be downloaded. |
| `version` | `---`                                                               | During installation, the selected version will be downloaded. |

> **Note:** All properties must be passed as parameters via `JAVA_OPTS` when launching Coupler using container.