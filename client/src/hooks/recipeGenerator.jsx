import { useState, useEffect } from "react";
import axios from "axios";
import Userfront from "@userfront/react";

export default function recipeGenerator() {
  const [recipeIngredients, setRecipeIngredients] = useState([]);

  const addIngredient = (item, quantity) => {
    const ingredient = {}
    ingredient[item] = quantity
    console.log(ingredient)
    setRecipeIngredients((prev) => {
      return [...prev, ingredient]
    })
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

  // useEffect(() => {
  //   axios

  // }, []);

  return {
    recipeIngredients,
    setRecipeIngredients,
    addIngredient,
    removeIngredient
  };
}