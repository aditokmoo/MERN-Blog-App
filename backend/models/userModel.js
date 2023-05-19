const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserScheme = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

// Register
UserScheme.statics.register = async function(username, email, password) {
    // Check if email and password exist
    if(!username || !email || !password) {
        throw Error('All fields must be fiiled')
    }
    // Check if username has min length 3 char
    if(username.length < 3) {
        throw Error('Username must be atleast 3 characters')
    }
    // Check if email is valid
    if(!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    // Check if password is strong
    if(!validator.isStrongPassword(password)) {
        throw Error('Password is not strong enough')
    }
    
    // Check if email already exists in db
    const exists = await this.findOne({ email })
    
    if(exists) {
        throw Error('Email already exist')
    }
    
    // Generate bcrypt salt
    const salt = await bcrypt.genSalt(10);
    // Hash password
    const hash = await bcrypt.hash(password, salt);
    // Create user
    const user = await this.create({ username, email, password: hash });
    
    return user;
}

module.exports = mongoose.model('User', UserScheme)