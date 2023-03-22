import { useState, useEffect } from "react";
import axios from "axios";
import Userfront from "@userfront/react";

export default function useKitchenListItemData() {
  const [kitchenItems, setKitchenItems] = useState([]);
  const [currentKitchenItem, setCurrentKitchenItem] = useState({
    name: "",
    quantity: "",
  });

  const options = {
    headers: {
      Accept: "*/*",
      Authorization: `Bearer ${Userfront.tokens.accessToken}`,
    },
  };

  useEffect(() => {
    axios
      .get("https://api.userfront.com/v0/self", options)
      .then((response) =>
        axios.get(`/api/kitchenItems/${response.data.userId}`)
      )
      .then((response) => {
        setKitchenItems(response.data.foodItems);
        setCurrentKitchenItem(response.data.foodItems[0]);
      })
      .catch((err) => console.error(err));
  }, []);

  return {
    kitchenItems,
    currentKitchenItem,
    setKitchenItems,
    setCurrentKitchenItem,
  };
}
