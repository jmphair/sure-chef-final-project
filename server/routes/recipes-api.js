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

router.post('/:id', (req, res) => {
  const userId = req.params.id
  const name = req.body.name
  const ingredients = JSON.stringify(req.body.ingredients);
  const instructions = req.body.instructions;

  const servings = req.body.servings
  const prepTime = req.body.prepTime
  const cookTime = req.body.cookTime;
  const totalTime = req.body.totalTime;
  const saved = true;
  console.log(userId, name, ingredients, instructions, servings, prepTime, cookTime, totalTime)
  recipes.addRecipe(name, ingredients, instructions, servings, prepTime, cookTime, totalTime, saved, userId)
    .then(dbRes => res.json({ res: dbRes }))

});

router.put('/update', (req, res) => {
  const recipeId = req.body.id;
  const recipeNote = req.body.note;

  recipes.updateRecipeNote(recipeNote, recipeId)
    .then((dbRes) => {
      return res.json({ res: dbRes });
    }) 
});

router.put('/save', (req, res) => {
  const recipeId = req.body.id;
  const saved = req.body.saved;

  recipes.saveRecipe(saved, recipeId)
    .then((dbRes) => {
      res.json({ res: dbRes });
    }) 
});

router.delete('/delete', (req, res) => {
  const recipeId = req.body.id;

  recipes.removeRecipe(recipeId)
    .then((dbRes) => {
      res.json({ res: dbRes });
    }) 
});



module.exports = router;