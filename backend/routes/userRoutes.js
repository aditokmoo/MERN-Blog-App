const express = require('express');
const { register, login, updateProfile, changePassword, getAllUsers, getUser } = require('../controllers/userController');
const uploud = require('../utilities/multerConfig');

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Update user profile
router.patch('/profile/:name/details', uploud.single('image'), updateProfile)

// Change password
router.patch('/profile/:name/change', changePassword)

// Get users
router.get('/', getAllUsers);

// Get user
router.get('/profile/:name', getUser);

module.exports = router;