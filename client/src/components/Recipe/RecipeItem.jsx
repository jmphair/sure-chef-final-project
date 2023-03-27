import { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import useRecipeData from "../../hooks/useRecipeData";
import RecipeNoteForm from "./RecipeNoteForm";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const RecipeItem = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);

  const { recipes } = useRecipeData();

  const cancelDelete = () => {
    setShowDeleteModal(false);
  };

  const cancelSave = () => {
    setShowSaveModal(false);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (event) => {
    setShowDeleteModal(false);

    axios
      .delete("/api/recipes/delete", {
        data: {
          id: props.id,
        },
      })
      .then(() => {
        props.onDelete(props.id);
      })
      .catch((err) => console.log(err));
  };

  const handleSave = (event) => {
    event.preventDefault();
    setShowSaveModal(true);
  };

  const handleSaveConfirm = (event) => {
    setShowSaveModal(false);

    axios
      .put("/api/recipes/save", {
        id: props.id,
        saved: true,
      })
      .then(() => {
        props.handleSectionClick("recipe");
      })
      .catch((err) => console.log(err));
  };

  const handleRevealForm = (event) => {
    setShowForm(!showForm);
  };

  return (
    <div className="card-container">
      <Card className="my-3">
        {!showForm && (
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>Servings: {props.servings}</Card.Text>
            <Card.Text>Prep time: {props.prepTime}</Card.Text>
            <Card.Text>Cook time: {props.cookTime}</Card.Text>
            <Card.Text>Total time: {props.totalTime}</Card.Text>
            <Card.Text>Ingredients: {props.ingredients}</Card.Text>
            <Card.Text>Directions: {props.instructions} </Card.Text>
            <Card.Text>Note: {props.note} </Card.Text>

            {!props.saved ? (
              <>
                <Button className="confirm-add" onClick={handleRevealForm}>
                  Add Note
                </Button>{" "}
                <Button className="delete-cancel" onClick={handleDelete}>
                  Delete Recipe
                </Button>{" "}
                <Button className="success" onClick={handleSave}>
                  Save Recipe
                </Button>
              </>
            ) : (
              <div className="icons">
                <FontAwesomeIcon
                  icon={faPencil}
                  onClick={handleRevealForm}
                  style={{ marginRight: "10px" }}
                />
                <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
              </div>
            )}
          </Card.Body>
        )}
        {showForm && (
          <Card.Body>
            <RecipeNoteForm
              handleRevealForm={handleRevealForm}
              showOnEdit={props.showOnEdit}
              onDelete={props.onDelete}
              id={props.id}
              name={props.name}
            />
          </Card.Body>
        )}
      </Card>
      <Modal show={showDeleteModal} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this recipe?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showSaveModal} onHide={cancelDelete} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm save</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to save this recipe?</Modal.Body>
        <Modal.Footer>
          <Button className="delete-cancel" onClick={cancelSave}>
            Cancel
          </Button>
          <Button className="success" onClick={handleSaveConfirm}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RecipeItem;
