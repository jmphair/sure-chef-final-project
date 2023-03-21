const express = require("express");
const router = express.Router();
const foodItems = require("../db/queries/food_items");

/* ----------------------------------------------------------------------------------- */

router.put("/update", (req, res) => {
  const foodItemId = req.body.id;
  const groceryListId = req.body.groceryListId;
  const kitchenListId = req.body.kitchenListId;

  foodItems
    .updateItemLocation(foodItemId, groceryListId, kitchenListId)
    .then((dbRes) => res.json({ res: dbRes }))
    .catch((e) => console.log(e));
});

module.exports = router;