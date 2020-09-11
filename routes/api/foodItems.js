const express = require('express');
const router = express.Router();

// Bring in foodItem Model
const foodItem = require('../../models/foodItem');

//@route    GET api/foodItems
//@desc     Get All foodItems
//@access   Public
router.get('/', (req, res) => {
    foodItem.find({Type: "Vegetable"})
        .then(foodItems => res.json(foodItems))
});



module.exports = router;
