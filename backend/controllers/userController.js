const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Create token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// Register User Function
const register = async (req, res) => {
    const { username, email, password, confirmPassword } = req.body;
    
    try {
        const user = await User.register(username, email, password, confirmPassword);
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
    getAllUsers,
    getUser
}