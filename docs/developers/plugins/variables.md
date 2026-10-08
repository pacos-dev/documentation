---
id: plugin-variables
title: Variable Providers
description: Add plugin-specific variables and scopes to PacOS using VariableProvider.
keywords: [pacos, variables, VariableProvider, scope, plugin, automation]
---

# Variable Providers

PacOS exposes a variable system that plugins can extend with `VariableProvider`.

A provider supplies variables belonging to one or more scopes.

## Minimal provider

```java
@Component
public class ExampleVariableProvider implements VariableProvider {

    private static final ScopeName SCOPE_NAME = new ScopeName("Example");
    private static final Scope SCOPE = new Scope(
            SCOPE_NAME.name(), 1, 'E', "rgb(45,123,34)");

    @Override
    public List<Variable> loadVariables(Scope scope) {
        return List.of(...);
    }

    @Override
    public Optional<Variable> loadVariable(Scope scope, String name) {
        return Optional.empty();
    }

    @Override
    public Set<ScopeName> supportedScopes() {
        return Set.of(SCOPE_NAME);
    }
}
```

PacOS automatically discovers all `VariableProvider` beans from the plugin context and adds them to the platform variable manager.

## Scope ownership

Choose a unique `ScopeName` for your plugin. Keep variable names stable because users may persist expressions containing them.

A provider should return data only for scopes it declares through `supportedScopes()`.

## Dynamic values

When variables are backed by a database or external service, load current values from the provider instead of keeping mutable shared state in static fields.

The skeleton uses static data only as a simple demonstration; production plugins should treat the provider as an integration boundary.
