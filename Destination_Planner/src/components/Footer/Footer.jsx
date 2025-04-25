import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Destination Planner</h3>
          <p>Plan your perfect trip with us. Discover amazing destinations and create unforgettable memories.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@destplanner.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Travel Street, City</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Destination Planner. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;