---
id: plugin-configuration
title: Plugin Configuration
description: Configure Spring component scanning, properties, profiles, resources and plugin-owned infrastructure in PacOS extensions.
keywords: [pacos, plugin, Spring, configuration, ComponentScan, properties, profiles, package scanning]
---

# Plugin Configuration

A PacOS plugin has its own Spring application context. Configuration should be explicit so that only the plugin components intended for the runtime are loaded.

## Configuration entry point

The skeleton keeps plugin configuration in:

~~~text
org.pacos.plugin.<module>.config
~~~

The configuration class defines the backend and UI packages that belong to the plugin context.

The current skeleton uses:

~~~java
@Configuration
@ComponentScan(basePackages = {
        "org.pacos.plugin.skeleton.backend",
        "org.pacos.plugin.skeleton.view.config",
        "org.pacos.plugin.skeleton.view.setting"
})
public class SkeletonPackageScanning {
}
~~~

Keep the scan narrow. Do not scan the entire plugin root package unless all classes below it are intentionally Spring-managed plugin components.

## Constructor injection

Prefer constructor injection:

~~~java
@Component
public class ExampleService {

    private final ExampleRepository repository;

    public ExampleService(ExampleRepository repository) {
        this.repository = repository;
    }
}
~~~

Constructor injection makes dependencies explicit and makes the class easier to test without a full Spring context.

## Plugin properties

Store plugin-specific configuration in the plugin resources.

The skeleton uses:

~~~text
src/main/resources/skeleton-module.properties
~~~

Use a unique prefix for a real plugin, for example:

~~~properties
myplugin.datasource.url=...
myplugin.datasource.username=...
myplugin.feature.enabled=true
~~~

Avoid generic property names that can collide with PacOS core or another plugin.

When configuration is bound to a typed object, use Spring Boot configuration binding rather than reading strings from the environment throughout the codebase.

## Profiles

Use Spring profiles only for intentional environment differences such as local development, tests or a dedicated integration setup.

Do not make the plugin's normal production behavior depend on a developer-specific profile being active.

The plugin must remain installable when no optional development profile is selected.

## Resources

Classpath resources belong inside the plugin JAR.

For browser-accessible plugin resources, use:

~~~text
src/main/resources/META-INF/resources/
~~~

The PacOS runtime can create a default Vaadin <code>RequestHandler</code> for plugin resources when the plugin does not provide its own request handler.

For database migrations, keep the migration location plugin-specific and make the migration resources visible through the plugin class loader.

## Plugin-owned infrastructure

A plugin that uses persistence should define its own datasource, JPA entity manager and transaction manager names. The skeleton demonstrates this isolation with <code>skeletonDataSource</code>, <code>skeletonEntityManagerFactory</code> and <code>skeletonTransactionManager</code>.

Use plugin-specific bean names, persistence-unit names and migration paths so that a second plugin cannot accidentally reuse the same infrastructure.

## Configuration and runtime lifecycle

Configuration objects are created inside the plugin context and are destroyed when that context is closed.

Do not keep plugin-managed resources in static fields. For clients, schedulers or other resources that need explicit cleanup, use Spring lifecycle mechanisms so that they are released with the plugin context.
