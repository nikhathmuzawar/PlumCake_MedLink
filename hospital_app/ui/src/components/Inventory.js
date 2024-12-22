import React, { useEffect, useState } from "react";
import Graph from "./Graph";
import UpdateStockForm from "./UpdateStockForm";
import ReorderPrediction from "./ReorderPrediction";
import { fetchDashboardData } from "../api";

const Dashboard = () => {
  const [graphData, setGraphData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    fetchDashboardData()
      .then((response) => {
        setGraphData(response.data.category_summary);
        setAlerts(response.data.alerts);
      })
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 2, padding: "10px" }}>
        <Graph data={graphData} />
      </div>
      <div style={{ flex: 1, padding: "10px" }}>
        <h3>Alerts</h3>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              {alert.Item_Name}: {alert.Reorder_Days.toFixed(1)} days until reorder
            </li>
          ))}
        </ul>
        <UpdateStockForm />
        <ReorderPrediction />
      </div>
    </div>
  );
};

export default Dashboard;
