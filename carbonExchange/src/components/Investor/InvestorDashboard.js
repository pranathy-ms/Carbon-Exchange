// src/components/Investor/InvestorDashboard.js
import React, { useState } from 'react';

function InvestorDashboard() {
  // State for investments and the investment form
  const [company, setCompany] = useState('');
  const [amount, setAmount] = useState('');
  const [investments, setInvestments] = useState([
    { company: 'CarbonCo', amount: 5000 },
    { company: 'GreenCapture', amount: 3000 },
  ]);

  // Handle form submission: add new investment to list
  const handleSubmit = (e) => {
    e.preventDefault();
    const newInvestment = { company, amount };
    setInvestments([...investments, newInvestment]);
    setCompany('');
    setAmount('');
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px' }}>
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
        Investor Dashboard
      </h1>

      {/* Investment Form */}
      <div
        style={{
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            color: '#006400',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '1.5rem',
          }}
        >
          Invest Now
        </h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Company Dropdown */}
          <div style={{ marginBottom: '15px' }}>
            <label
              style={{
                fontWeight: 'bold',
                color: '#2f4f4f',
                fontSize: '1.1rem',
                display: 'block',
                marginBottom: '5px',
              }}
            >
              Company:
            </label>
            <select
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            >
              <option value="">-- Select a Company --</option>
              <option value="CarbonCo">CarbonCo</option>
              <option value="GreenCapture">GreenCapture</option>
              <option value="EarthSequester">EarthSequester</option>
              <option value="SkyOffset">SkyOffset</option>
            </select>
          </div>
          {/* Amount Input */}
          <div style={{ marginBottom: '15px' }}>
            <label
              style={{
                fontWeight: 'bold',
                color: '#2f4f4f',
                fontSize: '1.1rem',
                display: 'block',
                marginBottom: '5px',
              }}
            >
              Amount:
            </label>
            <input
              type="number"
              placeholder="Enter investment amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#2f4f4f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
            }}
          >
            Invest
          </button>
        </form>
      </div>

      {/* Investment List */}
      <div style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            textAlign: 'center',
            color: '#006400',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Your Investments
        </h2>
        <ul
          style={{
            listStyleType: 'none',
            padding: 0,
            textAlign: 'center',
            fontSize: '1.1rem',
            color: '#2f4f4f',
            fontWeight: 'bold',
          }}
        >
          {investments.map((inv, idx) => (
            <li key={idx} style={{ marginBottom: '0.5rem' }}>
              • {inv.company} : ${inv.amount}
            </li>
          ))}
        </ul>
      </div>

      {/* Future Returns Section with Dummy Graphs */}
      <div style={{ marginBottom: '2rem' }}>
        <h2
          style={{
            textAlign: 'center',
            color: '#006400',
            fontWeight: 'bold',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Future Returns
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          {/* CarbonCo Graph */}
          <div
            style={{
              flex: '1 1 300px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h5 style={{ color: '#006400', marginBottom: '10px' }}>CarbonCo</h5>
            <p style={{ marginBottom: '10px' }}>Dummy curves showing growth</p>
            <svg width="100%" height="150" style={{ backgroundColor: '#fff', borderRadius: '4px' }}>
              {/* Dark green curve */}
              <polyline
                fill="none"
                stroke="#006400"
                strokeWidth="3"
                points="0,100 40,80 80,90 120,50 160,60 200,40 240,45 280,30"
              />
              {/* Light green curve */}
              <polyline
                fill="none"
                stroke="#03AC13"
                strokeWidth="3"
                points="0,120 40,100 80,110 120,80 160,75 200,60 240,65 280,50"
              />
              {/* Additional curve */}
              <polyline
                fill="none"
                stroke="#2f4f4f"
                strokeWidth="2"
                points="0,130 40,115 80,105 120,95 160,85 200,80 240,70 280,60"
              />
            </svg>
          </div>

          {/* GreenCapture Graph */}
          <div
            style={{
              flex: '1 1 300px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            <h5 style={{ color: '#006400', marginBottom: '10px' }}>GreenCapture</h5>
            <p style={{ marginBottom: '10px' }}>Dummy curves showing growth</p>
            <svg width="100%" height="150" style={{ backgroundColor: '#fff', borderRadius: '4px' }}>
              {/* Dark green curve */}
              <polyline
                fill="none"
                stroke="#006400"
                strokeWidth="3"
                points="0,110 40,90 80,80 120,70 160,60 200,50 240,55 280,45"
              />
              {/* Light green curve */}
              <polyline
                fill="none"
                stroke="#03AC13"
                strokeWidth="3"
                points="0,130 40,110 80,100 120,90 160,80 200,70 240,75 280,60"
              />
              {/* Additional curve */}
              <polyline
                fill="none"
                stroke="#2f4f4f"
                strokeWidth="2"
                points="0,140 40,120 80,110 120,100 160,90 200,80 240,70 280,65"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorDashboard;