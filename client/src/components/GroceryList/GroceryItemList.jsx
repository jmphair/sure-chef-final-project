import GroceryItem from "./GroceryItem";
import { Container, CardGroup } from "react-bootstrap";

import { getGroceryItemsForUsers } from "../../helpers/selectors";
import useGroceryItemData from "../../hooks/useGroceryListItemData.jsx";

const GroceryItemList = () => {
  const { groceryItems, currentGroceryItem, setGroceryItems } =
    useGroceryItemData();

  const userGroceries =
    groceryItems.length > 0
      ? getGroceryItemsForUsers({ groceryItems }, 16)
      : [];

  const handleDelete = (id) => {
    setGroceryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const groceryItemList = userGroceries.map((groceryItem) => {
    return (
      <GroceryItem
        key={groceryItem.id}
        id={groceryItem.id}
        name={groceryItem.name}
        quantity={groceryItem.quantity}
        onDelete={handleDelete}
      />
    );
  });

  return (
    <Container className="my-3">
      <h3 className="my-3">Grocery item list:</h3>
      <CardGroup>{groceryItemList}</CardGroup>
    </Container>
  );
};

export default GroceryItemList;
