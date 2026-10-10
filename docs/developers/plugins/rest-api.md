---
id: plugin-rest-api
title: REST APIs and Resources
description: Expose plugin REST endpoints and browser resources, and publish OpenAPI metadata through PacOS.
keywords: [pacos, REST, API, Spring MVC, OpenAPI, Swagger, RequestHandler, resources]
---

# REST APIs and Resources

A plugin can expose Spring MVC controllers from its plugin Spring context. Use a plugin-specific API path and treat public request/response DTOs as a compatibility contract.

## Controller example

Use the endpoint and annotation conventions of the target PacOS release. The skeleton contains controllers under `org.pacos.plugin.skeleton.backend.api`; use those as the source of truth for imports and API constants rather than copying a standalone example with an arbitrary path.

Document public operations with OpenAPI annotations such as `@Operation`, `@Tag` and explicit request/response schemas. Validate input and enforce permissions at the operation boundary where required.

## OpenAPI generation in the skeleton

The skeleton's OpenAPI setup is development-profile-specific. Its integration test generates API JSON and writes it to the plugin resources; the packaged plugin then serves that static JSON through `OpenApiController`. PacOS expects the plugin documentation endpoint at the path defined by the skeleton's `ApiConst` (currently documented in the source as `/plugin/skeleton/v3`).

This is not automatic production-time generation inside PacOS: the generated JSON must be present in the built JAR. When adapting the process, verify that the file is regenerated after endpoint changes and that the output is included in the final artifact. See [Testing Plugins](testing.md) for the generation test.

## Static resources

Browser-accessible resources belong under:

`src/main/resources/META-INF/resources/`

Keep public resources intentional. Do not expose internal classpath files, configuration secrets or arbitrary filesystem paths.

## Request handlers

PacOS can discover Vaadin `RequestHandler` beans for plugin-specific request handling. Use a custom handler only when standard MVC or the runtime's resource handling does not fit the requirement. Keep handler paths narrow and validate every path and input.

For Spring scanning and resource packaging, see [Plugin Configuration](configuration.md). For dependency alignment, see [Compatibility and Dependency Alignment](compatibility.md).
