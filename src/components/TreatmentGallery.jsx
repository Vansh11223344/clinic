import React from 'react';
import './TreatmentGallery.css'; // Import the CSS file

const TreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Acne',
      before: '/assets/acne-before.jpg',
      after: '/assets/acne-after.jpg',
      description: 'Effective treatment for acne, reducing inflammation and preventing scarring.',
    },
    {
      condition: 'Pigmentation',
      before: '/assets/pigmentation-before.jpg',
      after: '/assets/pigmentation-after.jpg',
      description: 'Advanced laser treatments to reduce pigmentation and even out skin tone.',
    },
    {
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
    },
  ];

  return (
    <div className="treatment-gallery">
      <h2>Treatment of Skin, Hair, and Nail Diseases</h2>
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