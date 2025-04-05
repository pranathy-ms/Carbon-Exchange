import React, { useState } from 'react';

function InvestmentForm() {
  const [company, setCompany] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Investing in", company, "with amount", amount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Invest Now</h2>
      <label>
        Company:
        <input 
          type="text" 
          value={company} 
          onChange={(e) => setCompany(e.target.value)} 
          required 
        />
      </label>
      <br />
      <label>
        Amount:
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </label>
      <br />
      <button type="submit">Invest</button>
    </form>
  );
}

export default InvestmentForm;
