import React from 'react';
import { Link } from 'react-router-dom';
import investIcon from '../../assets/images/invest-icon.png';

function LandingPage() {
  return (
    <div>
    <div className="small-gap">
    <p></p>
    </div>
    <div style={{ textAlign: 'center' }}>
        <p style={{ color: 'darkgreen', fontSize: '2rem', fontWeight: 'bold' }}>
            Empowering individuals to invest in the future of Carbon Markets
        </p>
        <p style={{ color: '#03AC13', fontSize: '1.5rem', fontWeight: 'bold' }}>
            Together, we can drive meaningful impact and secure profitable returns through carbon capture investments.
        </p>
    </div>
      <section className="text-center mb-3">
      <h2 style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '1rem' }}>
      Our Journey as Humans
  </h2>
        <p className="text-center mb-4">
          Highlighting key milestones in our emissions over the years.
        </p>
        <div className="d-flex justify-content-center align-items-center flex-wrap">
          {/* 1850 */}
          <div className="text-center mx-3 mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'darkgreen', // Dark greenish circle
                color: 'white',
                margin: '0 auto',
              }}
            >
              <h5>1850</h5>
            </div>
            <p className="mt-2">~0</p>
          </div>
          {/* Connector */}
          <div style={{ width: '50px', height: '2px', backgroundColor: '#ccc' }} />
          {/* 1940 */}
          <div className="text-center mx-3 mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'darkgreen',
                color: 'white',
                margin: '0 auto',
              }}
            >
              <h5>1940</h5>
            </div>
            <p className="mt-2">~5000 million metric tons</p>
          </div>
          {/* Connector */}
          <div style={{ width: '50px', height: '2px', backgroundColor: '#ccc' }} />
          {/* 2010 */}
          <div className="text-center mx-3 mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'darkgreen',
                color: 'white',
                margin: '0 auto',
              }}
            >
              <h5>2010</h5>
            </div>
            <p className="mt-2">~30,000 million metric tons</p>
          </div>
          {/* Connector */}
          <div style={{ width: '50px', height: '2px', backgroundColor: '#ccc' }} />
          {/* 2050 */}
          <div className="text-center mx-3 mb-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center"
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: 'darkgreen',
                color: 'white',
                margin: '0 auto',
              }}
            >
              <h5>2050</h5>
            </div>
            <p className="mt-2">?</p>
          </div>
        </div>
      </section>

    
      {/* Factual Numbers */}
      <section className="container my-3">
      <h2 style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '1rem' }}>
      Factual Numbers
  </h2>
        <p className="mb-4">The story in numbers.</p>
        <div className="row">
          {/* Card 1 */}
          <div className="col-md-4 mb-3">
            <div
              className="p-3 h-100 d-flex flex-column justify-content-center"
              style={{ backgroundColor: 'darkgreen', color:'white',borderRadius: '8px' }}
            >
              <h5>$36 billion (2012–2025) in CDR</h5>
              <p className="mb-0">$11.33 billion (2023), €4.2B EU Fund</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4 mb-3">
            <div
              className="p-3 h-100 d-flex flex-column justify-content-center"
              style={{ backgroundColor: 'darkgreen',color:'white', borderRadius: '8px' }}
            >
              <h5>~41 Mt (2023), ~1–1.5 Gt by 2030 through CDR</h5>
              <p className="mb-0">~435 Mt by 2030</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4 mb-3">
            <div
              className="p-3 h-100 d-flex flex-column justify-content-center"
              style={{ backgroundColor: 'darkgreen', color:'white',borderRadius: '8px' }}
            >
              <h5>$1.2 trillion by 2050</h5>
              <p className="mb-0">The gap that needs to be invested.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment ROI */}
      <section className="container my-3">
  <h2
    style={{
      color: 'darkgreen',
      fontWeight: 'bold',
      marginBottom: '1rem',
      fontSize: '2rem', // Increased heading font size
    }}
  >
    Investment ROI
  </h2>
  <div
    style={{
      // Removed backgroundColor: 'darkgreen'
      // color: 'white'
      // Instead, let the default page background show
      borderRadius: '8px',
      fontSize: '1.2rem', // Increased body font size
      color: '#2f4f4f',   // Dark gray-green for text
      padding: '1rem',
    }}
  >
    <p style={{ marginBottom: '0.5rem' }}>
      Our platform provides data-driven insights into potential returns from 
      carbon capture projects. By investing now, you can capitalize on:
    </p>
    <ul style={{ paddingLeft: '1.5rem' }}>
      <li style={{ marginBottom: '0.5rem' }}>Projected 10-15% annual growth in carbon credit valuations</li>
      <li style={{ marginBottom: '0.5rem' }}>Long-term environmental and economic sustainability</li>
      <li style={{ marginBottom: '0.5rem' }}>Diversification benefits across green tech sectors</li>
    </ul>
  </div>
</section>

      {/* Portfolio Organizations */}
      <section className="container my-5">
  <h2 style={{ color: 'darkgreen', fontWeight: 'bold', marginBottom: '1rem' }}>
    Portfolio Organizations
  </h2>
  <p>
    Here are some of the leading carbon capture companies you can invest in through our platform:
  </p>

  {/* Use a row with align-items-start to align everything at the top */}
  <div className="row align-items-start">
    {/* Cards Column */}
    <div className="col-md-8">
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">CarbonCo</h5>
              <p className="card-text">
                Specializing in direct air capture technology with global outreach.
              </p>
              <Link
                to="/investor"
                className="btn"
                style={{ backgroundColor: 'darkgreen', color: 'white' }}
              >
                Invest Now
              </Link>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-6 mb-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">GreenCapture</h5>
              <p className="card-text">
                Utilizing algae-based carbon sequestration for industrial partners.
              </p>
              <Link
                to="/investor"
                className="btn"
                style={{ backgroundColor: 'darkgreen', color: 'white' }}
              >
                Invest Now
              </Link>
            </div>
          </div>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>

    {/* Image Column */}
    <div className="col-md-4">
      <img
        src= {investIcon} // replace with your actual image path
        alt="Invest illustration"
        style={{
          width: '100%',       // Adjust width as needed
          maxWidth: '350px',   // Prevents image from getting too large
          borderRadius: '8px', // Optional, if you want rounded corners
          display: 'block',    // Ensures it sits properly in its container
          margin: '0 auto'     // Centers image horizontally in this column
        }}
      />
    </div>
  </div>
</section>
    </div>
  );
}

export default LandingPage;