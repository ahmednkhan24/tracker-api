var express  = require("express"),
    router   = express.Router(),
    User     = require("./user"),
    utils    = require('./utils'),
    constants = require('./constants');

// root route
router.get(constants.ROOT, (req, res) => {
    res.json({ username: 'hello world' });
});

// return all users
router.get(constants.ALL_USERS, (req, res) => {
    User.find({}, (err, allUsers) => {
        if (err) {
            res.json({ error: 'there was an error' });
        }
        res.json({ allUsers: allUsers });
    });
});

router.get(constants.USER, (req, res) => {
    if (utils.isObjectEmpty(req.query) || !req.query.email_address) {
        res.json( { error: 'there was an error' });
    }
    else {
        User.find({ "email": req.query.email_address }, (err, data) => {
            if (err) {
                res.json({ error: 'there was an error' });
            }
            res.json({foundUser: data});
        });
    }
});

// create new user
router.post(constants.USER, (req, res) => {
    const first_name    = req.sanitize(req.body.first_name);
    const last_name     = req.sanitize(req.body.last_name);
    const email_address = req.sanitize(req.body.email_address);

    const newUser = {
        firstName: first_name,
        lastName: last_name,
        email: email_address
    };

    User.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
            res.json({ error: 'there was an error' });
        }
        else {
            res.json({ createdUser: newlyCreatedUser });
        }
    });
});

// find a user by first name
router.get('/user/:id', (req, res) => {
    User.find({ "firstName": req.params.id }, (err, data) => {
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
