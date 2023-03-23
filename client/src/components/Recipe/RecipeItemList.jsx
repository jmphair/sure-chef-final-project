import RecipeItem from "./RecipeItem";
import { Container, CardGroup } from "react-bootstrap";

import { getRecipesForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";

const RecipeItemList = (props) => {
  // Use the useRecipeData hook to get the recipes and currentRecipe from state
  const { recipes, currentRecipe } = useRecipeData();

  // console.log("recipeItemList", props) working...

  // Get the recipes for a specific user (in this case, user ID 1) using the getRecipesForUsers function
  const userRecipes =
    recipes.length > 0 ? getRecipesForUsers({ recipes }, props.user.id) : [];
  // Map over the userRecipes array to create a Recipe component for each recipe
  const recipeList = userRecipes.map((recipe) => {
    
    let ingredients = ""
    recipe.ingredients.forEach(ingredient => {
      ingredients += Object.keys(ingredient)[0] + ' x '
      ingredients += Object.values(ingredient)[0] + ', '
    })

    ingredients = ingredients.slice(0, -2);
    

    let instructions = ""
    recipe.instructions.forEach(instruction => {
      instructions += instruction + `\n`
    });

    instructions = instructions.slice(0, -2);

    return (
      <RecipeItem
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        instructions={instructions}
        ingredients={ingredients}
        servings={recipe.servings}
        prepTime={recipe.prep_time}
        cookTime={recipe.cook_time}
        note={recipe.note}
        showOnEdit={props.showOnEdit}
      />
    );
  });
  return (
    <Container className="my-3">
      <h3 className="mb-3">Recipe item list:</h3>
      <CardGroup>
        <>{recipeList}</>
      </CardGroup>
    </Container>
  );
};

export default RecipeItemList;
