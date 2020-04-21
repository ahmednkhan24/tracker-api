import mongoose from 'mongoose';

const mongooseAttr = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

export default async () => {
  try {
    const { DB_URI } = process.env;
    await mongoose.connect(DB_URI, mongooseAttr);
    console.log('Database connection established');
  } catch (error) {
    console.log('Error connecting to the database. Exiting...');
    process.exit(1);
  }
};
