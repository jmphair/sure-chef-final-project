import { useState, useEffect } from "react";
import axios from "axios";

export default function useRecipeData() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [currentGroceryItem, setCurrentGroceryItem] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/foodItems/groceryItemList")
      .then((response) => {
        setGroceryItems(response.data.foodItems);
        setCurrentGroceryItem(response.data.foodItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return { groceryItems, currentGroceryItem, setGroceryItems };
}
