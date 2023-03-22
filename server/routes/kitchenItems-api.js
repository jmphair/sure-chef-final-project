// routes/users.js
const express = require('express');
const router = express.Router();
const foodItems = require('../db/queries/food_items');

/* ----------------------------------------------------------------------------------- */

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  foodItems.getAllKitchenItemsByUserId(userId).then(data => {
    console.log(data)
    res.json({ foodItems: data });
  });
});


router.post('/', (req, res) => {
  const userId = req.body.userId;
  const foodItemName = req.body.name;
  const foodItemQuantity = req.body.quantity;
  const storageLocation = req.body.storage_location;

  foodItems.getKitchenIdByUserId(userId)
    .then(dbRes => {
      const kitchenId = dbRes.id;
      return foodItems.addKitchenItem(foodItemName, foodItemQuantity, storageLocation, kitchenId);
    })
    .then((foodItem) => {
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
  const storageLocation = req.body.storage_location;


  foodItems.getByFoodItemId(foodId)
    .then(dbRes => {
      const id = dbRes.id;
      foodItems.editFoodItem(foodItemName, foodItemQuantity, storageLocation, id);
      res.json({ res: dbRes });
    });
});

module.exports = router;