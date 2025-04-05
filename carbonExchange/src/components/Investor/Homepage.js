import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      {/* Header */}
      {/* <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      </header> */}

      {/* Hero / Tagline */}
      <section className="p-5 text-center bg-light">
        <h1>Empowering individuals to invest in the future of Carbon Markets</h1>
        <p className="lead mt-3">
          Together, we can drive meaningful impact and secure profitable returns
          through carbon capture investments.
        </p>
      </section>

      {/* Factoids */}
      <section className="container my-5">
        <h2>Factoids</h2>
        <ul className="list-group">
          <li className="list-group-item">
            The global carbon offset market is expected to grow by 300% by 2030.
          </li>
          <li className="list-group-item">
            Carbon capture technology investments reached a record high last year.
          </li>
          <li className="list-group-item">
            Early investment in green technologies often leads to higher long-term returns.
          </li>
        </ul>
      </section>

      {/* Investment ROI */}
      <section className="container my-5">
        <h2>Investment ROI</h2>
        <p>
          Our platform provides data-driven insights into potential returns from 
          carbon capture projects. By investing now, you can capitalize on:
        </p>
        <ul>
          <li>Projected 10-15% annual growth in carbon credit valuations</li>
          <li>Long-term environmental and economic sustainability</li>
          <li>Diversification benefits across green tech sectors</li>
        </ul>
      </section>

      {/* Portfolio Organizations */}
      <section className="container my-5">
        <h2>Portfolio Organizations</h2>
        <p>
          Here are some of the leading carbon capture companies you can invest in through our platform:
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">CarbonCo</h5>
                <p className="card-text">
                  Specializing in direct air capture technology with global outreach.
                </p>
                <Link to="/investor" className="btn btn-outline-success">
                  Invest Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">GreenCapture</h5>
                <p className="card-text">
                  Utilizing algae-based carbon sequestration for industrial partners.
                </p>
                <Link to="/investor" className="btn btn-outline-success">
                  Invest Now
                </Link>
              </div>
            </div>
          </div>
          {/* Add more organization cards as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 border-top">
       
      </footer>
    </div>
  );
}

export default LandingPage;