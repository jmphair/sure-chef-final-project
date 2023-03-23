import { Card, Button } from "react-bootstrap";
import useRecipeData from "../../hooks/useRecipeData";

//props are coming from RecipeItemList component

const RecipeItem = (props) => {

  const {recipes} = useRecipeData();

  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Servings: {props.servings}</Card.Text>
        <Card.Text>Prep time: {props.prepTime}</Card.Text>
        <Card.Text>Cook time: {props.cookTime}</Card.Text>
        <Card.Text>Ingredients: {props.ingredients}</Card.Text>
        <Card.Text>Directions: {props.instructions} </Card.Text>
        <Card.Text>Note: </Card.Text>
        
        <Button variant="primary">Edit Note</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="success">Cook</Button>
      
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
