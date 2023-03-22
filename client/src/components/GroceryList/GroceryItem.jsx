import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import EditItemForm from "./EditItemForm";

const GroceryItem = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleDelete = (event) => {
    event.preventDefault();
    // Handle item removal here
    axios
      .delete(`/api/groceryItems/delete`, {
        data: {
          id: props.id,
        },
      })
      .then(() => {
        props.handleShowDelete(props.id);
      })
      .catch((err) => console.log(err));
  };

  const handleTransfer = (event) => {
    event.preventDefault();

    axios
      .put(`/api/foodItems/update`, {
        data: {
          id: props.id,
          groceryListId: null,
          kitchenListId: props.user.id,
        },
      })
      .then(() => {
        props.handleShowDelete(props.id);
      })
      .catch((err) => console.log(err));
  };

  const handleRevealForm = (event) => {
    setShowForm(!showForm);
  };

  return (
    <Card>
      <Card.Body>
        {!showForm && (
          <>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.quantity}</Card.Text>
            <Button onClick={handleRevealForm} variant="primary">
              Edit
            </Button>{" "}
            <Button onClick={handleDelete} variant="danger">
              Delete
            </Button>{" "}
            <Button variant="success" onClick={handleTransfer}>
              Purchased
            </Button>
          </>
        )}
        {showForm && (
          <div className="kitchen-main">
            <EditItemForm
              name={props.name}
              quantity={props.quantity}
              id={props.id}
              handleRevealForm={handleRevealForm}
              showOnEdit={props.showOnEdit}
              user={props.user}
            />
            <Button variant="danger" onClick={handleRevealForm}>
              Cancel
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default GroceryItem;
