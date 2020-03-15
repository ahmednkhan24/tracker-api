# Tracker-Api

## How to start development
clone this repo
have node and npm installed
run the command `npm install`
use command `npm run dev` to start nodemon dev server
use command `npm start` to start normal node server
use command `npm test` to run the unit tests for the application

run ESLint: `./node_modules/.bin/eslint --init`

TODO:
* update readme with better explanations and formatting + mongodb
* add unit tests
* CI/CD (github actions???)
* dockerize
* swagger


/*
 * mongod --dbpath=/Users/data/db
 * sudo lsof -i tcp:3000 
 * kill -9 <PID> 
 * 
 * node app.js
 * npm run dev
 * npm run start
 * 
 * mongo
 * show dbs
 * use prayer_tracker
 * show collections
 * db.users.find()
 * 
 * 
 * dotenv - https://dev.to/getd/how-to-manage-secrets-and-configs-using-dotenv-in-node-js-and-docker-2214
 * 
 * docker - https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4
 *
 * http status codes: https://www.restapitutorial.com/httpstatuscodes.html
 */
