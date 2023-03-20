import { useState, useEffect } from "react";
import axios from "axios";

export default function useFoodItemData() {
  const [foodItems, setFoodItems] = useState([]);
  const [currentFoodItem, setCurrentFoodItem] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    console.log("Fetching recipe data...");
    axios
      .get("http://localhost:8080/foodItems")
      .then((response) => {
        setFoodItems(response.data.foodItems);
        setCurrentFoodItem(response.data.foodItems[0]);
        console.log("Got the data:", response);
      })
      .catch((err) => console.error(err));
  }, []);

  return { foodItems, currentFoodItem };
}