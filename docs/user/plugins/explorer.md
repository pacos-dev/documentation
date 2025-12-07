---
sidebar_position: 4
id: explorer-plugin
title: Explorer
description: Documentation for the Explorer plugin in Coupler, including functionality and configuration of default locations.
keywords: [coupler, explorer, plugin, file browser, bookmarks, archive, transfer, settings, default locations]
---

# Explorer

The Explorer plugin provides a file management interface within Coupler.  
It enables browsing files and directories, creating bookmarks, packing and unpacking archives, and transferring files to and from the environment.

:::tip Docker Integration
If the **Coupler Docker image** is configured to access resources from other containers, Explorer will expose these resources inside its interface.  
This makes **Coupler + Explorer** an excellent solution for synchronizing and browsing container resources in a user-friendly way, available to all team members.
:::


![Explorer plugin screenshot](/img/docs/plugins/explorer-overview.png)

---

## Configuration: Default Locations

The Explorer plugin allows configuration of default locations that will always be displayed.  
This can be managed directly from the **Explorer settings** in the **Settings module**.

Steps:
1. Open the **Settings module** in Coupler.
2. Navigate to **Explorer settings**.
3. Define the default locations you want to appear automatically.
4. Save the configuration — the locations will now be visible every time you open Explorer.

![Explorer configuration screenshot](/img/docs/plugins/explorer-settings.png)