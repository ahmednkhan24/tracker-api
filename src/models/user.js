import mongoose from 'mongoose';

// schema setup
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
});

// compile the schema into a model
const userModel = mongoose.model('User', userSchema);

export default userModel;
