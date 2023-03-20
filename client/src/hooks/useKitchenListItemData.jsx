import { useState, useEffect } from "react";
import axios from "axios";

export default function useKitchenListItemData() {
  const [kitchenItems, setKitchenItems] = useState([]);
  const [currentKitchenItem, setCurrentKitchenItem] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    console.log("Fetching kitchen list item data...");
    axios
      .get("http://localhost:8080/foodItems/kitchenItemList")
      .then((response) => {
        setKitchenItems(response.data.foodItems);
        setCurrentKitchenItem(response.data.foodItems[0]);
        console.log("Got the kitchen list item data:", response);
      })
      .catch((err) => console.error(err));
  }, []);

  return { kitchenItems, currentKitchenItem };
}