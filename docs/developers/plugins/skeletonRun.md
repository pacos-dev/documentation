---
id: skeleton-configuration
title: Skeleton project - First launch
description: Step-by-step guide to clone, compile, and run the PacOS plugin skeleton project using Spring Boot, with details on first-time setup and default module installation.
keywords: [pacos, plugin skeleton, configuration, spring boot, app shell, compilation, setup, installation mode, default module]
---

# Skeleton project configuration

This page explains how to configure and run the PacOS plugin skeleton project locally.

---

## 1. Clone the Project

Clone the skeleton project from the official repository:

https://github.com/pacos-dev/skeleton

---

## 2. Compile the Project

The skeleton project is a **Spring Boot** application.  
To compile it locally, simply build the project using Maven:

- Ensure you have the correct JDK and Maven versions installed
- Navigate to the project root
- Run the standard Maven build command

This will compile all sources and prepare the project for execution.

---

## 3. Run the Skeleton Application

Once compiled, you can start the skeleton application.

The main class is: **org.pacos.plugin.skeleton.Skeleton**


This class implements `AppShellConfigurator` and is ready to run.

### Behavior on First Launch

- Running the skeleton project will start the **full PacOS application**
- The skeleton module will appear as a **pre-installed module** in the system
- On first launch, PacOS will enter **[installation mode](../../user/installation/installationMode.md)**, requiring the user to complete the basic installation scenario
- This ensures the system is fully configured before using the skeleton module or adding other plugins

### Default Module

- The skeleton module is automatically recognized by the platform
- It is visible in the PacOS interface as an installed module
- Developers can immediately start using or extending it for plugin development

---

## 4. Summary

- Clone the project from the repository
- Compile it locally using Maven
- Run `org.pacos.plugin.skeleton.Skeleton` to start the skeleton application
- On first launch, complete the PacOS installation scenario
- The skeleton module will be installed by default and available for development and testing


