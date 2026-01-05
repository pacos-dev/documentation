---
sidebar_position: 2
description: Learn how to install PacOS in containerized mode.
keywords: [pacos, installation, Containerized, Podman, Docker]
---

# Containerized

# Containerized Installation (Docker / Podman)

PacOS can be run in a containerized environment using **Docker** or **Podman**.  
The official image is available on [Docker Hub](https://hub.docker.com/r/pacosdev/webos).

## Running PacOS

### Docker

```bash
docker pull pacosdev/webos:latest

docker run --name webos \
  -e JAVA_OPTS="-Djava.rmi.server.hostname=127.0.0.1" \
  --platform linux/amd64 \
  --mount type=bind,source=/host/working/dir,target=/opt/.pacos \
  -p 8086:8086 \
  -ti pacosdev/webos:latest
```

### Podman
```bash
podman pull pacosdev/webos:latest

podman run --name webos \
  -e JAVA_OPTS="-Djava.rmi.server.hostname=127.0.0.1" \
  --platform linux/amd64 \
  -v /host/working/dir:/opt/.pacos \
  -p 8086:8086 \
  -ti pacosdev/webos:latest
```

## Configuration Details

### Understanding `java.rmi.server.hostname`

The `-Djava.rmi.server.hostname=127.0.0.1` parameter is essential for the internal management of the containerized application.

It ensures correct communication for the service responsible for **restarting the application** inside the container.

:::warning
Without this setting, the restart service may not be able to send the necessary signals to the application process, leading to failures during update or recovery operations.
:::