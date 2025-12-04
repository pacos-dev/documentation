---
sidebar_position: 4
title: Plugin Management
description: Learn how to manage plugins in Coupler, including installation, activation, and removal.
keywords: [Coupler, plugins, management, installation, configuration]
---

# Plugin Management

![Plugin Management Screenshot](/img/docs/settings/plugin-management.png)

The **Plugin Management** tab is divided into two main sections:

---

## Upload Plugin

This section allows you to install new plugins directly from a JAR file.

- **Upload JAR file** – Select a plugin file from your local system.
- **Validation** – Coupler automatically checks whether the uploaded file is a valid plugin and compatible with the system.
- **Installation** – Once validated, the plugin is added to the system and becomes available in the management list.

:::tip[Best Practice]
Always verify that the plugin comes from a trusted source before uploading.
:::

---
## Plugin Management

This section displays all installed plugins and their current status.  
For each plugin, you can perform the following actions:

- **Automatic startup** – Enable or disable automatic startup when Coupler launches.
- **Start/Stop** – Temporarily turn the plugin on or off without uninstalling.
- **Uninstall** – Remove the plugin completely from the system.
- **Logs** – Inspect startup logs for each plugin individually, useful for debugging and monitoring.

---

## Summary

The combination of **Upload Plugin** and **Plugin Management** provides full control over Coupler’s modular environment.  
Administrators can easily extend the system with new functionality, manage existing plugins, and ensure stability through log inspection.
