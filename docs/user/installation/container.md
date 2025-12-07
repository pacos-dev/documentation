---
sidebar_position: 2
description: Learn how to install Coupler in containerized mode.
keywords: [Coupler, installation, Containerized, Podman, Docker]
---

# Containerized

# Containerized Installation (Docker / Podman)

Coupler can be run in a containerized environment using **Docker** or **Podman**.  
The official image is available on [Docker Hub](https://hub.docker.com/r/radekpakula/coupler).

## Running Coupler

### Docker

```bash
docker pull radekpakula/coupler:latest coupler

docker run --name coupler \                                 # set container name to 'coupler'
  --mount type=bind,source=/opt/coupler,target=/.coupler \  # mount directory on the host to /.coupler in container
  -p 8090:8086 \                                            # map port 8086 in container to 8090 on host
  -ti radekpakula/coupler:latest \                         
  JAVA_OPTS="-Dproperty=xxx"                                # pass optional Java arguments
```

### Podman
```bash
podman pull radekpakula/coupler:latest

podman run --name coupler \
  -v /opt/coupler:/.coupler \              # mount directory on the host to /.coupler in container
  -p 8090:8086 \                           # map port 8086 in container to 8090 on host
  -ti radekpakula/coupler:latest \
  JAVA_OPTS="-Dproperty=xxx"               # pass optional Java arguments
```
