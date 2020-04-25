import getErrorMessage from '../responses/errorMessages';
import { findUser, findAllUsers, createUser } from '../services';
import { isObjectEmpty, missingKeyInObject } from '../utils';

export const getUsers = async (req, res) => {
  const allUsers = await findAllUsers();
  if (isObjectEmpty(allUsers)) {
    return res.status(404).json(getErrorMessage(404));
  }
  return res.status(200).json(allUsers);
};

export const getUser = async (req, res) => {
  if (isObjectEmpty(req.query) || missingKeyInObject(req.query, ['email'])) {
    return res.status(400).json(getErrorMessage(400));
  }
  const emailAddress = req.sanitize(req.query.email);
  const user = await findUser(emailAddress);
  return res.status(200).json(user);
};

export const postUser = async (req, res) => {
  const { payload } = req.body;
  if (isObjectEmpty(payload) || missingKeyInObject(payload, ['first', 'last', 'email'])) {
    return res.status(400).json(getErrorMessage(400));
  }
  const firstName = req.sanitize(payload.first);
  const lastName = req.sanitize(payload.last);
  const emailAddress = req.sanitize(payload.email);
  const user = await createUser({ firstName, lastName, emailAddress });
  return res.status(user.errorCode ? user.status : 200).json(user);
};
