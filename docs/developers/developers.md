---
sidebar_position: 2
id: developer-docs
title: Developer Documentation
description: Technical documentation for building, testing, packaging and integrating PacOS plugins.
keywords: [pacos, developer docs, plugins, spring, vaadin, maven, api]
---

# Developer Documentation

This section describes how to build extensions that run inside PacOS.

## Recommended learning path

1. Start with [Plugin Runtime Architecture](plugins/architecture.md) to understand dynamic loading, Spring contexts and lifecycle.
2. Configure scanning and plugin-owned infrastructure in [Plugin Configuration](plugins/configuration.md).
3. Learn the platform-facing APIs in [Platform Services](plugins/platform-services.md).
4. Add only the extension types your plugin needs:
   - [Windows and Desktop UI](plugins/windows.md)
   - [Settings Extensions](plugins/settings.md)
   - [Variable Providers](plugins/variables.md)
   - [Events and Plugin Lifecycle](plugins/events.md)
   - [REST APIs and Resources](plugins/rest-api.md)
   - [Automation Blocks](plugins/automation.md)
5. If the plugin needs persistence, follow [Plugin Database](plugins/database.md).
6. Test it using [Testing Plugins](plugins/testing.md).
7. Check [Compatibility and Dependency Alignment](plugins/compatibility.md), then [Build, Package and Release](plugins/build-and-release.md).

## Source of truth

The [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton) is the reference implementation for examples. The platform repository defines runtime behavior; documentation examples should not be treated as a promise of behavior that the code does not implement.

Version numbers in examples describe the currently inspected repository state and can change. Always use the BOM and Java version for the PacOS release you target.

## Keep the guides focused

Shared topics are documented once: Spring scanning and properties in Plugin Configuration, session and platform APIs in Platform Services, permissions in [Permissions and Security](plugins/security.md), and test strategy in Testing Plugins. Extension-specific pages should focus on the relevant contract and link to those guides instead of repeating their general advice.
