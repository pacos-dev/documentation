---
sidebar_position: 3
id: plugins
title: Plugins
description: Overview of the official PacOS plugins, their installation, and functionality.
keywords: [pacos, plugins, official plugins, plugin system, modular architecture, app store, jar installation, spring context, extension modules, plugin api, dynamic installation]
---

# Plugins

PacOS offers plugins implemented by PacOS developers that are ready to install at any time.  
These plugins extend the functionality of PacOS and can be dynamically integrated into the system.

## Explorer
- Browses files and directory structures within PacOS
- Provides navigation and file hierarchy management

## Glogg
- Displays and filters application logs
- Supports debugging and monitoring system activity

## Mockserver
- Creates and manages mock servers for integration testing
- Enables API simulation and workflow testing without external dependencies

## Apinity
- Integrates with various data sources
- Facilitates data exchange between PacOS and external systems

## Automation
- Automates business processes and workflows
- Streamlines repetitive tasks and orchestrates workflows

## Database
- Adds database drivers, manages connections, and provides console access
- Enables direct interaction with databases and query execution in PacOS

---

### 🔧 Plugin System Notes
- All official plugins are **modular** and can be installed or removed dynamically.
- Plugins can be managed through the **PacOS App Store** or manually via **JAR installation**.
- The **Spring context** ensures seamless integration with the PacOS core.
- Developers can extend functionality further using the **Plugin API**.  