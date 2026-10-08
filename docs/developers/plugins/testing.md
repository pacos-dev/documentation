---
id: plugin-testing
title: Testing Plugins
description: Test PacOS plugins with unit tests, Spring context tests, REST tests, Vaadin UI tests and OpenAPI generation checks.
keywords: [pacos, plugin, testing, JUnit, Mockito, Vaadin, Spring Boot, OpenAPI, WireMock]
---

# Testing Plugins

A plugin should be tested at the same boundaries at which it integrates with PacOS.

The skeleton already contains examples of backend unit tests, REST tests, UI tests, event tests and OpenAPI generation.

## Unit tests

Use ordinary JUnit and Mockito tests for services, mappers, configuration objects and other classes that do not need a running PacOS context.

For example, the skeleton tests <code>MyTodoConfig</code> directly instead of starting Spring. This keeps simple contract tests fast and focused.

## Spring context tests

Use <code>@SpringBootTest</code> when the behavior under test depends on Spring wiring, configuration, repositories or the plugin application context.

Keep the test slice as small as the scenario allows. A context test should prove wiring or runtime behavior, not repeat logic already covered by unit tests.

## REST and MVC tests

The skeleton contains REST controller tests in:

~~~text
src/test/java/org/pacos/plugin/skeleton/backend/api/
~~~

Use Spring's MVC test support for controller behavior that does not require a real external HTTP server.

For a full application-level REST test, start a random port and call the generated endpoint through an HTTP client. The OpenAPI generator test follows this pattern.

## Vaadin UI tests

UI components depend on an active Vaadin session and <code>UserSession</code>.

The skeleton provides <code>VaadinMock</code> to install a test <code>VaadinSession</code>, <code>UserSession</code>, <code>UI</code> and <code>UISystem</code>, while mocking the platform managers:

~~~java
VaadinMock.mockSystem(user);
~~~

This allows a UI test to construct a <code>DesktopWindow</code> without booting the complete PacOS application.

The helper stores the mocked current instances statically because Vaadin's current-instance infrastructure does not otherwise keep them strongly reachable. This helper is test infrastructure only; do not copy that static-state pattern into production plugin code.

## OpenAPI generation

The skeleton contains <code>OpenAPIGeneratorTest</code>.

The test starts Spring Boot on a random port, reads:

~~~text
/v3/api-docs/<plugin-name>
~~~

and writes the generated JSON to:

~~~text
target/classes/v3/api-docs.json
src/main/resources/v3/api-docs.json
~~~

This means the test intentionally modifies a file under <code>src/main/resources</code>. A clean build therefore has a generated documentation artifact that is later packaged with the plugin.

When adapting this pattern, make the generated file deterministic and decide whether it should be committed to source control or generated only during the build.

## What to cover

At minimum, a production plugin should verify:

- business rules and service behavior
- permission-sensitive actions
- Spring wiring for plugin-specific infrastructure
- REST contracts and error handling
- UI construction and key interaction paths
- variable providers and event handling
- OpenAPI generation when REST endpoints are exposed

## Test isolation

Tests must not depend on a developer's installed PacOS instance or working directory.

Use temporary directories and test-managed infrastructure where possible. Do not rely on mutable static state between tests.

When testing Vaadin code, make the current session/UI explicit and restore or clear test state between scenarios.
