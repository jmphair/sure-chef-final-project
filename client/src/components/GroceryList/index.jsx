import { useState } from 'react'
import GroceryForm from './GroceryForm'
import GroceryItemList from './GroceryItemList'
import { Button, Container } from 'react-bootstrap';

const GroceryList = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm)
  }

  return (
    <Container>
      <GroceryItemList />
        {!showForm && <Button onClick={handleAddItem}>Add Item</Button>}
        {showForm && (
          <div className='bg-light p-3 mt-3'>
            <GroceryForm user={props.user} />
            <Button variant='secondary' onClick={handleAddItem} className='mt-3'>Cancel</Button>
          </div>
        )}
    </Container>
  );
};

export default GroceryList;
