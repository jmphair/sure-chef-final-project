import GroceryItem from "./GroceryItem";
import { Container, CardGroup } from "react-bootstrap";

import { getGroceryItemsForUsers } from "../../helpers/selectors";
import useGroceryItemData from "../../hooks/useGroceryListItemData.jsx"

const GroceryItemList = () => {
  const { groceryItems, currentGroceryItem } = useGroceryItemData();

  const userGroceries = groceryItems.length > 0 ? getGroceryItemsForUsers({ groceryItems }, 1) : [];

  const groceryItemList = userGroceries.map((groceryItem) => {
    return (
      <GroceryItem
        key={groceryItem.id}
        name={groceryItem.name}
        quantity={groceryItem.quantity}
      />
    );
  });

  return (
    <Container>
      <div>Grocery item list:</div>
      <CardGroup>
        {groceryItemList}
      </CardGroup>
    </Container>
  );
};

export default GroceryItemList;
