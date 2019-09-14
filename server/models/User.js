const mongoose = require('mongoose');
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');
const { hash } = require('../helpers/bcryptjs')


const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please choose a username'],
        uniqueCaseInsensitive: true
    },
    email: {
        type: String,
        required: [true, 'Email must not be empty'],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email format"],
        uniqueCaseInsensitive: true
    },
    password: {
        type: String,
        required: [true, 'Please fill the password'],
        minlength: [8, "Password length needs minimum of 8 characters"]
    }
})

UserSchema.pre('save', function (next) {
    this.password = hash(this.password)
    next()
})

UserSchema.plugin(uniqueValidator, { message: "{PATH} is already taken" });

const User = mongoose.model('User', UserSchema)

module.exports = User