import { useState } from "react";
import { Container, Button, CardGroup, Card, Modal } from "react-bootstrap";
import potatoDance from "../assets/potatoDance.gif";

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
  const [showPopup, setShowPopup] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePopupClick = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupLeave = () => {
    setShowPopup(false);
  };

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  return (
    <main>
      <Navigation user={props.user} onClick={handleSectionClick} />
      {activeSection === "dashboard" && (
        <Container className="my-3">
          {welcomeMessage(props.user.name)}
          <Card className="dash-card">
            <div
              className="dash-div"
              onClick={() => handleSectionClick("mykitchen")}
            >
              My Kitchen
            </div>
          </Card>
          <Card className="dash-card">
            <div
              className="dash-div"
              onClick={() => handleSectionClick("mykitchen")}
            >
              My Grocery List
            </div>
          </Card>
          <Card className="dash-card">
            <div
              className="dash-div"
              onClick={() => handleSectionClick("mykitchen")}
            >
              My Recipes
            </div>
          </Card>

          <div className="veg-footer1" style={{ textAlign: "center" }}>
            <hr className="solid" />
            <>🥬🧅🌶🍅</>
            <span
              className="potato"
              style={{
                cursor: "pointer",
                display: showPopup ? "none" : "inline-block",
              }}
              variant="primary"
              onClick={handlePopupClick}
            >
              🥔
            </span>
            {showPopup && (
              <div className="popup" onMouseLeave={handlePopupLeave}>
                <img
                  src={potatoDance}
                  alt="Potato"
                  onClick={handleShow}
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
            <>🥕🥦🌽🍠</>
          </div>
          <div className="veg-footer2" style={{ textAlign: "center" }}>
            Special Thanks To Our Instructors At LHL
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                You have clicked the super secret potato of destiny, what may I
                reveal to you?
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
