import { useState, useEffect } from "react";
import axios from "axios";

export default function useKitchenListItemData() {
  const [kitchenItems, setKitchenItems] = useState([]);
  const [currentKitchenItem, setCurrentKitchenItem] = useState({
    name: "",
    quantity: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/kitchenItems")
      .then((response) => {
        setKitchenItems(response.data.foodItems);
        setCurrentKitchenItem(response.data.foodItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return { kitchenItems, currentKitchenItem, setKitchenItems };
}
