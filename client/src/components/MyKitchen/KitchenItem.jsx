import { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import axios from "axios";
import EditItemForm from "./EditItemForm";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const KitchenItem = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    if (isSelected === false) {
      setIsSelected(true);
      props.addIngredient(props.name, props.quantity);
    }
    if (isSelected === true) {
      setIsSelected(false);
      props.removeIngredient(props.name);
    }
  };

  const handleDelete = (event) => {
    event.preventDefault();
    // Handle item removal here
    axios
      .delete("/api/kitchenItems/delete", {
        data: {
          id: props.id,
        },
      })
      .then(() => {
        props.onDelete(props.id);
      })
      .catch((err) => console.log(err));
  };

  /* function to remove the form from view after pressing buttons */
  const handleRevealForm = (event) => {
    setShowForm(!showForm);
  };

  return (
    <Card>
      <Card.Body>
        {!showForm && (
          <>
            <div className="kitchen-card">
              <Form.Check
                type="checkbox"
                checked={isSelected}
                onChange={handleCheckboxChange}
              />
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>x{props.quantity}</Card.Text>
            </div>
            <div className="icons">
              <FontAwesomeIcon
                icon={faPencil}
                size="sm"
                onClick={handleRevealForm}
                style={{ marginRight: "10px" }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                size="sm"
                onClick={handleDelete}
              />
            </div>
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
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default KitchenItem;
