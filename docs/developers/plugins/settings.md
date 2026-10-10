---
id: plugin-settings
title: Settings Extensions
description: Add plugin settings pages with SettingTab and session-aware visibility.
keywords: [pacos, SettingTab, settings, plugin, configuration, Vaadin]
---

# Settings Extensions

Implement `SettingTab` to add a page to PacOS settings. The skeleton's `ToDoSettingsConfig` is the reference implementation.

## Contract

A settings configuration provides a title, a content factory and an ordering value. `shouldBeDisplayed(UserSession)` controls whether the entry is visible to the current session. `generateContent()` must return a fresh `SettingPageLayout` instance; do not share a Vaadin component between sessions or page openings.

The skeleton follows this pattern:

```java
@Override
public SettingPageLayout generateContent() {
    return new ToDoSettingsPage(variableProcessor);
}
```

Use constructor injection for Spring-managed services and keep business logic in services rather than in the tab configuration.

## Grouping, ordering and search

Override `getGroup()` to place a page under a settings group and `getOrder()` to order sibling entries. Override `getSearchIndex()` when the page should be discoverable through settings search; return useful normalized terms for its title and content.

Check the `SettingTab` interface in the PacOS base API for the exact contract supported by the target release.

## Visibility is not authorization

Use `shouldBeDisplayed` for navigation visibility, not as the only security boundary. Enforce permissions again when a privileged operation is executed. See [Permissions and Security](security.md).

For UI/session lifecycle considerations, see [Platform Services](platform-services.md). The complete example is in the [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton).
