import GroceryItem from "./GroceryItem";
import GroceryForm from "./GroceryForm";
import blueberries from "../../assets/blueberries.png";
import "./styles.css";

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

  const count = props.userGroceries.length;
  console.log(count);

  return (
    <>
      <img src={blueberries} className="blueberries" />
      <Container>
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
          <div className="add-button">
            <Button
              className="button"
              variant="outline-dark"
              onClick={props.handleAddItem}
              style={{ borderRadius: "20px" }}
            >
              Add New Item
            </Button>
          </div>
        )}
        <Accordion alwaysOpen flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Refrigerator</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{groceryItemsSort("Refrigerator")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Freezer</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{groceryItemsSort("Freezer")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pantry</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{groceryItemsSort("Pantry")}</div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Other</Accordion.Header>
            <Accordion.Body>
              <div className="a-body">{groceryItemsSort("Other")}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default GroceryItemList;
