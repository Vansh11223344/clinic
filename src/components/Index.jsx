import React from 'react';
import './Index.css'; // Import the CSS file
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>Dr. Khurana's Skin & Laser Clinic</h1>
          <p>Delhi's Premier Dermatology & Aesthetics Center</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#chat">Online Consultation</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Your Skin, Our Passion</h2>
          <p>Experience world-class dermatology and laser treatments in the heart of Delhi.</p>
          <button className="cta-button">Book an Appointment</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Treatment of Skin, Hair and Nail Diseases</h3>
            <p>Acne, Pigmentation, Eczema, Psoriasis, and more.</p>
          </div>
          <div className="card">
            <h3>Laser Hair Treatments</h3>
            <p>Hair Removal, Skin Resurfacing, Tattoo Removal, and more.</p>
          </div>
          <div className="card">
            <h3>Treatment of STD's</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Radio Frequency Surgery</h3>
            <p>Botox, Fillers, Chemical Peels, and more.</p>
          </div>
          <div className="card">
            <h3>Treatment of Vitiligo</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Fractional Co2 Laser for Scars</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Q Switch ND YAG Laser</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Intense Pulse Light</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Microdermabrasion</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Chemical Peels</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Microneedling</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Profhilo</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>Botox</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
          <div className="card">
            <h3>TPRP</h3>
            <p>Hair Fall, PRP, Hair Transplant, and more.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>About Us</h2>
        <div className="about-content">
        <Link to="/drprofile" style={{ textDecoration: "none", color: "black" }}>
  <div className="doctor">
    <h3>Dr. Aashish Khurana</h3>
    <p>MBBS, M.D. - Dermatologist, Trichologist, and Venereologist</p>
  </div>
</Link>
<Link to="/drcherryprofile" style={{ textDecoration: "none", color: "black" }}>
  <div className="doctor">
    <h3>Dr. Cherry Khurana</h3>
    <p>MBBS (Aesthetics and Laser)</p>
  </div>
</Link>
</div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
  Address: 
  <a 
    href="https://www.google.com/maps?q=B1/50,+First+Floor,+Janak+Puri,+New+Delhi-110058,+India" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "#0077b6", textDecoration: "none" }}
  >
    B1/50, First Floor, Janak Puri, New Delhi-110058, India
  </a>
</p>

        <p>
  Phone: 
  <a href="tel:+919810858587" style={{ color: "#0077b6", textDecoration: "none" }}> +91 981 085 8587</a><br/>
  <a href="tel:+919818768068" style={{ color: "#0077b6", textDecoration: "none" }}> +91 981 876 8068</a>
</p>

        <p>Email: <a href="mailto:khuranaskin@gmail.com" style={{ color: "#0077b6", textDecoration: "none" }}>khuranaskin@gmail.com</a></p>

      </section>

      {/* Chat Section */}
      <section id="chat" className="chat">
        <h2>Online Consultation</h2>
        <p>Chat with our doctors for personalized advice.</p>
        <button className="chat-button">Start Chat</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Dr. Khurana's Skin & Laser Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;