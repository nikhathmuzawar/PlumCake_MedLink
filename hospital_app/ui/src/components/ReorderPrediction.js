import React, { useState } from "react";
import { predictReorder } from "../api";

const ReorderPrediction = () => {
  const [itemName, setItemName] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handlePredict = (e) => {
    e.preventDefault();
    predictReorder({ Item_Name: itemName })
      .then((response) => setPrediction(response.data.Reorder_Days))
      .catch((error) => console.error("Error predicting reorder:", error));
  };

  return (
    <div>
      <h3>Predict Reorder Days</h3>
      <form onSubmit={handlePredict}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <button type="submit">Predict</button>
      </form>
      {prediction !== null && (
        <p>Reorder Days: {prediction.toFixed(1)}</p>
      )}
    </div>
  );
};

export default ReorderPrediction;
