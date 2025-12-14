---
id: modal-window
title: Modal Window Implementation
description: Guide to implementing a modal window in PacOS by creating a class that implements the WindowConfig interface, including configuration of title, icon, activator class, permissions, scope handling, and behavior.
keywords: [pacos, modal window, window implementation, WindowConfig, spring, plugin, desktop window, ui, prototype, spring scope]
---

# Modal Window Implementation in PacOS

To add a new application window to PacOS, a plugin must implement the WindowConfig interface.
This interface defines the configuration and behavior of modal windows within the system.

PacOS automatically detects modal windows during plugin initialization and integrates them into the system UI.

---

## WindowConfig Interface Overview

Below is the interface definition:
```java
package org.pacos.base.window.config;

import org.pacos.base.session.UserSession;
import org.pacos.base.window.DesktopWindow;

public interface WindowConfig {

    String title();

    String icon();

    Class<? extends DesktopWindow> activatorClass();

    boolean isApplication();

    boolean isAllowMultipleInstance();

    default boolean isAllowedForCurrentSession(UserSession userSession) {
        return true;
    }

    default boolean isAllowedForMinimize() {
        return true;
    }
}
```
---

## Key Parameters

- **title()** – title displayed in the window header
- **icon()** – icon displayed in the dock, window selector and window header
- **activatorClass()** – class responsible for creating content of the window (must extend DesktopWindow)
- **isApplication()** – determines if the window appears in the application list
- **isAllowMultipleInstance()** – enables creation of multiple instances of this window
- **isAllowedForCurrentSession(...)** – controls visibility for the current user session
- **isAllowedForMinimize()** – determines whether the window can be minimized

---

## Spring Component Requirements

Both classes involved in window creation must be Spring-managed beans:

1. **WindowConfig implementation**  
   Must be annotated with `@Component` so that PacOS Core can detect it.

2. **Activator class (DesktopWindow implementation)**  
   Must be annotated with:

    - `@Component`
    - `@Scope("prototype")`

   The prototype scope is required because **PacOS creates a new instance of the window every time the user opens it**.  
   If the scope is not set to prototype, Spring would reuse a single instance across multiple window activations, which would break window lifecycle and user experience.

---

## Implementation Guidelines

1. Create a class implementing WindowConfig
2. Return a DesktopWindow class from activatorClass()
3. Ensure the DesktopWindow class is marked as prototype
4. Place both classes in Spring-scanned packages
5. Implement UI using Vaadin components inside the DesktopWindow subclass
6. Configure window name, icon, and behavior through WindowConfig

---

## Minimal Example: “Hello World” Window

Below is a minimal working window implementation that will produce a simple “Hello World!” UI.
```java
import com.vaadin.flow.component.html.Span;
import org.pacos.base.window.DesktopWindow;
import org.pacos.plugin.skeleton.view.config.MyTodoConfig;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/**
* This class represents a simple window example.
* It is marked as a prototype because PacOS is responsible for creating
* instances dynamically whenever a window is opened.
  */
@Component
@Scope("prototype")
public class MyWindow extends DesktopWindow {

  protected MyWindow(MyTodoConfig moduleConfig) {
      super(moduleConfig);
      add(new Span("Hello World!"));
  }
}
```
Explanation of the example:

- The class extends DesktopWindow, which is required for any PacOS window
- The constructor receives a config that matches the WindowConfig implementation
- The prototype scope ensures a new instance is created for every activation
- A simple Vaadin Span is added as the UI content

---

## Integrating the Window Into the Plugin

To make the window visible in PacOS, ensure your WindowConfig implementation returns MyWindow in activatorClass():
```java
public Class<? extends DesktopWindow> activatorClass() {
    return MyWindow.class;
}
```
PacOS Core will automatically:

- detect the config class
- load prototype-scoped window classes
- create instances dynamically when the user opens the module
- place the window in the application list (if isApplication() returns true)

---

## Summary

- Every window must define its configuration through WindowConfig
- The UI class must extend DesktopWindow and use prototype scope
- PacOS handles window lifecycle and instance creation
- Windows become available automatically after plugin initialization
- Even simple windows can be implemented with just a few lines of code  

