-- schema/02_create_food_items.sql
DROP TABLE IF EXISTS food_items CASCADE;
-- CREATE FOOD ITEMS
CREATE TABLE food_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  storage_location VARCHAR(255),
  kitchen_inventory_id INTEGER,
  grocery_list_id INTEGER
);