import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          Destination Planner
        </Link>
      </div>
      <div className="navbar-menu">
        <Link to="/destinations" className="navbar-item">Destinations</Link>
        <Link to="/survey" className="navbar-item">Preference Survey</Link>
        <Link to="/map" className="navbar-item">Explore Map</Link>
        <Link to="/itinerary" className="navbar-item">My Itineraries</Link>
        <Link to="/profile" className="navbar-item">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar; 