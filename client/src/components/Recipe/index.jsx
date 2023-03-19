import RecipeItemList from "./RecipeItemList";
import { Container } from 'react-bootstrap';

const Recipe = () => {
  return (
    <Container className='my-3'>
      <RecipeItemList />
    </Container>
  );
};

export default Recipe;
