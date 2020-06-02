const mongoose = require("mongoose");

//load  Schema function from mongoose to make a new user 
//store data about user Database to store in our react app
const Schema = mongoose.Schema;

//information stored for each user 
const userSchema = new Schema({
    //the username
    userName: {
        type: String,
        trim: true,
        required: "Users must have a username."
    },
    //first name
    firstName: {
        type: String,
        trim: true,
        required: "Users must have a first name."
    },
    //last name
    lastName: {
        type: String,
        trim: true,
        required: "Users must have a last name."
    },
    //phone number
    phoneNumber: {
        type: Number,
        required: "Enter a valid Phone number for this user."
    },
    // email address
    email: {
        type: String,
        trim: true,
        required: "Enter this user's email address"
    },
    //the data will be added when a new user is added to the database
    hireDate: {
        type: Date,
        default: Date.now
    }
});

//defining our export to be the mongoose model
const User = mongoose.model("User", userSchema);

//export
module.exports = User;