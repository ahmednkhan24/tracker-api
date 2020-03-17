import express from 'express';
import sanitizer from 'express-sanitizer';
import bodyParser from 'body-parser';
import dotenvSafe from 'dotenv-safe';
import cors from 'cors';

import controller from './routes/controller';

// load environment variables
dotenvSafe.config({ path: '.env' });

// init
const app = express();

// Configuring body parser middleware, allows us to use form data and send responses as json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cross-origin resource sharing
app.use(cors());

// sanitize form data to prevent malware
app.use(sanitizer());

// remove etag's in order to manually configure HTTP response codes
app.disable('etag');

// use our defined routes
app.use(controller);

export default app;
