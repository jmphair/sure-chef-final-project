SELECT setval('"food_items_id_seq"', (SELECT MAX(id) FROM food_items)+1);