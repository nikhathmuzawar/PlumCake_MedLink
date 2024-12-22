import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000", // Flask backend URL
});

export const fetchDashboardData = () => API.get("/");
export const updateStock = (payload) => API.post("/update_stock", payload);
export const predictReorder = (payload) => API.post("/predict_reorder", payload);
