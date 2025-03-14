// App.jsx
import React, { useState } from "react";
import "./Pbt.css";
import { Link } from 'react-router-dom';

const treatments = [
  {
    name: "Profhilo",
    conditions: [
      {
        name: "Acne",
        before: "profhilo-acne-before.jpg",
        after: "profhilo-acne-after.jpg",
        description: "Profhilo improves skin hydration and reduces acne scars.",
      },
      {
        name: "Pigmentation",
        before: "profhilo-pigmentation-before.jpg",
        after: "profhilo-pigmentation-after.jpg",
        description: "Reduces pigmentation and enhances skin glow.",
      },
    ],
  },
  {
    name: "Botox",
    conditions: [
      {
        name: "Eczema",
        before: "botox-eczema-before.jpg",
        after: "botox-eczema-after.jpg",
        description: "Botox helps soothe eczema-prone skin and reduces redness.",
      },
      {
        name: "Psoriasis",
        before: "botox-psoriasis-before.jpg",
        after: "botox-psoriasis-after.jpg",
        description: "Improves psoriasis symptoms and promotes smoother skin.",
      },
    ],
  },
  {
    name: "TPRP",
    conditions: [
      {
        name: "Acne",
        before: "tprp-acne-before.jpg",
        after: "tprp-acne-after.jpg",
        description: "TPRP reduces acne scars and promotes collagen production.",
      },
      {
        name: "Pigmentation",
        before: "tprp-pigmentation-before.jpg",
        after: "tprp-pigmentation-after.jpg",
        description: "Effective in treating pigmentation and uneven skin tone.",
      },
    ],
  },
];

const PBT = () => {
  const [hoveredCondition, setHoveredCondition] = useState(null);

  return (
    <div className="app">
         <nav className="navbar">
              <Link to="/" className="home-link">Home</Link>
            </nav>
        <h1>Skin Treatment Before & After</h1>
       
      <div className="treatments-container">
        {treatments.map((treatment, index) => (
          <div key={index} className="treatment-section">
            <h2>{treatment.name}</h2>
            <div className="conditions-grid">
              {treatment.conditions.map((condition, idx) => (
                <div
                  key={idx}
                  className="condition-card"
                  onMouseEnter={() => setHoveredCondition(`${index}-${idx}`)}
                  onMouseLeave={() => setHoveredCondition(null)}
                >
                  <div className="image-container">
                    <img
                      src={condition.before}
                      alt={`${condition.name} Before`}
                      className={`before-image ${
                        hoveredCondition === `${index}-${idx}` ? "fade-out" : ""
                      }`}
                    />
                    <img
                      src={condition.after}
                      alt={`${condition.name} After`}
                      className={`after-image ${
                        hoveredCondition === `${index}-${idx}` ? "fade-in" : ""
                      }`}
                    />
                  </div>
                  <h3>{condition.name}</h3>
                  <p>{condition.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PBT;