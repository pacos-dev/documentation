---
id: skeleton
title: New plugin
description: Overview of the PacOS plugin skeleton project, including base implementations for window, API, permissions, database access, Spring configuration, and testing.
keywords: [pacos, plugin skeleton, plugin development, spring, maven, hsqldb, base implementation, api, permissions, database, plugin testing]
---

# New plugin - Skeleton project

The **[skeleton-project](https://github.com/pacos-dev/skeleton)** provides a ready-to-use starting point for creating new plugins. It includes the basic implementations for essential plugin features and ensures compatibility with the PacOS platform.

---

## Features Provided

The skeleton project offers implementations for:

- **Window implementation** – a basic UI window ready to extend
- **API implementation** – sample service classes and API endpoints
- **Permissions** – setup for plugin-specific access rights
- **Database access** – pre-configured connections and usage examples
- **Testing** – basic test setup for plugin functionality

These features allow developers to quickly create plugins that follow PacOS standards and best practices.

---

## Spring Integration

Since PacOS is built on **Spring**, every plugin must implement fundamental Spring concepts:

- `@Component` and `@Service` annotations
- Dependency injection via constructor or field
- Isolated Spring context while extending the base context (Cora)

This ensures plugin isolation while granting access to platform services.

---

## Project Structure

The skeleton project is organized into several packages, each with a specific responsibility:

- **org.pacos.plugin.skeleton** – primary package containing all source code for this plugin component
- **org.pacos.plugin.skeleton.config** – configuration package read by Spring from the core module; contains Spring context setup and database configuration
- **org.pacos.plugin.skeleton.backend** – contains all classes defining backend logic and services
- **org.pacos.plugin.skeleton.security** – defines permissions, which are loaded and managed by the Coupler core
- **org.pacos.plugin.skeleton.system** – contains classes responsible for module behavior, including event handling and listener implementations
- **org.pacos.plugin.skeleton.view** – contains classes responsible for creating the frontend view and UI components

- all static resources used by fronted (like imagse,script,css) should be placed inside META-INF/resources directory. All resources from this directory will be made available by the pacos as static web elements

Developers can extend or remove any of these packages based on the plugin’s needs.

Each package is designed to be modular, so developers can extend, replace, or remove components based on their plugin requirements.

---

## Maven Configuration

The plugin skeleton is a **Maven project**. All dependencies are managed via the Coupler **BOM** (Bill of Materials).

- Any additional libraries must be compatible with the BOM
- The skeleton project includes all necessary dependencies for basic plugin functionality

To package your plugin, simply run the standard Maven package command. 
```bash
mvn clean package
```
This will create a **shaded JAR** containing all required dependencies by module.

---

## Deployment

Once the JAR is built, install the plugin directly via the **[Plugin management](../../user/settings/pluginManagement.md)**. 
The plugin is immediately available for use, without restarting the system.

---

## Summary

The Coupler plugin skeleton project:

- Accelerates plugin development
- Provides tested, base implementations for essential features
- Ensures compatibility with Coupler Core and its Spring-based architecture
- Offers a ready-to-use Maven configuration for packaging and deployment

Using this skeleton guarantees that your plugin integrates seamlessly with the platform and follows best practices for modular development.
