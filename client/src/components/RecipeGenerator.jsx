import { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import "./RecipeGenerator.css";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false);
  const [switchText, setSwitchText] = useState(
    'to the "off" position to include only the ingredients you select in your recipe!'
  );
  const [recipeRestrictions, setRecipeRestrictions] = useState("strict");

  const handleChange = (e) => {
    if (switchState === false) {
      setSwitchState(true);
      setSwitchText(
        'to the "on" position to include the ingredients you select, as well as my suggestions!'
      );
      setRecipeRestrictions("flexible");
    }

    if (switchState === true) {
      setSwitchState(false);
      setSwitchText(
        'to the "off" position to include only the ingredients you select in your recipe!'
      );
      setRecipeRestrictions("strict");
    }
  };

  return (
    <Container>
      <div className='toggle-strict'>
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
      </div>
      <div className="create-button">
        <Button
          onClick={() =>
            props.generateRecipe(recipeRestrictions, props.user.id)
          }
          variant="outline-dark"
          className="button"
          >
          Create Recipe
        </Button>
        <Button
            className="button"
            variant="outline-dark"
            onClick={props.handleAddItem}
          >
            Add New Item
          </Button>
      </div>
    </Container>
  );
}

export default RecipeGenerator;
