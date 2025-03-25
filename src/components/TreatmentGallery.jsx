import React from 'react';
import './TreatmentGallery.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const TreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Acne',
      before: '/images/bacne.png',
      after: '/images/aacne.png',
      description: 'Effective treatment for acne, reducing inflammation and preventing scarring.',
    },
    {
      condition: 'Pigmentation',
      before: '/images/bpigmentation.png',
      after: '/images/apigmentation.png',
      description: 'Advanced laser treatments to reduce pigmentation and even out skin tone.',
    },
    // Uncomment and add more treatments as needed
    /*{
      condition: 'Eczema',
      before: '/assets/eczema-before.jpg',
      after: '/assets/eczema-after.jpg',
      description: 'Personalized care to soothe eczema and restore skin health.',
    },
    {
      condition: 'Psoriasis',
      before: '/assets/psoriasis-before.jpg',
      after: '/assets/psoriasis-after.jpg',
      description: 'Targeted treatments to manage psoriasis and improve skin texture.',
    },*/
  ];

  return (
    <div className="treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Back to Home</Link>
      </nav>
      <h2>Treatment of Skin, Hair, and Nail Conditions</h2>
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

export default TreatmentGallery;