import {useState} from 'react'
import { Container, Button, Form } from "react-bootstrap";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false)
  const [switchText, setSwitchText] = useState('Only use your ingredients')
  const [recipeRestrictions, setRecipeRestrictions] = useState('strict')

  const handleChange=(e)=>{

    if (switchState === false) {
      setSwitchState(true)
      setSwitchText('You can add extra ingredients')
      setRecipeRestrictions('flexible')
    }

    if (switchState === true) {
      setSwitchState(false)
      setSwitchText('Only use your ingredients')
      setRecipeRestrictions('strict')
    }
  }
     

  return (
    <Container style={{ textAlign: "center" }}>
      <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          label="Check this switch"
          defaultChecked={switchState}
          onChange={handleChange}
        />
        {switchText}
      </Form>
      <Button onClick={() => props.generateRecipe(recipeRestrictions)} variant="success" size="sm">
        Generate Recipe
      </Button>
    </Container>
  );
}

export default RecipeGenerator;
