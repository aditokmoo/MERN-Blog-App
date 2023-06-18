const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserScheme = new Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, "Username can't be less then 3 characters"],
        maxLength: [10, "Username can't be bigger then 10 characters"]
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(value) {
                return value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
            }, 
            message: "Invalid email"
        }
    },
    password: {
        type: String,
        required: true,
        minLength: [7, "Password can't be less then 7 characters"],
    },
    image: {
        type: String
    }
})

// Change password
UserScheme.statics.changePassword = async function(username, password) {
    // Find current user you want to change password
    const user = await this.findOne({ username });

    // If user dosnt exist give some response
    if(!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    // Update password if it exist
    if(password) {
        // Generate salt for hashing password
        const salt = await bcrypt.genSalt(10);
        // Hash password
        const hash = await bcrypt.hash(password, salt);
        // Update password
        user.password = hash
    }

    // Update user password
    const update_user_password = await user.save({
        validateBeforeSave: true
    })

    return update_user_password;
}

// Update
UserScheme.statics.edit = async function(username, email, name, image) {
    const user = await this.findOne({ username: name })

    // if user dosnt exist give some response
    if(!user) {
        return res.status(404).json({ error: 'User not found' })
    }

    // if username exist then update
    if(username) {
        user.username = username
    }
    // if email exist and valid then update 
    if(email) {
        user.email = email
    }
    // if image exist then update
    if(image) {
        user.image = image;
    }

    // Save updated user to db
    const user_update = await user.save({
        validateBeforeSave:true
    });

    return user_update
}

// Register
UserScheme.statics.register = async function(username, email, password, confirmPassword, image) {
    // Check if email and password exist
    if(!username || !email || !password || !confirmPassword) {
        throw Error('All fields must be fiiled')
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
    // Create user
    const user = await this.create({ username, email, password: hash, image });
    
    return user;
}

// Login
UserScheme.statics.login = async function(username, password) {
    if(!username || !password) {
        throw Error('All fields must be filled')
    }

    // Find user username
    const user = await this.findOne({ username });

    if(!user) {
        throw Error('Incorrect username')
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', UserScheme)