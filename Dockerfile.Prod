# base image
FROM node:12

# set working directory in container
WORKDIR /tracker-api/

# put package.json and package-lock.json into the container within /tracker-api/ directory
COPY package*.json /tracker-api/

# install production node dependencies - done first for caching benefit
RUN npm install --production

# put the prod build into the container within /tracker-api/dist/ directory
COPY ./dist/ /tracker-api/dist/

# specify what port on the container the application will connect to
EXPOSE 5000

# command to run the production build
CMD ["npm", "run", "prod"]
