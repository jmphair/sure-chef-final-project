import { useState } from "react";

import Form from "./Form";
import KitchenItemList from "./KitchenItemList";

const MyKitchen = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = (event) => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <KitchenItemList />
      {!showForm && <button onClick={handleAddItem}>Add Item</button>}
      {showForm && (
        <div className="kitchen-main">
          <Form />
          <button onClick={handleAddItem}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default MyKitchen;
