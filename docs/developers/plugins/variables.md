---
id: plugin-variables
title: Variable Providers
description: Add plugin-specific variables and scopes using VariableProvider.
keywords: [pacos, variables, VariableProvider, ScopeName, scope, plugin, automation]
---

# Variable Providers

Implement `VariableProvider` to expose plugin-owned variables to PacOS. The provider declares the scopes it supports and resolves variables for those scopes.

## Reference implementation

The skeleton's `ToDoVariableProvider` demonstrates the actual API shape:

```java
@Component
public class ExampleVariableProvider implements VariableProvider {
    private static final ScopeName SCOPE_NAME = new ScopeName("Example");

    @Override
    public List<Variable> loadVariables(Scope scope) {
        // Return variables available in the requested supported scope.
        return loadFromYourService(scope);
    }

    @Override
    public Optional<Variable> loadVariable(Scope scope, String name) {
        return loadFromYourService(scope, name);
    }

    @Override
    public Set<ScopeName> supportedScopes() {
        return Set.of(SCOPE_NAME);
    }
}
```

The service methods above are illustrative placeholders; replace them with your plugin's actual lookup logic. Use the skeleton source for concrete `Variable` construction and the target PacOS API for exact type signatures.

PacOS discovers provider beans from the plugin context and registers them with the platform variable manager.

## Scope and naming

Choose a unique scope name and return values only for scopes declared by `supportedScopes()`. Keep variable names and meanings stable: users may persist expressions that refer to them.

## Value resolution and state

Resolve current values through plugin services or persistence when the data can change. Do not use mutable static maps as production storage. The skeleton uses static sample data to keep the demonstration small; that is not a recommended persistence model.

For processing strings containing variables, use the platform's `VariableProcessor` rather than reimplementing PacOS variable expansion. See [Platform Services](platform-services.md). For automation blocks that consume variables, see [Automation Blocks](automation.md).
