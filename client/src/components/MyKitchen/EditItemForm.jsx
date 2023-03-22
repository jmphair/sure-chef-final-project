import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

const EditItemForm = (props) => {
  const [name, setName] = useState(props.name);
  const [quantity, setQuantity] = useState(props.quantity);
  const [storageLocation, setStorageLocation] = useState("");
  const [storageLocationError, setStorageLocationError] = useState(false);

  const handleEdit = (event) => {
    event.preventDefault();
    if (storageLocation === "") {
      setStorageLocationError(true);
    } else {
      // Handle item removal here
      axios
        .put("/api/kitchenItems/update", {
          id: props.id,
          name: name,
          quantity: quantity,
          storageLocation: storageLocation,
        })
        .then(() => {
          props.handleEdit();
        });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleEdit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="storageLocation">
          <Form.Label>Storage Location:</Form.Label>
          <Form.Control
            as="select"
            value={storageLocation}
            onChange={(event) => setStorageLocation(event.target.value)}
          >
            <option value="">Select a storage location</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Freezer">Freezer</option>
            <option value="Pantry">Pantry</option>
          </Form.Control>
          {storageLocationError && (
            <Form.Text className="text-danger">
              Please select a storage location.
            </Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" type="submit">
          Edit Item
        </Button>
      </Form>
    </Container>
  );
};

export default EditItemForm;
