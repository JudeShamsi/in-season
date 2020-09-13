const express = require('express');
const router = express.Router();

// Bring in foodItem Model
const foodItem = require('../../models/foodItem');

//@route    GET api/foodItems
//@desc     Get All foodItems
//@access   Public
router.get('/', (req, res) => {
    foodItem.find()
        .then(result => {
            res.json(result)
        })
        .catch(err => console.log(err))
});



module.exports = router;
