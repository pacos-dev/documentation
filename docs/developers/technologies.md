---
sidebar_position: 98
id: technologies
title: Technologies
description: Current PacOS technology stack and the versions relevant to plugin development.
keywords: [pacos, technologies, java 21, spring boot 4, vaadin 25, maven, plugin system]
---

# Technologies Used in PacOS

The PacOS platform and its plugins use a Java/Spring/Vaadin stack with explicit version alignment. Plugin developers should treat the PacOS release and its BOM as the compatibility baseline.

## Current baseline

| Technology | Current version |
| --- | --- |
| Java | **21** |
| Spring Boot | **4.1.1** |
| Vaadin | **25.3.0** |
| PacOS | <code>3.4.0</code> |
| PacOS BOM | <code>3.4.0</code> |

The plugin skeleton is aligned with the same Java, Spring Boot, Vaadin and PacOS BOM baseline.

## Java

PacOS uses Java 21 for the platform and the plugin skeleton. Compile plugins against the Java level supported by the target PacOS release.

Java is used for:

- plugin business logic and services
- Spring configuration and dependency injection
- Vaadin UI components
- persistence and REST APIs
- PacOS platform extension APIs

## Spring Boot

Spring Boot provides dependency injection, configuration, persistence integration, REST support and application lifecycle management.

Each plugin runs in its own Spring application context. The plugin context is connected to the PacOS platform context, while plugin implementation classes remain owned by the plugin context and class loader.

Plugin configuration should therefore be explicit. The skeleton uses a dedicated configuration package under:

~~~text
org.pacos.plugin.skeleton.config
~~~

## Vaadin

Vaadin is the primary UI framework.

PacOS uses Vaadin for:

- desktop windows and dialogs
- settings pages
- notifications and interactive controls
- keyboard shortcuts
- browser-side resource handling

Plugin UI classes should follow the PacOS lifecycle rules for session-bound and component-bound state.

## Maven and the PacOS BOM

Maven manages plugin builds and dependency resolution.

The PacOS BOM aligns plugin dependencies with the platform version. A plugin should import the BOM for the target PacOS release instead of independently choosing versions for PacOS-owned Spring, Vaadin or platform libraries.

Most platform dependencies in the skeleton use <code>provided</code> scope because those libraries are supplied by the PacOS runtime.

## Persistence

PacOS core uses HSQLDB as its default embedded database for local operation.

A plugin can define its own persistence infrastructure using Spring Data JPA, Hibernate and Flyway. The plugin should use unique datasource, entity manager, transaction manager and migration names so that its database remains isolated from other contexts.

## Testing

The plugin skeleton uses JUnit and Mockito for unit tests and Spring test support for context and web tests. The repository also contains WireMock as a test dependency for HTTP integration scenarios.

Vaadin UI tests use a dedicated test helper that creates the current Vaadin and PacOS session objects without starting the full platform.

See [Testing Plugins](plugins/testing.md) for the recommended test layers.

## Summary

Plugin development should start from the target PacOS version and then align:

1. Java
2. PacOS BOM
3. Spring Boot
4. Vaadin
5. plugin dependencies and packaging

Do not copy version values from unrelated or older examples. The target PacOS release is the source of truth for compatibility.
