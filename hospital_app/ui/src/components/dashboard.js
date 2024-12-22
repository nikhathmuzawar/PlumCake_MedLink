// Dashboard.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Sidebar from './Sidebar';

const Dashboard = () => {
  // Sample data
  const inventoryData = [
    { name: 'Antibiotics', stock: 85, alert: 20 },
    { name: 'Painkillers', stock: 65, alert: 20 },
    { name: 'Oxygen', stock: 45, alert: 30 },
    { name: 'Syringes', stock: 90, alert: 20 },
    { name: 'Bandages', stock: 75, alert: 20 },
  ];

  const activeConsultations = [
    { id: 1, patient: "John Smith", doctor: "Dr. Mary Johnson", status: "In Progress", time: "10:30 AM" },
    { id: 2, patient: "Sarah Wilson", doctor: "Dr. James Brown", status: "Waiting", time: "11:00 AM" },
    { id: 3, patient: "Michael Chen", doctor: "Dr. Lisa Davis", status: "Completed", time: "09:45 AM" },
  ];

  const deliveries = [
    { id: 1, patient: "Emma Davis", status: "Out for Delivery", eta: "30 mins" },
    { id: 2, patient: "Robert Wilson", status: "Delivered", time: "10:15 AM" },
  ];

  // New bed occupancy data by ward/department
  const bedOccupancyData = [
    { ward: 'General Ward', occupied: 15, available: 5 },
    { ward: 'ICU', occupied: 8, available: 2 },
    { ward: 'Pediatric', occupied: 10, available: 10 },
    { ward: 'Emergency', occupied: 12, available: 3 },
    { ward: 'Surgery', occupied: 18, available: 7 }
  ];

  return (
    <div className="dashboard">
      {/* Navigation Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header className="header">
          <input type="text" placeholder="Search..." className="search-input" />
          <div className="header-right">
            <button className="notification-btn">Notifications</button>
            <div className="user-avatar"></div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="dashboard-grid">
          {/* Inventory Status */}
          <div className="card">
            <h2 className="card-title">Inventory Status</h2>
            <BarChart width={500} height={300} data={inventoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#3b82f6" name="Current Stock" />
              <Bar dataKey="alert" fill="#ef4444" name="Alert Level" />
            </BarChart>
          </div>

          {/* Active Consultations */}
          <div className="card">
            <h2 className="card-title">Active Consultations</h2>
            <div className="consultation-list">
              {activeConsultations.map(consultation => (
                <div key={consultation.id} className="consultation-item">
                  <div>
                    <div className="patient-name">{consultation.patient}</div>
                    <div className="doctor-name">{consultation.doctor}</div>
                  </div>
                  <div>
                    <div className={`status ${consultation.status.toLowerCase().replace(' ', '-')}`}>
                      {consultation.status}
                    </div>
                    <div className="time">{consultation.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Medicine Deliveries */}
          <div className="card">
            <h2 className="card-title">Medicine Deliveries</h2>
            <div className="delivery-list">
              {deliveries.map(delivery => (
                <div key={delivery.id} className="delivery-item">
                  <div>
                    <div className="patient-name">{delivery.patient}</div>
                    <div className="status">{delivery.status}</div>
                  </div>
                  <div className="time">
                    {delivery.eta || delivery.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bed Occupancy Chart */}
          <div className="card">
            <h2 className="card-title">Bed Occupancy by Ward</h2>
            <BarChart width={500} height={300} data={bedOccupancyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              
              <Bar dataKey="occupied" fill="#dc2626" name="Occupied Beds" />
              <Bar dataKey="available" fill="#16a34a" name="Available Beds" />
            </BarChart>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Dashboard;