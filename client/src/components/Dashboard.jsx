import MyKitchen from './MyKitchen'
import GroceryList from './GroceryList'
import Recipe from './Recipe'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <main className='page'>
      <p>Dashboard</p>
      <MyKitchen />
      <GroceryList />
      <Recipe />
    </main>
  )
}

export default Dashboard