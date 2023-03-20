import RecipeItem from "./RecipeItem";
import { Container, CardGroup } from "react-bootstrap";

import { getRecipesForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";

const RecipeItemList = () => {
  // Use the useRecipeData hook to get the recipes and currentRecipe from state
  const { recipes, currentRecipe } = useRecipeData();

  // Get the recipes for a specific user (in this case, user ID 1) using the getRecipesForUsers function
  const userRecipes =
    recipes.length > 0 ? getRecipesForUsers({ recipes }, 1) : [];
  // Map over the userRecipes array to create a Recipe component for each recipe
  const recipeList = userRecipes.map((recipe) => {
    return (
      <RecipeItem
        key={recipe.id}
        name={recipe.name}
        instructions={recipe.instructions}
        servings={recipe.servings}
        prepTime={recipe.prep_time}
        cookTime={recipe.cook_time}
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
