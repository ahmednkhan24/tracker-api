import express from 'express';
import User from './user';
import getErrorMessage from './errorMessages';
import { findUser, findAllUsers, createUser } from './service';
import { isObjectEmpty, missingKeyInObject } from './utils';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ hello: 'world' });
});

router.get('/users', async (req, res) => {
  const allUsers = await findAllUsers();
  if (isObjectEmpty(allUsers)) {
    res.status(404).json(getErrorMessage(404));
  }
  res.status(200).json(allUsers);
});

router.get('/user', async (req, res) => {
  if (isObjectEmpty(req.query) || missingKeyInObject(req.query, ['emailAddress'])) {
    res.status(400).json(getErrorMessage(400));
  } else {
    const emailAddress = req.sanitize(req.query.emailAddress);
    const user = await findUser(emailAddress);
    res.status(200).json(user);
  }
});

router.post('/user', async (req, res) => {
  if (isObjectEmpty(req.body) || missingKeyInObject(req.body, ['firstName', 'lastName', 'emailAddress'])) {
    res.status(400).json(getErrorMessage(400));
  } else {
    const firstName = req.sanitize(req.body.firstName);
    const lastName = req.sanitize(req.body.lastName);
    const emailAddress = req.sanitize(req.body.emailAddress);
    const user = await createUser({ firstName, lastName, emailAddress });
    res.status(user.errorCode ? user.status : 200).json(user);
  }
});

// find a user by first name
router.get('/user/:id', (req, res) => {
  User.find({ firstName: req.params.id }, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
    res.json({ foundUser: data });
  });
});

router.get('*', (req, res) => {
  res.json(getErrorMessage(404));
});

module.exports = router;
