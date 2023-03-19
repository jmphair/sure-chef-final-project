import { Card, Button } from 'react-bootstrap';

const RecipeItem = () => {
  return (
    <Card className='my-3'>
      <Card.Body>
        <Card.Title>Recipe Item Name</Card.Title>
        <Card.Text>Ingredients: </Card.Text>
        <Card.Text>Directions: </Card.Text>
        <Card.Text>Note: </Card.Text>
        <Button variant="primary">Edit Note</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        <Button variant="success">Cook</Button>
      </Card.Body>
    </Card>
  );
};

export default RecipeItem;
