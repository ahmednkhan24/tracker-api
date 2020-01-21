var express  = require("express"),
    router   = express.Router(),
    User     = require("../models/user");

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

module.exports = router;
