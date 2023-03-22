import { Card, Container } from "react-bootstrap";

const LoadingRecipe = () => {
  return (
    <Container>
      <Card className="my-3">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>Sure Chef! Coming right up! </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoadingRecipe;
