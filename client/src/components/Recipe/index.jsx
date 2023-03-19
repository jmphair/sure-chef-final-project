import RecipeItemList from "./RecipeItemList";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Recipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    instructions: "",
    servings: "",
    prep_time: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/recipes")
      .then((response) => {
        setRecipe(response.data.recipes[0]);
        console.log(response.data.recipes[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container className="my-3">
      {/* <RecipeItemList /> */}
      <h1>{recipe.name}</h1>
      <p>{recipe.instructions}</p>
      <p>{recipe.serving}</p>
      <p>{recipe.prep_time}</p>
    </Container>
  );
};

export default Recipe;
