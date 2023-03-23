import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { getNewRecipeForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";
import RecipeItem from "./RecipeItem";

const SaveRecipe = (props) => {
  const [showForm, setShowForm] = useState(false);

  const { recipes } = useRecipeData();

  const userRecipes =
    recipes.length > 0 ? getNewRecipeForUsers({ recipes }, props.user.id) : [];

  const recipeList = userRecipes.map((recipe) => {
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
        saved={recipe.saved}
      />
    );
  });
  return (
    <Container>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Mmmmmmmm... should we save it?</Card.Title>
          <>{recipeList}</>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SaveRecipe;
