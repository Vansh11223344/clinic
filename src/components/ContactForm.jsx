import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    setError(null);

    const serviceID = 'service_wmabeqm';
    const templateID = 'template_p4f6fkp';
    const userID = 'o9lFZn7YhCkkM7uQg';

    const emailParams = {
      ...formData,
      to_email: 'khuranaskin45@gmail.com',
    };

    emailjs.send(serviceID, templateID, emailParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.text);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <div className="contact-form-container">
      <header className="form-header">
        <Link 
          to="/" 
          className="home-link"
        >
          Back to Home
        </Link>
      </header>
      <h2>Connect Digitally</h2>
      <p className="form-subtitle">Reach out for expert skin care advice online.</p>
      {submitted ? (
        <div className="success-message">
          <h3>Message Sent!</h3>
          <p>Thank you for reaching out. Our team will respond to you shortly.</p>
          <Link to="/" className="return-link">Return to Home</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your skin care needs"
              required
            />
          </div>

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;