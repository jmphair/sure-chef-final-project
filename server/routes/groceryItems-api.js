// routes/groceryItems-api.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

/* ----------------------------------------------------------------------------------- */

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  foodItems.getAllGroceryItemsByUserId(userId).then(data => {
    res.json({ foodItems: data });
  });
});

router.post('/', (req, res) => {
  const userId = req.body.userId;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;
  console.log(req.body.userId)

  foodItems.getGroceryIdByUserId(userId)
    .then(dbRes => {
      console.log(dbRes)
      const groceryId = dbRes.id;
      return foodItems.addGroceryItem(foodItemName, foodItemQuantity, storageLocation, groceryId);
    })
    .then((foodItem) => {
      console.log(foodItem)
      res.json({ res: foodItem });
    });
});

router.delete('/delete', (req, res) => {
  const foodId = req.body.id;

  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      const id = dbRes.id;
      foodItems.removeFoodItem(id);
      res.json({ res: dbRes });
    });
});

router.put('/update', (req, res) => {
  const foodId = req.body.id;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storageLocation;

  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      const id = dbRes.id;
      foodItems.editFoodItem(foodItemName, foodItemQuantity, storageLocation, id);
      res.json({ res: dbRes });
    });
});


module.exports = router;