import React from "react";
import { useState } from "react";
import "./styles.css";

const Form = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [storageLocation, setStorageLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <section>
      <form className="kitchen-main" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>
        <label>
          <p>Storage Location:</p>
          <select
            value={storageLocation}
            onChange={(event) => setStorageLocation(event.target.value)}
          >
            <option value="">Select a storage location</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Freezer">Freezer</option>
            <option value="Pantry">Pantry</option>
          </select>
        </label>
        <button type="submit">Add Item</button>
      </form>
    </section>
  );
};

export default Form;
