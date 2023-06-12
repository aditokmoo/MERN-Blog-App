const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Change profile image
const updateProfile = async (req, res) => {
   const { username, email, password } = req.body;
   const { name } = req.params;
   const image = req.uniqueName;

   try {
        const user = await User.findOne({ username: name });
        const token = await createToken(user._id);

        // Create bcrypt salt
        const salt = await bcrypt.genSalt(10);
        // Create bcrypt hash
        const hash = await bcrypt.hash(password, salt)

        // if user dosnt exist give some response
        if(!user) {
            return res.status(404).json({ error: 'User not found' })
        }

        // if username exist then update 
        if(username) {
            user.username = username
        }
        // if email exist then update 
        if(email) {
            user.email = email
        }
        // if password exist then update 
        if(password) {
            user.password = hash
        }
        // if image exist then update
        if(image) {
            user.image = image;
        }

        // Save updated user to db
        await user.save();

        // Send response
        res.status(200).json({ username, token })
   } catch (error) {
    
   }
}

// Create token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// Register User Function
const register = async (req, res) => {
    const { username, email, password, confirmPassword, image } = req.body;
    
    try {
        const user = await User.register(username, email, password, confirmPassword, image);
        const token = await createToken(user._id);

        res.status(200).json({ username, email, token })
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

// Login User Function
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = await createToken(user._id);

        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


// Get All Users Funciton
const getAllUsers = async (req ,res) => {
    try {
        const users = await User.find();

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Get User Function
const getUser = async (req, res) => {
    try {
        const username = req.params.name;
        const user = await User.findOne({ username });
        
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
 
module.exports = {
    register,
    login,
    updateProfile,
    getAllUsers,
    getUser
}