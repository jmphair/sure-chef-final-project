import { useState, useEffect } from "react";
import recipeGenerator from "../hooks/recipeGenerator";
import axios from "axios";
import {
  Container,
  CardGroup,
  Accordion,
  Button,
  Modal,
} from "react-bootstrap";

import "./Dashboard.css";

const RandomRecipe = (props) => {
  const [randomRecipe, setRandomRecipe] = useState(false)
  const { generateRecipe, answer } = recipeGenerator()


  useEffect(() => {
    setRandomRecipe(generateRecipe('random', 16))
  }, [])

  const saveRecipe = () => {
    axios.post(`/api/recipes/${props.user.id}`, {
      name: answer.name,
      ingredients: answer.ingredients,
      instructions: answer.instructions,
      servings: answer.servings,
      prepTime: answer.prep_time,
      cookTime: answer.cook_time,
      totalTime: answer.total_time
    })
    .then((res) => {
      console.log(res)
    })
    
  }


  return (
    <>
      {console.log(randomRecipe)}
      {/* {randomRecipe.name} */}
      {answer.name}
      {props.user.id}
      {answer.name && <Button onClick={saveRecipe}>Save</Button>}
    </>
  )
};

export default RandomRecipe;
