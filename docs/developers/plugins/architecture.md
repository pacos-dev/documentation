---
id: plugin-architecture
title: Plugin Runtime Architecture
description: How PacOS loads plugins, isolates Spring contexts, discovers extension points, and removes plugins at runtime.
keywords: [pacos, plugin, runtime, spring context, classloader, extension point, PluginManager, lifecycle]
---

# Plugin Runtime Architecture

A PacOS plugin is a JAR loaded dynamically by the PacOS runtime. The runtime creates a plugin-specific Spring application context and class loader. The plugin context has access to platform beans through the parent context, but plugin implementation classes should remain owned by the plugin.

## Loading and discovery

At a high level, the lifecycle is:

`plugin JAR -> metadata read -> plugin context and class loader -> extension discovery -> registration -> running -> removal`

The runtime discovers extension beans from the plugin context, including:

| Extension | Purpose |
| --- | --- |
| `WindowConfig` | Registers a desktop application/window |
| `SettingTab` | Adds a page to PacOS settings |
| `VariableProvider` | Supplies plugin variables and supported scopes |
| `PluginListener` | Receives plugin initialization/removal callbacks |
| Vaadin `RequestHandler` | Handles plugin-specific requests/resources |
| Spring MVC controllers | Exposes plugin REST endpoints |

Automation blocks use the automation integration's own discovery path; do not assume they are registered by the same extension-discovery component.

## Spring configuration

The plugin entry-point configuration belongs under `org.pacos.plugin.<module>.config`. Keep component scanning explicit and narrow. See [Plugin Configuration](configuration.md) for the actual skeleton configuration, properties and resource conventions.

Do not assume that the core application scans every class in a plugin package.

## Class loading and resources

A plugin has its own class loader. Plugin resources—especially database migrations and static assets—must be packaged in the JAR and loaded through a resource mechanism that can see the plugin class path. Do not assume the core class loader can see plugin-owned resources.

See [Plugin Database](database.md) for Flyway resource loading and [REST APIs and Resources](rest-api.md) for browser-accessible assets.

## Removal and lifecycle discipline

During removal, PacOS notifies registered `PluginListener` implementations and closes the plugin context/class loader. This is not a guarantee that every external resource or reference is cleaned up automatically.

Plugin code must:
- release external clients, executors, timers and other resources it owns;
- avoid static references to plugin classes from long-lived core objects;
- avoid retaining Vaadin components or session objects in global state;
- unregister subscriptions that are not tied to a component lifecycle;
- tolerate other plugins being installed or removed while PacOS remains running.

Use Spring lifecycle callbacks for plugin-context-owned resources and `subscribeOnAttached` for UI-bound event subscriptions. See [Events and Plugin Lifecycle](events.md).

## Cross-plugin communication

Use `InternalApiAccess` for authenticated REST communication between plugins. Prefer explicit API contracts and DTOs over sharing implementation classes across plugin class loaders. See [Platform Services](platform-services.md) for token access.

For practical examples, use the [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton).
