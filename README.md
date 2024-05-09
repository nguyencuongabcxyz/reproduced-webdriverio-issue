# Prerequisites

Docker desktop should be available.

# Steps to reproduce the issues

## Build docker image
```shell
docker build -t webdriverio-test .
```

## Start the docker composition
```shell
docker-compose -f test.yml up
```

# Log files
All the logs file should be stored in the 'results' directory.
