// components/Sidebar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="logo">MediTrack</div>
      <nav>
        <button 
          className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={() => navigate('/')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-item ${location.pathname === '/patients' ? 'active' : ''}`}
          onClick={() => navigate('/patients')}
        >
          Patients
        </button>
        <button 
          className={`nav-item ${location.pathname === '/consultations' ? 'active' : ''}`}
          onClick={() => navigate('/consultations')}
        >
          Consultations
        </button>
        <button clclassName={`nav-item ${location.pathname === '/inventory' ? 'active' : ''}`}
          onClick={() => navigate('/inventory')}>Inventory</button>
        <button className="nav-item">Bed Management</button>
        <button className="nav-item">Settings</button>
      </nav>
      <button className="logout-btn">Log Out</button>
    </div>
  );
};

export default Sidebar;