-- schema/06_create_create_food_item_recipes.sql
DROP TABLE IF EXISTS kitchen_inventories CASCADE;
-- CREATE Food item recipes joining LISTS
CREATE TABLE kitchen_inventories (
  id SERIAL PRIMARY KEY,
  food_item_id INTEGER REFERENCES food_items(id) ON DELETE CASCADE
  recipe_id INTEGER REFERENCES recipes(id) ON DELETE CASCADE
);