# syntax=docker/dockerfile:1.2

#ETAP 1
FROM scratch as builder
ADD alpine-minirootfs-3.19.1-aarch64.tar /

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package.json .

RUN --mount=type=cache,target=/root/.npm npm install --production
COPY server.js .

#ETAP 2
FROM nginx:alpine

RUN apk add nodejs
LABEL org.opencontainers.image.authors="Bartosz Skowyra"


COPY --from=builder /app /app

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=1s CMD curl -f http://localhost:3000/ || exit 1

CMD [ "sh", "-c", "nginx & node /app/server.js"] 