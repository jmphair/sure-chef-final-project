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
    axios
      .get("/api/recipes")
      .then((response) => {
        setRecipes(response.data.recipes);
        setCurrentRecipe(response.data.recipes[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return { recipes, currentRecipe };
}
