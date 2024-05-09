FROM almalinux/8-base

RUN yum module install -y nodejs:18 && yum clean all

# Using the node js base image also encounters errors
# FROM node:20-alpine

COPY . /opt/test-runner

WORKDIR /opt/test-runner

RUN npm install

ENTRYPOINT ["node", "index.js"]


