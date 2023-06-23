const express = require('express');
const { createPost } = require('../controllers/blogController')
const router = express.Router();

// Create post
router.post('/', createPost)

module.exports = router