// Dashboard.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

  return (
    <div className="dashboard">
      {/* Navigation Sidebar */}
      <div className="sidebar">
        <div className="logo">MediTrack</div>
        <nav>
          <button className="nav-item">Dashboard</button>
          <button className="nav-item">Patients</button>
          <button className="nav-item">Consultations</button>
          <button className="nav-item">Inventory</button>
          <button className="nav-item">Bed Management</button>
          <button className="nav-item">Settings</button>
        </nav>
        <button className="logout-btn">Log Out</button>
      </div>

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
              <Bar dataKey="stock" fill="#3b82f6" />
              <Bar dataKey="alert" fill="#ef4444" />
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

          {/* Bed Occupancy */}
          <div className="card">
            <h2 className="card-title">Bed Occupancy</h2>
            <div className="bed-grid">
              {Array.from({length: 12}).map((_, i) => (
                <div
                  key={i}
                  className={`bed-item ${i < 8 ? 'occupied' : 'available'}`}
                >
                  <div className="bed-status">
                    {i < 8 ? 'Occupied' : 'Available'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;