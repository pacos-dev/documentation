---
id: plugin-database
title: Plugin Database
description: Configure an independent plugin database with Spring Data JPA and Flyway in PacOS.
keywords: [pacos, database, plugin, JPA, Flyway, HSQLDB, datasource, migrations]
---

# Plugin Database

A plugin can own an independent database configuration. The skeleton shows the full setup for HSQLDB, JPA repositories, Hibernate and Flyway.

## Isolation

Use plugin-specific datasource, entity manager and transaction manager beans. Give them unique names so they do not collide with beans from other contexts.

The skeleton uses names such as:

`skeletonDataSource`

`skeletonEntityManagerFactory`

`skeletonTransactionManager`

## Configuration

The skeleton keeps datasource settings in:

`src/main/resources/skeleton-module.properties`

Prefer a plugin-specific property prefix, for example `myplugin.datasource.*`.

## Flyway

Store migrations below a plugin-specific classpath location such as:

`src/main/resources/db/migration/myplugin`

Configure Flyway with that location and use the plugin class loader. This matters because the plugin is loaded dynamically and its migration resources are not necessarily visible through the core application class loader.

Run migrations before creating the JPA entity manager. The skeleton establishes this ordering with `@DependsOn`.

## Production guidance

Do not use static mutable collections as a replacement for persistence.

Do not silently swallow migration failures. A production plugin should fail startup or report a clear health/error state when its schema cannot be migrated safely.
