import { useState, useEffect } from 'react'
import recipeGenerator from "../hooks/recipeGenerator";
import Userfront from "@userfront/react";
import axios from "axios";



function RandomRecipe(props) {
  const { generateRecipe, loading, answer, addIngredient, recipeIngredients } = recipeGenerator() 
  const [ randomRecipe, setRandomRecipe ] = useState();

  useEffect(() => {
    const options = {
      headers: { 
        Accept: "*/*",
        Authorization: `Bearer ${Userfront.tokens.accessToken}`
      }
    };

    axios.get("https://api.userfront.com/v0/self", options)
      .then((response) => {
        addIngredient(response.data.userId.toString(), '0')
        return
      })
      .then(() => setTimeout(() => {setRandomRecipe(generateRecipe('random'))}, 3000))
  }, []) 

  return (
    <section> 
      <h3>We think you might like this:</h3>
      {loading && <div>Why not try something new?</div>}
    {/* {!loading && } */}
    </section>
  )
}

export default RandomRecipe;