// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/contexts/ThemeContexts';
import Dashboard from './components/dashboard';
import Patients from './components/Patients';
import Consultations from './components/Consultations';
import Inventory from './components/Inventory';
import FitnessData from './components/Details';
import SubscriptionPlans from './components/Subscription';

import './styles.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/details" element={<FitnessData />} />
          <Route path="/sub" element={<SubscriptionPlans />} />
          

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;