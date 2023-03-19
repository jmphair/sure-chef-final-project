import GroceryItem from "./GroceryItem";
import { Container, CardGroup } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

const GroceryItemList = () => {
  const [items, setItems] = useState({ingredients: []})

  useEffect(() => {
      axios.get("http://localhost:8080/foodItems/groceryList")
        .then(res => {
          const ingredients = res.data.foodItems
          console.log(ingredients)
          setItems((prev) => ({
            ...prev,
            ingredients: ingredients
          }))
        })
      console.log(items)
  }, []) //issue deep equal?

  const groceryItems = items.ingredients.map(item => {
    console.log(item)
    return (<GroceryItem name={item.name} quantity={item.quantity} />)
  })
  
  return (
    <Container>
      {console.log('hey')}
      <div>Grocery item list:</div>
      <CardGroup>
        {groceryItems}
      </CardGroup>
    </Container>
  );
};

export default GroceryItemList;
