---
id: plugin-build-release
title: Build, Package and Release
description: Build, verify, install and distribute PacOS plugins using the target PacOS BOM and JAR manifest.
keywords: [pacos, plugin, maven, BOM, manifest, shaded jar, release]
---

# Build, Package and Release

## Align with the target runtime

Import the PacOS BOM for the PacOS release that will load the plugin. Do not independently upgrade platform-owned Spring, Vaadin or PacOS dependencies. Check [Compatibility and Dependency Alignment](compatibility.md) for the current repository baseline and version-upgrade checklist.

The plugin artifact version is independent of the PacOS platform version. Keep the two concepts separate.

## Dependency scopes

Use `provided` scope for libraries supplied by the target PacOS runtime, as the skeleton does for platform dependencies. Bundle additional libraries only when the plugin needs them and the runtime does not provide them. Avoid packaging duplicate PacOS/Spring/Vaadin classes into the plugin.

## Manifest metadata is required

PacOS reads plugin metadata from `META-INF/MANIFEST.MF` inside the uploaded JAR. The following main attributes are required for identification:

| Manifest attribute | Meaning |
| --- | --- |
| `Implementation-Version` | Plugin version |
| `Implementation-Group` | Maven group ID |
| `Implementation-Title` | Maven artifact ID |

The runtime also reads optional attributes such as `Name`, `Implementation-Vendor` and `Icon`. The icon value must point to a resource included in the JAR. The skeleton configures these entries in its Maven JAR plugin configuration.

Do not assume that Maven project fields alone are sufficient: verify the final manifest, not just the POM.

## Build and inspect

Build from the plugin project root:

```bash
mvn clean package
```

Inspect the produced JAR. If the build produces both original and shaded artifacts, identify the artifact configured for distribution rather than guessing from the filename.

```bash
jar tf target/<plugin-artifact>.jar | grep 'META-INF/MANIFEST.MF'
unzip -p target/<plugin-artifact>.jar META-INF/MANIFEST.MF
```

Verify that the manifest includes the three required attributes above and that plugin resources and any non-provided runtime dependencies are present. The skeleton is the reference for its own packaging configuration; check its current POM before copying plugin or Shade Plugin settings.

## Install and verify

1. Install the distributable JAR through PacOS plugin management.
2. Confirm that the displayed plugin metadata matches the manifest.
3. Exercise the plugin's UI, REST endpoints, variables, events and persistence as applicable.
4. Review logs for class-loading, resource and migration errors.
5. Remove the plugin and verify that its external resources and subscriptions are released.

A successful unit-test run does not prove that dynamic installation and removal work in a running PacOS instance. See [Testing Plugins](testing.md) for test layers.

## Distribution and compatibility

A plugin may be uploaded to PacOS or published to a configured Maven-compatible repository. Publish the verified distributable artifact, not an intermediate build output.

Treat changes to public REST contracts, permission keys, event payloads, variables and automation blocks as compatibility changes. Keep these contracts stable or document breaking changes explicitly.
