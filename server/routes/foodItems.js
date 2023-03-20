// routes/users.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

router.get('/kitchenItemList', (req, res) => {
  foodItems.getAllKitchenItemsByUserId(16).then(data => {
    console.log(data);
    res.json({foodItems: data});
  })
});

router.get('/groceryItemList', (req, res) => {
  foodItems.getAllGroceryItemsByUserId(16).then(data => {
    console.log(data);
    res.json({foodItems: data});
  })
});

router.put('/groceryItemList', (req, res) => {
  console.log(req.body)
  const userId = req.body.userId;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;

  foodItems.getGroceryIdByUserId(userId)
    .then(res => {
      const kitchenId = res.id
      console.log(res)
      console.log(userId, foodItemName, foodItemQuantity, storageLocation)
      foodItems.addGroceryItem(foodItemName, foodItemQuantity, storageLocation, res.id)
    })
})

module.exports = router