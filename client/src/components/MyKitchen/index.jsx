import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";

// import RecipeGenerator from "../RecipeGenerator";
import KitchenItemList from "./KitchenItemList";
import useKitchenListItemData from "../../hooks/useKitchenListItemData";
import { getKitchenItemsForUsers } from "../../helpers/selectors";

const MyKitchen = (props) => {
  const [showForm, setShowForm] = useState(false);
  const {
    kitchenItems,
    setKitchenItems,
    currentKitchenItem,
    setCurrentKitchenItem,
  } = useKitchenListItemData();

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  const handleSelectAll = (event) => {
    /* Implement here */
  };

  const userKitchenItems =
    kitchenItems.length > 0
      ? getKitchenItemsForUsers({ kitchenItems }, props.user.id)
      : [];

  /* function used in KitchenItem component to update the state after an item is deleted  */
  const handleDelete = (id) => {
    setKitchenItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* function used in Form component to update the state after an item is added  */
  const showOnAdd = (newItem) => {
    setKitchenItems((prevItems) => [...prevItems, newItem]);
  };

  /* function used in EditForm component to update the state after an item is edited  */
  const showOnEdit = (editedItem) => {
    const updatedItems = kitchenItems.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    setKitchenItems(updatedItems);
  };

  return (
    <Container>
      <KitchenItemList
        onDelete={handleDelete}
        handleAddItem={handleAddItem}
        userKitchenItems={userKitchenItems}
        showOnEdit={showOnEdit}
        user={props.user}
        showForm={showForm}
        showOnAdd={showOnAdd}
        handleSectionClick={props.handleSectionClick}
      />
    </Container>
  );
};

export default MyKitchen;
