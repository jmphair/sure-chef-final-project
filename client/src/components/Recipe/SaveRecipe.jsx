import { Card, Button, Container } from "react-bootstrap";

const SaveRecipe = () => {
  return (
    <Container>
      <Card className="my-3">
        <Card.Body>
          <Card.Title>Recipe Name: </Card.Title>
          <Card.Text>Servings: </Card.Text>
          <Card.Text>Prep Time: </Card.Text>
          <Card.Text>Cook Time: </Card.Text>
          <Card.Text>Total Time: </Card.Text>
          <Card.Text>Ingredients: </Card.Text>
          <Card.Text>Directions: </Card.Text>
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
