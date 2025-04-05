import React from 'react';

function CarbonCompanyList() {
  const companies = [
    { id: 1, name: "CarbonCo", costPerTon: "$50" },
    { id: 2, name: "GreenCapture", costPerTon: "$45" },
  ];

  return (
    <div>
      <h1>Carbon Companies</h1>
      <ul>
        {companies.map((company) => (
          <li key={company.id}>
            {company.name} - Cost per ton: {company.costPerTon}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarbonCompanyList;
