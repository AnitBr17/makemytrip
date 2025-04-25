import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      <div className="map-content">
        <h1>Popular Destinations in India</h1>
        <div className="destinations-grid">
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1564507592333-c60657eea523" alt="Taj Mahal" />
            <h3>Taj Mahal, Agra</h3>
            <p>One of the Seven Wonders of the World</p>
          </div>
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2" alt="Goa Beaches" />
            <h3>Goa Beaches</h3>
            <p>Beautiful beaches and vibrant culture</p>
          </div>
          <div className="destination-card">
            <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41" alt="Jaipur" />
            <h3>Jaipur, Rajasthan</h3>
            <p>The majestic Pink City of India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;