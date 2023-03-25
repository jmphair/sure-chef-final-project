-- schema/03_create_recipes.sql
DROP TABLE IF EXISTS recipes CASCADE;

-- CREATE RECIPES
CREATE TABLE recipes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  ingredients jsonb NOT NULL,
  instructions TEXT [] NOT NULL,
  servings VARCHAR(255),
  prep_time VARCHAR(255),
  cook_time VARCHAR(255),
  total_time VARCHAR(255),
  saved BOOLEAN DEFAULT false,
  note TEXT,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW()
);