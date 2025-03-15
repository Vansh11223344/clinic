import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './LaserTreatmentGallery.css'; // Import the CSS file

const LaserTreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Laser Hair Removal',
      before: '/public/bearhair.png',
      after: '/public/aearhair.png',
      description: 'Permanent hair reduction with advanced laser technology for smooth, hair-free skin.',
    },
    {
      condition: 'Laser Skin Resurfacing',
      before: '/public/bcrowsfeet.png',
      after: '/public/acrowsfeet.png',
      description: 'Restore your skin’s youthful glow by reducing wrinkles, scars, and blemishes.',
    },
    {
      condition: 'Laser Tattoo Removal',
      before: '/public/btatto.png',
      after: '/public/atatto.png',
      description: 'Safe and effective removal of unwanted tattoos with minimal scarring.',
    },
  ];

  return (
    <div className="laser-treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Laser Hair Treatments</h2>
      <div className="gallery-container">
        {treatments.map((treatment, index) => (
          <div key={index} className="treatment-card">
            <h3>{treatment.condition}</h3>
            <div className="image-container">
              <img src={treatment.before} alt={`Before ${treatment.condition}`} className="before-image" />
              <img src={treatment.after} alt={`After ${treatment.condition}`} className="after-image" />
            </div>
            <p>{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaserTreatmentGallery;