import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedicalDashboard from './components/dashboard';
import './styles.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MedicalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
