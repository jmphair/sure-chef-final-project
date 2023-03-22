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
        groceryListId={groceryItem.grocery_id}
        kitchenListId={groceryItem.kitchen_id}
        user={props.user}
        handleShowDelete={props.handleShowDelete}
        showOnEdit={props.showOnEdit}
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
