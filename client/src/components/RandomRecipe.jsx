import { useState, useEffect } from "react";
import recipeGenerator from "../hooks/recipeGenerator";
import { ingredientParser, instructionParser } from "../helpers/dataParsers";
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
  const [save, setSave] = useState(false)
  const { generateRecipe, answer, loading, addIngredient } = recipeGenerator()


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
      setSave(true)
    })
    
  }


  return (
    <>
    {loading && 'Finding you some inspiration...'}
      {/* {randomRecipe.name} */}
      {answer.name}
      {answer.ingredients && ingredientParser(answer.ingredients)}
      {answer.instructions && instructionParser(answer.instructions)}
      {answer.servings}
      {answer.prep_time}
      {answer.cook_time}
      {answer.total_time}
      {!save && answer.name && <Button onClick={saveRecipe}>Save</Button>}
      {save && <Button>Saved!</Button>}
    </>
  )
};

export default RandomRecipe;
