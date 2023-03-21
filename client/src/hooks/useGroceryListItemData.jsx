import { useState, useEffect } from "react";
import axios from "axios";
import Userfront from "@userfront/react";


export default function useRecipeData() {
  const [groceryItems, setGroceryItems] = useState([]);
  const [currentGroceryItem, setCurrentGroceryItem] = useState({
    name: "",
    quantity: "",
  });

  const options = {
    headers: { 
      Accept: "*/*",
      Authorization: `Bearer ${Userfront.tokens.accessToken}`
    }
  };

  useEffect(() => {
    axios
      .get("https://api.userfront.com/v0/self", options)
      .then(response => axios.get(`/api/groceryItems/${response.data.userId}`))
      .then((response) => {
        setGroceryItems(response.data.foodItems);
        setCurrentGroceryItem(response.data.foodItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return { groceryItems, currentGroceryItem, setGroceryItems };
}


