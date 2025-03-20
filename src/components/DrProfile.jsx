import React from 'react';
import { Link } from 'react-router-dom';
import './DrProfile.css'; // Import the CSS file

const DrProfile = () => {
  return (
    <div className="dr-profile">
      {/* Header Section */}
      <header className="profile-header">
        <div className="header-content">
          <div>
            <h1>Dr. Aashish Khurana</h1>
            <p>Dermatologist | 28 Years of Experience</p>
          </div>
        </div>
        <Link to="/" className="home-button">Home</Link>
      </header>
      
      {/* Main Content Section */}
      <div className="profile-content">
      
        {/* Right Column */}
        <div className="right-column">
        <div className="profile-image">
            <img 
              src="/images/Dr.jpeg" // Replace with actual image URL or local import
              alt="Dr. A K" 
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
              <p>Dermatologist/ Cosmetologist</p>
            </div>
            <div className="info-section">
              <h3>Education</h3>
              <ul>
                <li><strong>MBBS</strong> - KIMS HUBLI, 1997</li>
                <li><strong>MD DERMATOLOGY</strong> - M.R MEDICAL COLLEGE, 2002</li>
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
              <h3>Professional Memberships</h3>
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
       
      </div>

       {/* Left Column */}
       <div className="left-column">
          <div className="personal-statement">
            <h2>Personal Statement</h2>
            <p>
              My favorite part of being a doctor is the opportunity to directly improve the health and wellbeing of my patients and to develop professional and personal relationships with them.
            </p>
          </div>

          <div className="about-dr">
            <h2>More About Dr. A K</h2>
            <p>
              Dr. Aashish Khurana is one of the best Dermatologists in Janakpuri, Delhi. He has helped numerous patients in his 28 years of experience as a Dermatologist. He has completed <strong>MBBS, MD DERMATOLOGY</strong>. You can consult Dr. A K at Khurana's Skin Clinic in Janakpuri, Delhi. Book an appointment online with Dr. Aashish Khurana.
            </p>
            <p>
            Khurana's Skin Clinic & Laser Centre is a leading dermatology and aesthetics clinic that emphasizes personalized treatment plans, state-of-the-art technology, and holistic care. We provide treatments for all problems related to skin, hair, and nails. All cosmetic procedures are performed using advanced lasers and the latest technology
            </p>
          </div>
        </div>

      </div>
  );
};

export default DrProfile;
