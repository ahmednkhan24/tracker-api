import mongoose from 'mongoose';

const mongooseAttr = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

let DB_URI = 'mongodb://localhost:27017/tracker';

export default async () => {
  if (process.env.DB_URI) {
    DB_URI = process.env.DB_URI;
  }
  try {
    await mongoose.connect(DB_URI, mongooseAttr);
    console.log('Database connection established');
  } catch (error) {
    console.log('Error connecting to the database. Exiting...');
    process.exit(1);
  }
};
