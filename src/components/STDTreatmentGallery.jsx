import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './STDTreatmentGallery.css'; // Import the CSS file

const STDTreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Hair Fall Treatment',
      before: '/images/bhairfall.png',
      after: '/images/ahairfall.png',
      description: 'Effective solutions to reduce hair fall and promote healthy hair growth.',
      className: 'hairfall',
    },
    {
      condition: 'PRP Therapy',
      before: '/images/bprp.png',
      after: '/images/aprp.png',
      description: 'Platelet-rich plasma therapy for hair regrowth and skin rejuvenation.',
     
    },
    {
      condition: 'Hair Transplant',
      before: '/images/btransplant.png',
      after: '/images/atransplant.png',
      description: 'Advanced hair transplant techniques for natural-looking results.',
    },
  ];

  return (
    <div className="std-treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Treatment of STDs, Hair Fall, PRP, and Hair Transplant</h2>
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

export default STDTreatmentGallery;