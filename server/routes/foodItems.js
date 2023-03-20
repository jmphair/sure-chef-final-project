// routes/users.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

router.get('/', (req, res) => {
  foodItems.getAllFoodItemsByUserId(1).then(data => {
    console.log(data);
    res.json({foodItems: data});
  })
});

module.exports = router