// components/MobileMenuButton.js
import React from 'react';
import { Menu } from 'lucide-react';

const MobileMenuButton = ({ onClick, isOpen }) => {
  return (
    <button 
      className="mobile-menu-btn"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <Menu size={24} />
    </button>
  );
};

export default MobileMenuButton;