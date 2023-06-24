const express = require('express');
const { createPost } = require('../controllers/blogController')
const uploud = require('../utilities/multerConfig');
const router = express.Router();

// Create post
router.post('/', uploud.array('images'), createPost)

// Update post

// Delete post

// Like post

// Comment post

// Get post

// Get all posts

module.exports = router