-- schema/03_create_food_items.sql
DROP TABLE IF EXISTS recipes CASCADE;
-- CREATE RECIPES
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  category VARCHAR(255) NOT NULL,
  storage_location VARCHAR(255)
  kitchen_inventory_id INTEGER REFERENCES kitchen_inventories(id) ON DELETE CASCADE,
  grocery_list_id INTEGER REFERENCES grocery_list(id) ON DELETE CASCADE
);