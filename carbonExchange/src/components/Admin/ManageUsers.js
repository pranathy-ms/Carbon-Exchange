// src/components/Admin/ManageUsers.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ManageUsers() {
  // Dummy data for users with unique ids
  const initialUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Investor', status: 'Active' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Investor', status: 'Pending' },
    { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Admin', status: 'Active' },
  ];
  const [users, setUsers] = useState(initialUsers);

  // Handler for role change
  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  // Handler for status change
  const handleStatusChange = (id, newStatus) => {
    setUsers(users.map(user => user.id === id ? { ...user, status: newStatus } : user));
  };

  // Handler for Manage User button
  const handleManageUser = (id) => {
    // Navigate to ManageUsers.js page or perform an action.
    console.log('Manage user with id:', id);
    // For example, if using react-router, you might navigate:
    // navigate(`/manage-users/${id}`);
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
      {/* Page Header */}
      <h1 style={{ textAlign: 'center', color: '#006400', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Manage Users
      </h1>

      {/* Optional: Search Bar */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Search users..."
          style={{
            padding: '10px',
            width: '60%',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Users Table */}
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#006400', color: '#fff' }}>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>Name</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '25%' }}>Email</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '20%' }}>Role</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '15%' }}>Status</th>
              <th style={{ padding: '10px', textAlign: 'left', width: '15%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '10px', fontWeight: 'bold', color: '#2f4f4f' }}>
                  {user.name}
                </td>
                <td style={{ padding: '10px', color: '#2f4f4f' }}>
                  {user.email}
                </td>
                <td style={{ padding: '10px' }}>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    style={{
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      width: '100%',
                    }}
                  >
                    <option value="Investor">Investor</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </td>
                <td style={{ padding: '10px' }}>
                  <select
                    value={user.status}
                    onChange={(e) => handleStatusChange(user.id, e.target.value)}
                    style={{
                      padding: '8px',
                      borderRadius: '4px',
                      border: '1px solid #ccc',
                      width: '100%',
                    }}
                  >
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td style={{ padding: '10px' }}>
                  <Link
                    to="/manage-users"
                    onClick={() => handleManageUser(user.id)}
                    style={{
                      backgroundColor: '#2f4f4f',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: '4px',
                      padding: '8px 12px',
                      fontWeight: 'bold',
                      display: 'inline-block',
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

export default ManageUsers;