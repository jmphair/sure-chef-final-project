import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import EditItemForm from "./EditItemForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const GroceryItem = (props) => {
  const [showForm, setShowForm] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>{props.name} has been moved to your kitchen.</Popover.Body>
    </Popover>
  );

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
        setTimeout(() => {
          props.handleShowDelete(props.id);
        }, 1500);
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
          <div className="grocery-card-contents">
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>x{props.quantity}</Card.Text>
            <div
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                margin: "10px",
              }}
            >
              <FontAwesomeIcon
                icon={faPencil}
                size="sm"
                onClick={handleRevealForm}
                style={{ marginRight: "10px" }}
                className={'icon'}
              />
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                onClick={handleDelete}
                className={'icon'}
              />
            </div>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button className="success" onClick={handleTransfer}>
                Purchased
              </Button>
            </OverlayTrigger>
          </div>
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
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default GroceryItem;
