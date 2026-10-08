---
id: plugin-windows
title: Windows and Desktop UI
description: Build desktop windows for PacOS plugins with WindowConfig, DesktopWindow, prototype scope, permissions, and lifecycle handling.
keywords: [pacos, WindowConfig, DesktopWindow, Vaadin, prototype, permissions, desktop, window]
---

# Windows and Desktop UI

PacOS desktop applications are represented by a `WindowConfig` bean and a prototype-scoped `DesktopWindow` implementation.

## Window configuration

Implement `WindowConfig` as a Spring component:

```java
@Component
public class ExampleWindowConfig implements WindowConfig {

    @Override
    public String title() {
        return "Example";
    }

    @Override
    public String icon() {
        return "img/icon/example.png";
    }

    @Override
    public Class<? extends DesktopWindow> activatorClass() {
        return ExampleWindow.class;
    }

    @Override
    public boolean isApplication() {
        return true;
    }

    @Override
    public boolean isAllowMultipleInstance() {
        return false;
    }

    @Override
    public boolean isAllowedForCurrentSession(UserSession userSession) {
        return true;
    }
}
```

PacOS also supports `isAllowedForMinimize()`, which defaults to `true`.

## Window implementation

A `DesktopWindow` should be prototype scoped because PacOS creates a new instance when the window is activated:

```java
@Component
@Scope("prototype")
public class ExampleWindow extends DesktopWindow {

    protected ExampleWindow(ExampleWindowConfig config) {
        super(config);
        add(new Span("Hello PacOS"));
    }
}
```

The constructor can receive ordinary Spring-managed dependencies. PacOS creates the prototype through Spring, so constructor injection is preferred.

## Session and UI state

`DesktopWindow` is UI state. Do not store it in singleton services, static fields, or application-wide caches.

Use `UserSession.getCurrent()` for the current PacOS session and obtain the current `UISystem` through the window/session when UI integration is required.

## Permissions

Visibility and action authorization are separate concerns.

Use `isAllowedForCurrentSession` when an entire application/window should be unavailable to a session.

For an action inside an already opened window, use a permission check such as:

```java
UserSession.getCurrent().hasActionPermission(MyPermissions.MY_ACTION)
```

The skeleton also demonstrates a UI helper that hides a button for a missing permission.

## Window lifecycle

A window can be:

- opened
- minimized
- closed
- explicitly shut down

When subscribing to plugin events from a UI component, prefer `subscribeOnAttached` so listeners are automatically removed when the component is detached.

Use the window's shortcut registration rather than creating global keyboard listeners where possible.

## File opening

A window can participate in Explorer file opening by implementing `FileOpenAllowed` and extending its configuration with `FileExtensionHandler`.

```java
public class ExampleWindow extends DesktopWindow implements FileOpenAllowed {

    @Override
    public void openFile(FileInfo fileInfo) {
        // open the selected file
    }
}
```

The configured extensions must match the file types the window actually supports.
