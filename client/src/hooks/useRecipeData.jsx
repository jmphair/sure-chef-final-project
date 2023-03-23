import { useState, useEffect } from "react";
import axios from "axios";
import Userfront from "@userfront/react";

export default function useRecipeData() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({
    name: "",
    instructions: "",
    ingredients: "",
    servings: "",
    prep_time: "",
  });

  const options = {
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  };

  useEffect(() => {
    axios
      .get("https://api.userfront.com/v0/self", options)
      .then((response) =>
        axios.get(`/api/recipes/${response.data.userId}`)
      )
      .then((response) => {
        setRecipes(response.data.recipes);
        setCurrentRecipe(response.data.recipes[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return { recipes, currentRecipe, setRecipes, setCurrentRecipe };
}
