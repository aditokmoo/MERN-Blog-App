const express = require('express');
const { createPost, getPosts } = require('../controllers/blogController')
const uploud = require('../utilities/multerConfig');
const router = express.Router();

// Create post
router.post('/', uploud.array('images'), createPost)

// Update post

// Delete post

// Like post

// Comment post

// Get all posts
router.get('/', getPosts)

// Get post


module.exports = router