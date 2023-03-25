import { useState } from "react";
import { Container, CardGroup } from "react-bootstrap";
import { getNewRecipeForUsers } from "../../helpers/selectors";
import useRecipeData from "../../hooks/useRecipeData";
import RecipeItem from "./RecipeItem";

const SaveRecipe = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { recipes, setRecipes } = useRecipeData();

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

    instructions = instructions.slice(0, -1);

    const showOnEdit = (updatedNote) => {
      const updatedNotes = recipes.map((recipe) =>
        recipe.id === updatedNote.id ? updatedNote : recipe
      );
      setRecipes(updatedNotes);
    };

    const handleDelete = (id) => {
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      props.handleSectionClick("recipe");
    };

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
        totalTime={recipe.total_time}
        note={recipe.note}
        saved={recipe.saved}
        showOnEdit={showOnEdit}
        handleSectionClick={props.handleSectionClick}
        onDelete={handleDelete}
      />
    );
  });
  return (
    <Container>
      <h3>Mmmmmmmm... should we save it?</h3>
      <CardGroup>
        <>{recipeList}</>
      </CardGroup>
    </Container>
  );
};

export default SaveRecipe;
