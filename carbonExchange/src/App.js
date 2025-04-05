// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'; // If you want a global navbar
import Footer from './components/common/Footer'; // If you want a global footer
import InvestorDashboard from './components/Investor/InvestorDashboard';
import CarbonCompanyList from './components/CarbonCompany/CarbonCompanyList';
import AdminDashboard from './components/Admin/AdminDashboard';
import Homepage from './components/Investor/Homepage';// Import the new LandingPage

function App() {
  return (
    <Router>
      <div className="App">
        {/* Optional: If you don't want the global Navbar on the LandingPage, remove it */}
        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
        {/* Optional: If you don't want the global Footer on the LandingPage, remove it */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;