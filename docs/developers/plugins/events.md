---
id: plugin-events
title: Events and Plugin Lifecycle
description: Build plugin-local events and react to dynamic plugin installation and removal in PacOS.
keywords: [pacos, events, SystemEvent, PluginListener, lifecycle, plugin]
---

# Events and Plugin Lifecycle

There are two useful levels of eventing in a plugin:

1. plugin-local events for communication between UI/backend components
2. plugin lifecycle events for reacting to other plugins being initialized or removed

## Plugin-local events

Extend `SystemEvent<T>` with your event type:

```java
public class ExampleSystem extends SystemEvent<ExampleEvent> {
}
```

Publish an event with `notify` and subscribe with `subscribe`.

For Vaadin components use `subscribeOnAttached`. PacOS will subscribe on attach and automatically unsubscribe on detach, which avoids UI listener leaks.

## Plugin lifecycle listener

Implement `PluginListener` when the plugin must observe dynamic plugin changes:

```java
@Component
public class ExamplePluginListener implements PluginListener {

    @Override
    public void pluginInitialized(ApplicationContext context) {
        // discover or integrate with a newly available plugin
    }

    @Override
    public void pluginRemoved(ApplicationContext context) {
        // release references to the removed plugin
    }
}
```

Both callbacks are part of the runtime lifecycle. Do not assume that all plugins are present at application startup.

## Event design

Keep event payloads small and explicit. Prefer immutable DTOs/records when an event crosses component boundaries.

Do not publish UI components as event payloads unless the event is strictly local to one UI system.
