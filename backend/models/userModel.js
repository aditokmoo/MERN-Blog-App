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
    },
    confirmPassword: {
        type: String,
        required: true,
    }
})

// Register
UserScheme.statics.register = async function(username, email, password, confirmPassword) {
    // Check if email and password exist
    if(!username || !email || !password || !confirmPassword) {
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
    // Check if password is confirmed
    if(password !== confirmPassword) {
        throw Error('Please confirm password')
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
    const hash_confirmed = await bcrypt.hash(confirmPassword, salt);
    // Create user
    const user = await this.create({ username, email, password: hash, confirmPassword: hash_confirmed });
    
    return user;
}

// Login
UserScheme.statics.login = async function(email, password) {
    if(!email || !password) {
        throw Error('All fields must be filled')
    }

    // Find user email
    const user = await this.findOne({ email });

    if(!user) {
        throw Error('Incorrect Email')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', UserScheme)