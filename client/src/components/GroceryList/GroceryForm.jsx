import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios'

const GroceryForm = (props) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [storageLocation, setStorageLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  axios.put('http://localhost:8080/foodItems/groceryItemList', {
    name: 'bread',
    quantity: 5,
    storageLocation: 'pantry',
    userId: props.user.id
    })
  // setUser({
  //   id: response.data.userId,
  //   name: response.data.name,
  //   email: response.data.email,
  // });


  return (
    <section>
      <Form className="grocery-main" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
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
        </Form.Group>
        <Button type="submit">Add Item</Button>
      </Form>
    </section>
  );
};

export default GroceryForm;
