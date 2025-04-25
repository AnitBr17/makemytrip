import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-content">
        <div className="profile-section">
          <h2>Personal Information</h2>
          <p>No profile information available. Please sign in to view your profile.</p>
        </div>
        <div className="profile-section">
          <h2>Travel Preferences</h2>
          <p>No preferences saved yet. Complete the survey to get personalized recommendations.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 