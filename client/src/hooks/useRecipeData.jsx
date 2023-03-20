import { useState, useEffect } from "react";
import axios from "axios";

export default function useRecipeData() {
  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({
    name: "",
    instructions: "",
    servings: "",
    prep_time: "",
  });

  useEffect(() => {
    console.log("Fetching recipe data...");
    axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
        setCurrentRecipe(response.data.recipes[0]);
        console.log("Got the recipe data:", response);
      })
      .catch((err) => console.error(err));
  }, []);

  return { recipes, currentRecipe };
}
