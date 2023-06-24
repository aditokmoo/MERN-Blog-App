const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        max: 100,
        required: true,
    },
    desc: {
        type: String,
        max: 4000,
        required: true,
    },
    images: {
        type: Array,
        max: 5,
        default: [],
    },
    likes: {
        type: Array,
        default: [],
    },
    comments: {
        type: Array,
        default: [],
    }
}, { timestamps: true })

module.exports = mongoose.model('Blog', BlogSchema)