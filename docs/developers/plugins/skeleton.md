---
id: skeleton
title: New plugin
description: Create a PacOS plugin from the skeleton project and understand the supported extension points.
keywords: [pacos, plugin skeleton, plugin development, spring, maven, java 21, vaadin 25, permissions, database, automation, manifest, shaded jar]
---

# New plugin - Skeleton project

The [PacOS skeleton project](https://github.com/pacos-dev/skeleton) is the reference starting point for creating extensions.

The current skeleton targets:

- Java 21
- Spring Boot 4.1.1
- Vaadin 25.3.0
- PacOS BOM 3.4.0

Keep these versions aligned with the PacOS release that will run the plugin.

## What the skeleton demonstrates

The example project contains reference implementations for:

- a desktop application window
- REST and OpenAPI documentation
- plugin permissions
- a plugin-specific datasource and Flyway migrations
- plugin-local events
- a dynamic plugin lifecycle listener
- variable providers
- a settings page
- an automation `ExecutableBlock`
- shaded JAR packaging

Each part can be removed when the plugin does not need it.

## Spring integration

PacOS discovers plugin extensions from the plugin Spring context. The skeleton uses a dedicated configuration package:

`org.pacos.plugin.skeleton.config`

Use constructor injection for dependencies and keep UI classes prototype-scoped.

## Static resources

Put plugin web resources under:

`src/main/resources/META-INF/resources/`

The runtime exposes these resources through the plugin class loader and HTTP resource handling.

## Database

The skeleton configures an independent HSQLDB datasource and JPA persistence unit and runs Flyway migrations from:

`src/main/resources/db/migration/skeleton`

Use a plugin-specific property prefix and migration location for real plugins.

## Packaging requirements

A plugin installed through PacOS must have a valid `META-INF/MANIFEST.MF` in the final shaded JAR.

The Maven build must include both:

- `maven-jar-plugin` with explicit PacOS manifest entries
- `maven-shade-plugin` to create the distributable shaded JAR

At minimum, the manifest must provide:

~~~text
Implementation-Version
Implementation-Group
Implementation-Title
~~~

The skeleton contains the full reference configuration. The important part is:

~~~xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-jar-plugin</artifactId>
    <configuration>
        <archive>
            <index>true</index>
            <manifest>
                <addClasspath>false</addClasspath>
                <addDefaultImplementationEntries>true</addDefaultImplementationEntries>
            </manifest>
            <manifestEntries>
                <Vaadin-Package-Version>1</Vaadin-Package-Version>

                <Implementation-Version>${project.version}</Implementation-Version>
                <Implementation-Title>${project.artifactId}</Implementation-Title>
                <Implementation-Group>${project.groupId}</Implementation-Group>

                <Description>${project.description}</Description>
                <Icon>img/icon/to-do-list.png</Icon>
                <Name>${project.name}</Name>
            </manifestEntries>
        </archive>
    </configuration>
</plugin>
~~~

and:

~~~xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-shade-plugin</artifactId>
    <version>3.5.0</version>
    <executions>
        <execution>
            <id>shade</id>
            <phase>package</phase>
            <goals>
                <goal>shade</goal>
            </goals>
        </execution>
    </executions>
</plugin>
~~~

Keep the icon resource inside the plugin artifact, for example:

`src/main/resources/META-INF/resources/img/icon/to-do-list.png`

PacOS reads plugin installation metadata from the JAR manifest. A separate `METADATA.MD` file is not required by the installer.

See [Build, Package and Release](build-and-release.md) for the complete packaging checklist and manifest verification commands.

## Packaging

Run:

~~~bash
mvn clean package
~~~

The build produces a shaded JAR that can be installed through PacOS plugin management or supplied by a configured Maven repository.

Before distribution, verify that the selected shaded artifact contains `META-INF/MANIFEST.MF` and the required `Implementation-*` entries.

## Developer guides

Start with [Plugin Runtime Architecture](architecture.md), then use the dedicated extension guides:

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

For local execution, see [Skeleton project - First launch](skeletonRun.md).
