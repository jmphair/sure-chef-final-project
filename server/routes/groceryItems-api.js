// routes/users.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

/* ----------------------------------------------------------------------------------- */

router.get('/', (req, res) => {
  foodItems.getAllGroceryItemsByUserId(16).then(data => {
    console.log(data);
    res.json({ foodItems: data });
  });
});

router.post('/', (req, res) => {
  const userId = req.body.userId;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;

  foodItems.getGroceryIdByUserId(userId)
    .then(dbRes => {
      const groceryId = dbRes.id;
      foodItems.addGroceryItem(foodItemName, foodItemQuantity, storageLocation, groceryId);
      res.json({ res: dbRes });
    });
});

router.delete('/delete', (req, res) => {
  const foodId = req.body.id;

  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      const id = dbRes.id;
      console.log(dbRes)
      foodItems.removeFoodItem(id);
      res.json({ res: dbRes });
    });
});

router.put('/update', (req, res) => {
  const foodId = req.body.id;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;

  console.log(req.body)

  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      console.log(dbRes)
      const id = dbRes.id;
      foodItems.editFoodItem(foodItemName, foodItemQuantity, storageLocation, id);
      res.json({ res: dbRes });
    });
});


module.exports = router;