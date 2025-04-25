import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Destinations.css';

// Mock data - in a real app, this would come from an API
const mockDestinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&h=600',
    description: 'A tropical paradise known for its volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    rating: 4.8,
    price: '$2000',
    tags: ['Beach', 'Culture', 'Nature', 'Relaxation']
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&h=600',
    description: 'Famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.',
    rating: 4.9,
    price: '$4000',
    tags: ['Beach', 'Culture', 'Food', 'Romantic']
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&h=600',
    description: 'A bustling metropolis where traditional culture meets cutting-edge technology.',
    rating: 4.7,
    price: '$5000',
    tags: ['Culture', 'Food', 'Shopping', 'Nightlife']
  },
];

const Destinations = () => {
  const [destinations, setDestinations] = useState(mockDestinations);
  const [filters, setFilters] = useState({
    price: 'all',
    rating: 'all',
    tags: []
  });

  useEffect(() => {
    // In a real app, we would fetch destinations based on user preferences
    const userPreferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
    console.log('User preferences:', userPreferences);
  }, []);

  const handleFilterChange = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
  };

  const filteredDestinations = destinations.filter(destination => {
    if (filters.price !== 'all' && destination.price !== filters.price) return false;
    if (filters.rating !== 'all' && destination.rating < parseFloat(filters.rating)) return false;
    if (filters.tags.length > 0 && !filters.tags.some(tag => destination.tags.includes(tag))) return false;
    return true;
  });

  return (
    <div className="destinations-container">
      <div className="filters-section">
        <h2>Filter Destinations</h2>
        <div className="filters">
          <div className="filter-group">
            <label>Price Range</label>
            <select
              value={filters.price}
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="all">All</option>
              <option value="$">1000</option>
              <option value="$$">2000</option>
              <option value="$$$">3000</option>
              <option value="$$$">4000</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Minimum Rating</label>
            <select
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
            >
              <option value="all">All</option>
              <option value="4.5">4.5+</option>
              <option value="4.0">4.0+</option>
              <option value="3.5">3.5+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="destinations-grid">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="destination-card">
            <img 
              src={destination.image} 
              alt={destination.name}
              onError={handleImageError}
              loading="lazy"
            />
            <div className="destination-info">
              <h3>{destination.name}</h3>
              <div className="rating">
                <span className="stars">{"★".repeat(Math.floor(destination.rating))}</span>
                <span className="rating-value">{destination.rating}</span>
              </div>
              <p>{destination.description}</p>
              <div className="tags">
                {destination.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="price">{destination.price}</div>
              <Link to={`/destinations/${destination.id}`} className="view-details">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations; 