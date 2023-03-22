import { Card, Button, Container } from "react-bootstrap";
import { getNewRecipeForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";
import RecipeItem from "./RecipeItem";

const SaveRecipe = (props) => {

  const {recipes, currentRecipe, setRecipes, setCurrentRecipe} = useRecipeData();

  // const newRecipe = recipes.length > 0
  //   ? getNewRecipeForUsers({ recipes }, props)
  //   : [];

  const userRecipes =
  recipes.length > 0 ? getNewRecipeForUsers({ recipes }, 16) : [];


  const recipeList = userRecipes.map((recipe) => {
    return (
        <RecipeItem
        key={recipe.id}
        name={recipe.name}
        instructions={recipe.instructions}
        ingredients={recipe.ingredients}
        servings={recipe.servings}
        prepTime={recipe.prep_time}
        cookTime={recipe.cook_time}
      />
    )
  })
  return (
    <Container>
      <Card className="my-3">
        <Card.Body>
          <>{recipeList}</>
        <Card.Text>Note: </Card.Text>
        <Button variant="primary">Add Note</Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
        <Button variant="success">Save</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SaveRecipe;
