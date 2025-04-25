import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';

const Survey = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    budget: 1000,
    travelStyle: 'solo',
    interests: [],
    activities: [],
    climate: 'any',
    duration: '1-2 weeks'
  });

  const interests = [
    'Adventure', 'Culture', 'Beach', 'Nature', 'Food', 'History',
    'Shopping', 'Nightlife', 'Relaxation', 'Sports'
  ];

  const activities = [
    'Hiking', 'Sightseeing', 'Swimming', 'Dining', 'Museums',
    'Photography', 'Shopping', 'Local Events', 'Water Sports', 'Yoga'
  ];

  const handleInterestChange = (interest) => {
    setPreferences(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleActivityChange = (activity) => {
    setPreferences(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we would save these preferences to a database
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    navigate('/destinations');
  };

  return (
    <div className="survey-container">
      <h1 className="survey-title">Tell us about your travel preferences</h1>
      <form onSubmit={handleSubmit} className="survey-form">
        <div className="form-section">
          <label>Budget (USD)</label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={preferences.budget}
            onChange={(e) => setPreferences(prev => ({ ...prev, budget: parseInt(e.target.value) }))}
          />
          <span className="budget-value">${preferences.budget}</span>
        </div>

        <div className="form-section">
          <label>Travel Style</label>
          <select
            value={preferences.travelStyle}
            onChange={(e) => setPreferences(prev => ({ ...prev, travelStyle: e.target.value }))}
          >
            <option value="solo">Solo</option>
            <option value="couple">Couple</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
        </div>

        <div className="form-section">
          <label>Interests (Select multiple)</label>
          <div className="checkbox-grid">
            {interests.map(interest => (
              <label key={interest} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Activities (Select multiple)</label>
          <div className="checkbox-grid">
            {activities.map(activity => (
              <label key={activity} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.activities.includes(activity)}
                  onChange={() => handleActivityChange(activity)}
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Preferred Climate</label>
          <select
            value={preferences.climate}
            onChange={(e) => setPreferences(prev => ({ ...prev, climate: e.target.value }))}
          >
            <option value="any">Any</option>
            <option value="tropical">Tropical</option>
            <option value="temperate">Temperate</option>
            <option value="cold">Cold</option>
            <option value="dry">Dry</option>
          </select>
        </div>

        <div className="form-section">
          <label>Duration</label>
          <select
            value={preferences.duration}
            onChange={(e) => setPreferences(prev => ({ ...prev, duration: e.target.value }))}
          >
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="2-4 weeks">2-4 weeks</option>
            <option value="1 month+">1 month+</option>
          </select>
        </div>

        <button type="submit" className="submit-button">
          Get Recommendations
        </button>
      </form>
    </div>
  );
};

export default Survey; 