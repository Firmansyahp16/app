FROM node:12 AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install
COPY . ./
RUN pnpm run build

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html 
