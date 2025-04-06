// src/components/common/Footer.js
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <footer className="bg-light text-center py-4 border-top">
      <div className="container">
        {/* Contact Us Section */}
        <div className="mb-3">
          <h5>Contact Us</h5>
          <p>Follow us on social media or drop us an email.</p>
        </div>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-2"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:youremail@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-2"
            title="Gmail"
          >
            <SiGmail />
          </a>
          <a
            href="https://twitter.com/yourprofile"  // Replace with your actual X profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-2"
            title="X"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark fs-2"
            title="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
        {/* Copyright */}
        <div>
          <p className="mb-0">&copy; 2025 Carbon Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;