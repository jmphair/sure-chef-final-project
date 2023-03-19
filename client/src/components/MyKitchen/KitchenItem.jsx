import { Card, Button } from "react-bootstrap";

const KitchenItem = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Kitchen Item Name</Card.Title>
        <Card.Text>Quantity: 1</Card.Text>
        <Card.Text>Storage Location: Pantry</Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        <Button variant="success">Select</Button>
      </Card.Body>
    </Card>
  );
};

export default KitchenItem;
