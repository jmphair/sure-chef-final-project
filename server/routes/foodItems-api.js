const express = require("express");
const router = express.Router();
const foodItems = require("../db/queries/food_items");

/* ----------------------------------------------------------------------------------- */

router.put("/update", (req, res) => {
  console.log(req.body)
  const foodItemId = req.body.data.id;
  const groceryListId = req.body.data.groceryListId;
  const kitchenListId = req.body.data.kitchenListId;
  console.log('fooditemid: ', foodItemId, "grocery: ", groceryListId, "kitchen: ", kitchenListId)

  foodItems
    .updateItemLocation(foodItemId, groceryListId, kitchenListId)
    .then((dbRes) => {
      console.log(dbRes)
      res.json({ res: dbRes })})
    .catch((e) => console.log(e));
});

module.exports = router;