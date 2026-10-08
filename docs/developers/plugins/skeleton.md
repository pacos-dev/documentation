---
id: skeleton
title: New plugin
description: Create a PacOS plugin from the skeleton project and understand the supported extension points.
keywords: [pacos, plugin skeleton, plugin development, spring, maven, java 21, vaadin 25, permissions, database, automation]
---

# New plugin - Skeleton project

The [PacOS skeleton project](https://github.com/pacos-dev/skeleton) is the reference starting point for creating extensions.

The current skeleton targets:

- Java 21
- Spring Boot 4.1.1
- Vaadin 25.3.0
- PacOS BOM 3.4.0

Keep these versions aligned with the PacOS release that will run the plugin.

## What the skeleton demonstrates

The example project contains reference implementations for:

- a desktop application window
- REST and OpenAPI documentation
- plugin permissions
- a plugin-specific datasource and Flyway migrations
- plugin-local events
- a dynamic plugin lifecycle listener
- variable providers
- a settings page
- an automation `ExecutableBlock`
- shaded JAR packaging

Each part can be removed when the plugin does not need it.

## Spring integration

PacOS discovers plugin extensions from the plugin Spring context. The skeleton uses a dedicated configuration package:

`org.pacos.plugin.skeleton.config`

Use constructor injection for dependencies and keep UI classes prototype-scoped.

## Static resources

Put plugin web resources under:

`src/main/resources/META-INF/resources/`

The runtime exposes these resources through the plugin class loader and HTTP resource handling.

## Database

The skeleton configures an independent HSQLDB datasource and JPA persistence unit and runs Flyway migrations from:

`src/main/resources/db/migration/skeleton`

Use a plugin-specific property prefix and migration location for real plugins.

## Packaging

Run:

```bash
mvn clean package
```

The build produces a shaded JAR that can be installed through PacOS plugin management or supplied by a configured Maven repository.

## Developer guides

Start with [Plugin Runtime Architecture](architecture.md), then use the dedicated extension guides:

- [Windows and Desktop UI](windows.md)
- [Permissions and Security](security.md)
- [Settings Extensions](settings.md)
- [Variable Providers](variables.md)
- [Events and Plugin Lifecycle](events.md)
- [REST APIs and Resources](rest-api.md)
- [Plugin Database](database.md)
- [Automation Blocks](automation.md)
- [Build, Package and Release](build-and-release.md)

For local execution, see [Skeleton project - First launch](skeletonRun.md).
