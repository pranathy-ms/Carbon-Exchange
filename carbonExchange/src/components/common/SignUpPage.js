// src/components/Auth/SignUpPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName]   = useState('');
  const [email, setEmail]         = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry]     = useState('');
  const [address, setAddress]     = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with:', { firstName, lastName, email, mobileNumber, country, address });
    // TODO: Add sign-up logic (e.g., API call)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', color: '#008000', fontWeight: 'bold', marginBottom: '20px', fontSize: '2rem' }}>
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            First Name:
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            Email ID:
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
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            Mobile Number:
          </label>
          <input
            type="tel"
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            Country:
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', fontWeight: 'bold', color: '#2f4f4f', fontSize: '1.1rem', marginBottom: '5px' }}>
            Address:
          </label>
          <textarea
            rows="3"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          ></textarea>
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
          Register
        </button>
      </form>
      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <Link to="/login" style={{ color: '#008000', fontWeight: 'bold', textDecoration: 'none' }}>
          Already have an account? Log In
        </Link>
      </div>
    </div>
  );
}

export default SignUpPage;