import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './FractionalCo2Gallery.css'; // Import the CSS file

const FractionalCo2Gallery = () => {
  const treatments = [
    {
      condition: 'Acne Scars',
      before: '/assets/acne-scar-before.jpg',
      after: '/assets/acne-scar-after.jpg',
      description: 'Fractional CO2 laser treatment effectively reduces the appearance of acne scars.',
    },
    {
      condition: 'Pigmentation',
      before: '/assets/pigmentation-before.jpg',
      after: '/assets/pigmentation-after.jpg',
      description: 'Achieve even skin tone by reducing pigmentation with Fractional CO2 laser.',
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
      description: 'Manage psoriasis and improve skin appearance with Fractional CO2 laser therapy.',
    },
  ];

  return (
    <div className="fractional-co2-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Fractional CO2 Laser for Scars</h2>
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

export default FractionalCo2Gallery;