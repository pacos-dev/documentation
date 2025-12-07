---
sidebar_position: 1
description: Learn how to install Coupler in standalone mode.
keywords: [Coupler, installation, Standalone]
---

# Standalone

The Standalone mode allows you to run Coupler directly on your local machine using the .jar file, without relying on a
Docker image. In this mode, all application modules run within the same JVM process, enabling quick startup and testing 
without container setup.

Standalone mode is ideal for:

- local development and testing,
- rapid prototyping and experimenting with new modules,
- scenarios where a server environment or container orchestration is not required.

The `coupler-starter.jar` file is a runnable Java application responsible for initializing the Coupler system.  
Once launched, the latest version of Coupler will be downloaded and run.  
The latest version of the starter JAR is available in the repository: [Coupler Maven Repo Starter](https://repo.coupler.best/#browse/browse:coupler-maven-repo:org%2Fcoupler%2Fstarter).

After starting the engine, open the browser page with the host address and configured port.  
Locally, it will be: [http://localhost:8086](http://localhost:8086) by default.

The first launch will trigger **installation mode**, where you can configure the basic application settings.

## Requirements
The newest Coupler requires **Java 21**.

## Startup Properties  (`JAVA_OPTS`)
List of all available properties are **[here](./properties)**

## Running Standalone Version

```bash
{JAVA_HOME}/java -jar coupler-starter.jar
```
## Example With Custom Properties
```bash
{JAVA_HOME}/java -jar coupler-starter.jar -DworkingDir=/opt/coupler -DserverPort=8080
```

