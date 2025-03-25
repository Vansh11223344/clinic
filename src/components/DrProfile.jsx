import React from 'react';
import { Link } from 'react-router-dom';
import './DrProfile.css'; // Import the CSS file

const DrProfile = () => {
  return (
    <div className="dr-profile">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-content">
          <h1>Dr. Aashish Khurana</h1>
          <p>Dermatologist | 28 Years of Experience</p>
        </div>
        <Link to="/" className="home-button">Back to Home</Link>
      </header>

      {/* Main Content Section */}
      <div className="profile-content">
        {/* Right Column (Image and Info) */}
        <div className="right-column">
          <div className="profile-image">
            <img 
              src="/images/Dr.jpeg" // Ensure this path is correct in your public folder
              alt="Dr. Aashish Khurana" 
            />
          </div>
          <div className="doctor-info">
            <h2>Doctor Information</h2>
            <div className="info-section">
              <h3>Speciality</h3>
              <p>Dermatologist</p>
            </div>
            <div className="info-section">
              <h3>Other Treatment Areas</h3>
              <p>Dermatologist / Cosmetologist</p>
            </div>
            <div className="info-section">
              <h3>Education</h3>
              <ul>
                <li><strong>MBBS</strong> - KIMS HUBLI, 1997</li>
                <li><strong>MD Dermatology</strong> - M.R Medical College, 2002</li>
              </ul>
            </div>
            <div className="info-section">
              <h3>Languages Spoken</h3>
              <ul>
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
            <div className="info-section">
              <h3>Professional Member</h3>
              <ul>
                <li>Indian Association of Dermatologists Venereologists and Leprologists (IADVL)</li>
                <li>AAAM</li>
                <li>Cosmetic Dermatology Society of India (CDSI)</li>
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

        {/* Left Column (Personal Statement and About) */}
        <div className="left-column">
          <div className="personal-statement">
            <h2>Personal Statement</h2>
            <p>
              My favorite part of being a doctor is the opportunity to directly improve the health and wellbeing of my patients and to develop professional and personal relationships with them.
            </p>
          </div>

          <div className="about-dr">
            <h2>About Dr. Aashish Khurana</h2>
            <p>
              Dr. Aashish Khurana is a renowned dermatologist in Janakpuri, Delhi, with over 28 years of experience. He holds an <strong>MBBS</strong> from KIMS Hubli (1997) and an <strong>MD in Dermatology</strong> from M.R Medical College (2002). Patients can consult him at Khurana's Skin Clinic for expert care.
            </p>
            <p>
              Khurana's Skin Clinic & Laser Centre is a premier destination for dermatology and aesthetics, offering personalized treatment plans with cutting-edge technology. We specialize in skin, hair, and nail treatments, utilizing advanced lasers and modern techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrProfile;