import { useState } from 'react'
import GroceryForm from './GroceryForm'
import GroceryItemList from './GroceryItemList'

const GroceryList = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <GroceryItemList />
        {!showForm && <button onClick={handleAddItem}>Add Item</button>}
        {showForm && (<div className='grocery-main'><GroceryForm /><button onClick={handleAddItem}>Cancel</button></div>)}
    </div>
  );
};

export default GroceryList;
