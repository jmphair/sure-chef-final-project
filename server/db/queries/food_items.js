// db/queries/users.js

const db = require('../../configs/db.config');


const getAllItemsByStorageLocation = (user_id, storage_location) => {
  return db.query("SELECT * FROM food_items INNER JOIN kitchen_inventories ON food_items.kitchen_inventory_id = kitchen_inventories.id INNER JOIN users ON kitchen_inventories.user_id = users.id WHERE storage_location = $1 AND users.id = $2;", [storage_location, user_id]).then(data => {
    return data.rows;
  })
    .catch((error) => console.log(error));
};

module.exports = { getAllItemsByStorageLocation }


