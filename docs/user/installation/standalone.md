---
sidebar_position: 1
description: Learn how to install PacOS in standalone mode.
keywords: [PacOS, installation, Standalone]
---

# Standalone

The Standalone mode allows you to run PacOS directly on your local machine using the .jar file, without relying on a
Docker image. In this mode, all application modules run within the same JVM process, enabling quick startup and testing 
without container setup.

Standalone mode is ideal for:

- local development and testing,
- rapid prototyping and experimenting with new modules,
- scenarios where a server environment or container orchestration is not required.

The `pacos-starter.jar` file is a runnable Java application responsible for initializing the PacOS system.  
Once launched, the latest version of PacOS will be downloaded and run.  
The latest version of the starter JAR is available in the repository: [PacOS Maven Repo Starter](https://repo.pacos.dev/#browse/browse:pacos-maven-repo:org%2Fpacos%2Fstarter).

After starting the engine, open the browser page with the host address and configured port.  
Locally, it will be: [http://localhost:8086](http://localhost:8086) by default.

The first launch will trigger **installation mode**, where you can configure the basic application settings.

## Requirements
The newest PacOS requires **Java 21**.

## Startup Properties  (`JAVA_OPTS`)
List of all available properties are **[here](./properties)**

## Running Standalone Version

```bash
{JAVA_HOME}/java -jar pacos-starter.jar
```
## Example With Custom Properties
```bash
{JAVA_HOME}/java -jar pacos-starter.jar -DworkingDir=/opt/pacos -DserverPort=8080
```

