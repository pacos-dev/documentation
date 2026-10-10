---
id: plugin-events
title: Events and Plugin Lifecycle
description: Use SystemEvent for plugin events and PluginListener for dynamic plugin lifecycle callbacks.
keywords: [pacos, events, SystemEvent, PluginListener, lifecycle, plugin]
---

# Events and Plugin Lifecycle

PacOS plugins use different mechanisms for UI/application events and for plugin lifecycle callbacks. These mechanisms serve different purposes.

## Application and UI events

Extend `SystemEvent<T>` with the event type used by your plugin. The skeleton's `ToDoSystem` and `ToDoEvent` demonstrate a plugin-local event coordinator.

Use `notify(...)` to publish and `subscribe(...)` to listen. For listeners owned by a Vaadin component, prefer `subscribeOnAttached`: it subscribes when the component is attached and removes the subscription on detach.

Keep event payloads small and explicit. Avoid publishing Vaadin components or session-bound objects outside the UI that owns them.

For platform services and session/UI context, see [Platform Services](platform-services.md).

## Plugin lifecycle callbacks

Implement `PluginListener` when code needs to react to a plugin being initialized or removed. This is separate from `SystemEvent<T>`.

```java
@Component
public class ExamplePluginListener implements PluginListener {
    @Override
    public void pluginInitialized(ApplicationContext context) {
        // Acquire only the references or resources this plugin needs.
    }

    @Override
    public void pluginRemoved(ApplicationContext context) {
        // Release references and resources associated with the removed plugin.
    }
}
```

Use the exact method signatures from the PacOS base API for the target release. Do not assume all plugins are present at application startup, and do not retain plugin context or bean references after removal.

## Cleanup

Subscriptions registered outside component attachment, executors, timers and external clients need an explicit cleanup path. Use Spring lifecycle mechanisms for resources owned by the plugin context. See [Plugin Runtime Architecture](architecture.md) for the broader unload lifecycle.

The [PacOS plugin skeleton](https://github.com/pacos-dev/skeleton) contains working examples of event handling.
