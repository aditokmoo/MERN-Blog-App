const Blog = require('../models/blogModel');

// Create Post
const createPost = async (req, res) => {
    const { userId, author, title, desc } = req.body
    const images = req.files.map(({ filename }) => filename)

    try {
        const post = await Blog.create({ userId, author, title, desc, images });

        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Get Posts
const getPosts = async (req, res) => {
    try {
        const posts = await Blog.find();

        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { createPost , getPosts}