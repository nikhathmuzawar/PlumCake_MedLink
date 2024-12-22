// components/Sidebar.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import MobileMenuButton from './MobileMenueButton';
import { useState } from 'react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <MobileMenuButton onClick={toggleMobileMenu} isOpen={isMobileMenuOpen} />
      <div className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="logo">MediTrack</div>
        <nav>
          <button 
            className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => handleNavigation('/')}
          >
            Dashboard
          </button>
          <button 
            className={`nav-item ${location.pathname === '/patients' ? 'active' : ''}`}
            onClick={() => handleNavigation('/patients')}
          >
            Patients
          </button>
          <button 
            className={`nav-item ${location.pathname === '/consultations' ? 'active' : ''}`}
            onClick={() => handleNavigation('/consultations')}
          >
            Consultations
          </button>
          <button className={`nav-item ${location.pathname === '/inventory' ? 'active' : ''}`}
            onClick={() => handleNavigation('/inventory')}>Inventory</button>
          <button className={`nav-item ${location.pathname === '/sub' ? 'active' : ''}`}
            onClick={() => handleNavigation('/sub')}>Subscription</button>
        </nav>
        <div className="sidebar-footer">
          <ThemeToggle />
          <button className="logout-btn">Log Out</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;