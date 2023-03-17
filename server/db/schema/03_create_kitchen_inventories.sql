-- schema/05_create_kitchen_inventories.sql
DROP TABLE IF EXISTS kitchen_inventories CASCADE;

-- CREATE Grocery LISTS
CREATE TABLE kitchen_inventories (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);