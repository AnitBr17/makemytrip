import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Available';
  };

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Your Perfect Destination</h1>
          <p>Get personalized travel recommendations based on your preferences and interests</p>
          <Link to="/survey" className="btn btn-primary">Take Preference Survey</Link>
        </div>
      </section>

      <section className="features container">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-map-marked-alt"></i>
            <h3>Personalized Recommendations</h3>
            <p>Get tailored destination suggestions based on your unique preferences</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-route"></i>
            <h3>Interactive Maps</h3>
            <p>Explore destinations visually and discover nearby attractions</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Custom Itineraries</h3>
            <p>Plan your perfect trip with our itinerary builder</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-star"></i>
            <h3>User Reviews</h3>
            <p>Read authentic reviews from fellow travelers</p>
          </div>
        </div>
      </section>

      <section className="trending container">
        <h2 className="section-title">Trending Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img 
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&h=600" 
              alt="Taj Mahal" 
              onError={handleImageError}
              loading="lazy"
            />
            <div className="destination-info">
              <h3>Agra, Uttar Pradesh</h3>
              <p>Home to the magnificent Taj Mahal</p>
              <Link to="/destinations/agra" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="destination-card">
            <img 
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&h=600" 
              alt="Goa Beaches" 
              onError={handleImageError}
              loading="lazy"
            />
            <div className="destination-info">
              <h3>Goa</h3>
              <p>Beautiful beaches and vibrant culture</p>
              <Link to="/destinations/goa" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
          <div className="destination-card">
            <img 
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&h=600" 
              alt="Jaipur" 
              onError={handleImageError}
              loading="lazy"
            />
            <div className="destination-info">
              <h3>Jaipur, Rajasthan</h3>
              <p>The majestic Pink City of India</p>
              <Link to="/destinations/jaipur" className="btn btn-secondary">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;