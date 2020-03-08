import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import sanitizer from 'express-sanitizer';
import bodyParser from 'body-parser';
import controller from './routes';

// init
const app = express();

// fix mongoose depracted warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// database connection
const mongooseAttr = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const databaseName = 'prayer_tracker';
mongoose.connect(`mongodb://localhost/${databaseName}`, mongooseAttr, (err) => {
  if (err) {
    console.log('error connecting to the database');
    console.log(err);
  }
});

// cross-origin resource sharing
app.use(cors());

// Configuring body parser middleware, allows us to use form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// sanitize form data to prevent malware
app.use(sanitizer());

// use our defined routes
app.use(controller);

const PORT = process.env.PORT || 3000;
const IP = process.env.IP || '127.0.0.1';
const server = app.listen(PORT, IP, () => {
  console.log('API Server has started');
  const { address, port } = server.address();
  console.log(`running at http://${address}:${port}`);
});
