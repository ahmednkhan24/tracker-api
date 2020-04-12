import express from 'express';
import User from '../models/user';
import getErrorMessage from '../responses/errorMessages';
import {
  getRoot, getUsers, getUser, postUser,
} from '../controllers';

const router = express.Router();

router
  .route('/')
  .get(getRoot);

router
  .route('/users')
  .get(getUsers);

router
  .route('/user')
  .get(getUser)
  .post(postUser);

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

export default router;
