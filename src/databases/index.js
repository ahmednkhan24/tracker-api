import mongoose from 'mongoose';

const mongooseAttr = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

const { DB_URI } = process.env;

export default async () => {
  try {
    await mongoose.connect(DB_URI, mongooseAttr);
    console.log('Database connection established');
  } catch (error) {
    console.log('Error connecting to the database. Exiting...');
    process.exit(1);
  }
};
