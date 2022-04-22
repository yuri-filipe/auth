FROM node:16.13.2-buster

WORKDIR /usr/app

COPY package.json  package-lock.json ./

COPY . .

RUN npm install

EXPOSE 1756

CMD [ "npm", "start" ]