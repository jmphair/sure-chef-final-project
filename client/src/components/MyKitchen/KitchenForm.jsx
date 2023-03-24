import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

import { validateForm } from "../../helpers/selectors";

const KitchenForm = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [storageLocation, setStorageLocation] = useState("");
  const [nameError, setNameError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [storageLocationError, setStorageLocationError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateForm(name, quantity, storageLocation);
    if (errors) {
      setNameError(errors.name);
      setQuantityError(errors.quantity);
      setStorageLocationError(errors.storageLocation);
    } else {
      // Handle form submission here
      axios
        .post("/api/kitchenItems", {
          name: name,
          quantity: quantity,
          storage_location: storageLocation,
          userId: props.user.id,
        })
        .then((res) => {
          props.showOnAdd({
            name,
            quantity,
            storage_location: storageLocation,
            id: res.data.res.id,
            user_id: props.user.id,
          });
          props.handleAddItem();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          {nameError && (
            <Form.Text className="text-danger">Please enter a name.</Form.Text>
          )}
        </Form.Group>

        <Form.Group controlId="quantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
          {quantityError && (
            <Form.Text className="text-danger">
              Please enter a quantity.
            </Form.Text>
          )}
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
            <option value="Other">Other</option>
          </Form.Control>
          {storageLocationError && (
            <Form.Text className="text-danger">
              Please select a storage location.
            </Form.Text>
          )}
        </Form.Group>
        <div
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="primary" type="submit">
            Add Item
          </Button>
          <Button variant="danger" onClick={props.handleAddItem}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default KitchenForm;
