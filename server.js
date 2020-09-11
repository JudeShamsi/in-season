const express = require('express');
const mongoose = require('mongoose');

const foodItems = require('./routes/api/foodItems');

const app = express();

app.use(express.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes should use the api/foodItems
app.use('/api/foodItems', foodItems);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));

