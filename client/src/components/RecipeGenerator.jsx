import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./RecipeGenerator.css";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false);
  const [switchText, setSwitchText] = useState(
    'to the "off" position to have only the ingredients you select in your recipe!'
  );
  const [recipeRestrictions, setRecipeRestrictions] = useState("strict");

  const handleChange = (e) => {
    if (switchState === false) {
      setSwitchState(true);
      setSwitchText('to the "on" position to have the ingredients you select, as well as my suggestions!');
      setRecipeRestrictions("flexible");
    }

    if (switchState === true) {
      setSwitchState(false);
      setSwitchText('to the "off" position to have only the ingredients you select in your recipe!');
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
        Hey {props.user.name}! Set the toggle {switchText}
      </div>
      <div className="create-button">
        <Button
          onClick={() => props.generateRecipe(recipeRestrictions, props.user.id)}
          variant="outline-dark"
        >
          Create Recipe
        </Button>
      </div>
    </Container>
  );
}

export default RecipeGenerator;
