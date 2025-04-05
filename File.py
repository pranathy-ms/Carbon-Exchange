import os

def write_file(path, content):
    with open(path, 'w') as f:
        f.write(content)

# Root directory
root = "carbonExchange"

# Directory structure to create
dirs = [
    root,
    os.path.join(root, "public", "assets", "images"),
    os.path.join(root, "public", "assets", "styles"),
    os.path.join(root, "src", "config"),
    os.path.join(root, "src", "assets"),
    os.path.join(root, "src", "components", "common"),
    os.path.join(root, "src", "components", "Investor"),
    os.path.join(root, "src", "components", "CarbonCompany"),
    os.path.join(root, "src", "components", "Admin"),
    os.path.join(root, "src", "services"),
    os.path.join(root, "src", "utils"),
    os.path.join(root, "src", "tests", "unit"),
    os.path.join(root, "src", "tests", "integration"),
    os.path.join(root, "deploy")
]

for d in dirs:
    os.makedirs(d, exist_ok=True)

#####################################
# Create root-level files
#####################################

# README.md
readme = """# carbonExchange

A platform for investors to invest in carbon capturing companies.

## Overview
- **Investors:** Create accounts, view and manage investments, see predicted returns.
- **Carbon Companies:** Set per ton cost of carbon.
- **Admins:** Manage application settings, guide users, and integrate payment gateways.

## Getting Started
1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. To run tests: `npm test`
"""
write_file(os.path.join(root, "README.md"), readme)

# package.json
package_json = """{
  "name": "carbonExchange",
  "version": "1.0.0",
  "description": "Investment platform for carbon capturing companies",
  "main": "src/index.js",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.0"
  },
  "devDependencies": {
    "eslint": "^8.0.0"
  },
  "author": "Your Name",
  "license": "MIT"
}
"""
write_file(os.path.join(root, "package.json"), package_json)

# .gitignore
gitignore = """node_modules/
build/
.env
.DS_Store
"""
write_file(os.path.join(root, ".gitignore"), gitignore)

# Dockerfile
dockerfile = """# Use an official Node runtime as a parent image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
"""
write_file(os.path.join(root, "Dockerfile"), dockerfile)

# docker-compose.yml
docker_compose = """version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    environment:
      - NODE_ENV=development
"""
write_file(os.path.join(root, "docker-compose.yml"), docker_compose)

#####################################
# public Directory Files
#####################################

index_html = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>carbonExchange</title>
    <link rel="stylesheet" href="%PUBLIC_URL%/assets/styles/main.css" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
"""
write_file(os.path.join(root, "public", "index.html"), index_html)

#####################################
# src Directory Files
#####################################

# src/index.js
index_js = """import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
"""
write_file(os.path.join(root, "src", "index.js"), index_js)

# src/App.js
app_js = """import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import InvestorDashboard from './components/Investor/InvestorDashboard';
import CarbonCompanyList from './components/CarbonCompany/CarbonCompanyList';
import AdminDashboard from './components/Admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/investor" component={InvestorDashboard} />
          <Route path="/carbon-companies" component={CarbonCompanyList} />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/" exact>
            <h1>Welcome to carbonExchange</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
"""
write_file(os.path.join(root, "src", "App.js"), app_js)

# src/config/env.js
env_js = """const env = {
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  PAYMENT_GATEWAY_KEY: process.env.REACT_APP_PAYMENT_GATEWAY_KEY || "your-payment-key",
};

export default env;
"""
write_file(os.path.join(root, "src", "config", "env.js"), env_js)

#####################################
# Components
#####################################

# src/components/common/Navbar.js
navbar_js = """import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>carbonExchange</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/investor">Investor</Link></li>
        <li><Link to="/carbon-companies">Carbon Companies</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
"""
write_file(os.path.join(root, "src", "components", "common", "Navbar.js"), navbar_js)

# src/components/common/Footer.js
footer_js = """import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 carbonExchange. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
"""
write_file(os.path.join(root, "src", "components", "common", "Footer.js"), footer_js)

# src/components/Investor/InvestorDashboard.js
investor_dashboard_js = """import React from 'react';
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
"""
write_file(os.path.join(root, "src", "components", "Investor", "InvestorDashboard.js"), investor_dashboard_js)

# src/components/Investor/InvestmentList.js
investment_list_js = """import React from 'react';

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
"""
write_file(os.path.join(root, "src", "components", "Investor", "InvestmentList.js"), investment_list_js)

# src/components/Investor/InvestmentForm.js
investment_form_js = """import React, { useState } from 'react';

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
"""
write_file(os.path.join(root, "src", "components", "Investor", "InvestmentForm.js"), investment_form_js)

# src/components/Investor/FutureReturn.js
future_return_js = """import React, { useState } from 'react';

function FutureReturn() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = () => {
    const dummyPrediction = "$1,200 estimated return";
    setPrediction(dummyPrediction);
  };

  return (
    <div>
      <h2>Future Return Prediction</h2>
      <button onClick={handlePredict}>Predict Return</button>
      {prediction && <p>{prediction}</p>}
    </div>
  );
}

