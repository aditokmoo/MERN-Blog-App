const express = require('express');
const { register, login, getAllUsers, getUser } = require('../controllers/userController');

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Get users
router.get('/', getAllUsers);

// Get user
router.get('/profile/:name', getUser);

module.exports = router;