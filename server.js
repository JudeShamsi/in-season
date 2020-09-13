// backend framework
const express = require('express');
// connect to the MongoDB database
const mongoose = require('mongoose');

const items = require('./routes/api/foodItems');

const app = express();

// BodyParser now included in express
app.use(express.json());

// MongoDB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/foodItems', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


