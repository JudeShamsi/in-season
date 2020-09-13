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

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const foodItems = require('./routes/api/foodItems');

// const app = express();


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // app.use(express.json());
// // app.use(express.urlencoded({extended: true}));

// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to Mongo
// mongoose
//     .connect(db)
//     .then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err));

// // Use Routes should use the api/foodItems
// app.use('/api/foodItems', foodItems);


// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on ${port}`));

