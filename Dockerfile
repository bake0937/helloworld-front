FROM node:11.10.1-stretch

RUN yarn global add @vue/cli

WORKDIR /app

RUN yarn
