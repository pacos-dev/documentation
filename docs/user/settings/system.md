---
sidebar_position: 6
title: System
description: Learn how to configure automatic updates and system restart in PacOS.
keywords: [pacos, system, updates, restart, plugins, automation]
---

# System

The **System** tab provides options for managing automatic updates and system maintenance.  
It ensures that PacOS remains up to date with minimal manual intervention.

![system.png](/img/docs/settings/system.png)

---

## Automatic System Updates

- **Daily check** – Updates are checked every day at **2:00 AM**.
- **Automatic installation** – If enabled, PacOS will download new libraries and restart itself to apply changes.
- **Scope** – Automatic updates apply only to **minor** and **patch** versions.
- **Major updates** – Must be performed manually to ensure compatibility and stability.

This feature removes the need for manual deployments in most cases.

---

## Automatic Plugin Updates

- **Daily check** – Plugins are also checked for updates at **2:00 AM**.
- **Official repository** – Only plugins from the official repository are updated automatically.
- **Update process** – The old version of the plugin is uninstalled and replaced with the new one.
- **No restart required** – If only plugins are updated, the system does not restart.

---

## Manual Update Check

A dedicated **Check for Updates** button allows administrators to manually trigger an update check.  
If updates are available, they can be applied immediately without waiting for the scheduled time.

---

## Manual System Restart

The **Restart System** button enables administrators to restart PacOS on demand.  
This is useful after configuration changes or troubleshooting.

---

## Summary

The **System** tab provides administrators with full control over:

- Automatic system updates (minor/patch versions)
- Automatic plugin updates from the official repository
- Manual update checks
- On-demand system restart

Together, these options ensure PacOS remains stable, secure, and up to date with minimal effort.
