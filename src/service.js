var User  = require("./user"),
    utils = require('./utils');

const errorMessage = { error: 'there was an error' };

const findAllUsers = async () => {
    const users = await User.find({}, (err, allUsers) => {
        if (err) {
            return errorMessage;
        }
        return { allUsers: allUsers };
    });
    return users;
};

const findUser = async emailAddress => {
    const user = await User.find({ 'email': emailAddress }, (err, data) => {
        if (err) {
            return errorMessage;
        }
        return { foundUser: data };
    });
    return user;
};

module.exports = {
    findAllUsers,
    findUser
}
