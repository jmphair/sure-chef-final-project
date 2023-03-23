import { useState, useEffect } from "react";
import axios from "axios";

export default function recipeGenerator() {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [answer, setAnswer] = useState(undefined);
  const [loading, setLoading] = useState(false);



  const addIngredient = (item, quantity) => {
    const ingredient = {}
    ingredient[item] = quantity
    setRecipeIngredients((prev) => {
      return [...prev, ingredient]
    })
    console.log(recipeIngredients)

  }

  const removeIngredient = (item) => {
    const newIngredientList = []
    console.log('trying to remove')
    recipeIngredients.forEach(ingredient => {
      if (!ingredient.hasOwnProperty(item)) {
        newIngredientList.push(ingredient)
      }
    })
    setRecipeIngredients(newIngredientList)
    console.log(recipeIngredients)
  }

  const stringifyIngredients = (recipeState) => {
    let stringPrompt = '['
    recipeState.forEach(recipeObj => {
      const stringObj = `{${Object.keys(recipeObj)[0]}: ${Object.values(recipeObj)[0]}}, `
      stringPrompt += stringObj;
    })
    stringPrompt.slice(0, -2)
    stringPrompt += ']'
    return stringPrompt
  }

  const generateRecipe = () => {
    console.log('hi')
    setLoading(true);
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    const prompt = stringifyIngredients(recipeIngredients)
    console.log(prompt)
    return axios
      .post("/api/openai/ask", { prompt, type: 'recipe' }, requestOptions)
      .then((res) => {
        // if (!res) {
        //   throw new Error("Something went wrong");
        // }
        
        console.log(res);

        const { message } = res.data;
        setAnswer(message);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err, "err");
        setLoading(false);
      });

  }



  return {
    addIngredient,
    removeIngredient,
    generateRecipe
  };
}
