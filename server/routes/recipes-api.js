const express = require('express');
const router = express.Router();
const recipes = require('../db/queries/recipes');

router.get('/', (req, res) => {
  recipes.getSavedRecipesByUser(16).then(data => {
    console.log(data);
    res.json({ recipes: data });
  });
});

router.post('/', (req, res) => {
  req.
  recipes.getSavedRecipesByUser(16).then(data => {
    console.log(data);
    res.json({ recipes: data });
  });
});

module.exports = router;