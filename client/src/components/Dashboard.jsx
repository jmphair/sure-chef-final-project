import { useState, createContext } from "react";
import { Container, Button, Form, Card, Modal } from "react-bootstrap";
import potatoDance from "../assets/potatoDance.gif";
import kitchen from "../assets/kitchen.png";
import recipe from "../assets/recipe.png";
import grocery from "../assets/grocery.png";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
import SaveRecipe from "./Recipe/SaveRecipe";
import GoToTop from "./GoToTop";
import "./Dashboard.css";
import Potato from "./Potato";
import { welcomeMessage } from "../helpers/welcomeMessage";
import RandomRecipe from "./RandomRecipe";
// import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

const Dashboard = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light")

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

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className="App" id={theme}>
        <Navigation
          user={props.user}
          onClick={handleSectionClick}
          theme={theme}
        />
        {activeSection === "dashboard" && (
          <Container className="dashboard">
            <div className="greeting">{welcomeMessage(props.user.name)}</div>
            <div className="dark-mode-toggle">
              {/* <div>
                <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
                <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
              </div> */}
              <Form>
                <Form.Check
                  type="switch"
                  onChange={toggleTheme}
                  checked={theme === "dark"}
                />
              </Form>
              <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
            </div>
            <div className="random-recipe">
              <RandomRecipe user={props.user} />
            </div>
            <Card className="dash-card">
              <Card.Img src={kitchen} alt="Card image" />
              <Card.ImgOverlay>
                <div
                  className="dash-div"
                  onClick={() => handleSectionClick("mykitchen")}
                >
                  My Kitchen
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="dash-card">
              <Card.Img src={grocery} alt="Card image" />
              <Card.ImgOverlay>
                <div
                  className="dash-div"
                  onClick={() => handleSectionClick("groceryList")}
                >
                  My Grocery List
                </div>
              </Card.ImgOverlay>
            </Card>
            <Card className="dash-card">
              <Card.Img src={recipe} alt="Card image" />
              <Card.ImgOverlay>
                <div
                  className="dash-div"
                  onClick={() => handleSectionClick("recipe")}
                >
                  My Recipes
                </div>
              </Card.ImgOverlay>
            </Card>
            <div className="veg-footer1">
              <hr className="solid-dash" />
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
              <p className="thanks">
                Special thanks to our instructors, mentors, and coordinators at
                LHL!
              </p>
            </div>
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>
                  You have clicked the super secret potato of destiny, what may
                  I reveal to you?
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Potato />
              </Modal.Body>
            </Modal>
          </Container>
        )}
        {activeSection === "mykitchen" && (
          <MyKitchen
            user={props.user}
            handleSectionClick={handleSectionClick}
          />
        )}
        {activeSection === "groceryList" && <GroceryList user={props.user} />}
        {activeSection === "recipe" && (
          <Recipe user={props.user} handleSectionClick={handleSectionClick} />
        )}
        {activeSection === "saverecipe" && (
          <SaveRecipe
            user={props.user}
            handleSectionClick={handleSectionClick}
          />
        )}
        <GoToTop />
      </main>
    </ThemeContext.Provider>
  );
};

export default Dashboard;
