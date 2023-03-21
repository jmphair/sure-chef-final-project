import { useState } from "react";
import { Container, Button, CardGroup, Card } from "react-bootstrap";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
import "./Dashboard.css";
import RobotChef from "./RobotChef";
import { welcomeMessage } from "../helpers/welcomeMessage"


const Dashboard = (props) => {
  const [activeSection, setActiveSection] = useState("dashboard");

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
        </Container>
      )}
      {activeSection === "mykitchen" && <MyKitchen user={props.user} />}
      {activeSection === "groceryList" && <GroceryList user={props.user} />}
      {activeSection === "recipe" && <Recipe />}
      <>🥔<RobotChef /></>
    </main>
  );
};

export default Dashboard;
