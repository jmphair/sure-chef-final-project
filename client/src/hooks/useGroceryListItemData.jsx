import { useState, useEffect } from "react";
import axios from "axios";

export default function useRecipeData() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [currentGroceryItem, setCurrentGroceryItem] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    console.log("Fetching recipe data...");
    axios
      .get("http://localhost:8080/foodItems/groceryList")
      .then((response) => {
        setGroceryItems(response.data.groceryItems);
        setCurrentGroceryItem(response.data.groceryItems[0]);
        console.log("Got the data:", response);
      })
      .catch((err) => console.error(err));
  }, []);

  return { groceryItems, currentGroceryItem };
}