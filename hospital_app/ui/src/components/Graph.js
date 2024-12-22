import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const Graph = ({ data }) => (
  <div>
    <h3>Stock Levels by Category</h3>
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Current_Stock" fill="#8884d8" />
      <Bar dataKey="Safety_Stock" fill="#82ca9d" />
    </BarChart>
  </div>
);

export default Graph;
