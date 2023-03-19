import RecipeItem from "./RecipeItem";
import { Container, CardGroup } from 'react-bootstrap';

const RecipeItemList = () => {
  return (
    <Container className='my-3'>
      <h3 className='mb-3'>Recipe item list:</h3>
      <CardGroup>
        <RecipeItem />
        <RecipeItem />
      </CardGroup>
    </Container>
  );
};

export default RecipeItemList;
