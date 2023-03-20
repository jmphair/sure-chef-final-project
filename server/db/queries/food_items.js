// db/queries/users.js

const db = require("../../configs/db.config");

const getAllKitchenItemsByUserId = (user_id) => {
  return db
    .query(
      `SELECT food_items.name as name,
        food_items.id as id,
        quantity,
        storage_location,
        users.id as user_id
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

const getAllGroceryItemsByUserId = (user_id) => {
  return db
    .query(
      `SELECT food_items.name as name,
        food_items.id as id,
        quantity,
        storage_location,
        users.id as user_id
        FROM food_items
        INNER JOIN grocery_lists ON food_items.grocery_list_id = grocery_lists.id
        INNER JOIN users ON grocery_lists.user_id = users.id
        WHERE users.id = $1;`,
      [user_id]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((error) => console.log(error));
};

const getGroceryIdByUserId =(user_id) => {
  return db.query(
    `SELECT * FROM grocery_lists
    WHERE user_id = $1;
  `, [user_id]
  )
  .then((data) => {
    console.log(data.rows[0])
    return data.rows[0]
  })
  .catch((error) => console.log(error));
}

const getKitchenIdByUserId =(user_id) => {
  return db.query(
    `SELECT * FROM kitchen_inventories
    WHERE user_id = $1;
  `, [user_id]
  )
  .then((data) => {
    console.log(data.rows[0])
    return data.rows[0]
  })
  .catch((error) => console.log(error));
}

const addGroceryItem = (name, quantity, storage_location, grocery_list_id) => {
  return db
    .query(
      `
  INSERT INTO food_items (name, quantity, storage_location, grocery_list_id)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `,
      [name, quantity, storage_location, grocery_list_id]
    )
    .then((item) => {
      return item.rows[0];
    })
    .catch((error) => console.log(error));
};

const addKitchenItem = (name, quantity, storage_location, kitchen_inventory_id) => {
  return db
    .query(
      `
  INSERT INTO food_items (name, quantity, storage_location, kitchen_inventory_id)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
  `,
      [name, quantity, storage_location, kitchen_inventory_id]
    )
    .then((item) => {
      return item.rows[0];
    })
    .catch((error) => console.log(error));
};

const getByFoodItemId =(id) => {
  return db.query(
    `SELECT * FROM food_items
    WHERE id = $1;
  `, [id]
  )
  .then((data) => {
    console.log(data.rows[0])
    return data.rows[0]
  })
  .catch((error) => console.log(error));
}

const removeFoodItem = (id) => {
  return db
    .query(
      `
      DELETE FROM food_items WHERE id = $1
      `, 
        [id]
    )
    .then((item) => {
      return item.rows[0];
    })
    .catch((error) => console.log(error));
}

module.exports = {
  getAllKitchenItemsByUserId,
  getAllGroceryItemsByUserId,
  getKitchenIdByUserId,
  getGroceryIdByUserId,
  addGroceryItem,
  addKitchenItem,
  getByFoodItemId,
  removeFoodItem,
};
