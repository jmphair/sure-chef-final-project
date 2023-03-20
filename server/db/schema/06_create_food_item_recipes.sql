-- schema/06_create_create_food_item_recipes.sql
DROP TABLE IF EXISTS food_item_recipes CASCADE;
-- CREATE Food item recipes joining LISTS
CREATE TABLE food_item_recipes (
  id SERIAL PRIMARY KEY,
  food_item_id INTEGER,
  recipe_id INTEGER
);