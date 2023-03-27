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
        <Accordion.Item className='recipe-item' eventKey="0">
          <Accordion.Header className='dash-card-recipe-header'>
            <Spinner animation="grow" />
            {randomRecipePrompt()}
          </Accordion.Header>
        </Accordion.Item>
      )}
      {answer.name && (
        <Accordion.Item className='dash-card-recipe' eventKey="0">
          <Accordion.Header className='dash-card-recipe-header'>Chef's Recommendation: {answer.name}</Accordion.Header>
          <Accordion.Body className='recipe-body'>
            <div >
              <div>Chef's Recommendation</div>
              <div className='recipe-title'><strong>{answer.name}</strong></div>
            </div>
            <div classname='save-state'>
              <div>
                {!save && answer.name && <Button onClick={saveRecipe}>Save</Button>}
                {save && <Button>Saved!</Button>}
              </div>
            </div>
            <div className='cook-times'>
              <div><strong>Prep time</strong>   {answer.prep_time}</div>
              <div><strong>Cook time</strong>   {answer.cook_time}</div>
              <div><strong>Total time</strong>  {answer.total_time}</div>
            </div>
            <div className='cook-times'>
              <div><strong>Serves</strong> {answer.servings}</div>
            </div>
            <div className='ingredients'>
            <strong>Ingredients</strong> {ingredientParser(answer.ingredients)}
            </div>
            <div className='instructions'>
            <strong>Directions</strong> {answer.instructions && instructionParser(answer.instructions)}
            </div>
            <hr className="solid"/>
            <div><em><strong>About Chef's Recommendation:</strong> Chef's Recommendation looks through your kitchen and provides you with a unique recipe recommendation based on your ingredients.</em></div>
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  )
};

export default RandomRecipe;

