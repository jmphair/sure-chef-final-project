const express = require("express");
const router = express.Router();
require("dotenv").config();
foodItems = require("../db/queries/food_items");

const recipes = require("../db/queries/recipes");
const { Configuration, OpenAIApi } = require("openai");
const destr = require("destr");

const recipePrompt = (input, type) => {
  let prompt = "";

  if (type === "flexible" || type === "random") {
    prompt = `Give me a recipe that includes the following ingredients: ${input}, in the following format as a JSON object and add extra ingredients to the ingredients value: {"name":"string", "instructions":array, "servings":"string", "prep_time":"string", "cook_time":"string", "total_time":"string", "ingredients":[{"ingredient": "quantity as string"}]}`;
  }
  if (type === "strict") {
    prompt = `Give me a recipe that includes only the following ingredients: ${input}, in the following format as a JSON objects: {"name":"string", "instructions":array, "servings":"string", "prep_time":"string", "cook_time":"string", "total_time":"string", "ingredients":[{"ingredient": "quantity as string"}]}`;
  }

  return prompt;
};

//will take a random amount of recipe elements from a user's ingredient and build a prompt to give to the AI
const ingredientParser = (ingredients) => {
  if (!ingredients) {
    return '{vegetables: 4}'
  }
  let ingredientList = '['
  //ensures that at least 1 ingredient is added to the list
  const requiredIngredient = ingredients[Math.floor(Math.random() * ingredients.length)]
  console.log('this is the required one', requiredIngredient)
  ingredientList += `{${requiredIngredient.name}: ${requiredIngredient.quantity}}`

  //takes random amount of ingrediets if statement can be mofified to accept more/fewer ingredients
  ingredients.forEach((ingredient) => {
    const ran = Math.random()
    console.log(ran)
     if (ran >= 0.7) {
      ingredientList += `{${ingredient.name}: ${ingredient.quantity}}`
     }
  })
  ingredientList += ']'
  return ingredientList
}

router.post("/ask", (req, res) => {
  const userId = req.body.userId;
  const type = req.body.type;

  foodItems
    .getAllKitchenItemsByUserId(userId)
    .then((ingredients) => {
      if (type !== "random") {
        return recipePrompt(req.body.prompt, type);
      }
      console.log('here are your ingredients: ', ingredientParser(ingredients))
      return recipePrompt(ingredientParser(ingredients), type)
    })
    .then((prompt) => {
      if (prompt == null) {
        throw new Error("Uh oh, no prompt was provided");
      }

      const responsePromise = openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        max_tokens: 1000,
        temperature: 0,
      });

      responsePromise.then((response) => {
        const completion = response.data.choices[0].text;
        // converts json response into js object
        const recipeObj = destr(completion);
        //turns ingredients array into json to store in database
        const ingredients = JSON.stringify(recipeObj.ingredients);
        console.log(recipeObj);
        recipes
          .addRecipe(
            recipeObj.name,
            ingredients,
            recipeObj.instructions,
            recipeObj.servings,
            recipeObj.prep_time,
            recipeObj.cook_time,
            recipeObj.total_time,
            false,
            userId
          )
          .then((dbRes) => {
            return res.status(200).json({
              success: true,
              message: dbRes,
            });
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
    });
  console.log(req.body.prompt);
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = router;
