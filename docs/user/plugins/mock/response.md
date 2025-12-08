---
sidebar_position: 4
id: mock-response-config
title: Response
description: Documentation for the Response tab in the Mock Servers plugin, including status code, delay, body, headers, and REST/SOAP-specific options.
keywords: [coupler, mock servers, response, http status code, delay, body, headers, media type, ws-a, ws-addressing]
---

# Response

The **Response** allows configuring predefined responses for mock servers.  
Responses are useful for simulating predictable server behavior, testing client applications, and reproducing specific scenarios.

![Mock response screenshot](/img/docs/plugins/mock-static-response.png)
---

## Basic Configuration

Each response can be configured with:
- **HTTP Status Code** – the status code returned to the client (e.g., 200, 404, 500).
- **Delay** – an optional response delay (in milliseconds) to simulate server load or latency.

---

## Response Tabs

Responses consist of two main tabs:

- **Body**
    - Contains the response text.
    - Supports the use of **variables**, allowing dynamic substitution of values defined at the collection or server level.

- **Headers**
    - Allows configuration of custom HTTP headers returned with the response.
    - Useful for simulating authentication, caching, or custom metadata.

---

## REST-Specific Options

For **REST servers**, responses include an additional option:
- **Media Type**
    - Defines the content type of the response (e.g., `application/json`, `text/plain`, `application/xml`).
    - Ensures clients interpret the response correctly.

---

## SOAP-Specific Options

For **SOAP servers**, responses include an additional tab:
- **WS-A (WS-Addressing)**
    - Enables configuration of WS-Addressing headers.
    - Useful for simulating SOAP services that rely on WS-A for message routing and addressing.


![Mock response soap](/img/docs/plugins/mock-response-soap.png)

---

## Structure

A response configuration includes:
1. **HTTP Status Code** – defines the response outcome.
2. **Delay** – simulates latency or server load.
3. **Body tab** – response text with variable support.
4. **Headers tab** – custom HTTP headers.
5. **REST-specific option** – media type configuration.
6. **SOAP-specific tab** – WS-A (WS-Addressing) configuration.
