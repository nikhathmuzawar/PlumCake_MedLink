// components/Patients.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Patients = () => {
  const [activeTab, setActiveTab] = useState('inpatient');

  // Sample patient data
  const inpatients = [
    { id: 1, name: "John Smith", age: 45, room: "201", admissionDate: "2024-12-15", doctor: "Dr. Mary Johnson", diagnosis: "Pneumonia" },
    { id: 2, name: "Sarah Davis", age: 62, room: "105", admissionDate: "2024-12-18", doctor: "Dr. James Brown", diagnosis: "Post-surgery care" },
    { id: 3, name: "Michael Chen", age: 35, room: "304", admissionDate: "2024-12-19", doctor: "Dr. Lisa Davis", diagnosis: "Diabetic complications" },
    { id: 4, name: "Emma Wilson", age: 28, room: "202", admissionDate: "2024-12-20", doctor: "Dr. Mary Johnson", diagnosis: "Severe asthma" },
  ];

  const outpatients = [
    { id: 5, name: "Robert Taylor", age: 52, lastVisit: "2024-12-10", nextVisit: "2024-12-24", doctor: "Dr. James Brown", condition: "Hypertension" },
    { id: 6, name: "Linda Anderson", age: 41, lastVisit: "2024-12-15", nextVisit: "2024-12-29", doctor: "Dr. Lisa Davis", condition: "Arthritis" },
    { id: 7, name: "David Miller", age: 33, lastVisit: "2024-12-18", nextVisit: "2024-12-25", doctor: "Dr. Mary Johnson", condition: "Regular checkup" },
    { id: 8, name: "Susan White", age: 55, lastVisit: "2024-12-19", nextVisit: "2024-12-26", doctor: "Dr. James Brown", condition: "Diabetes follow-up" },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>Patient Management</h1>
          <div className="header-right">
            <button className="notification-btn">Notifications</button>
            <div className="user-avatar"></div>
          </div>
        </header>

        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'inpatient' ? 'active' : ''}`}
            onClick={() => setActiveTab('inpatient')}
          >
            Inpatients
          </button>
          <button 
            className={`tab-button ${activeTab === 'outpatient' ? 'active' : ''}`}
            onClick={() => setActiveTab('outpatient')}
          >
            Outpatients
          </button>
        </div>

        <div className="patient-list">
          {activeTab === 'inpatient' ? (
            <>
              <h2>Inpatient List</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Room</th>
                      <th>Admission Date</th>
                      <th>Doctor</th>
                      <th>Diagnosis</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inpatients.map(patient => (
                      <tr key={patient.id}>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.room}</td>
                        <td>{patient.admissionDate}</td>
                        <td>{patient.doctor}</td>
                        <td>{patient.diagnosis}</td>
                        <td>
                          <button className="action-button">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <h2>Outpatient List</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Last Visit</th>
                      <th>Next Visit</th>
                      <th>Doctor</th>
                      <th>Condition</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outpatients.map(patient => (
                      <tr key={patient.id}>
                        <td>{patient.name}</td>
                        <td>{patient.age}</td>
                        <td>{patient.lastVisit}</td>
                        <td>{patient.nextVisit}</td>
                        <td>{patient.doctor}</td>
                        <td>{patient.condition}</td>
                        <td>
                          <button className="action-button">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Patients;