export default FutureReturn;
"""
write_file(os.path.join(root, "src", "components", "Investor", "FutureReturn.js"), future_return_js)

# src/components/CarbonCompany/CarbonCompanyList.js
carbon_company_list_js = """import React from 'react';

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
"""
write_file(os.path.join(root, "src", "components", "CarbonCompany", "CarbonCompanyList.js"), carbon_company_list_js)

# src/components/CarbonCompany/PerTonCost.js
per_ton_cost_js = """import React from 'react';

function PerTonCost() {
  return (
    <div>
      <h2>Set or Update Cost per Ton</h2>
      {/* Implement form or display logic here */}
    </div>
  );
}

export default PerTonCost;
"""
write_file(os.path.join(root, "src", "components", "CarbonCompany", "PerTonCost.js"), per_ton_cost_js)

# src/components/Admin/AdminDashboard.js
admin_dashboard_js = """import React from 'react';

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Manage users, settings, and payment gateway configurations here.</p>
    </div>
  );
}

export default AdminDashboard;
"""
write_file(os.path.join(root, "src", "components", "Admin", "AdminDashboard.js"), admin_dashboard_js)

# src/components/Admin/ManageUsers.js
manage_users_js = """import React from 'react';

function ManageUsers() {
  return (
    <div>
      <h2>Manage Users</h2>
      {/* Implement user management logic here */}
    </div>
  );
}

export default ManageUsers;
"""
write_file(os.path.join(root, "src", "components", "Admin", "ManageUsers.js"), manage_users_js)

# src/components/Admin/PaymentGatewayConfig.js
payment_gateway_config_js = """import React from 'react';

function PaymentGatewayConfig() {
  return (
    <div>
      <h2>Payment Gateway Configuration</h2>
      {/* Implement payment gateway setup here */}
    </div>
  );
}

export default PaymentGatewayConfig;
"""
write_file(os.path.join(root, "src", "components", "Admin", "PaymentGatewayConfig.js"), payment_gateway_config_js)

#####################################
# Services
#####################################

# src/services/auth.js
auth_js = """import env from '../config/env';

export const registerUser = async (email, password) => {
  const response = await fetch(`${env.API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${env.API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
};
"""
write_file(os.path.join(root, "src", "services", "auth.js"), auth_js)

# src/services/investmentService.js
investment_service_js = """import env from '../config/env';

export const createInvestment = async (investmentData) => {
  const response = await fetch(`${env.API_BASE_URL}/investments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(investmentData)
  });
  return response.json();
};
"""
write_file(os.path.join(root, "src", "services", "investmentService.js"), investment_service_js)

# src/services/carbonService.js
carbon_service_js = """import env from '../config/env';

export const getCarbonCompanies = async () => {
  const response = await fetch(`${env.API_BASE_URL}/carbon-companies`);
  return response.json();
};
"""
write_file(os.path.join(root, "src", "services", "carbonService.js"), carbon_service_js)

# src/services/paymentGateway.js
payment_gateway_js = """import env from '../config/env';

export const processPayment = async (paymentDetails) => {
  const response = await fetch(`${env.API_BASE_URL}/payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentDetails)
  });
  return response.json();
};
"""
write_file(os.path.join(root, "src", "services", "paymentGateway.js"), payment_gateway_js)

#####################################
# Utilities
#####################################

# src/utils/helpers.js
helpers_js = """export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
};
"""
write_file(os.path.join(root, "src", "utils", "helpers.js"), helpers_js)

# src/utils/mlAlgorithm.js
ml_algorithm_js = """export const predictReturn = (investmentData) => {
  return "$1,200 estimated return";
};
"""
write_file(os.path.join(root, "src", "utils", "mlAlgorithm.js"), ml_algorithm_js)

#####################################
# Tests
#####################################

# src/tests/unit/Example.test.js
example_test_js = """test('Example test', () => {
  expect(true).toBe(true);
});
"""
write_file(os.path.join(root, "src", "tests", "unit", "Example.test.js"), example_test_js)

#####################################
# Deployment Scripts
#####################################

# deploy/aws-deploy.sh
aws_deploy_sh = """#!/bin/bash
echo "Building project..."
npm run build

echo "Deploying to AWS S3..."
aws s3 sync build/ s3://your-s3-bucket-name --delete

echo "Invalidating CloudFront cache..."
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete."
"""
write_file(os.path.join(root, "deploy", "aws-deploy.sh"), aws_deploy_sh)
os.chmod(os.path.join(root, "deploy", "aws-deploy.sh"), 0o755)

# deploy/azure-deploy.sh
azure_deploy_sh = """#!/bin/bash
echo "Azure deployment script placeholder"
"""
write_file(os.path.join(root, "deploy", "azure-deploy.sh"), azure_deploy_sh)
os.chmod(os.path.join(root, "deploy", "azure-deploy.sh"), 0o755)

# deploy/README.md
deploy_readme = """# Deployment Instructions

## AWS Deployment
1. Update `aws-deploy.sh` with your S3 bucket name and CloudFront distribution ID.
2. Run `chmod +x deploy/aws-deploy.sh` to make the script executable.
3. Execute `./deploy/aws-deploy.sh`.

## Azure Deployment
- Update and use `azure-deploy.sh` as needed.
"""
write_file(os.path.join(root, "deploy", "README.md"), deploy_readme)

print("Project structure created successfully!")