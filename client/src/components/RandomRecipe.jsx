import { useState, useEffect } from "react";
import recipeGenerator from "../hooks/recipeGenerator";
import { ingredientParser, instructionParser } from "../helpers/dataParsers";
import { randomRecipePrompt } from "../helpers/randomizers";
import axios from "axios";
import {
  Accordion,
  Button,
  Spinner,
} from "react-bootstrap";

import "./RandomRecipe.css";

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
    <Accordion className='recipe-accordion'>
      {loading && (
        <Accordion.Item className='dash-card-search' eventKey="0">
          <Accordion.Header >
            <Spinner animation="grow" />
            {randomRecipePrompt()}
          </Accordion.Header>
        </Accordion.Item>
      )}
      {answer.name && (
        <Accordion.Item className='dash-card-recipe' eventKey="0">
          <Accordion.Header className='dash-card-recipe-header'>Chef's recommendation: {answer.name}</Accordion.Header>
          <Accordion.Body>
            {!save && answer.name && <Button onClick={saveRecipe}>Save</Button>}
            {save && <Button>Saved!</Button>}
            {ingredientParser(answer.ingredients)}
            <div><em><strong>About Chef's recommendation:</strong> Chef's recommendation looks through your kitchen and provides you with a unique recipe recommendation based on your ingredients.</em></div>
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  )
};

export default RandomRecipe;

// {answer.ingredients && ingredientParser(answer.ingredients)}
//         {answer.instructions && instructionParser(answer.instructions)}
//         {answer.servings}
//         {answer.prep_time}
//         {answer.cook_time}
//         {answer.total_time}
//         {!save && answer.name && <Button onClick={saveRecipe}>Save</Button>}
//         {save && <Button>Saved!</Button>}


