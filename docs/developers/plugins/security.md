---
id: plugin-security
title: Permissions and Security
description: Define plugin permissions and enforce them consistently for windows and actions in PacOS.
keywords: [pacos, permissions, security, Permission, UserSession, plugin]
---

# Permissions and Security

Plugins can define permissions through the PacOS `Permission` interface. The core discovers permission implementations and manages them for users.

## Permission definition

The skeleton uses an enum:

```java
public enum MyPermissions implements Permission {

    ITEM_ADD("item.add", "Add item", "item", "Allow adding an item");

    private final String key;
    private final String label;
    private final String category;
    private final String description;

    // getters omitted
}
```

Permission keys are part of the plugin contract. Keep them stable across plugin versions once they are assigned to users or roles.

## Enforce the permission at the action boundary

A permission check should happen where the operation is executed, not only where the UI is rendered:

```java
if (UserSession.getCurrent().hasActionPermission(MyPermissions.ITEM_ADD)) {
    service.addItem(...);
}
```

UI visibility is useful for user experience, but it must not be treated as the security boundary.

## Window access

Use `WindowConfig.isAllowedForCurrentSession(...)` when the whole application should be unavailable for a session.

Use action-level permission checks for operations inside an already opened window.

## Naming

Use a plugin-specific prefix in permission keys, for example:

`myplugin.item.add`

Choose a stable category and human-readable label/description so administrators can understand the permission in the PacOS security UI.
