import RecipeItem from "./RecipeItem";
import { Container, CardGroup, Card, Accordion } from "react-bootstrap";
import { getRecipesForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";

const RecipeItemList = (props) => {
  // Use the useRecipeData hook to get the recipes and currentRecipe from state
  const { recipes, setRecipes } = useRecipeData();

  /* function used in EditForm component to update the state after an item is edited  */
  const showOnEdit = (updatedNote) => {
    const updatedNotes = recipes.map((recipe) =>
      recipe.id === updatedNote.id ? updatedNote : recipe
    );
    setRecipes(updatedNotes);
  };

  /* function used in KitchenItem component to update the state after an item is deleted  */
  const handleDelete = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  // Get the recipes for a specific user (in this case, user ID 1) using the getRecipesForUsers function
  const userRecipes =
    recipes.length > 0 ? getRecipesForUsers({ recipes }, props.user.id) : [];

  const userRecipesReversed = userRecipes.slice().reverse();

  // Map over the userRecipes array to create a Recipe component for each recipe
  const recipeList = userRecipesReversed.map((recipe) => {
    let ingredients = "";
    recipe.ingredients.forEach((ingredient) => {
      ingredients += Object.keys(ingredient)[0] + " x ";
      ingredients += Object.values(ingredient)[0] + ", ";
    });

    ingredients = ingredients.slice(0, -2);

    let instructions = "";
    recipe.instructions.forEach((instruction) => {
      instructions += instruction + `\n`;
    });

    instructions = instructions.slice(0, -1);

    return (
      <Container style={{ margin: 0, padding: 0 }}>
        <Accordion className="custom-accordion" defaultActiveKey={recipe.id}>
          <Accordion.Header>{recipe.name}</Accordion.Header>
          <Accordion.Body>
            <RecipeItem
              key={recipe.id}
              id={recipe.id}
              name={recipe.name}
              instructions={instructions}
              ingredients={ingredients}
              servings={recipe.servings}
              prepTime={recipe.prep_time}
              cookTime={recipe.cook_time}
              totalTime={recipe.total_time}
              note={recipe.note}
              saved={recipe.saved}
              showOnEdit={showOnEdit}
              onDelete={handleDelete}
              handleSectionClick={props.handleSectionClick}
            />
          </Accordion.Body>
        </Accordion>
      </Container>
    );
  });

  const count = userRecipes.length;

  return (
    <Container className="my-3">
      <h3 className="heading">My Cookbook</h3>
      <h6 className="heading">Total Recipes: {count}</h6>

      <Accordion>{recipeList}</Accordion>
    </Container>
  );
};

export default RecipeItemList;
