// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar'; // If you want a global navbar
import Footer from './components/common/Footer'; // If you want a global footer
import InvestorDashboard from './components/Investor/InvestorDashboard';
import CarbonCompanyList from './components/CarbonCompany/CarbonCompanies';
import AdminDashboard from './components/Admin/AdminDashboard';
import Homepage from './components/Investor/Homepage';// Import the new LandingPage
import LoginPage from './components/common/LoginPage';    // New Login page
import SignUpPage from './components/common/SignUpPage';  // New Sign Up page
import ManageUsers from './components/Admin/ManageUsers'; 


function App() {
  return (
    <Router>
      <div className="App">
        {/* Optional: If you don't want the global Navbar on the LandingPage, remove it */}
        {/* <Navbar /> */}
        {/* Use CustomNav for the global navigation */}
        {/* <Navbar /> */}
        <Navbar />
        <Routes>
          <Route path="/investor" element={<InvestorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/carbon-companies" element={<CarbonCompanyList />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          {/* Add more routes as needed */}
          {/* Default route */}
        </Routes>
        <Footer />
        {/* Optional: If you don't want the global Footer on the LandingPage, remove it */}
      </div>
    </Router>
  );
}

export default App;