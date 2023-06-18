const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

// Create token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, { expiresIn: '3d' })
}

// Change password
const changePassword = async (req, res) => {
    const { password } = req.body;
    const { name } = req.params;

    try {
        if(!password) {
            throw Error('Password field is empty')
        }

        const user = await User.changePassword(name, password);
        const token = await createToken(user._id);

        // Send response
        res.status(200).json({ name, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Update Profile
const updateProfile = async (req, res) => {
    const { username, email } = req.body;
    const { name } = req.params;
    const image = req.uniqueName;

    try {
        const user = await User.edit(username, email, name, image)
        const token = await createToken(user._id)

        // Send response
        res.status(200).json({ username, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
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
    changePassword,
    getAllUsers,
    getUser
}