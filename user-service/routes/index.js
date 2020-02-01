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
    const firstName = req.sanitize(req.body.firstName);
    const lastName = req.sanitize(req.body.lastName);
    const email = req.sanitize(req.body.email);

    res.json({ body: [firstName, lastName, email] });


    // // add the new campground to the database
    // CampgroundDatabase.create(newCampground, function(err, newlyCreated){
    //     if (err) {
    //         request.flash("error", "Something went wrong");
    //         response.redirect("back");
    //     }
    //     else {
    //         // redirect to campgrounds page
    //         response.redirect("/campgrounds");
    //     }
    // });
});

router.get('*', (req, res) => {
    res.json( { 404: 'Not Found' });
});

module.exports = router;
