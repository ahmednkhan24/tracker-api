var express  = require("express"),
    router   = express.Router(),
    User     = require("../models/user");

// test root route
router.get('/', (req, res) => {
    res.json({ username: 'hello world' });
    
    // let user = {
    //     firstName: 'Ahmed',
    //     lastName: 'Khan',
    //     email: 'ahmednkhan24@gmail.com'
    // };

    // userDb.create(user, (err, newlyCreatedUser) => {
    //     if (err) {
    //         console.log("Error, something went wrong");
    //     }
    //     console.log("Newly created user:");
    //     console.log(newlyCreatedUser);
    // });
    
});

// return all users
router.get('/users', (req, res) => {
    User.find({}, (err, allUsers) => {
        if (err) {
            console.log('error finding all users in the database');
            console.log(err);
        }
        res.json({ allUsers: allUsers });
    });
});

// find a user
router.get('/user/:id', (req, res) => {
    User.find({"firstName": req.params.id}, (err, data) => {
        if (err) {
            console.log(err);
        }

        console.log(data);
        res.json({foundUser: data});
    });
});

// create new user
router.post('/user', (req, res) => {
    const first_name = req.sanitize(req.body.first_name);
    const last_name = req.sanitize(req.body.last_name);
    const email_address = req.sanitize(req.body.email_address);

    //res.json({ body: [firstName, lastName, email] });

    const newUser = {
        firstName: first_name,
        lastName: last_name,
        email: email_address
    };

    User.create(newUser, (err, newlyCreatedUser) => {
        if (err) {
            console.log('error creating the user :(');
            console.log(err);
            res.json( { error: 'there was an error' });
        }
        else {
            console.log('CREATED THE USER! :)');
            console.log(newlyCreatedUser);
            res.json( { createdUser: newlyCreatedUser });
        }
    });
});

router.get('*', (req, res) => {
    res.json( { 404: 'Not Found' });
});

module.exports = router;
