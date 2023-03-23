import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import useRecipeData from "../../hooks/useRecipeData";
import RecipeNoteForm from "./RecipeNoteForm";
import axios from "axios";

//props are coming from RecipeItemList component

const RecipeItem = (props) => {
  const [showForm, setShowForm] = useState(false);

  const { recipes } = useRecipeData();

  const handleDelete = (event) => {
    event.preventDefault();
    // Handle item removal here
    axios
      .delete("/api/recipes/delete", {
        data: {
          id: props.id,
        },
      })
      .then(() => {
        props.onDelete(props.id);
      })
      .catch((err) => console.log(err));
  };

  /* function to remove the form from view after pressing buttons */
  const handleRevealForm = (event) => {
    setShowForm(!showForm);
  };

  return (
    <Card className="my-3">
      {!showForm && (
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Servings: {props.servings}</Card.Text>
          <Card.Text>Prep time: {props.prepTime}</Card.Text>
          <Card.Text>Cook time: {props.cookTime}</Card.Text>
          <Card.Text>Ingredients: {props.ingredients}</Card.Text>
          <Card.Text>Directions: {props.instructions} </Card.Text>
          <Card.Text>Note: {props.note} </Card.Text>

          {props.saved !== undefined ? (
            <>
              <Button variant="primary" onClick={handleRevealForm}>
                Add Note
              </Button>{" "}
              <Button variant="danger" onClick={handleDelete}>Delete Recipe</Button>{" "}
              <Button variant="success">Save Recipe</Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={handleRevealForm}>
                Edit Note
              </Button>{" "}
              <Button variant="danger" onClick={handleDelete}>Delete Recipe</Button>{" "}
              <Button variant="success">Cook</Button>
            </>
          )}
        </Card.Body>
      )}
      {showForm && (
        <Card.Body>
          <RecipeNoteForm
            handleRevealForm={handleRevealForm}
            showOnEdit={props.showOnEdit}
            onDelete={props.onDelete}
            id={props.id}
            name={props.name}
          />
        </Card.Body>
      )}
    </Card>
  );
};

export default RecipeItem;
