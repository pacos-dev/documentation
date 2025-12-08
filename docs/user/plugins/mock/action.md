---
sidebar_position: 4
id: http-actions-config
title: Actions
description: Documentation for configuring actions and responses in HTTP servers within the Mock Servers plugin.
keywords: [coupler, mock servers, http server, actions, responses, configuration]
---

# Actions Configuration

In the Mock Servers plugin, an **[server.md](servers.md)** can contain multiple **actions**.  
Each action defines how the server should respond to specific requests and can have multiple configured responses.

![HTTP actions configuration screenshot](/img/docs/plugins/mock-action.png)
---

## Actions

- An **action** represents a single endpoint or request pattern (e.g., `/api/users`).
- For each action, you can configure:
    - Supported HTTP methods (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE).
    - Matching rules (parameters as part of path, regex in path).
    - Priority level (to resolve conflicts when multiple responses match).
    - Default response (usually static).

---

## Responses

- Each action can have **multiple responses** associated with it.
- Responses can be:
    - **Static** – predefined content returned for the request.
    - **JavaScript-based** – a custom script that inspects the incoming request and dynamically generates or modifies the response.

This design allows flexible simulation of REST APIs, where one action can serve different responses depending on request parameters, regex matches, or custom logic.

