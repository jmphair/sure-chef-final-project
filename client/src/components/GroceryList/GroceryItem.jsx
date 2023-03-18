import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const GroceryItem = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Grocery Item</Card.Title>
        <Card.Text>
          This is a description of the grocery item.
        </Card.Text>
        <Button variant="primary">Edit</Button>{' '}
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default GroceryItem;
