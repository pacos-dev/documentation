---
sidebar_position: 98
id: technologies
title: Technologies
description: Overview of the main technologies and frameworks used in PacOS, including Java 21, Vaadin for UI, Spring Boot for backend, and additional components for plugin support and modular architecture.
keywords: [pacos, technologies, java 21, vaadin, spring boot, plugin system, modular architecture, backend, frontend]
---

# Technologies Used in PacOS

PacOS is built on a modern, modular technology stack designed for building extensible enterprise applications. 
Below is an overview of the main technologies currently used.

---

## Java 21

- PacOS is fully developed in **Java 21**, taking advantage of the latest language features and performance improvements
- Java provides the core runtime for both the backend and plugin system
- Ensures high compatibility with Spring Boot, Vaadin, and other libraries

---

## Vaadin Framework

- **Vaadin** is used as the primary **UI framework**
- Enables creating rich, interactive web interfaces in Java without directly writing HTML, CSS, or JavaScript
- Supports modular UI components, which integrates seamlessly with PacOS’s plugin-based architecture
- Provides **themeing, layouts, and responsive design** out of the box

---

## Spring Boot

- **Spring Boot** is the main framework for backend development
- Handles dependency injection, configuration, database integration, security, and service orchestration
- Every plugin runs in its **own Spring context**, extending the base context to ensure isolation and safe interaction with the platform
- Makes it easier to implement REST APIs, services, and listeners for plugins

---

## Database Support

- PacOS Core uses **HSQLDB** as the default embedded database for quick setup and testing
- Plugins may use their own independent database
- Database access is fully configured via Spring Boot, with support for transactional operations and repositories

---

## Modular Plugin Architecture

- Each plugin runs in a **separate Spring context** to maintain isolation
- Plugins can expose APIs and listen to system events, enabling communication between modules
- PacOS supports dynamic installation and removal of plugins without restarting the application
- Modular architecture allows developers to extend or replace system functionality safely

---

## Additional Technologies

- **Maven** for build management and dependency control
- **BOM (Bill of Materials)** ensures all plugin dependencies are compatible with PacOS Core
- **JUnit / Testcontainers** for plugin testing
- **Cora base context** as a foundation for all plugin contexts

---

## Summary

PacOS combines:

- **Java 21** for modern backend and plugin development
- **Vaadin** for rich, modular web UI
- **Spring Boot** for backend services and plugin context management
- **HSQLDB** for default database access
- **Maven and BOM** for consistent dependency management

This stack ensures a stable, extensible, and performant platform for building and running modular applications and plugins.
