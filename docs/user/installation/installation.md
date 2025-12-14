---
sidebar_position: 1
title: Installation
description: Learn how to install PacOS in Local or Containerized mode, including Docker and Podman setups.
keywords: [pacos, installation, Docker, Podman, Local mode, Group mode]
---

# Installation

PacOS can be installed in two main ways:

1. **[Standalone JAR](./standalone)**  – Run PacOS directly from the provided JAR file.
2. **[Containerized](./container)** – Launch PacOS using Podman or Docker.

Once started, PacOS offers two installation modes:

- **[Personal Mode](./installationMode)** – Designed for single-user setups, without permissions or user management. Ideal for local development or testing.
- **[Group Mode](./installationMode)** – Includes user authentication and permissions, suitable for multi-user environments and production use.

:::tip[Configuration changes]
The configurations set during the installation process can be changed at any time, except for the selected installation mode (Personal/Group).
:::

---

## Benefits of Containerized Installation on Servers

When deploying PacOS in a containerized environment (Docker or Podman) on a server, you gain several advantages:

- **Integration with multi-container environments**  
  PacOS can connect to resources across all available containers, making it easier to manage complex production or testing setups.

- **Centralized file access**  
  Remote access to files stored in different containers is possible directly through PacOS, reducing the need for manual container-to-container operations.

- **Unified log management**  
  PacOS provides access to logs from multiple containers, simplifying monitoring and debugging across distributed applications.

- **Scalability and flexibility**  
  Running PacOS in containers allows seamless scaling and integration with orchestration tools (e.g., Kubernetes), ensuring that your workflows adapt to growing infrastructure needs.

- **Isolation and security**  
  Containerized deployment ensures that PacOS runs in an isolated environment, improving security and reducing conflicts with other applications.

---

