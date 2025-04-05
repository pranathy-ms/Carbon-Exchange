import React from 'react';
import InvestmentList from './InvestmentList';
import InvestmentForm from './InvestmentForm';
import FutureReturn from './FutureReturn';

function InvestorDashboard() {
  return (
    <div>
      <h1>Investor Dashboard</h1>
      <InvestmentForm />
      <InvestmentList />
      <FutureReturn />
    </div>
  );
}

export default InvestorDashboard;
