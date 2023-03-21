import GroceryItem from "./GroceryItem";
import { Container, CardGroup } from "react-bootstrap";

const GroceryItemList = (props) => {
  const groceryItemList = props.userGroceries.map((groceryItem) => {
    return (
      <GroceryItem
        key={groceryItem.id}
        id={groceryItem.id}
        name={groceryItem.name}
        quantity={groceryItem.quantity}
        groceryListId={1}
        kitchenListId={1}
        handleShowDelete={props.handleShowDelete}
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
