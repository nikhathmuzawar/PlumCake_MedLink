// React Component for Graph and Table
import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import { Bar } from "react-chartjs-2";
import { useTable } from "react-table";

const InventoryDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the CSV file from the backend folder
    const fetchCSV = async () => {
      try {
        const response = await fetch("/backend/hospital_inventory_large.csv");
        const csvText = await response.text();
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      } catch (error) {
        console.error("Error fetching the CSV file:", error);
      }
    };

    fetchCSV();
  }, []);

  // Prepare data for the chart
  const chartData = {
    labels: data.map((item) => item.name), // Replace 'name' with the column name for item names in the CSV
    datasets: [
      {
        label: "Current Stock",
        data: data.map((item) => parseInt(item.current_stock, 10)), // Replace 'current_stock' with your column name
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  // Columns for the table
  const columns = React.useMemo(
    () =>
      data.length > 0
        ? Object.keys(data[0]).map((key) => ({
            Header: key,
            accessor: key,
          }))
        : [],
    [data]
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div>
      <h1>Hospital Inventory Dashboard</h1>

      {/* Graph */}
      {data.length > 0 && (
        <div style={{ width: "80%", margin: "0 auto" }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      )}

      {/* Table */}
      {data.length > 0 && (
        <table {...getTableProps()} style={{ width: "100%", marginTop: "20px" }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoryDashboard;
