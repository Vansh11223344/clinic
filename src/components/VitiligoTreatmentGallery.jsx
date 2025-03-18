import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './VitiligoTreatmentGallery.css'; // Import the CSS file

const VitiligoTreatmentGallery = () => {
  const treatments = [
   
    {
      condition: 'Acne Treatment',
      before: '/images/bacne.png',
      after: '/images/aacne.png',
      description: 'Effective solutions to reduce acne and prevent scarring.',
    },
    {
      condition: 'Pigmentation Treatment',
      before: '/images/bpigmentation.png',
      after: '/images/apigmentation.png',
      description: 'Reduce pigmentation and achieve an even skin tone.',
    },
    {
      condition: 'Eczema Treatment',
      before: '/images/beczema.png',
      after: '/images/aeczema.png',
      description: 'Personalized care to soothe eczema and restore skin health.',
    },
    {
      condition: 'Psoriasis Treatment',
      before: '/images/bpsoriasis.png',
      after: '/images/apsoriasis.png',
      description: 'Targeted treatments to manage psoriasis and improve skin texture.',
    },
  ];

  return (
    <div className="vitiligo-treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Treatment of Vitiligo and Related Skin Conditions</h2>
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

export default VitiligoTreatmentGallery;