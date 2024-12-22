import React, { useState } from "react";
import { updateStock } from "../api";

const UpdateStockForm = () => {
  const [itemName, setItemName] = useState("");
  const [currentStock, setCurrentStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStock({ Item_Name: itemName, Current_Stock: parseInt(currentStock, 10) })
      .then(() => alert("Stock updated successfully!"))
      .catch((error) => console.error("Error updating stock:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Stock</h3>
      <div>
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div>
        <label>New Stock:</label>
        <input
          type="number"
          value={currentStock}
          onChange={(e) => setCurrentStock(e.target.value)}
        />
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateStockForm;
