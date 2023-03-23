import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeItemList from "./RecipeItemList";
// import EditNoteForm from "./AddNoteForm";
import useRecipeData from "../../hooks/useRecipeData";

const Recipe = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { recipes, currentRecipe, setRecipes, setCurrentRecipe } = useRecipeData();

  // /* function used in EditForm component to update the state after an item is edited  */
  // const showOnEdit = (editedItem) => {
  //   const updatedItems = groceryItems.map((item) =>
  //     item.id === editedItem.id ? editedItem : item
  //   );
  //   setGroceryItems(updatedItems);
  // };

  // /* function used in GroceryItem component to update the state after an item is deleted  */
  // const handleShowDelete = (id) => {
  //   setGroceryItems((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
    <Container className="my-3">
      <RecipeItemList user={props.user}/>
    </Container>
  );
};

export default Recipe;
