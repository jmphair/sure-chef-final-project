import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const KitchenItem = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Kitchen Item Name</Card.Title>
        <Card.Text>Quantity: 1</Card.Text>
        <Card.Text>Storage Location: Pantry</Card.Text>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
};

export default KitchenItem;
