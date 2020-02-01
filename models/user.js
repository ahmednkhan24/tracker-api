var mongoose = require('mongoose');

// schema setup
var userSchema = new mongoose.Schema({
    firstName:  {
        type:String,
        required: true,
    },
    lastName: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true
    }
});

// compile the schema into a model
var userModel = mongoose.model('User', userSchema);

module.exports = userModel;
