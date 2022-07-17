FROM node:18.6.0-alpine3.16 as builder

WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:1.23.0-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/ /usr/share/nginx/html
COPY default.conf.template /etc/nginx/templates/default.conf.template

CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
