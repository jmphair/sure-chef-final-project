import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeItemList from "./RecipeItemList";
import useRecipeData from "../../hooks/useRecipeData";

const Recipe = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { recipes, currentRecipe, setRecipes, setCurrentRecipe } = useRecipeData();

  /* function used in EditForm component to update the state after an item is edited  */
  const showOnEdit = (updatedNote) => {
    const updatedNotes = recipes.map((recipe) =>
      recipe.id === updatedNote.id ? updatedNote : recipe
    );
    console.log("updated note:", updatedNote);
    setRecipes(updatedNotes);
  };

  useEffect(() => {
    console.log("RECIPE STATE: ", recipes);
  }, [recipes]);

  // /* function used in GroceryItem component to update the state after an item is deleted  */
  // const handleShowDelete = (id) => {
  //   setGroceryItems((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
    <Container className="my-3">
      <RecipeItemList 
      user={props.user}
      showOnEdit={showOnEdit}
      showForm={showForm}

      />
    </Container>
  );
};

export default Recipe;
