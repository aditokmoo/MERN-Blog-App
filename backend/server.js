require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for request
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & Server is running on port ${process.env.PORT}`)
        })
    }).catch(error => console.log(error))