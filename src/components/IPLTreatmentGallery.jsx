import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './IPLTreatmentGallery.css'; // Import the CSS file

const IPLTreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Acne',
      before: '/assets/acne-before.jpg',
      after: '/assets/acne-after.jpg',
      description: 'IPL effectively reduces acne and prevents future breakouts.',
    },
    {
      condition: 'Pigmentation',
      before: '/assets/pigmentation-before.jpg',
      after: '/assets/pigmentation-after.jpg',
      description: 'Achieve even skin tone by reducing pigmentation with IPL.',
    },
    {
      condition: 'Eczema',
      before: '/assets/eczema-before.jpg',
      after: '/assets/eczema-after.jpg',
      description: 'Improve skin texture and reduce eczema-related redness with IPL.',
    },
    {
      condition: 'Psoriasis',
      before: '/assets/psoriasis-before.jpg',
      after: '/assets/psoriasis-after.jpg',
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