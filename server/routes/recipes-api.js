const express = require('express');
const router = express.Router();
const recipes = require('../db/queries/recipes');

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  console.log(userId)

  recipes.getAllRecipesByUser(userId).then(data => {
    console.log(data);
    res.json({ recipes: data });
  });
});

router.put('/update', (req, res) => {
  const userId = req.body.id;
  const recipeNote = req.body.note;

  recipes.getAllRecipesByUser(userId)
    .then(dbRes => {
      const id = dbRes.id;
      recipes.updateRecipeNote(recipeNote);
      res.json({ res: dbRes });
    });
});

module.exports = router;