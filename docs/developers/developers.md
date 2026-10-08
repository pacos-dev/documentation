---
sidebar_position: 2
id: developer-docs
title: Developer Documentation
description: Technical documentation for building, testing, packaging and integrating PacOS plugins.
keywords: [pacos, developer docs, plugins, spring, vaadin, maven, api]
---

# Developer Documentation

This section describes how to build extensions that run inside PacOS.

The recommended learning path is:

1. start with [Plugin Runtime Architecture](plugins/architecture.md)
2. configure the plugin Spring context with [Plugin Configuration](plugins/configuration.md)
3. learn the platform-facing APIs in [Platform Services](plugins/platform-services.md)
4. add only the extension types the plugin needs
5. test the plugin with [Testing Plugins](plugins/testing.md)
6. verify the target runtime in [Compatibility and Dependency Alignment](plugins/compatibility.md)
7. package the plugin using [Build, Package and Release](plugins/build-and-release.md)

## Main topics

The plugin guides cover desktop windows, settings, security, variables, events, REST APIs, file associations, persistence and automation integrations.

The [Plugin Runtime Architecture](plugins/architecture.md) page explains isolation, discovery and unload behavior. The [Platform Services](plugins/platform-services.md) page documents the services available from the PacOS base API.

For a concrete reference implementation, use the [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton).
