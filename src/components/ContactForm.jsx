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

    const serviceID = 'service_nemnvdp';
    const templateID = 'template_24frk1a';
    const userID = 'wa7lu9PVLioBjqoC7';

    const emailParams = {
      ...formData,
      to_email: 'guptavansh@gmail.com',
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
      <header>
        <Link to="/" className="home-link">Back to Home</Link>
      </header>
      <h2>Contact Us</h2>
      {submitted ? (
        <p className="success-message">Thank you for contacting us! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
