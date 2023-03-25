import { useState, useEffect } from "react";
import recipeGenerator from "../hooks/recipeGenerator";
import SaveRecipe from "./Recipe/SaveRecipe";

import "./Dashboard.css";

const RandomRecipe = (props) => {
  const [randomRecipe, setRandomRecipe] = useState(false)
  const { generateRecipe, answer } = recipeGenerator()


  useEffect(() => {
    setRandomRecipe(generateRecipe('random', 16))
  }, [])


  return (
    <>
      {console.log(randomRecipe)}
      {/* {randomRecipe.name} */}
      {answer.name}
    </>
  )
};

export default RandomRecipe;
