import mongoose from 'mongoose';

const mongooseAttr = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

export default async () => {
  try {
    const { DATABASE_URI, DATABASE_NAME } = process.env;
    await mongoose.connect(`${DATABASE_URI}/${DATABASE_NAME}`, mongooseAttr);
    console.log('Database connection established');
  } catch (error) {
    console.log('Error connecting to the database. Exiting...');
    process.exit(1);
  }
};
