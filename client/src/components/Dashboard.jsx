import { useState } from "react";
import { Container, Button, CardGroup, Card, Modal } from "react-bootstrap";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
import SaveRecipe from "./Recipe/SaveRecipe";
import GoToTop from "./GoToTop";
import "./Dashboard.css";
import Potato from "./Potato";
import { welcomeMessage } from "../helpers/welcomeMessage";

const Dashboard = (props) => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  return (
    <main>
      <Navigation user={props.user} onClick={handleSectionClick} />
      {activeSection === "dashboard" && (
        <Container className="my-3">
          {welcomeMessage(props.user.name)}
          <Card>
            <Button
              onClick={() => handleSectionClick("mykitchen")}
              variant="outline-dark"
            >
              My Kitchen
            </Button>
          </Card>
          <Card>
            <Button
              onClick={() => handleSectionClick("groceryList")}
              variant="outline-dark"
            >
              My Grocery List
            </Button>
          </Card>
          <Card>
            <Button
              onClick={() => handleSectionClick("recipe")}
              variant="outline-dark"
            >
              My Recipes
            </Button>
          </Card>

          <div className="veg-footer1" style={{ textAlign: "center" }}>
            <>🥬🧅🌶🍅</>
            <span
              className="potato"
              style={{ cursor: "pointer" }}
              variant="primary"
              onClick={handleShow}
            >
              🥔
            </span>
            <>🥕🥦🌽🍠</>
          </div>
          <div className="veg-footer2" style={{ textAlign: "center" }}>
            Special Thanks To Our Instructors At LHL
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                You have clicked the potato of destiny, what may I reveal to
                you?
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Potato />
            </Modal.Body>
          </Modal>
        </Container>
      )}
      {activeSection === "mykitchen" && (
        <MyKitchen user={props.user} handleSectionClick={handleSectionClick} />
      )}
      {activeSection === "groceryList" && <GroceryList user={props.user} />}
      {activeSection === "recipe" && (
        <Recipe user={props.user} handleSectionClick={handleSectionClick} />
      )}
      {activeSection === "saverecipe" && (
        <SaveRecipe user={props.user} handleSectionClick={handleSectionClick} />
      )}
      <GoToTop />
    </main>
  );
};

export default Dashboard;
