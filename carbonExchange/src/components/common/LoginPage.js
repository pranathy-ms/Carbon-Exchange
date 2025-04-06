// src/components/Auth/LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // TODO: Add login logic (e.g., API call)
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#008000',
          fontWeight: 'bold',
          marginBottom: '20px',
          fontSize: '2rem',
        }}
      >
        Log In
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              color: '#2f4f4f',
              fontSize: '1.1rem',
              marginBottom: '5px',
            }}
          >
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label
            style={{
              display: 'block',
              fontWeight: 'bold',
              color: '#2f4f4f',
              fontSize: '1.1rem',
              marginBottom: '5px',
            }}
          >
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <Link
            to="/forgot-password"
            style={{
              color: '#008000',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#008000',
            border: 'none',
            borderRadius: '4px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default LoginPage;