FROM node:12

WORKDIR /tracker-api

COPY package*.json /tracker-api/

RUN npm install

COPY webpack.config.js /tracker-api/

COPY ./src/ /tracker-api/src/

RUN npm run build

EXPOSE 5000

CMD ["npm", "run", "prod"]
