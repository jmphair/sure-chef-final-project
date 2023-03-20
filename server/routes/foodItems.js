// routes/users.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

/* ----------------------------------------------------------------------------------- */

router.get('/kitchenItemList', (req, res) => {
  foodItems.getAllKitchenItemsByUserId(16).then(data => {
    console.log(data);
    res.json({ foodItems: data });
  });
});


router.put('/kitchenItemList', (req, res) => {
  const userId = req.body.userId;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;

  foodItems.getKitchenIdByUserId(userId)
    .then(dbRes => {
      const kitchenId = dbRes.id;
      foodItems.addKitchenItem(foodItemName, foodItemQuantity, storageLocation, kitchenId);
      res.json({ res: dbRes });
    });
});

router.delete('/kitchenItemList', (req, res) => {
  const foodId = req.body.id;

  console.log(foodId);

  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      const id = dbRes.id;
      console.log(dbRes)
      foodItems.removeFoodItem(id);
      res.json({ res: dbRes });
    });
});

/* ----------------------------------------------------------------------------------- */


router.get('/groceryItemList', (req, res) => {
  foodItems.getAllGroceryItemsByUserId(16).then(data => {
    console.log(data);
    res.json({ foodItems: data });
  });
});

router.put('/groceryItemList', (req, res) => {
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

router.delete('/groceryItemList', (req, res) => {
  const foodId = req.body.id;

  foodItems.getGroceryIdByUserId(foodId)
    .then(dbRes => {
      const kitchenId = dbRes.id;
      foodItems.removeFoodItem(id);
      res.json({ res: dbRes });
    });
});


module.exports = router;