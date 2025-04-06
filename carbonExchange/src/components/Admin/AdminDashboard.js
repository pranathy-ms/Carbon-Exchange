// src/components/Admin/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  // Dummy data
  const adminName = 'AdminUsername';
  const partnerOrganizations = [
    'CarbonCollective',
    'GreenSequester',
    'EarthCapture',
    'SkyOffset',
  ];
  const users = [
    { name: 'User1', investment: '$2000', growth: '10%' },
    { name: 'User2', investment: '$5000', growth: '15%' },
    { name: 'User3', investment: '$3000', growth: '8%' },
  ];

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      {/* Heading */}
      <h1
        style={{
          textAlign: 'center',
          color: '#006400',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        Admin Dashboard
      </h1>

      {/* Greeting */}
      <p
        style={{
          color: '#2f4f4f',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
        }}
      >
        Hello, {adminName}. These are your partner organizations:
      </p>

      {/* Partner Organizations */}
      <div
        style={{
          marginBottom: '2rem',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
          {partnerOrganizations.map((org, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: '0.5rem',
                fontWeight: 'bold',
                color: '#2f4f4f',
                fontSize: '1.1rem',
              }}
            >
              • {org}
            </li>
          ))}
        </ul>
      </div>

      {/* Users Section */}
      <p
        style={{
          color: '#2f4f4f',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
        }}
      >
        These are your users:
      </p>
      <div
        style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#006400', color: '#fff' }}>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>User</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>Investment</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>Growth</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#2f4f4f' }}>
                  {u.name}
                </td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#2f4f4f' }}>
                  {u.investment}
                </td>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#2f4f4f' }}>
                  {u.growth}
                </td>
                <td style={{ padding: '10px' }}>
                  <Link
                    to="/manage-users"
                    style={{
                      backgroundColor: '#2f4f4f',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      padding: '8px 12px',
                      fontWeight: 'bold',
                    }}
                  >
                    Manage User
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;