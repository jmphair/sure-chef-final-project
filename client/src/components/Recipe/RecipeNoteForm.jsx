import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

const RecipeNoteForm = (props) => {
  const [note, setNote] = useState("");

  const handleEdit = (event) => {
    event.preventDefault();
    axios
      .put("/api/recipes/update", {
        id: props.id,
        note: note,
      })
      .then((res) => {
        props.showOnEdit({
          cook_time: res.data.res.cook_time,
          id: res.data.res.id,
          ingredients: res.data.res.ingredients,
          instructions: res.data.res.instructions,
          name: res.data.res.name,
          note,
          prep_time: res.data.res.prep_time,
          saved: res.data.res.saved,
          servings: res.data.res.servings,
          total_time: res.data.res.total_time,
          user_id: res.data.res.user_id,
        });
        props.handleRevealForm();
      });
  };

  return (
    <Container>
      <Form onSubmit={handleEdit}>
        <Form.Group controlId="name">
          <Form.Label>{props.name}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add a note?"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </Form.Group>
        <div className="button-container">
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

export default RecipeNoteForm;
