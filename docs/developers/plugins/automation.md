---
id: plugin-automation
title: Automation Blocks
description: Add PacOS automation blocks with ExecutableBlock, BlockMetadata, BlockFormHandler, and ProcessVariableManager.
keywords: [pacos, automation, ExecutableBlock, Camunda, BlockMetadata, ProcessVariableManager, plugin]
---

# Automation Blocks

Plugins can provide executable blocks for the PacOS automation system by implementing `ExecutableBlock<T>`.

The skeleton contains `NewTodoExecutionBlock` as a reference implementation.

## Block structure

An automation block provides:

- `BlockMetadata` - display name, Camunda delegate name, group and result variables
- `BlockFormHandler<T>` - configuration form and model serialization
- `execute(...)` - runtime execution using process variables

## Minimal skeleton

```java
@Component
public class ExampleBlock implements ExecutableBlock<ExampleRecord> {

    @Override
    public BlockMetadata basicData() {
        return new BlockMetadata() {
            @Override
            public String name() {
                return "Example";
            }

            @Override
            public String camundaDelegateName() {
                return "example";
            }

            @Override
            public String[] group() {
                return new String[] {"My Plugin"};
            }

            @Override
            public ResultVariable[] resultVariables() {
                return new ResultVariable[] {
                    new ResultVariable("result", "Result of the block")
                };
            }
        };
    }

    @Override
    public BlockFormHandler<ExampleRecord> blockForm() {
        return new ExampleFormHandler();
    }

    @Override
    public void execute(
            ProcessVariableManager processVariableManager,
            ExampleRecord record,
            List<Scope> scopes) {
        // execute the business operation
    }
}
```

## Camunda delegate name

`camundaDelegateName()` must be unique across the application. It is used when a service task resolves the corresponding Spring bean through the PacOS automation integration.

## Configuration forms

`createForm(...)` should build the Vaadin form and return a Binder connected to all fields.

`writeBean(...)` converts the form state into the model passed to `execute(...)`.

The default `BlockFormHandler.readModel(...)` helper can deserialize stored JSON into the model class returned by `beanClas()`.

## Process variables

Use `ProcessVariableManager` to read and write process variables. Names written by the block may be exposed to later steps, so document result variable names and keep them stable.

## Scope-aware processing

The block receives the currently allowed variable `Scope` collection. Use those scopes when resolving variables or configuring variable-aware form fields.

## Failure handling

Treat `execute(...)` as runtime business logic. Validate required input, fail explicitly on invalid state, and log enough context to diagnose automation failures without logging secrets.
