import { Card, Button } from 'react-bootstrap';

const KitchenItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.quantity}
        </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>{' '}
        <Button variant="success">Purchased</Button>
      </Card.Body>
    </Card>
  );
};

export default KitchenItem;
