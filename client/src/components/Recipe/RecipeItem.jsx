import { Card, Button } from "react-bootstrap";

const RecipeItem = (props) => {
  return (
    <Card className="my-3">
      <h1>{props.name}</h1>
      <p>{props.instructions}</p>
      <p>{props.serving}</p>
      <p>{props.prep_time}</p>
      <Card.Body>
        <Card.Title>Recipe Item Name</Card.Title>
        <Card.Text>Ingredients: </Card.Text>
        <Card.Text>Directions: </Card.Text>
        <Button variant="primary">Edit</Button>{" "}
        <Button variant="danger">Delete</Button>{" "}
        <Button variant="success">Cook</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
