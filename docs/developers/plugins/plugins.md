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

Each plugin runs in its own Spring application context. The plugin context is connected to the PacOS platform context and receives access to platform APIs while keeping plugin implementation details isolated.

The skeleton exposes its plugin configuration from:

<code>org.pacos.plugin.skeleton.config</code>

PacOS uses that configuration entry point to discover plugin components.

## Extension points

The current PacOS runtime discovers these plugin extensions:

- <code>WindowConfig</code> - desktop applications and windows
- <code>SettingTab</code> - settings pages
- <code>VariableProvider</code> - plugin variable scopes
- <code>PluginListener</code> - plugin lifecycle integration
- Vaadin <code>RequestHandler</code> - custom HTTP/resource handling
- Spring MVC controllers - plugin REST APIs

Automation blocks use the <code>ExecutableBlock</code> SPI from <code>pacos-base</code> when the PacOS automation/Camunda integration is enabled; see [Automation Blocks](automation.md).

## Platform API

Plugins should use PacOS base APIs instead of depending directly on core implementation classes.

Start with [Platform Services](platform-services.md) for <code>UserSession</code>, <code>UISystem</code>, window management, variables, downloads, clipboard, shortcuts, file opening and authenticated cross-plugin API access.

## Configuration and testing

Plugin scanning and configuration are described in [Plugin Configuration](configuration.md).

Testing guidance is in [Testing Plugins](testing.md), including unit tests, Spring context tests, REST tests, Vaadin UI tests and OpenAPI generation.

Use [Compatibility and Dependency Alignment](compatibility.md) before upgrading the platform version or changing PacOS-owned dependencies.

## Dynamic lifecycle

PacOS notifies <code>PluginListener</code> implementations when plugin contexts are initialized or removed.

A plugin should therefore be safe to start and stop independently. Avoid long-lived static references to plugin classes, UI components or services.

## Cross-plugin communication

Use <code>InternalApiAccess</code> for authenticated API communication between plugins instead of depending directly on another plugin's implementation classes.

## Creating your own plugin

The recommended starting point is the [skeleton project](https://github.com/pacos-dev/skeleton).

Use the dedicated guides for:

- [Plugin Runtime Architecture](architecture.md)
- [Plugin Configuration](configuration.md)
- [Platform Services](platform-services.md)
- [Windows and Desktop UI](windows.md)
- [Permissions and Security](security.md)
- [Settings Extensions](settings.md)
- [Variable Providers](variables.md)
- [Events and Plugin Lifecycle](events.md)
- [REST APIs and Resources](rest-api.md)
- [Plugin Database](database.md)
- [Automation Blocks](automation.md)
- [Testing Plugins](testing.md)
- [Compatibility and Dependency Alignment](compatibility.md)
- [Build, Package and Release](build-and-release.md)
