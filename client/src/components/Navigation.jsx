import { useState } from "react";
import { Button, Nav, Navbar, Offcanvas, Image } from "react-bootstrap";
import Logout from "./Logout";
import "./Navigation.css";
import littleRobot from "../assets/littleRobot.gif";

function Navigation(props) {
  const [open, setOpen] = useState(false);

  const handleClick = (link) => {
    setOpen(false);
    props.onClick(link);
  };

  return (
    <Navbar
      expanded={open}
      expand={false}
      className="nav-header"
      id={props.theme}
    >
      <div className="navbar-brand nav-title" id={props.theme}>
        <strong>SureChef</strong>
      </div>
      <Navbar.Toggle
        id={props.theme}
        aria-controls="offcanvasNavbar"
        onClick={() => setOpen(true)}
      />
      <Navbar.Offcanvas
        id={props.theme}
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
      >
        <Offcanvas.Header
          className="close-button"
          closeButton
          onClick={() => setOpen(false)}
        >
          <Offcanvas.Title className="nav-title">
            <strong>SureChef</strong>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav id={props.theme} className="justify-content-end">
            <section id={props.theme} className="button-list">
              <Button
                className="nav-button"
                onClick={() => handleClick("groceryList")}
                variant="outline-dark"
              >
                Grocery List
              </Button>
              <Button
                className="nav-button"
                onClick={() => handleClick("mykitchen")}
                variant="outline-dark"
              >
                My Kitchen
              </Button>
              <Button
                className="nav-button"
                onClick={() => handleClick("recipe")}
                variant="outline-dark"
              >
                Recipes
              </Button>
              <Button
                className="nav-button"
                onClick={() => handleClick("saverecipe")}
                variant="outline-dark"
              >
                Pending Recipes
              </Button>
              <Button
                className="nav-button"
                onClick={() => handleClick("dashboard")}
                variant="outline-dark"
              >
                Dashboard
              </Button>
              {/* <Button className='nav-button' onClick={() => handleClick("loadingrecipe")} variant="outline-dark">
                  TEMP Loading Recipe
                </Button> */}
            </section>
          </Nav>
        </Offcanvas.Body>
        <div className="logout-container" id={props.theme}>
          <hr className="solid-nav" />
          <div className="nav-user" id={props.theme}>
            Logged in as <strong>{props.user.name}</strong>
          </div>
          <Image src={littleRobot} alt="Robot Gif" className="w-50" />
          <Logout />
        </div>
      </Navbar.Offcanvas>
    </Navbar>
  );
}

export default Navigation;
