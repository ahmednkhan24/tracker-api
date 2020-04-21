import express from 'express';
import swaggerUi from 'swagger-ui-express';
import User from '../models/user';
import getErrorMessage from '../responses/errorMessages';
import getRoot from '../controllers';
import {
  getUsers, getUser, postUser,
} from '../controllers/user';
import swaggerLocalDoc from '../swagger/swaggerLocal.json';
// import swaggerWebDoc from '../../swaggerWeb.json';

const router = express.Router();

// swagger for API visualization/interaction
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerLocalDoc));

// if (process.env.NODE_ENV !== 'production') {
//   api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerLocalDoc));
// } else {
//   api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerWebDoc));
// }

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
