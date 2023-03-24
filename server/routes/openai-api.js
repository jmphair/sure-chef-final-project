const express = require('express');
const router = express.Router();
require("dotenv").config();

const recipes = require('../db/queries/recipes');
const { Configuration, OpenAIApi } = require("openai");
const destr = require('destr');


const recipePrompt = (input, type) => {
  // [{ingredient: 'pizza slice', quantity: 1}, {ingredient: 'mustard', quantity: 1}, {ingredient: 'beer', quantity: 1}]
  let prompt = ''

  if (type === 'flexible') {
    prompt = `Give me a recipe that includes the following ingredients: ${input}, in the following format as a JSON object and add extra ingredients to the ingredients value: {"name":"string", "instructions":array, "servings":"string", "prep_time":"string", "cook_time":"string", "total_time":"string", "ingredients":[{"ingredient": "quantity as string"}]}`
  }
  if (type === 'strict') {
    prompt = `Give me a recipe that includes only the following ingredients: ${input}, in the following format as a JSON objects: {"name":"string", "instructions":array, "servings":"string", "prep_time":"string", "cook_time":"string", "total_time":"string", "ingredients":[{"ingredient": "quantity as string"}]}`
  }

  if (type === 'potato') {
    prompt = input;
  }

  return prompt
}

router.post("/ask", (req, res) => {
  const prompt = recipePrompt(req.body.prompt, req.body.type);

  const userId = req.body.userId

  if (prompt == null) {
    throw new Error("Uh oh, no prompt was provided");
  }

  const responsePromise = openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 1000,
    temperature: 0,
  });

  responsePromise
    .then((response) => {
      const completion = response.data.choices[0].text;
      // converts json response into js object
      const recipeObj = destr(completion)
      //turns ingredients array into json to store in database
      const ingredients = JSON.stringify(recipeObj.ingredients)
      console.log(recipeObj)
      recipes.addRecipe(recipeObj.name, ingredients, recipeObj.instructions, recipeObj.servings, recipeObj.prep_time, recipeObj.cook_time, recipeObj.total_time, false, userId)
    .then(dbRes => {
      return res.status(200).json({
        success: true,
        message: dbRes
      })
    })
  .catch((error) => {
    console.log(error.message);
  });
  })
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = router;


// // async await v1
// router.post("/ask", async (req, res) => {

//   const prompt = req.body.prompt;

//   try {
//     if (prompt == null) {
//       throw new Error("Uh oh, no prompt was provided");
//     }

//     // trigger OpenAI completion
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt,
//       max_tokens: 1000,
//       temperature: 0,
//     });

//     const completion = response.data.choices[0].text;

//     return res.status(200).json({
//       success: true,
//       message: completion,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// module.exports = router;