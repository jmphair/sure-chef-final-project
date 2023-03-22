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

function Navigation(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (link) => {
    setOpen(false);
    props.onClick(link);
  };

  return (
    <Navbar expanded={open} bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">SureChef</Navbar.Brand>
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
              <CardGroup>
                <Card>
                  <Button onClick={() => handleClick("mykitchen")}>
                    My Kitchen
                  </Button>
                </Card>
                <Card>
                  <Button onClick={() => handleClick("groceryList")}>
                    Grocery List
                  </Button>
                </Card>
                <Card>
                  <Button onClick={() => handleClick("recipe")}>
                    Recipes
                  </Button>
                </Card>
                <Card>
                  <Button onClick={() => handleClick("dashboard")}>
                    Dashboard
                  </Button>
                </Card>
                <Card>
                  <Button onClick={() => handleClick("saverecipe")}>
                    TEMP Save Recipe
                  </Button>
                </Card>
                <Card>
                  <Button onClick={() => handleClick("loadingrecipe")}>
                    TEMP Loading Recipe
                  </Button>
                </Card>
              </CardGroup>
              <Logout />
              <LightSwitchButton />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;
