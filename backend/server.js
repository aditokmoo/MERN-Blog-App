require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
// Import routes
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes')


// Middlewares
app.use(express.json())

// Routes
app.use('/api/user', userRoutes)
app.use('/api/blogs', blogRoutes)

app.use((err,req,res,next) => {  
    res.status(500).json({ message:err.message, stack:err.stack })
})

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for request
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & Server is running on port ${process.env.PORT}`)
        })
    }).catch(error => console.log(error))