FROM node:16 as build-step

RUN mkdir -p /app

WORKDIR /app

COPY ./package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Para levantarlo en la web
FROM nginx:1.21.6

COPY --from=build-step /app/dist/mygamesdra2022 /usr/share/nginx/html
