import { useState } from 'react'
import { Container, ButtonGroup, Button } from 'react-bootstrap'

import Navigation from './Navigation'
import MyKitchen from './MyKitchen'
import GroceryList from './GroceryList'
import Recipe from './Recipe'
import './Dashboard.css'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  return (
    <main>
      <Navigation onClick={handleSectionClick} />
      {activeSection === "Dashboard" && <Container className='my-3'>
        <ButtonGroup>
          <Button onClick={() => handleSectionClick("mykitchen")}>My Kitchen</Button>
          <Button onClick={() => handleSectionClick("groceryList")}>My Grocery List</Button>
          <Button onClick={() => handleSectionClick("recipe")}>My Recipes</Button>
        </ButtonGroup>
      </Container>}
      {activeSection === "mykitchen" && <MyKitchen />}
      {activeSection === "groceryList" && <GroceryList />}
      {activeSection === "recipe" && <Recipe />}
    </main>
  );
}

export default Dashboard;
