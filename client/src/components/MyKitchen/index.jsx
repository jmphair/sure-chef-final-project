import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Form from "./Form";
import KitchenItemList from "./KitchenItemList";

const MyKitchen = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  return (
    <Container>
      <KitchenItemList />
      {!showForm && (
        <Button variant="primary" onClick={handleAddItem}>
          Add Item
        </Button>
      )}
      {showForm && (
        <div className="kitchen-main">
          <Form />
          <Button variant="danger" onClick={handleAddItem}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MyKitchen;
