-- schema/04_create_grocery_lists.sql
DROP TABLE IF EXISTS grocery_lists CASCADE;
-- CREATE Grocery LISTS
CREATE TABLE grocery_lists (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);