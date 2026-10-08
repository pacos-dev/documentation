---
id: plugin-rest-api
title: REST APIs and Resources
description: Expose REST endpoints and plugin resources in PacOS, including API documentation and URL conventions.
keywords: [pacos, REST, API, Spring MVC, OpenAPI, Swagger, RequestHandler, resources]
---

# REST APIs and Resources

Plugins can expose Spring MVC endpoints. The skeleton demonstrates a controller using `@RestController`, `@RequestMapping`, and OpenAPI annotations.

## Controller example

```java
@RestController
@RequestMapping("/alive")
@Tag(name = "Example")
public class ExampleController {

    @GetMapping
    public ResponseEntity<Boolean> alive() {
        return ResponseEntity.ok(true);
    }
}
```

PacOS integrates plugin request mappings into its API layer. Plugin requests are routed through the `/plugin/<plugin-name>/...` namespace.

Use a plugin-specific path and keep controller contracts backwards compatible when the plugin may be upgraded independently.

## OpenAPI

The skeleton contains OpenAPI configuration and generated API documentation. The generated document is bundled with the plugin and PacOS aggregates plugin API metadata into the running system.

Document public endpoints with `@Operation`, `@Tag`, request/response schemas, and meaningful descriptions.

## Static resources

Plugin static resources belong under:

```
src/main/resources/META-INF/resources/
```

The skeleton places frontend assets below this directory and copies frontend source assets during the Maven build.

## Request handlers

PacOS also discovers Vaadin `RequestHandler` beans. Use a custom handler only when standard Spring MVC/static-resource handling does not fit the requirement.

Avoid exposing internal classpath files or arbitrary filesystem paths through a request handler.
