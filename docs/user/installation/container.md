---
sidebar_position: 2
description: Learn how to install PacOS in containerized mode.
keywords: [PacOS, installation, Containerized, Podman, Docker]
---

# Containerized

# Containerized Installation (Docker / Podman)

PacOS can be run in a containerized environment using **Docker** or **Podman**.  
The official image is available on [Docker Hub](https://hub.docker.com/repository/docker/pacosdev/webos).

## Running PacOS

### Docker

```bash
docker pull pacosdev/webos:latest

docker run --name webos \                                   # set container name to 'webos'
  --mount type=bind,source=/opt/pacos,target=/.pacos \      # mount working directory
  -p 8090:8086 \                                            # map port 8086 in container to 8090 on host
  -ti pacosdev/webos:latest \                         
  JAVA_OPTS="-Dproperty=xxx"                                # pass optional Java arguments
```

### Podman
```bash
podman pull pacosdev/webos:latest

podman run --name pacos \
  -v /opt/pacos:/.pacos \                  # mount directory on the host to /.pacos in container
  -p 8090:8086 \                           # map port 8086 in container to 8090 on host
  -ti pacosdev/webos:latest \
  JAVA_OPTS="-Dproperty=xxx"               # pass optional Java arguments
```
