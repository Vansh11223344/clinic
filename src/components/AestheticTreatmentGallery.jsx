import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import './AestheticTreatmentGallery.css'; // Import the CSS file

const AestheticTreatmentGallery = () => {
  const treatments = [
    {
      condition: 'Radio Frequency Surgery',
      before: '/public/bradio.png',
      after: '/public/aradio.png',
      description: 'Non-invasive skin tightening and rejuvenation using radio frequency technology.',
    },
    {
      condition: 'Botox',
      before: '/public/bbotax.png',
      after: '/public/abotax.png',
      description: 'Reduce wrinkles and fine lines with safe and effective Botox treatments.',
    },
    {
      condition: 'Fillers',
      before: '/public/bfiller.png',
      after: '/public/afiller.png',
      description: 'Restore volume and enhance facial contours with dermal fillers.',
    },
    {
      condition: 'Chemical Peels',
      before: '/public/bpigmentation.png',
      after: '/public/apigmentation.png',
      description: 'Improve skin texture and tone with customized chemical peel treatments.',
    },
  ];

  return (
    <div className="aesthetic-treatment-gallery">
      <nav className="navbar">
        <Link to="/" className="home-link">Home</Link>
      </nav>
      <h2>Radio Frequency Surgery, Botox, Fillers, and Chemical Peels</h2>
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

export default AestheticTreatmentGallery;