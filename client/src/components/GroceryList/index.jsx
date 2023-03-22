import { useState, useEffect } from "react";
import GroceryItemList from "./GroceryItemList";
import { Button, Container } from "react-bootstrap";
import useGroceryItemData from "../../hooks/useGroceryListItemData.jsx";
import { getGroceryItemsForUsers } from "../../helpers/selectors";

const GroceryList = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { groceryItems, currentGroceryItem, setGroceryItems } =
    useGroceryItemData();

  const userGroceries =
    groceryItems.length > 0
      ? getGroceryItemsForUsers({ groceryItems }, props.user.id)
      : [];

  /* function used in GroceryItem component to update the state after an item is deleted  */
  const handleShowDelete = (id) => {
    setGroceryItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* function used in Form component to update the state after an item is added  */
  const showOnAdd = (newItem) => {
    setGroceryItems((prevItems) => [...prevItems, newItem]);
  };

  /* function used in EditForm component to update the state after an item is edited  */
  const showOnEdit = (editedItem) => {
    const updatedItems = groceryItems.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setGroceryItems(updatedItems);
  };

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  return (
    <Container>
      <GroceryItemList
        userGroceries={userGroceries}
        handleShowDelete={handleShowDelete}
        user={props.user}
        showOnEdit={showOnEdit}
        showForm={showForm}
        handleAddItem={handleAddItem}
        showOnAdd={showOnAdd}
      />
    </Container>
  );
};

export default GroceryList;
