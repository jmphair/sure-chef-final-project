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
        .put("/api/groceryItems/update", {
          id: props.id,
          name: name,
          quantity: quantity,
          storage_location: storageLocation,
        })
        .then((res) => {
          props.showOnEdit({
            name,
            quantity,
            storage_location: storageLocation,
            id: res.data.res.id,
            grocery_id: res.data.res.grocery_list_id,
            user_id: props.user.id,
          });
          props.handleRevealForm();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSelectChange = (event) => {
    setStorageLocation(event.target.value);
    setStorageLocationError(false);
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
            onChange={handleSelectChange}
            isInvalid={storageLocationError}
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
        <div>
          <Button className="confirm-add" type="submit">
            Confirm
          </Button>{" "}
          <Button className="delete-cancel" onClick={props.handleRevealForm}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditItemForm;
