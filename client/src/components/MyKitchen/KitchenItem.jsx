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
    <Card className="kitchen-card">
      <Card.Body>
        {!showForm && (
              <div className="kitchen-card-contents">
                <div>
                  <Form.Check
                    type="checkbox"
                    checked={isSelected}
                    onChange={handleCheckboxChange}
                    className={'icon'}
                  />
                </div>
                <div>
                  <Card.Title>{props.name} <span className="quantity">x{props.quantity}</span></Card.Title>
                </div>
                <div>
                  <Card.Text></Card.Text>
                </div>
                <div>
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

export default KitchenItem;
