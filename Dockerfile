FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i && npm audit fix

COPY . .

EXPOSE 80
CMD [ "npm", "run", "start"]
