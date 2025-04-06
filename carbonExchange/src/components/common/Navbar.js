// src/components/common/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/CE-Logo.png';

function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/home">
          {/* Display the logo */}
          <img
            src={logo}
            alt="CE Logo"
            style={{ width: '50px', marginRight: '10px' }}
          />
          <span style={{ color: 'darkgreen', fontSize: '3rem' }}>Carbon</span>
          <span style={{ color: '#03AC13', fontSize: '3rem', marginLeft: '5px' }}>
            Exchange
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <Link className="nav-link fw-bold" to="/carbon-companies">
                Carbon Companies
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link fw-bold" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link
                to="/login"
                className="btn"
                style={{
                  color: 'green',
                  border: '2px solid #03AC13',
                  backgroundColor: 'transparent',
                }}
              >
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="btn"
                style={{
                  backgroundColor: 'darkgreen',
                  color: 'white',
                }}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderNavbar;