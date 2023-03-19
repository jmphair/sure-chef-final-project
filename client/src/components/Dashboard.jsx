import { useState } from 'react'
import MyKitchen from './MyKitchen'
import GroceryList from './GroceryList'
import Recipe from './Recipe'
import './Dashboard.css'

const Dashboard = (props) => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  function handleSectionClick(sectionName) {
    setActiveSection(sectionName);
  }

  const sayHello = (user) => {
    return `Hello, ${user}. Whatcha' making?`
  }

  return (
    <main>
      {activeSection === "Dashboard" && <div className='button-container'>
        { sayHello(props.user) }
        <button onClick={() => handleSectionClick("mykitchen")}>My Kitchen</button>
        <button onClick={() => handleSectionClick("groceryList")}>My Grocery List</button>
        <button onClick={() => handleSectionClick("recipe")}>My Recipes</button>
      </div>}
      {activeSection === "mykitchen" && <MyKitchen />}
      {activeSection === "groceryList" && <GroceryList />}
      {activeSection === "recipe" && <Recipe />}
    </main>
  );
}

export default Dashboard;