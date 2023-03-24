import { useState } from "react";
import { Container, Button, CardGroup, Card, Modal } from "react-bootstrap";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
// import LoadingRecipe from "./Recipe/LoadingRecipe";
import SaveRecipe from "./Recipe/SaveRecipe";
import RandomRecipe from "./RandomRecipe"
import GoToTop from "./GoToTop";
import "./Dashboard.css";
import RobotChef from "./RobotChef";
import { welcomeMessage } from "../helpers/welcomeMessage";
import { getCounts } from "../helpers/getCounts";

const Dashboard = (props) => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [show, setShow] = useState(false);
  const [myKitchenCount, setMyKitchenCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  const createRandomRecipe = () => {

  }

  return (
    <main>
      <Navigation onClick={handleSectionClick} />
      {activeSection === "dashboard" && (
        <Container className="my-3">
            {welcomeMessage(props.user.name)}
            <Card>
              {myKitchenCount}
              <Button onClick={() => handleSectionClick("mykitchen")} variant="outline-dark">
                My Kitchen
              </Button>
            </Card>
            <Card>
              <Button onClick={() => handleSectionClick("groceryList")} variant="outline-dark">
                My Grocery List
              </Button>
            </Card>
            <Card>
              <Button onClick={() => handleSectionClick("recipe")} variant="outline-dark">
                My Recipes
              </Button>
            </Card>
            <Card>
            <Button onClick={() => handleSectionClick("random")} variant="outline-dark">
                Surprise me
              </Button>
            </Card>

          <div className="veg-footer" style={{textAlign: "center" }}>
            <>🥬🧅🌶🍅</>
              <span className="potato"
                style={{ cursor: "pointer" }}
                variant="primary"
                onClick={handleShow}
              >
                🥔
              </span>
            <>🥕🥦🌽🍠</>
          </div>
          <div className="veg-footer" style={{textAlign: "center" }}>
            Special Thanks To Our Instructors At LHL
          </div>
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
      {activeSection === "mykitchen" && <MyKitchen user={props.user} handleSectionClick={handleSectionClick} setMyKitchenCount={setMyKitchenCount}/>}
      {activeSection === "groceryList" && <GroceryList user={props.user} />}
      {activeSection === "recipe" && <Recipe user={props.user} handleSectionClick={handleSectionClick}/>}
      {activeSection === "saverecipe" && <SaveRecipe user={props.user} handleSectionClick={handleSectionClick}/>}
      {activeSection === "random" && <RandomRecipe user={props.user} handleSectionClick={handleSectionClick} />}
      {/* {activeSection === "loadingrecipe" && <LoadingRecipe />} */}
      <GoToTop />
    </main>
  );
};

export default Dashboard;
