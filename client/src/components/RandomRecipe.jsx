import recipeGenerator from "../hooks/recipeGenerator";

function RandomRecipe(props) {
  const { generateRecipe, loading} = recipeGenerator()  

  // useState(() => {
  //   generateRecipe('random')
  // })

  return (
    <section> 
      <h3>We think you might like this:</h3>
      {loading && <div>Why not try something new?</div>}
    {/* {!loading && } */}
    </section>
  )
}

export default RandomRecipe;