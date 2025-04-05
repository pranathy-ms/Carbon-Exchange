import React from 'react';

function InvestmentList() {
  const investments = [
    { id: 1, company: "CarbonCo", amount: 5000 },
    { id: 2, company: "GreenCapture", amount: 3000 },
  ];

  return (
    <div>
      <h2>Your Investments</h2>
      <ul>
        {investments.map((investment) => (
          <li key={investment.id}>
            {investment.company} - $ {investment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvestmentList;
