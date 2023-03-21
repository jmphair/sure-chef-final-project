import { useState } from "react";
import { Container, Button, CardGroup, Card } from "react-bootstrap";

import Navigation from "./Navigation";
import MyKitchen from "./MyKitchen";
import GroceryList from "./GroceryList";
import Recipe from "./Recipe";
import "./Dashboard.css";
import RobotChef from "./RobotChef";

const Dashboard = (props) => {
  const [activeSection, setActiveSection] = useState("dashboard");

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  const sayHello = (user) => {
    return `Hello, ${user.name}. Whatcha' making?`;
  };

  return (
    <main>
      <Navigation onClick={handleSectionClick} />
      {activeSection === "dashboard" && (
        <Container className="my-3">
          <CardGroup>
            {sayHello(props.user)}
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
