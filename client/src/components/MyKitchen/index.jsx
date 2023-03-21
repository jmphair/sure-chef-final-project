import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import RecipeGenerator from "../RecipeGenerator";
import KitchenForm from "./KitchenForm";
import KitchenItemList from "./KitchenItemList";
import useKitchenListItemData from "../../hooks/useKitchenListItemData";
import { getKitchenItemsForUsers } from "../../helpers/selectors";

const MyKitchen = (props) => {
  const [showForm, setShowForm] = useState(false);
  const { kitchenItems, setKitchenItems } = useKitchenListItemData();

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  const handleSelectAll = (event) => {
    /* Implement here */
  };

  const userKitchenItems =
    kitchenItems.length > 0
      ? getKitchenItemsForUsers({ kitchenItems }, 16)
      : [];

  /* function used in KitchenItem component to update the state after an item is deleted  */
  const handleDelete = (id) => {
    setKitchenItems((prev) => prev.filter((item) => item.id !== id));
  };

  /* function used in Form component to update the state after an item is added  */
  const showOnAdd = (newItem) => {
    setKitchenItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <Container>
      <KitchenItemList
        onDelete={handleDelete}
        userKitchenItems={userKitchenItems}
        handleAddItem={handleAddItem}
      />
      {!showForm && (
        <>
          <Button variant="primary" onClick={handleAddItem}>
            Add Item
          </Button>
          <Button variant="primary" onClick={handleSelectAll}>
            Select All
          </Button>
          <RecipeGenerator />
        </>
      )}
      {showForm && (
        <div className="kitchen-main">
          <KitchenForm
            user={props.user}
            showOnAdd={showOnAdd}
            handleAddItem={handleAddItem}
          />
          <Button variant="danger" onClick={handleAddItem}>
            Cancel
          </Button>
        </div>
      )}
    </Container>
  );
};

export default MyKitchen;
