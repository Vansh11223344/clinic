import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './IPLTreatmentGallery.css'; // Import the CSS file

const IPLTreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Acne',
      before: '/images/bacne.png',
      after: '/images/aacne.png',
      description: 'IPL effectively reduces acne and prevents future breakouts.',
    },
    {
      condition: 'Pigmentation',
      before: '/images/bpigmentation.png',
      after: '/images/apigmentation.png',
      description: 'Achieve even skin tone by reducing pigmentation with IPL.',
    },
    {
      condition: 'Eczema',
      before: '/images/beczema.png',
      after: '/images/aeczema.png',
      description: 'Improve skin texture and reduce eczema-related redness with IPL.',
    },
    {
      condition: 'Psoriasis',
      before: '/images/bpsoriasis.png',
      after: '/images/apsoriasis.png',
      description: 'Manage psoriasis and improve skin appearance with IPL therapy.',
    },
  ];

  return (
    <div className="ipl-treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Intense Pulse Light (IPL) Treatments</h2>
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

export default IPLTreatmentGallery;