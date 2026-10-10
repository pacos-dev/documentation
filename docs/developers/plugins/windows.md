---
id: plugin-windows
title: Windows and Desktop UI
description: Register PacOS desktop windows with WindowConfig and prototype-scoped DesktopWindow implementations.
keywords: [pacos, WindowConfig, DesktopWindow, Vaadin, prototype, permissions, desktop, window]
---

# Windows and Desktop UI

A plugin desktop application is registered through a Spring-managed `WindowConfig` and a `DesktopWindow` implementation. The skeleton uses `MyTodoConfig` and `PanelTodo` as working examples.

## Window configuration

Implement `WindowConfig` to provide the title, icon resource path, activator class, application visibility and instance policy. Use `isAllowedForCurrentSession(UserSession)` to decide whether the window is available to a session.

Keep the icon path relative to a resource included in the plugin JAR. For general component scanning and resource packaging, see [Plugin Configuration](configuration.md).

## Window implementation

A `DesktopWindow` contains session/UI state and should be prototype-scoped so each activation receives a new component instance. The skeleton uses this pattern:

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

PacOS creates the prototype through Spring, so constructor injection is appropriate. Do not keep window instances in singleton services, static fields or application-wide caches.

## Permissions and session state

Window visibility and authorization of actions are separate concerns. Use `isAllowedForCurrentSession` for session-level availability, but enforce the required permission when a protected action executes. See [Permissions and Security](security.md).

Use `UserSession.getCurrent()` and `UISystem.getCurrent()` only when the relevant Vaadin session/UI context is active. Background work must re-enter the captured UI safely before changing UI state; see [Platform Services](platform-services.md).

## Lifecycle, events and shortcuts

Release window-owned resources when the window closes. Prefer `subscribeOnAttached` for event listeners owned by a component so they are removed on detach. Register shortcuts through the window/platform APIs instead of global listeners. See [Events and Plugin Lifecycle](events.md).

## Opening files

A window can participate in Explorer file opening by implementing `FileOpenAllowed` and configuring supported extensions through `FileExtensionHandler`. The extensions must match the file types the window actually supports. See [Platform Services](platform-services.md) for the application manager and file-opening flow.

Use the [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton) as the concrete reference for constructors, imports and supported interface methods.
