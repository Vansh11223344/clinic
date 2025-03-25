import React from 'react';
import { Link } from 'react-router-dom';
import './DrCherryProfile.css'; // Import the CSS file

const DrCherryProfile = () => {
  return (
    <div className="dr-cherry-profile">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-content">
          <h1>Dr. Cherry Khurana</h1>
          <p>MBBS | Aesthetics & Laser Specialist</p>
        </div>
        <Link to="/" className="home-button">Back to Home</Link>
      </header>

      {/* Main Content Section */}
      <div className="profile-content">
        {/* Right Column */}
        <div className="right-column">
          <div className="profile-image">
            <img 
              src="/images/DrCherry.jpeg" // Ensure this path is correct in your public folder
              alt="Dr. Cherry Khurana" 
            />
          </div>
          
          <div className="doctor-info">
            <h2>Professional Information</h2>
            <div className="info-section">
              <h3>Speciality</h3>
              <p>Aesthetics & Laser Specialist</p>
            </div>
            <div className="info-section">
              <h3>Education</h3>
              <ul>
                <li><strong>MBBS</strong></li>
              </ul>
            </div>
            <div className="info-section">
              <h3>Professional Memberships</h3>
              <ul>
                <li>American Academy of Aesthetic Science</li>
              </ul>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/ContactForm">
              <button className="cta-button">Book an Appointment</button>
            </Link>
            <p>Consultation Fee: ₹ at clinic</p>
          </div>
        </div>

        {/* Left Column */}
        <div className="left-column">
          <div className="clinic-info">
            <h2>About Khurana's Skin Clinic & Laser Centre</h2>
            <p>
              Khurana's Skin Clinic & Laser Centre is a premier dermatology and aesthetics clinic dedicated to personalized treatment plans, state-of-the-art technology, and holistic care. We specialize in treatments for skin, hair, and nail concerns, utilizing advanced lasers and cutting-edge techniques.
            </p>
          </div>

          <div className="about-dr">
            <h2>About Dr. Cherry Khurana</h2>
            <p>
              Dr. Cherry Khurana is an MBBS graduate with specialized expertise in aesthetics and laser treatments. Committed to delivering exceptional results, she combines her extensive knowledge with a patient-centric approach to ensure the highest standards of care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrCherryProfile;