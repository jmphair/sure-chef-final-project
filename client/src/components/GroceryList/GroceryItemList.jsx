import GroceryItem from "./GroceryItem";
import GroceryForm from "./GroceryForm";

import { Container, CardGroup, Accordion, Button } from "react-bootstrap";

const GroceryItemList = (props) => {
  const groceryItemsSort = (storageLocation) => {
    const groceryItemList = props.userGroceries
      .map((groceryItem) => {
        if (storageLocation === groceryItem.storage_location) {
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
        }
      })
      .reverse();
    return groceryItemList;
  };

  const count = props.userGroceries.length
  console.log(count)

  return (
    <Container className="my-3">
      <h3 className="heading">My Grocery List</h3>
      <h6 className="heading">Total Ingredients: {count}</h6>
      {props.showForm ? (
        <div className="kitchen-main">
          <GroceryForm
            userGroceries={props.userGroceries}
            user={props.user}
            showOnAdd={props.showOnAdd}
            handleAddItem={props.handleAddItem}
          />
        </div>
      ) : (
        <div>
          <Button variant="outline-dark" onClick={props.handleAddItem}>
            Add New Item
          </Button>
        </div>
      )}
      <Accordion alwaysOpen flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Refrigerator</Accordion.Header>
          <Accordion.Body>{groceryItemsSort("Refrigerator")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Freezer</Accordion.Header>
          <Accordion.Body>{groceryItemsSort("Freezer")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Pantry</Accordion.Header>
          <Accordion.Body>{groceryItemsSort("Pantry")}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Other</Accordion.Header>
          <Accordion.Body>{groceryItemsSort("Other")}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default GroceryItemList;
