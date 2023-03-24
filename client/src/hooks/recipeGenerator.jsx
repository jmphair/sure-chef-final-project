import { useState, useEffect } from "react";
import axios from "axios";

export default function recipeGenerator() {
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [answer, setAnswer] = useState(false);
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

  const generateRecipe = (restrictions) => {
    setLoading(true);
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
    };
    const prompt = stringifyIngredients(recipeIngredients)
    return axios
      .post("/api/openai/ask", { prompt, type: restrictions }, requestOptions)
      .then((res) => {
        // if (!res) {
        //   throw new Error("Something went wrong");
        // }
        
        console.log(res);

        const { message } = res.data;
        console.log(JSON.parse(message))
        setAnswer(JSON.parse(message));
        setLoading(false);
        return message
      })
      .catch((err) => {
        console.error(err, "err");
        setLoading(false);
      });

  }



  return {
    addIngredient,
    removeIngredient,
    generateRecipe,
    loading,
    answer
  };
}
