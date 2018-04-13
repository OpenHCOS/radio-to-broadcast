FROM node:8.11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
COPY ormconfig.dist.json ormconfig.json
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]