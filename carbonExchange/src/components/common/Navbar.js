import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>carbonExchange</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/investor">Investor</Link></li>
        <li><Link to="/carbon-companies">Carbon Companies</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
