---
id: plugin-settings
title: Settings Extensions
description: Add plugin settings pages to PacOS with SettingTab, session filtering, grouping, ordering, and prototype-safe content generation.
keywords: [pacos, SettingTab, settings, plugin, configuration, Vaadin]
---

# Settings Extensions

A plugin can add its own section to the PacOS settings module by implementing `SettingTab`.

## Minimal implementation

```java
@Component
public class ExampleSettingsConfig implements SettingTab {

    @Override
    public String getTitle() {
        return "Example";
    }

    @Override
    public SettingPageLayout generateContent() {
        return new ExampleSettingsPage();
    }

    @Override
    public int getOrder() {
        return 100;
    }

    @Override
    public boolean shouldBeDisplayed(UserSession userSession) {
        return true;
    }
}
```

## Page instances must be fresh

`generateContent()` must return a new `SettingPageLayout` instance. Settings pages contain UI state and must not be shared as singleton Vaadin components.

## Visibility and permissions

Use `shouldBeDisplayed` to decide whether the settings entry is visible to the current session. For settings that expose privileged operations, also enforce the corresponding permission at action time.

## Grouping and ordering

Override `getGroup()` to place the tab under a settings tree path:

```java
@Override
public String[] getGroup() {
    return new String[] {"My Plugin"};
}
```

Use `getOrder()` to control the position among sibling entries.

## Search

Override `getSearchIndex()` when the page should be discoverable through PacOS settings search. Return normalized, searchable terms covering the page title and the most important labels/content.

## Dependency injection

The `SettingTab` implementation may use constructor injection for Spring-managed services. Keep the configuration bean lightweight; put business logic in ordinary services.
