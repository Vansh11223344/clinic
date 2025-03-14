// App.jsx
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import "./Microdermabrasion.css";

const conditions = [
  {
    name: "Acne",
    before: "acne-before.jpg",
    after: "acne-after.jpg",
    description: "Microdermabrasion helps reduce acne scars and improve skin texture.",
  },
  {
    name: "Pigmentation",
    before: "pigmentation-before.jpg",
    after: "pigmentation-after.jpg",
    description: "Effective in reducing hyperpigmentation and evening out skin tone.",
  },
  {
    name: "Eczema",
    before: "eczema-before.jpg",
    after: "eczema-after.jpg",
    description: "Soothes eczema-prone skin and reduces redness and irritation.",
  },
  {
    name: "Psoriasis",
    before: "psoriasis-before.jpg",
    after: "psoriasis-after.jpg",
    description: "Improves psoriasis symptoms and promotes smoother skin.",
  },
];

const Microdermabrasion = () => {
  const [hoveredCondition, setHoveredCondition] = useState(null);

  return (
    <div className="app">
      
      <nav>
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

export default Microdermabrasion;