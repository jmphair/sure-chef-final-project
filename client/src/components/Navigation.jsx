import { useState } from "react";
import {
  Button,
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Card,
  CardGroup,
} from "react-bootstrap";
import Logout from "./Logout";
import LightSwitchButton from "./LightSwitchButton.jsx"
import './Navigation.css'

function Navigation(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (link) => {
    setOpen(false);
    props.onClick(link);
  };

  return (
    <Navbar expanded={open} bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand> SureChef</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={() => setOpen(true)}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton onClick={() => setOpen(false)}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              SureChef
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <LightSwitchButton />
              <Container>
                  <Button className='nav-button' onClick={() => handleClick("mykitchen")} variant="outline-dark">
                    My Kitchen
                  </Button>
                  <Button className='nav-button' onClick={() => handleClick("groceryList")} variant="outline-dark">
                    Grocery List
                  </Button>
                  <Button className='nav-button' onClick={() => handleClick("recipe")} variant="outline-dark">
                    Recipes
                  </Button>
                  <Button className='nav-button' onClick={() => handleClick("dashboard")} variant="outline-dark">
                    Dashboard
                  </Button>
                  <Button className='nav-button' onClick={() => handleClick("saverecipe")} variant="outline-dark">
                    TEMP Save Recipe
                  </Button>
                  <Button className='nav-button' onClick={() => handleClick("loadingrecipe")} variant="outline-dark">
                    TEMP Loading Recipe
                  </Button>
                </Container>
              <Container>
              <Logout />
              </Container>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
