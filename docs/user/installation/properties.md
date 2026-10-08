---
sidebar_position: 3
title: Startup Properties
description: PacOS runnable arguments.
keywords: [pacos, installation, runnable, arguments]
---

# Startup Properties

PacOS can be configured at startup using **JAVA_OPTS**.
Below is a list of available properties you can pass when launching PacOS (standalone JAR or containerized):

| Parameter | Default | Description |
|---|---|---|
| <code>workingDir</code> | Windows - <code>userHome/.pacos</code>, <br/>Linux - <code>/usr/local/.pacos</code> | The installation directory where all resources including libraries, logs, and DB will be placed. |
| <code>serverPort</code> | <code>8086</code> | The port on which PacOS will be launched. |
| <code>module.list.repo.url</code> | <code>https://repo.pacos.dev/repository/pacos-maven-repo</code> | The repository URL from which PacOS modules will be downloaded. |
| <code>plugin.list.repo.url</code> | <code>https://repo.pacos.dev/repository/pacos-maven-repo</code> | The repository URL from which PacOS plugins will be downloaded. |
| <code>version</code> | <code>---</code> | During installation, the selected version will be downloaded. |

> **Note:** All properties must be passed as parameters via <code>JAVA_OPTS</code> when launching PacOS using a container.
