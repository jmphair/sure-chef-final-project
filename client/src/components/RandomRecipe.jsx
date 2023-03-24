import { useState, useEffect } from 'react'
import recipeGenerator from "../hooks/recipeGenerator";
import Userfront from "@userfront/react";
import axios from "axios";
import Recipe from './Recipe';
import LoadingRecipe from './MyKitchen/LoadingRecipe';



function RandomRecipe(props) {
  const { generateRecipe, loading, answer, addIngredient, recipeIngredients } = recipeGenerator() 
  const [ randomRecipe, setRandomRecipe ] = useState();

  useEffect(() => {
    setRandomRecipe(generateRecipe('random', props.user.id))
  }, []) 

  return (
    <section> 
      <h3>We think you might like this:</h3>
      {loading && <LoadingRecipe />}
      {answer && props.handleSectionClick("saverecipe")}
    </section>
  )
}

export default RandomRecipe;