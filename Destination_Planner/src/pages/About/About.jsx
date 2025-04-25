import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About Destination Planner</h1>
        <p>Your trusted companion for discovering India's most beautiful destinations</p>
      </section>

      <section className="about-content container">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>We strive to make travel planning easier and more personalized, helping you discover the perfect destinations that match your interests and preferences.</p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <ul>
            <li>Personalized travel recommendations</li>
            <li>Detailed destination guides</li>
            <li>Local insights and tips</li>
            <li>Interactive planning tools</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <p>With our deep understanding of Indian tourism and culture, we provide authentic experiences and reliable travel information to make your journey memorable.</p>
        </div>
      </section>
    </div>
  );
};

export default About;