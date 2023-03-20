import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const KitchenItem = (props) => {

  const handleDelete = (event) => {
    event.preventDefault();
    // Handle item removal here
    axios.delete("http://localhost:8080/foodItems/kitchenItemList", {
      data: {
        id: props.id,
      }
    })
  };
  
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.quantity}
        </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button onClick={handleDelete} variant="danger">Delete</Button>{' '}
        <Button variant="success">Select</Button>
      </Card.Body>
    </Card>
  );
};

export default KitchenItem;
