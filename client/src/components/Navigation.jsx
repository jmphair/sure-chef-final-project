import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Logout from './Logout';

function Navigation(props) {
  
  // const navigateToDashboard = () => {
  //   window.location.href = '/dashboard';
  // }

  return (
    <Navbar bg="light" expand={false} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#">SureChef</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">SureChef</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Button onClick={() => props.onClick("mykitchen")}>My Kitchen</Button>
              <Button onClick={() => props.onClick("groceryList")}>Grocery List</Button>
              <Button onClick={() => props.onClick("recipe")}>Recipes</Button>
              {/* <Button onClick={navigateToDashboard}>Dashboard</Button> */}
              <Logout />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;

