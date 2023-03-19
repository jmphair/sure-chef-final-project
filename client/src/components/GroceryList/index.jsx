import { useState } from 'react'
import GroceryForm from './GroceryForm'
import GroceryItemList from './GroceryItemList'
import { Button } from 'react-bootstrap';

const GroceryList = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <GroceryItemList />
        {!showForm && <Button onClick={handleAddItem}>Add Item</Button>}
        {showForm && (
          <div className='bg-light p-3 mt-3'>
            <GroceryForm />
            <Button variant='secondary' onClick={handleAddItem} className='mt-3'>Cancel</Button>
          </div>
        )}
    </div>
  );
};

export default GroceryList;
