---
sidebar_position: 1
id: mock-servers-plugin
title: Mock Servers
description: Documentation for the Mock Servers plugin in PacOS, including functionality, collections, and response configuration.
keywords: [pacos, mock servers, plugin, soap, http, https, collections, variables, js scripts, dynamic responses]
---

# Mock Servers 

The **Mock Servers plugin** allows mocking of **SOAP** and **REST** servers.  
It supports both **HTTP** and **HTTPS** protocols, making it versatile for integration testing and simulation scenarios.

All module content is **synchronized across active sessions**.  
This means that any change in configuration or mock state is immediately refreshed for all users currently working with the plugin.

![Mock Servers plugin screenshot](/img/docs/plugins/mock-overview.png)

---

## Features
- Mock SOAP and HTTP servers with support for both HTTP and HTTPS.
- Real-time synchronization of configuration and state across all active sessions.
- Ability to create sample servers upon startup for demonstration purposes.
- Organized structure based on **collections** for grouping and variable management.

---

## Collections

The module operates on the concept of **[Collections](collection.md)** (catalogs).  
To add a new server, you must first create a collection.

Collections provide:
- Grouping of multiple mock servers.
- Configuration of variables at the collection level.
- Automatic application of collection variables to all servers assigned to it.
- **Export and clone functionality**: collections can be exported or cloned directly within the module.
- **Import support**: exported collections can be imported into another PacOS instance, enabling easy migration and sharing of mock setups.

This design enables flexible management of mock environments and shared configuration across related servers.

---

##  Response Configuration

Mock responses to incoming requests can be defined in two ways:

1. **Direct configuration**
    - The user specifies which response should be used for a given request.
    - Useful for static responses and predictable test scenarios.

2. **JavaScript script**
    - The user implements a custom JS script.
    - The script can return either a preconfigured response or generate one dynamically.
    - Enables advanced logic, conditional responses, and dynamic data generation.

---

## Getting Started

Steps to create a mock server:
1. Create a new **collection** to group servers. 
2. Configure variables at the collection level if needed. 
3. Add a new mock server (SOAP or HTTP). 
4. Define responses either directly or via a JS script. 
5. Start the server and test requests using HTTP/HTTPS endpoints.
