const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Create token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// Register User Function
const register = async (req, res) => {
    const { username, email, password } = req.body;
    
    try {
        const user = await User.register(username, email, password);
        const token = await createToken(user._id);

        res.status(200).json({ email, token })
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

// Login User Function
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = await createToken(user._id);

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    register,
    login
}