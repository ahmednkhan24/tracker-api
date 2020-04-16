# base image
FROM node:12

# set working directory in container
WORKDIR /tracker-api

# put package.json and package-lock.json into the container
COPY package*.json /tracker-api/

# install node dependencies - done first for caching benefit
RUN npm install

# put webpack.config.js file into the container to mark the build path
COPY webpack.config.js /tracker-api/

# put the source code into the container
COPY ./src/ /tracker-api/src/

# run script to create a production build
RUN npm run build

# specify what port on the container the application will connect to
EXPOSE 5000

# command to run the production build
CMD ["npm", "run", "prod"]
