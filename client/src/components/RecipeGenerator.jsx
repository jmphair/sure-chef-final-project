import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./RecipeGenerator.css";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false);
  const [switchText, setSwitchText] = useState(
    '"Only use the ingredients I select below!"'
  );
  const [recipeRestrictions, setRecipeRestrictions] = useState("strict");

  const handleChange = (e) => {
    if (switchState === false) {
      setSwitchState(true);
      setSwitchText('"Tell me what I could add!"');
      setRecipeRestrictions("flexible");
    }

    if (switchState === true) {
      setSwitchState(false);
      setSwitchText('"Only use the ingredients I select below!"');
      setRecipeRestrictions("strict");
    }
  };

  return (
    <Container>
      <div className="message">
        Ok {props.user.name}, toggle the button below to get started!
      </div>
      <Form className="toggle">
        <Form.Check
          type="switch"
          id="custom-switch"
          defaultChecked={switchState}
          onChange={handleChange}
        />
        {switchText}
      </Form>
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
