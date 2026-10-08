---
id: plugin-platform-services
title: Platform Services
description: Use PacOS session, UI, window, variable, download, clipboard, shortcut, application, event and API services from a plugin.
keywords: [pacos, plugin, UISystem, UserSession, WindowManager, VariableManager, DownloadManager, ClipboardManager, ShortcutManager, InternalApiAccess]
---

# Platform Services

A plugin can use platform services through the PacOS base API instead of depending on core implementation classes.

## Session and UI access

<code>UserSession</code> represents the current user's PacOS session. <code>UISystem</code> groups the services associated with the current browser UI.

Typical access from UI code is:

~~~java
UserSession session = UserSession.getCurrent();
UISystem uiSystem = UISystem.getCurrent();
~~~

<code>getCurrent()</code> relies on the active Vaadin session/UI context. Do not treat these objects as ordinary application-wide singletons.

For work running outside the Vaadin session thread, capture the required UI reference explicitly and re-enter the UI with Vaadin's asynchronous access mechanisms before changing UI state.

## Services exposed by UISystem

| Service | Main use |
| --- | --- |
| <code>WindowManager</code> | Open, close, minimize, restore and manage <code>DesktopWindow</code> instances |
| <code>ApplicationManager</code> | Open a file with the PacOS plugin/application that supports its extension |
| <code>VariableManager</code> | Register providers and refresh plugin variables for a UI scope |
| <code>DownloadManager</code> | Start a client-side download from a <code>StreamResource</code> |
| <code>ClipboardManager</code> | Read clipboard content asynchronously |
| <code>ShortcutManager</code> | Register and unregister keyboard shortcuts associated with a window |
| <code>SystemEvent</code> API | Publish and subscribe to UI/system events |

For example:

~~~java
UISystem uiSystem = UISystem.getCurrent();
uiSystem.getWindowManager().showWindow(MyWindowConfig.class);
~~~

## User session data

<code>UserSession</code> exposes:

- the current user identity
- the current user's permissions
- all UI systems associated with the session
- a small per-session key/value store through <code>addToSession</code>, <code>getFromSession</code> and <code>removeFromSession</code>

Use session storage for data that truly belongs to one authenticated session. Do not use it as a replacement for plugin persistence.

## Permissions

<code>UserSession</code> implements the PacOS security contract:

~~~java
if (UserSession.getCurrent().hasActionPermission(MyPermissions.UPDATE)) {
    // perform the action
}
~~~

<code>hasPermission</code> checks the permission without producing a notification. <code>hasActionPermission</code> also informs the user when the action is rejected.

UI visibility checks should not be the only security boundary. The protected operation itself must verify the required permission.

## Variables

<code>VariableManager</code> is responsible for attaching and refreshing <code>VariableProvider</code> implementations for the current UI.

Use <code>VariableProcessor</code> when a service needs to resolve a string containing PacOS variables for a set of scopes. Variable processing is separate from the UI managers and should not be implemented by duplicating the platform variable logic inside the plugin.

## Downloads

To start a client download, create a Vaadin <code>StreamResource</code> and pass it to the platform download manager:

~~~java
uiSystem.getDownloadManager().startDownloading(resource);
~~~

The plugin remains responsible for constructing the resource and controlling what data becomes downloadable.

## Clipboard

<code>ClipboardManager.readClipboard()</code> is asynchronous and returns a <code>CompletableFuture&lt;String&gt;</code>.

Do not block the Vaadin session thread waiting for the result. Complete the background work and use the captured <code>UI</code> to update UI state after the value is available.

## Keyboard shortcuts

Register shortcuts through the window's <code>ShortcutManager</code>:

~~~java
uiSystem.getShortcutManager().registerShortcut(
        desktopWindow,
        shortcut,
        event -> doSomething()
);
~~~

Shortcuts are associated with a <code>DesktopWindow</code>. Unregister them when the window is closed; the platform window implementation already unregisters its shortcuts during <code>close()</code>.

## Application and file opening

<code>ApplicationManager.open(FileInfo)</code> asks PacOS to find a plugin window capable of opening the supplied file.

To make a plugin a file-opening application:

1. extend the <code>WindowConfig</code> with <code>FileExtensionHandler</code>
2. return the supported extensions
3. make the corresponding <code>DesktopWindow</code> implement <code>FileOpenAllowed</code>
4. handle the file in <code>openFile(FileInfo)</code>

PacOS will initialize the responsible window before invoking its file-opening action when necessary.

## Cross-plugin API access

Use <code>InternalApiAccess</code> for authenticated communication with another plugin's REST API.

The platform creates an <code>AccessToken</code> for the requesting plugin:

~~~java
AccessToken token = internalApiAccess.receiveToken("my-plugin");
~~~

The token is controlled by PacOS and can be revoked by the user. Prefer API contracts and DTOs over sharing classes directly between plugin class loaders.

## Lifecycle discipline

Platform services are session- or plugin-context-aware. Avoid putting Vaadin components, <code>UISystem</code>, <code>UserSession</code>, plugin Spring beans or plugin class instances into long-lived static state.

Anything created by a plugin that can outlive a request or window must have a clear shutdown path. This is especially important for event subscriptions, executor services, timers and external clients because a plugin can be removed without restarting PacOS.
