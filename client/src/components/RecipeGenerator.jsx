import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./RecipeGenerator.css";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false);
  const [switchText, setSwitchText] = useState(
    "to use only the ingredients you select, in your recipe!"
  );
  const [recipeRestrictions, setRecipeRestrictions] = useState("strict");

  const handleChange = (e) => {
    if (switchState === false) {
      setSwitchState(true);
      setSwitchText(
        "to use the ingredients you select, as well as my suggestions!"
      );
      setRecipeRestrictions("flexible");
    }

    if (switchState === true) {
      setSwitchState(false);
      setSwitchText("to use only the ingredients you select, in your recipe!");
      setRecipeRestrictions("strict");
    }
  };

  return (
    <Container>
      <Form className="toggle">
        <Form.Check
          type="switch"
          id="custom-switch"
          defaultChecked={switchState}
          onChange={handleChange}
        />
        {/* {switchText} */}
      </Form>
      <div className="message">
        Hey {props.user.name}! Use the toggle to decide {switchText}
      </div>
      <div className="create-button">
        <Button
          onClick={() => props.generateRecipe(recipeRestrictions)}
          variant="outline-dark"
        >
          Create Recipe
        </Button>
      </div>
    </Container>
  );
}

export default RecipeGenerator;
