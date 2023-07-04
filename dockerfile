
#Stage 1: Build
FROM node:16-alpine AS build
LABEL author ="Ben G"

#Environment Variables
ENV HILLSIDE_ENV = production
ENV FOLDERSTRUCT = "/hillside/src/app"

#specify the folder where the context is
WORKDIR ${FOLDERSTRUCT}

#the current folder location
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration HILLSIDE_ENV

#Stage 2: Run

FROM nginx:1.17.1-alpine
COPY nginx conf /etc/nginx/nginx.conf
COPY --from=build ${FOLDERSTRUCT}/dist/app /share/nginx/html

#not sure why port is not allowed in variable
EXPOSE 4200

ENTRYPOINT [ "npm", "start" ]
