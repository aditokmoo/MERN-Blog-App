const express = require('express');
const { register, login, updateProfile, getAllUsers, getUser } = require('../controllers/userController');

// Multer package
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/public/userImages')
    },
    filename: function (req, file, cb) {
        const extname = file.mimetype.split('/')[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const uniqueName = file.originalname + '-' + uniqueSuffix + '.' + extname;
        req.uniqueName = uniqueName;
        cb(null, uniqueName)
    }
})

const uploud = multer({ storage: storage })

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Update user image
router.patch('/profile/:name/details', uploud.single('image'), updateProfile)

// Get users
router.get('/', getAllUsers);

// Get user
router.get('/profile/:name', getUser);

module.exports = router;