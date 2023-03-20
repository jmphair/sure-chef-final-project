// db/queries/users.js

const db = require("../../configs/db.config");

const getAllFoodItemsByUserId = (user_id) => {
  return db
    .query(
      `SELECT food_items.name as name,
        quantity,
        storage_location
        FROM food_items
        INNER JOIN kitchen_inventories ON food_items.kitchen_inventory_id = kitchen_inventories.id
        INNER JOIN users ON kitchen_inventories.user_id = users.id
        WHERE users.id = $1;`,
      [user_id]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((error) => console.log(error));
};

const addFoodItem = (name, quantity, kitchen_inventory_id, grocery_list_id) => {
  return db
    .query(
      `
  INSERT INTO food_items (name, quantity, kitchen_inventory_id, grocery_list_id)
  VALUES ($1, $2, $3, $4)
  RETURNING *
  `,
      [name, quantity, kitchen_inventory_id, grocery_list_id]
    )
    .then((item) => {
      return item.rows[0];
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getAllFoodItemsByUserId,
  addFoodItem,
};
