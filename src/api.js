import express from 'express';
import sanitizer from 'express-sanitizer';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerLocalDoc from '../swaggerLocal.json';
import swaggerWebDoc from '../swaggerWeb.json';
import routes from './routes';

// init
const api = express();

// Configuring body parser middleware, allows us to use form data and send responses as json
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// sanitize form data to prevent malware
api.use(sanitizer());

// remove etag's in order to manually configure HTTP response codes
api.disable('etag');

// swagger for API visualization/interaction
if (process.env.NODE_ENV !== 'production') {
  api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerLocalDoc));
} else {
  api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerWebDoc));
}

// use our defined routes
api.use(routes);

export default api;
