---
sidebar_position: 2
id: mock-server-config
title: Server
description: Documentation for the Server tab in the Mock Servers plugin, including configuration, SSL/TLS, received requests, SOAP-specific tabs, and context menu options.
keywords: [coupler, mock servers, server tab, soap, rest, https, ssl, tls, wsdl, configuration, context menu]
---

# Server

The **Server tab** allows configuring the basic parameters of a mock server.  
Configuration is similar for both **SOAP** and **REST** servers.

![Mock action screenshot](/img/docs/plugins/mock-server.png)

---

## Basic Configuration

For each server, you can define:
- **Host** – the hostname or IP address.
- **Port** – the port on which the server will listen.
- **Path** – the base path for requests.

All fields support **variables**, which can be used to dynamically build paths and endpoints.

---

## Actions Preview

The Server tab provides a quick preview of:
- Added **[actions](action.md)** (endpoints configured for the server).
- The ability to change the **default static response** directly from the tab.

---

## [SSL/TLS](ssl.md)

If the server protocol is set to **HTTPS**, an additional **SSL/TLS tab** becomes available.  
This tab allows configuring secure communication, including client authentication, keystore, truststore, and CA store.

---

## Received Requests

When the server is running and receiving requests:
- The **Received requests** tab displays all incoming requests and their responses.
- Data is shown as **raw text**, enabling quick inspection and debugging.

---

## SOAP-Specific

For SOAP servers, two additional tabs are available:

- **Details**  
  Displays basic information read from the WSDL, such as protocol details and binding addresses.

- **WSDL Content**  
  Shows the WSDL file content on which the mock server was created.

---

## Context Menu

By right-clicking on a server in the module tree, you can access the **context menu** with the following options:

- **Run mock** – start the selected server.
- **Stop mock** – stop the selected server.
- **Reload mock server** – reload server configuration. This usually happens dynamically when changes are made, but if the server address is modified, a manual reload may be required.
- **Add new mock action** – create a new [action](action.md) (endpoint) for the server.
- **Clone** – duplicate the server configuration.
- **Rename** – change the server’s name.
- **Remove** – remove the server permanently.

---

## 📑 Structure

The Server tab may contain the following sections:
1. **Basic configuration** – host, port, path (with variable support).
2. **Actions preview** – quick overview of actions and default response.
3. **SSL/TLS tab** – available when HTTPS is enabled.
4. **Received requests tab** – shows incoming requests and responses.
5. **SOAP-specific tabs** – *Details* and *WSDL Content*.
6. **Context menu** – management options available via right-click.