// In your Homepage.js (or Navbar.js if you have a dedicated component)
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeaderNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Carbon Exchange
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
              <Link className="nav-link" to="/carbon-companies">
                Carbon Companies
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link to="/login" className="btn btn-outline-primary">
                Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="btn btn-primary">
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