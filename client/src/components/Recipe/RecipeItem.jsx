import { Card, Button } from "react-bootstrap";

//props are coming from RecipeItemList component

const RecipeItem = (props) => {
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Servings: {props.servings}</Card.Text>
        <Card.Text>Prep time: {props.prepTime}</Card.Text>
        <Card.Text>Cook time: {props.cookTime}</Card.Text>
        <Card.Text>Ingredients: </Card.Text>
        <Card.Text>Directions:{props.instructions} </Card.Text>
        <Button variant="primary">Edit</Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
        <Button variant="success">Cook</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
