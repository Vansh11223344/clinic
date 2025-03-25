import React from 'react';
import './Index.css';
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>Dr. Khurana's Skin & Laser Clinic</h1>
          <p>Luxury Dermatology & Aesthetic Excellence</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link to="/consultation">Book Consultation</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Elevate Your Skin’s Beauty</h2>
          <p>Experience bespoke dermatology and cutting-edge laser treatments in Delhi’s finest clinic.</p>
          <Link to="/ContactForm">
            <button className="cta-button">Book Your Appointment</button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <h2>Our Signature Services</h2>
        <div className="service-cards">
          <Link to="/treatmentgallery">
            <div className="card">
              <h3>Skin & Nail Therapy</h3>
              <p>Advanced solutions for acne, pigmentation, and nail conditions.</p>
            </div>
          </Link>
          <Link to="/lasertreatmentgallery">
            <div className="card">
              <h3>Laser Precision</h3>
              <p>Luxury hair removal, resurfacing, and tattoo removal.</p>
            </div>
          </Link>
          <Link to="/stdtreatmentgallery">
            <div className="card">
              <h3>Hair & STD Care</h3>
              <p>PRP, hair restoration, and discreet STD treatments.</p>
            </div>
          </Link>
          <Link to="/aesthetictreatmentgallery">
            <div className="card">
              <h3>Aesthetic Perfection</h3>
              <p>Botox, fillers, and rejuvenating peels.</p>
            </div>
          </Link>
          <Link to="/vitiligotreatmentgallery">
            <div className="card">
              <h3>Vitiligo Expertise</h3>
              <p>Specialized care for vitiligo management.</p>
            </div>
          </Link>
          <Link to="/ipltreatmentgallery">
            <div className="card">
              <h3>IPL Rejuvenation</h3>
              <p>Intense Pulse Light for radiant skin.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <h2>Our Expert Team</h2>
        <div className="about-content">
          <Link to="/drprofile">
            <div className="doctor-card">
              <div className="doctor-image doctor1"></div>
              <h3>Dr. Aashish Khurana</h3>
              <p>MBBS, M.D. - Dermatology, Trichology & Venereology</p>
              <span className="expertise">Pioneer in Skin Wellness</span>
            </div>
          </Link>
          <Link to="/drcherryprofile">
            <div className="doctor-card">
              <div className="doctor-image doctor2"></div>
              <h3>Dr. Cherry Khurana</h3>
              <p>MBBS - Aesthetics & Laser Specialist</p>
              <span className="expertise">Master of Aesthetic Arts</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p><strong>Location:</strong> <a href="https://www.google.com/maps?q=B1/50,+First+Floor,+Janak+Puri,+New+Delhi-110058,+India" target="_blank" rel="noopener noreferrer">B1/50, First Floor, Janak Puri, New Delhi-110058</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919810858587">+91 981 085 8587</a> | <a href="tel:+919818768068">+91 981 876 8068</a></p>
          <p><strong>Email:</strong> <a href="mailto:khuranaskin@gmail.com">khuranaskin@gmail.com</a></p>
        </div>
      </section>

      {/* Consultation Section */}
      <section id="chat" className="consultation">
        <h2>Virtual Consultation</h2>
        <p>Personalized care at your fingertips.</p>
        <Link to="/ContactForm">
          <button className="cta-button">Start Now</button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Dr. Khurana's Skin & Laser Clinic. Copyright Reserved.</p>
      </footer>
    </div>
  );
};

export default Index;