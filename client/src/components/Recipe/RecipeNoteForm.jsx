import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import axios from "axios";

const RecipeNoteForm = (props) => {
  const [storageLocation, setStorageLocation] = useState("");

  const handleEdit = (event) => {
    event.preventDefault();
      axios
        .put("/api/recipes/update", {
          id: props.id,
          note: note,
        })
        .then((res) => {
          props.showOnEdit({
     
          });
          props.handleRevealForm();
        });
  }


  return (
    <Container>
      <Form onSubmit={handleEdit}>

      </Form>
    </Container>
  );
};

export default RecipeNoteForm;
