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
  console.log(req.body)
  const recipeId = req.body.id;
  const recipeNote = req.body.note;

  recipes.updateRecipeNote(recipeNote, recipeId)
    .then((dbRes) => {
      res.json({ res: dbRes });
    })
    
});


module.exports = router;