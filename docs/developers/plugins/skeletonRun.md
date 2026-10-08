---
id: skeleton-configuration
title: Skeleton Project - First Launch
description: Build and run the PacOS plugin skeleton locally, including the application and Maven Jetty execution modes.
keywords: [pacos, plugin skeleton, spring boot, maven, jetty, 8086, 8099, installation mode]
---

# Skeleton Project - First Launch

The skeleton is a runnable PacOS development environment and a reference Maven project for building plugins.

## Prerequisites

Use the Java version required by the target PacOS release. The current skeleton targets Java 21, Spring Boot 4.1.1, Vaadin 25.3.0 and PacOS BOM 3.4.0.

Clone the project:

~~~bash
git clone https://github.com/pacos-dev/skeleton.git
cd skeleton
~~~

## Build

Create the plugin artifact with:

~~~bash
mvn clean package
~~~

The build also prepares the Vaadin frontend and creates the shaded plugin JAR.

## Run the local PacOS application

The main class is:

<code>org.pacos.plugin.skeleton.Skeleton</code>

This launcher starts the PacOS application with the skeleton available in the same local environment.

The default PacOS server port is **8086**:

~~~text
http://localhost:8086/desktop
~~~

On the first launch, PacOS can enter installation mode. Complete the installation flow before using the desktop.

To change the PacOS working directory, add:

~~~text
-DworkingDir=/path/to/dir
~~~

## Run through Maven Jetty

The Maven build has Jetty as its default goal and configures its HTTP connector on **8099**.

Run:

~~~bash
mvn
~~~

Then use:

~~~text
http://localhost:8099/desktop
~~~

The Jetty mode is a separate local execution path from <code>Skeleton.main</code>. Do not confuse port 8099 with the PacOS application's default port 8086.

## What the skeleton demonstrates

The reference project contains examples for:

- desktop windows using <code>WindowConfig</code> and <code>DesktopWindow</code>
- settings using <code>SettingTab</code>
- permissions
- variable providers
- plugin events and lifecycle listeners
- REST endpoints and OpenAPI
- independent database configuration with Flyway and JPA
- static plugin resources
- plugin packaging and shaded JAR creation

Remove example functionality that your plugin does not need rather than carrying the entire skeleton into production unchanged.

## Useful references

- [PacOS developer documentation](https://pacos.dev)
- [PacOS core repository](https://github.com/pacos-dev/pacos)
- [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton)
