import React, { useState } from "react";
import "./Microneedling.css";
import { Link } from 'react-router-dom';

const conditions = [
  {
    name: "Acne",
    before: "acne-before.jpg",
    after: "acne-after.jpg",
    description: "Microneedling reduces acne scars and promotes smoother skin texture.",
  },
  {
    name: "Pigmentation",
    before: "pigmentation-before.jpg",
    after: "pigmentation-after.jpg",
    description: "Helps fade hyperpigmentation and even out skin tone.",
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
    description: "Improves psoriasis symptoms and promotes healthier skin.",
  },
];

const Microneedling = () => {
  const [hoveredCondition, setHoveredCondition] = useState(null);

  return (
    <div className="microneedling-app">
       <nav className="navbar">
              <Link to="/" className="home-link">Home</Link>
            </nav>
            <h2>Treatment of Microneedling</h2>
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

export default Microneedling;