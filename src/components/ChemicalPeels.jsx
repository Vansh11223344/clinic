import React, { useState } from "react";
import "./ChemicalPeels.css";
import { Link } from 'react-router-dom';

const conditions = [
  {
    name: "Acne",
    before: "acne-before.jpg",
    after: "acne-after.jpg",
    description: "Chemical peels reduce acne scars and unclog pores for clearer skin.",
  },
  {
    name: "Pigmentation",
    before: "pigmentation-before.jpg",
    after: "pigmentation-after.jpg",
    description: "Effective in reducing dark spots and achieving an even skin tone.",
  },
  {
    name: "Eczema",
    before: "eczema-before.jpg",
    after: "eczema-after.jpg",
    description: "Soothes eczema-prone skin and reduces redness and flakiness.",
  },
  {
    name: "Psoriasis",
    before: "psoriasis-before.jpg",
    after: "psoriasis-after.jpg",
    description: "Improves psoriasis symptoms and promotes smoother, healthier skin.",
  },
];

const ChemicalPeels = () => {
  const [hoveredCondition, setHoveredCondition] = useState(null);

  return (
    <div className="chemical-peels">
      <nav className="navbar">
              <Link to="/" className="home-link">Home</Link>
            </nav>
      <div className="conditions-grid">
        {conditions.map((condition, index) => (
          <div
            key={index}
            className="condition-card"
            onMouseEnter={() => setHoveredCondition(index)}
            onMouseLeave={() => setHoveredCondition(null)}
          >
            <div className="image-container">
              <img
                src={condition.before}
                alt={`${condition.name} Before`}
                className={`before-image ${
                  hoveredCondition === index ? "fade-out" : ""
                }`}
              />
              <img
                src={condition.after}
                alt={`${condition.name} After`}
                className={`after-image ${
                  hoveredCondition === index ? "fade-in" : ""
                }`}
              />
            </div>
            <h2>{condition.name}</h2>
            <p>{condition.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChemicalPeels;