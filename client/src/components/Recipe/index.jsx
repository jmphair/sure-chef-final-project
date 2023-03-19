import { Container } from "react-bootstrap";
import RecipeItemList from "./RecipeItemList";

const Recipe = () => {
  return (
    <Container className="my-3">
      <RecipeItemList />
    </Container>
  );
};

export default Recipe;
