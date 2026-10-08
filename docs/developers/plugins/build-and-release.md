---
id: plugin-build-release
title: Build, Package and Release
description: Build, package, test and release PacOS plugins using the PacOS BOM and shaded JAR packaging.
keywords: [pacos, plugin, maven, BOM, shaded jar, release, repository]
---

# Build, Package and Release

## Dependency alignment

Use the PacOS BOM declared by the skeleton. It aligns plugin dependencies with the PacOS runtime.

The current PacOS repository is version `3.4.0`, and the skeleton also imports `pacos-bom:3.4.0`. Keep the plugin runtime version aligned with the target PacOS release.

The current PacOS main build uses Java 21 and Vaadin 25.3.0. The skeleton's Maven configuration matches these values.

## Provided dependencies

Most PacOS/Spring/Vaadin runtime dependencies in the skeleton use Maven `provided` scope. This prevents the plugin from bundling copies of libraries already supplied by PacOS.

Only package additional libraries when the plugin actually needs them and they are not provided by the platform.

## Packaging

Build the plugin with:

```bash
mvn clean package
```

The skeleton is configured to create a shaded JAR suitable for import into an existing PacOS instance.

## Metadata

The JAR manifest contains plugin metadata such as implementation version, title, group and icon information. Update project coordinates and plugin-specific metadata when turning the skeleton into a real plugin.

## Distribution

A plugin can be uploaded through PacOS plugin management or published to a configured Maven-compatible repository.

Treat version changes as API changes when public REST endpoints, events, variables, or extension points are affected.
