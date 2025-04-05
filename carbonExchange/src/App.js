import React from 'react';
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
