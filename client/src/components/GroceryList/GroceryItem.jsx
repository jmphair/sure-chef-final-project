import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GroceryItem = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.quantity}
        </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default GroceryItem;
