import { Card, Button } from 'react-bootstrap';

const GroceryItem = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Grocery Item Name</Card.Title>
        <Card.Text>Quantity: 2 </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        <Button variant="success">Purchased</Button>
      </Card.Body>
    </Card>
  );
};

export default GroceryItem;
