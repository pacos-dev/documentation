---
sidebar_position: 3
id: plugins
title: Plugins
description: Overview of the PacOS plugin architecture, runtime behavior, extension points, API exposure, and dynamic lifecycle.
keywords: [pacos, plugins, plugin system, modular architecture, spring context, extension modules, plugin api, dynamic installation]
---

# Plugins

PacOS is built around dynamically managed plugins. A plugin is an independently packaged Maven artifact that is loaded into its own Spring context and class loader.

Plugins can be installed, updated and removed without restarting the main PacOS process.

## Spring context isolation

Each plugin runs in its own Spring application context. The plugin context extends the PacOS platform context and receives access to the platform APIs while keeping plugin implementation details isolated.

The skeleton exposes its plugin configuration from:

`org.pacos.plugin.skeleton.config`

PacOS uses that configuration package as the entry point for scanning plugin components.

## Extension points

The current PacOS runtime discovers these plugin extensions:

- `WindowConfig` - desktop applications and windows
- `SettingTab` - settings pages
- `VariableProvider` - plugin variable scopes
- `PluginListener` - plugin lifecycle integration
- Vaadin `RequestHandler` - custom HTTP/resource handling
- Spring MVC controllers - plugin REST APIs

Automation blocks use the `ExecutableBlock` SPI from `pacos-base` when the PacOS automation/Camunda integration is enabled; see [Automation Blocks](automation.md).

The practical implementation details are documented in the dedicated developer pages.

## Dynamic lifecycle

PacOS notifies `PluginListener` implementations when plugin contexts are initialized or removed.

A plugin should therefore be safe to start and stop independently. Avoid long-lived static references to plugin classes, UI components or services.

## Cross-plugin communication

Use `InternalApiAccess` for authenticated API communication between plugins instead of depending directly on another plugin's implementation classes.

## Creating your own plugin

The recommended starting point is the [skeleton project](https://github.com/pacos-dev/skeleton).

See [Plugin Runtime Architecture](architecture.md), then choose the extension guide relevant to your plugin:

- [Windows and Desktop UI](windows.md)
- [Permissions and Security](security.md)
- [Settings Extensions](settings.md)
- [Variable Providers](variables.md)
- [Events and Plugin Lifecycle](events.md)
- [REST APIs and Resources](rest-api.md)
- [Plugin Database](database.md)
- [Automation Blocks](automation.md)
- [Build, Package and Release](build-and-release.md)
