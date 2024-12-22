// components/Consultations.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';

const Consultations = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Sample doctors data
  const doctors = [
    { id: 1, name: "Dr. Mary Johnson", specialty: "General Medicine" },
    { id: 2, name: "Dr. James Brown", specialty: "Cardiology" },
    { id: 3, name: "Dr. Lisa Davis", specialty: "Pediatrics" },
  ];

  // Sample appointments data
  const appointments = {
    "Dr. Mary Johnson": [
      { id: 1, time: "09:00 AM", patient: "John Smith", type: "Follow-up" },
      { id: 2, time: "10:30 AM", patient: "Emma Wilson", type: "New Consultation" },
      { id: 3, time: "02:00 PM", patient: "David Miller", type: "Regular Checkup" },
    ],
    "Dr. James Brown": [
      { id: 4, time: "09:30 AM", patient: "Robert Taylor", type: "Follow-up" },
      { id: 5, time: "11:00 AM", patient: "Susan White", type: "Regular Checkup" },
    ],
    "Dr. Lisa Davis": [
      { id: 6, time: "10:00 AM", patient: "Michael Chen", type: "New Consultation" },
      { id: 7, time: "01:30 PM", patient: "Linda Anderson", type: "Follow-up" },
    ],
  };

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>Consultations Schedule</h1>
          <div className="header-right">
            <button className="notification-btn">Notifications</button>
            <div className="user-avatar"></div>
          </div>
        </header>

        <div className="consultations-container">
          <div className="doctors-list">
            <h2>Doctors</h2>
            {doctors.map(doctor => (
              <div
                key={doctor.id}
                className={`doctor-card ${selectedDoctor === doctor.name ? 'selected' : ''}`}
                onClick={() => setSelectedDoctor(doctor.name)}
              >
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
              </div>
            ))}
          </div>

          <div className="appointments-view">
            {selectedDoctor ? (
              <>
                <h2>Appointments for {selectedDoctor}</h2>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Time</th>
                        <th>Patient</th>
                        <th>Type</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments[selectedDoctor].map(appointment => (
                        <tr key={appointment.id}>
                          <td>{appointment.time}</td>
                          <td>{appointment.patient}</td>
                          <td>{appointment.type}</td>
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
              <div className="no-selection">
                <p>Select a doctor to view their appointments</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultations;