import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeItemList from "./RecipeItemList";
import useRecipeData from "../../hooks/useRecipeData";
import { getRecipesForUsers } from "../../helpers/selectors";

const Recipe = (props) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container className="my-3">
      <RecipeItemList user={props.user} showForm={showForm} handleSectionClick={props.handleSectionClick}/>
    </Container>
  );
};

export default Recipe;
