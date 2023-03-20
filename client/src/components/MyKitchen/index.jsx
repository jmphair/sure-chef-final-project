import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeGenerator from "../RecipeGenerator";
import Form from "./Form";
import KitchenItemList from "./KitchenItemList";

const MyKitchen = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  const handleSelectAll = (event) => {
    /* Implement here */
  };

  return (
    <Container>
      <KitchenItemList />
      {!showForm && (
        <>
          <Button variant="primary" onClick={handleAddItem}>
            Add Item
          </Button>
          <Button variant="primary" onClick={handleSelectAll}>
            Select All
          </Button>
          <RecipeGenerator />
        </>
      )}
      {showForm && (
        <div className="kitchen-main">
          <Form user={props.user} />
          <Button variant="danger" onClick={handleAddItem}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MyKitchen;
