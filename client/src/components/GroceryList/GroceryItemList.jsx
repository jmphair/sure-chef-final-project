import GroceryItem from "./GroceryItem";
import { Container, CardGroup, Accordion } from "react-bootstrap";

const GroceryItemList = (props) => {

  const groceryItemsSort = (storageLocation) => {
    const groceryItemList = props.userGroceries.map((groceryItem) => {
      if(storageLocation === groceryItem.storage_location) {
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
          />
        );
      }
    });
    return groceryItemList;
  }

  return (
    <Container className="my-3">
      <h3 className="my-3">Grocery Item List:</h3>
      <Accordion>
      <Accordion.Item eventKey="0">
          <Accordion.Header>Refrigerator</Accordion.Header>
          <Accordion.Body>
            {groceryItemsSort('Refrigerator')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Freezer</Accordion.Header>
          <Accordion.Body>
            {groceryItemsSort('Freezer')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Pantry</Accordion.Header>
          <Accordion.Body>
            {groceryItemsSort('Pantry')}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Other</Accordion.Header>
          <Accordion.Body>
            {groceryItemsSort(null)}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default GroceryItemList;
