import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './QSwitchNDYagGallery.css'; // Import the CSS file

const QSwitchNDYagGallery = () => {
  const treatments = [
    {
      condition: 'Acne',
      before: '/assets/acne-before.jpg',
      after: '/assets/acne-after.jpg',
      description: 'Q-Switch ND YAG Laser effectively treats acne and reduces acne scars.',
    },
    {
      condition: 'Pigmentation',
      before: '/assets/pigmentation-before.jpg',
      after: '/assets/pigmentation-after.jpg',
      description: 'Achieve even skin tone by reducing pigmentation with Q-Switch ND YAG Laser.',
    },
    {
      condition: 'Eczema',
      before: '/assets/eczema-before.jpg',
      after: '/assets/eczema-after.jpg',
      description: 'Improve skin texture and reduce eczema-related scarring with advanced laser treatment.',
    },
    {
      condition: 'Psoriasis',
      before: '/assets/psoriasis-before.jpg',
      after: '/assets/psoriasis-after.jpg',
      description: 'Manage psoriasis and improve skin appearance with Q-Switch ND YAG Laser therapy.',
    },
  ];

  return (
    <div className="qswitch-ndyag-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Q-Switch ND YAG Laser Treatments</h2>
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

export default QSwitchNDYagGallery;