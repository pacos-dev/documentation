---
sidebar_position: 3
id: plugins
title: Plugins
description: Overview of the PacOS plugin architecture, installation methods, runtime behavior, Spring context isolation, communication between plugins, and API exposure.
keywords: [pacos, plugins, plugin system, modular architecture, app store, jar installation, spring context, extension modules, plugin api, dynamic installation]
---

# Plugins

PacOS provides a fully modular architecture built around dynamically installed plugins. Plugins can be added or
removed at any time, and the system immediately makes them available without requiring a restart. This enables
rapid feature development, flexible deployments, and seamless extension of the platform.

---

## Spring Context Isolation

Each plugin runs in its **own independent Spring context**.  
This architecture ensures:

- complete isolation between plugins
- safe class loading
- freedom from dependency conflicts (except those used by the system)

### **Base Context Inheritance**

Every plugin context is built on top of a *base context* (called **pacos-core**).  
The plugin's classpath is then added as an extension, giving the plugin:

- **full access to the PacOS platform**
- complete visibility of platform APIs and components

At the same time, PacOS itself is unaware of the plugin internals, which preserves isolation and stability.

---

## Plugin Listener Mechanism

PacOS provides a system-wide listener interface that plugins may implement.

If a plugin implements this listener, it will receive events whenever:

- another plugin is installed
- another plugin is uninstalled

This mechanism is especially useful when:

- one plugin needs to extend or modify the behavior of another plugin
- plugins need to communicate or coordinate functionality

---

## Plugin API Exposure

A plugin may expose its own API depending on the functionality it provides.  
The platform:

- automatically detects plugin API endpoints
- integrates them into the PacOS API system
- applies PacOS’s security and permission model

This allows plugins to safely offer services to the entire platform or to other plugins.

---

## Creating Your Own Plugin

To build a new plugin, it is recommended to start with the **[skeleton-project](https://github.com/pacos-dev/skeleton)**

More in [skeleton documentation](skeleton.md)

The template includes:

- sample API implementations
- variable management system
- permission model examples
- a reference window implementation
- a fully configured plugin structure

This greatly speeds up development and ensures compatibility with the PacOS runtime environment.

---

## Summary

PacOS’s plugin architecture enables powerful and dynamic application extension. Thanks to isolated Spring contexts, runtime installation, and built-in communication mechanisms, developers can build independent, secure, and highly modular features that integrate seamlessly with the core system.
