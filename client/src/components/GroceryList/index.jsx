import React from 'react'

import Form from './GroceryForm'
import GroceryItemList from './GroceryItemList'

const GroceryList = () => {
  return (
    <div>
      <GroceryItemList />
      <Form />
    </div>
  );
};

export default GroceryList;
