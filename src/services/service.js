import UserModel from '../models/user';
import getErrorMessage from '../responses/errorMessages';

export const findAllUsers = async () => UserModel.find({});

export const findUser = async (emailAddress) => UserModel.find({ emailAddress });

export const createUser = async (user) => {
  try {
    return await UserModel.create(user);
  } catch (err) {
    // duplicate
    if (err.name === 'MongoError' && err.code === 11000) {
      return getErrorMessage(403);
    }
    return getErrorMessage(404);
  }
};
