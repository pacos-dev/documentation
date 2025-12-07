---
sidebar_position: 3
title: API Access
description: Learn how to configure API access in Coupler, including token management and plugin communication.
keywords: [Coupler, API, access, tokens, plugins, swagger, authentication]
---

# API Access

Coupler provides a powerful API that is automatically extended by each installed plugin.  
If a newly installed plugin implements an API, it will be exposed and secured through Coupler.

The full API documentation is available via Swagger at:  
`/swagger-ui/index.html`

![api-access.png](/img/docs/settings/api-access.png)

---

## Settings Overview

The **API Access** tab in the settings module is divided into two sections:

### 1. Create New Token
This section allows you to generate new access tokens.

- **Token generation** – Each token has an expiration date.  
- **One-time display** – After creation, the token is shown only once.  
- **Automatic listing** – Generated tokens are added to the **Token List** section.

### 2. Token List
This section contains all registered tokens in the system.

- **Block token** – Temporarily suspend a token, preventing its use.  
- **Delete token** – Permanently remove a token from the system.  
- **Expiration dates** – Tokens are listed with their validity period.

---

## Plugin Communication

When plugins communicate with each other via the API:

- A token with the plugin’s name is automatically created.  
- This token has its expiration date set to **never**.  
- If a user suspends such a token, communication between plugins via the API will stop.  
- Communication will not resume until the suspended token is **deleted** and a new one is created.

---

## Best Practices

- **Use tokens per integration** – Generate separate tokens for different external services or users.  
- **Monitor token usage** – Regularly review the **Token List** to ensure only valid tokens remain active.  
- **Secure plugin tokens** – Avoid suspending plugin-generated tokens unless troubleshooting, as this may disrupt system communication.  
- **Leverage Swagger** – Use the `/swagger-ui/index.html` endpoint to explore available APIs and test integrations.

---

:::tip[Security Reminder]
Tokens are sensitive credentials. Always store them securely and avoid sharing them publicly.
:::