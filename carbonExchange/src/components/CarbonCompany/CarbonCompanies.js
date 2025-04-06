// src/components/CarbonCompanies.js
import React from 'react';

function CarbonCompanies() {
  // Dummy data for carbon companies
  const companies = [
    {
      name: 'CarbonCo',
      currentPrice: '$45',
      futureGoal: 'Capturing 1 million tons by 2030',
      futurePrice: '$60 (Est.)'
    },
    {
      name: 'GreenCapture',
      currentPrice: '$32',
      futureGoal: 'Deploying algae-based capture for industrial sites',
      futurePrice: '$42 (Est.)'
    },
    {
      name: 'EarthSequester',
      currentPrice: '$50',
      futureGoal: 'Scaling direct air capture in 10 countries',
      futurePrice: '$65 (Est.)'
    },
    {
      name: 'SkyOffset',
      currentPrice: '$28',
      futureGoal: 'Partnering with airlines for carbon-neutral flights',
      futurePrice: '$38 (Est.)'
    },
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
      <h1
        style={{
          textAlign: 'center',
          color: '#006400',
          fontWeight: 'bold',
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        Carbon Companies
      </h1>
      <p
        style={{
          textAlign: 'center',
          color: '#2f4f4f',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
        }}
      >
        Explore leading carbon capture companies, their stock prices, and future goals.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {companies.map((comp, idx) => (
          <div
            key={idx}
            style={{
              flex: '1 1 250px',
              minWidth: '250px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              padding: '20px',
            }}
          >
            <h3
              style={{
                color: '#006400',
                fontWeight: 'bold',
                marginBottom: '10px',
                fontSize: '1.4rem',
              }}
            >
              {comp.name}
            </h3>
            <p
              style={{
                color: '#2f4f4f',
                marginBottom: '8px',
                fontSize: '1.1rem',
              }}
            >
              <strong>Current Price:</strong> {comp.currentPrice}
            </p>
            <p
              style={{
                color: '#2f4f4f',
                marginBottom: '8px',
                fontSize: '1.1rem',
              }}
            >
              <strong>Future Goal:</strong> {comp.futureGoal}
            </p>
            <p
              style={{
                color: '#2f4f4f',
                marginBottom: '0',
                fontSize: '1.1rem',
              }}
            >
              <strong>Future Price Est.:</strong> {comp.futurePrice}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarbonCompanies;