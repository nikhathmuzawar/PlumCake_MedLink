import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MedicalDashboard from './components/dashboard';
import Patients from './components/Patients';
import Consultations from './components/Consultations';
import './styles.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MedicalDashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/consultations" element={<Consultations />} />
      </Routes>
    </Router>
  );
}

export default App;
