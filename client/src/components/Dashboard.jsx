import { useState } from "react";
import { Container, Button, CardGroup, Card, Modal } from "react-bootstrap";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
// import LoadingRecipe from "./Recipe/LoadingRecipe";
import SaveRecipe from "./Recipe/SaveRecipe";
import GoToTop from "./GoToTop";
import "./Dashboard.css";
import RobotChef from "./RobotChef";
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
      <Navigation onClick={handleSectionClick} />
      {activeSection === "dashboard" && (
        <Container className="my-3">
          <CardGroup>
            {welcomeMessage(props.user.name)}
            <Card>
              <Button onClick={() => handleSectionClick("mykitchen")}>
                My Kitchen
              </Button>
            </Card>
            <Card>
              <Button onClick={() => handleSectionClick("groceryList")}>
                My Grocery List
              </Button>
            </Card>
            <Card>
              <Button onClick={() => handleSectionClick("recipe")}>
                My Recipes
              </Button>
            </Card>
          </CardGroup>
          <span
            style={{ cursor: "pointer" }}
            variant="primary"
            onClick={handleShow}
          >
            🥔
          </span>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Oh heyyyyy, ask me anything!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <RobotChef />
            </Modal.Body>
          </Modal>
        </Container>
      )}
      {activeSection === "mykitchen" && <MyKitchen user={props.user} handleSectionClick={handleSectionClick} />}
      {activeSection === "groceryList" && <GroceryList user={props.user} />}
      {activeSection === "recipe" && <Recipe user={props.user} handleSectionClick={handleSectionClick}/>}
      {activeSection === "saverecipe" && <SaveRecipe user={props.user} handleSectionClick={handleSectionClick}/>}
      {/* {activeSection === "loadingrecipe" && <LoadingRecipe />} */}
      <GoToTop />
    </main>
  );
};

export default Dashboard;
