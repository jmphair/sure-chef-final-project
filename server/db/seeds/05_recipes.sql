-- seeds/05_recipes.sql
-- recipes seeds
INSERT INTO
  recipes (
    name,
    instructions,
    servings,
    prep_time,
    cook_time,
    saved,
    user_id,
    food_item_id
  )
VALUES
  (
    'Mustard Baked Chicken',
    '1. Preheat the oven to 400°F. 2. Mix 2 tbsp of mustard and 1 tbsp of melted butter in a small bowl. 3. Season chicken breasts with salt and pepper. 4. Rub the mustard mixture all over the chicken breasts. 5. Place the chicken in a baking dish and bake for 20-25 minutes or until the internal temperature of the chicken reaches 165°F.',
    4,
    '10 minutes',
    '25 minutes',
    true,
    1,
    1
  ),
  (
    'Garlic Roasted Potatoes and Tomatoes',
    '1. Preheat the oven to 400°F. 2. Cut the potatoes into small pieces and halve the cherry tomatoes. 3. In a bowl, toss the potatoes and tomatoes with 2 tbsp of olive oil and minced garlic. 4. Season with salt and pepper. 5. Spread the vegetables on a baking sheet and bake for 25-30 minutes, or until the potatoes are tender and crispy.',
    4,
    '10 minutes',
    '30 minutes',
    true,
    1,
    2
  );