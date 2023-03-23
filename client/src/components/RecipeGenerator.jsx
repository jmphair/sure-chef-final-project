import { Container, Button } from "react-bootstrap";

function RecipeGenerator(props) {
  return (
    <Container style={{ textAlign: "center" }}>
      <Button onClick={() => props.generateRecipe()} variant="success" size="sm">
        Generate Recipe
      </Button>
    </Container>
  );
}

export default RecipeGenerator;
