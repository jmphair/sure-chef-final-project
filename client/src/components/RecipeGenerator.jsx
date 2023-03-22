import { Container, Button } from "react-bootstrap";

function RecipeGenerator() {
  return (
    <Container style={{ textAlign: "center" }}>
      <Button variant="success" size="sm">
        Generate Recipe
      </Button>
    </Container>
  );
}

export default RecipeGenerator;
