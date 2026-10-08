---
id: plugin-architecture
title: Plugin Runtime Architecture
description: How PacOS loads plugins, isolates Spring contexts, discovers extension points, and removes plugins at runtime.
keywords: [pacos, plugin, runtime, spring context, classloader, extension point, PluginDataLoader, lifecycle]
---

# Plugin Runtime Architecture

A PacOS plugin is a Maven artifact loaded dynamically by the PacOS runtime. The plugin gets its own Spring application context and class loader while extending the PacOS base context.

## What PacOS discovers

During plugin initialization PacOS inspects the plugin Spring context for the extension types listed below. Automation blocks are described separately because their discovery belongs to the automation/Camunda integration rather than `PluginDataLoader`.

| Extension | Purpose |
| --- | --- |
| `WindowConfig` | Adds application/window definitions to the desktop |
| `SettingTab` | Adds a page to PacOS settings |
| `VariableProvider` | Adds variables and a variable scope |
| `PluginListener` | Reacts to plugin initialization/removal |
| Vaadin `RequestHandler` | Handles plugin-specific HTTP/static resources |
| Spring MVC controllers | Exposes plugin REST endpoints |

The runtime collects these beans from the plugin context and registers them with the corresponding PacOS services.

## Spring context

Keep plugin-specific components in the plugin context. The skeleton uses:

`org.pacos.plugin.<module>.config`

as the entry point for Spring scanning.

Do not rely on the core application scanning the whole plugin package. Instead, expose a configuration class in the `config` package and use it to select the plugin components that belong to the runtime.

## Class loading

Plugins are loaded with their own class loader. This is important when the plugin declares libraries that are not part of the PacOS platform.

Code that accesses resources from the plugin classpath must use the plugin class loader or resource mechanisms rather than assuming the core class loader contains the resource.

This is particularly important for Flyway migrations and plugin-specific static resources.

## Runtime lifecycle

The conceptual lifecycle is:

`artifact -> plugin context -> extension discovery -> registration -> running plugin -> removal`

When a plugin is removed, PacOS notifies registered `PluginListener` implementations and closes the plugin context and class loader.

### Design implications

Plugin code must:

- release external resources it owns
- avoid static references to plugin classes from long-lived core objects
- avoid leaking Vaadin UI objects through global/static collections
- treat plugin removal as a real lifecycle event, not only as an application shutdown scenario

## Cross-plugin communication

PacOS provides an `InternalApiAccess` abstraction for authenticated API communication between plugins. Use the platform API instead of sharing implementation classes directly between plugin contexts.

When a plugin needs to react to another plugin being installed or removed, implement `PluginListener`.
