---
id: plugin-database
title: Plugin Database
description: Configure plugin-owned persistence with Spring Data JPA and Flyway in PacOS.
keywords: [pacos, database, plugin, JPA, Flyway, HSQLDB, datasource, migrations]
---

# Plugin Database

A plugin can define its own persistence infrastructure. The skeleton demonstrates HSQLDB, JPA repositories, Hibernate and Flyway. This is plugin-owned infrastructure, not a guarantee that every plugin needs a separate database.

## Isolate bean names and properties

Use unique datasource, entity-manager factory, transaction-manager, persistence-unit and migration names. The skeleton uses `skeletonDataSource`, `skeletonEntityManagerFactory` and `skeletonTransactionManager`.

Keep plugin-specific properties in the plugin JAR. The skeleton uses `src/main/resources/skeleton-module.properties`; for a real plugin, use a unique prefix such as `myplugin.datasource.*`. See [Plugin Configuration](configuration.md) for general property and resource conventions.

## Flyway migrations

Place migrations under a plugin-specific path, for example:

`src/main/resources/db/migration/myplugin`

Configure Flyway with that location and a class loader that can see the plugin's resources. The skeleton uses `Flyway.configure(getClass().getClassLoader())` because plugins are loaded dynamically.

Ensure migrations complete before JPA starts using the schema. The skeleton expresses this ordering with `@DependsOn`; review the actual bean dependencies when adapting the configuration.

## Failure handling

A failed migration must be visible and actionable. Do not copy the skeleton's current behavior of catching migration exceptions and only logging them as a production-ready pattern. Decide explicitly whether startup should fail or the plugin should expose a clear unavailable/error state; do not continue as if the schema were ready.

## Persistence practices

- Keep schema names and migration locations plugin-specific.
- Make migrations deterministic and safe to run in the supported upgrade path.
- Use transactions and repositories for application data instead of static mutable collections.
- Test fresh installation and upgrade from an existing schema.
- Verify migration behavior in the packaged plugin, where the plugin class loader and resources are used.

For general Spring configuration and lifecycle rules, see [Plugin Configuration](configuration.md). For testing strategy, see [Testing Plugins](testing.md).
