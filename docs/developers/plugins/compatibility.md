---
id: plugin-compatibility
title: Compatibility and Dependency Alignment
description: Keep PacOS plugins compatible with the PacOS release by aligning Java, Spring Boot, Vaadin and pacos-bom versions.
keywords: [pacos, plugin, compatibility, dependency management, BOM, Java 21, Spring Boot 4.1.1, Vaadin 25.3.0]
---

# Compatibility and Dependency Alignment

Plugin compatibility is primarily determined by the PacOS runtime version and the platform dependencies exported by its BOM.

## Current platform baseline

The current PacOS main build is:

| Component | Version |
| --- | --- |
| PacOS | <code>3.4.0</code> |
| Java | <code>21</code> |
| Spring Boot | <code>4.1.1</code> |
| Vaadin | <code>25.3.0</code> |
| PacOS BOM | <code>3.4.0</code> |

The skeleton is aligned with the same Java, Vaadin and PacOS BOM versions.

The skeleton plugin artifact itself currently has version <code>3.1</code>; this is the plugin's own version and must not be confused with the PacOS platform version.

## Use the PacOS BOM

Import <code>org.pacos:pacos-bom</code> for the target PacOS release and let dependency management provide compatible versions.

The skeleton uses:

~~~xml
<dependencyManagement>
    <dependency>
        <groupId>org.pacos</groupId>
        <artifactId>pacos-bom</artifactId>
        <version>3.4.0</version>
        <scope>import</scope>
        <type>pom</type>
    </dependency>
</dependencyManagement>
~~~

Do not independently upgrade Spring Boot, Vaadin or other PacOS-owned libraries just because a newer version is available.

## Java level

Compile the plugin against Java 21.

The plugin must not require a newer Java runtime than the PacOS installation that loads it.

## Runtime-provided dependencies

PacOS plugins normally declare platform dependencies such as <code>pacos-base</code>, <code>pacos-core</code>, Spring and Vaadin with <code>provided</code> scope.

This prevents the plugin from packaging duplicate platform classes into its shaded artifact.

Only include additional libraries that the plugin actually owns and that are not supplied by the target PacOS runtime.

## Upgrading a plugin

When the target PacOS version changes:

1. update the PacOS BOM
2. update Java/Vaadin values when required by that PacOS release
3. rebuild and execute the plugin test suite
4. inspect the generated JAR and manifest
5. test installation and removal in a PacOS instance running the target release

Treat platform upgrades as compatibility changes even when the plugin's own business code is unchanged.

## API stability

The most sensitive plugin dependencies are not only Maven coordinates. Public contracts also include:

- <code>WindowConfig</code> and <code>DesktopWindow</code>
- <code>SettingTab</code>
- <code>VariableProvider</code>
- <code>PluginListener</code>
- PacOS REST contracts used by cross-plugin communication
- automation SPIs such as <code>ExecutableBlock</code>

Keep those contracts isolated behind your own services so a platform upgrade does not spread PacOS-specific details throughout the entire plugin.
