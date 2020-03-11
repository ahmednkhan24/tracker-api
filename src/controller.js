import express from 'express';
import service from './service';
import User from './user';
import utils from './utils';

const router = express.Router();

const errorMessage = { error: 'there was an error' };

// root route
router.get('/', (req, res) => {
  res.json({ username: 'hello world' });
});

// return all users
router.get('/users', async (req, res) => {
  const value = await service.findAllUsers();
  res.json(value);
});

router.get('/user', async (req, res) => {
  if (utils.isObjectEmpty(req.query) || !req.query.email_address) {
    res.json(errorMessage);
  }
  const emailAddress = req.sanitize(req.body.email_address);
  const value = await service.findUser(emailAddress);
  res.json(value);
  // if (utils.isObjectEmpty(req.query) || !req.query.email_address) {
  //     res.json( { error: 'there was an error' });
  // }
  // else {
  //     User.find({ "email": req.query.email_address }, (err, data) => {
  //         if (err) {
  //             res.json({ error: 'there was an error' });
  //         }
  //         res.json({foundUser: data});
  //     });
  // }
});

// create new user
router.post('/user', (req, res) => {
  const firstName = req.sanitize(req.body.first_name);
  const lastName = req.sanitize(req.body.last_name);
  const emailAddress = req.sanitize(req.body.email_address);

  // TODO: fix
  const newUser = {
    // eslint-disable-next-line object-shorthand
    firstName: firstName,
    // eslint-disable-next-line object-shorthand
    lastName: lastName,
    email: emailAddress,
  };

  User.create(newUser, (err, newlyCreatedUser) => {
    if (err) {
      res.json({ error: 'there was an error' });
    } else {
      res.json({ createdUser: newlyCreatedUser });
    }
  });
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
  res.json({ 404: 'Not Found' });
});

module.exports = router;
