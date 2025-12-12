---
sidebar_position: 1
id: mock-collections-config
title: Collections
description: Documentation for collections in the Mock Servers plugin, including variables, description, export, clone, and context menu options.
keywords: [pacos, mock servers, collections, variables, description, configuration, export, clone, json, context menu]
---

# Collections Configuration

Collections are the foundation of the **Mock Servers plugin**.  

A collection consists of two main tabs:
1. **Variables** – for managing reusable values.
2. **Description** – for adding documentation and notes.

Collections can contain multiple servers, each server can contain multiple actions, and each action can contain multiple responses.  
This hierarchical design ensures flexibility and clarity in managing complex mock environments.

![Collections screenshot](/img/docs/plugins/mock-collection.png)

---

## Variables Tab

Within a collection, you can configure a **list of variables**.  
Variables are managed by the application engine and can be used in any field that supports variable substitution.

Features:
- **Copy & Paste**: variables can be copied and pasted into the table using keyboard shortcuts (**Ctrl+C** and **Ctrl+V**).
- **Add & Edit**: variables can be added or edited by double-clicking on a row.
- **Usage**: once defined, variables can be referenced in server or action configuration fields.

This makes it easy to maintain reusable values across multiple servers in the same collection.

---

## Description Tab

Each collection also contains a **Description tab**.  
This tab allows you to add additional information, notes, or documentation about the collection.  
It is useful for providing context, explaining the purpose of the collection, or sharing guidelines with other users.

---

## Context Menu

Collections can be managed directly from the module tree using the **context menu** (right-click on a collection):

- **Add REST MOCK service** – create a new mock server REST inside the collection.
- **Add SOAP MOCK service** – create a new mock server SOAP based on wsdl file inside the collection.
- **Run all mocks** – start all servers contained in the collection.
- **Stop all mocks** – stop all servers contained in the collection.
- **Export to JSON** – export the entire collection into a JSON file for migration or sharing.
- **Clone** – duplicate the collection internally within the plugin.
- **Rename** – change the name of the collection.
- **Remove** – remove the collection permanently.

