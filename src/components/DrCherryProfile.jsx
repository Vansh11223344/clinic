import React from 'react';
import { Link } from 'react-router-dom';
import './DrCherryProfile.css'; // Import the CSS file

const DrCherryProfile = () => {
  return (
    <div className="dr-cherry-profile">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-content">
          <div>
            <h1>Dr. Cherry Khurana</h1>
            <p>MBBS | Aesthetics and Laser Specialist</p>
          </div>
        </div>
        <Link to="/" className="home-button">Home</Link>
      </header>

      {/* Main Content Section */}
      <div className="profile-content">
        
        {/* Right Column */}
        <div className="right-column">
          {/* Profile Image */}
          <div className="profile-image">
            <img 
              src="/src/assets/example.png" // Replace with actual image URL or local import
              alt="Dr. Cherry Khurana" 
            />
          </div>
          
          <div className="doctor-info">
            <h2>Professional Information</h2>
            <div className="info-section">
              <h3>Speciality</h3>
              <p>Aesthetics and Laser Specialist</p>
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
              Khurana's Skin Clinic & Laser Centre is a leading dermatology and aesthetics clinic that emphasizes personalized treatment plans, state-of-the-art technology, and holistic care. We provide treatments for all problems related to skin, hair, and nails. All cosmetic procedures are performed using advanced lasers and the latest technology.
            </p>
          </div>

          <div className="about-dr">
            <h2>About Dr. Cherry Khurana</h2>
            <p>
              Dr. Cherry Khurana is an MBBS with expertise in Aesthetics and Laser treatments. She is dedicated to providing personalized care and achieving the best results for her patients. With her extensive knowledge and experience, Dr. Cherry ensures that every patient receives the highest standard of treatment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrCherryProfile;
