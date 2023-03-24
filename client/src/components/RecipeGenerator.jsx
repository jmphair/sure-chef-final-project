import {useState} from 'react'
import { Container, Button, Form } from "react-bootstrap";

function RecipeGenerator(props) {
  const [switchState, setSwitchState] = useState(false)
  const [switchText, setSwitchText] = useState('"Only use the ingredients I select below!"')
  const [recipeRestrictions, setRecipeRestrictions] = useState('strict')

  const handleChange=(e)=>{

    if (switchState === false) {
      setSwitchState(true)
      setSwitchText('"Tell me what I could add!"')
      setRecipeRestrictions('flexible')
    }

    if (switchState === true) {
      setSwitchState(false)
      setSwitchText('"Only use the ingredients I select below!"')
      setRecipeRestrictions('strict')
    }
  }
     

  return (
    <Container>
      <>Ok {props.user.name}, what's the plan?</>
      <Form>
        <Form.Check 
          type="switch"
          id="custom-switch"
          defaultChecked={switchState}
          onChange={handleChange}
        />
        {switchText}
      </Form>
      <Button onClick={() => props.generateRecipe(recipeRestrictions)} variant="outline-dark">
        Create Recipe
      </Button>
    </Container>
  );
}

export default RecipeGenerator;
