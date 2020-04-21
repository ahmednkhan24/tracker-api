import dotenv from 'dotenv';
import connectToDb from './databases';
import startServer from './server';
import api from './api';

// load environment variables for local dev
dotenv.config({ path: '.env' });

connectToDb();
startServer(api);
