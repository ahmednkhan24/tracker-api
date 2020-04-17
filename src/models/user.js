import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    uppercase: true,
    required: [true, 'First Name Required'],
  },
  lastName: {
    type: String,
    trim: true,
    uppercase: true,
    required: [true, 'Last Name Required'],
  },
  emailAddress: {
    type: String,
    trim: true,
    unique: true,
    required: [true, 'Email Address Required'],
  },
  timeCreated: {
    type: Date,
    default: Date.now,
  },
});

// compile the schema into a model
const userModel = mongoose.model('User', userSchema);

export default userModel;
