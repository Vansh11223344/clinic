import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ACCENT = '#B5838D';
const DARK_ACCENT = '#6D6875';
const PRIMARY = '#F1E4E1';

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
      .then(() => {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      })
      .catch(() => {
        setError('Failed to send message. Please try again.');
      });
  };

  return (
    <Container
      maxWidth="sm"
      className="contact-form-container"
      sx={{
        mt: 5,
        mb: 5,
        p: { xs: 2, sm: 4 },
        boxShadow: 3,
        borderRadius: 3,
        background: `linear-gradient(135deg, ${PRIMARY} 0%, #f0f4f8 100%)`,
        fontFamily: "'Lora', serif",
      }}
    >
      <Box sx={{ mb: 4 }} className="form-header">
        <Link to="/" className="home-link" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: ACCENT,
              color: '#fff',
              borderRadius: 25,
              fontWeight: 600,
              textTransform: 'none',
              px: 3,
              py: 1,
              fontSize: '15px',
              '&:hover': {
                backgroundColor: DARK_ACCENT,
              },
              boxShadow: 'none',
            }}
          >
            Back to Home
          </Button>
        </Link>
      </Box>
      <Typography variant="h4" align="center" gutterBottom sx={{
        fontWeight: 700,
        background: `linear-gradient(90deg, ${DARK_ACCENT}, ${ACCENT})`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        Connect Digitally
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom className="form-subtitle">
        Reach out for expert skin care advice online.
      </Typography>
      {submitted ? (
        <Box sx={{
          textAlign: 'center',
          p: 3,
          background: '#f0f4f8',
          borderRadius: 2
        }} className="success-message">
          <Typography variant="h5" sx={{ color: '#2b2d42', mb: 1 }}>
            Message Sent!
          </Typography>
          <Typography variant="body1" sx={{
            color: '#6b7280',
            mb: 3,
            fontFamily: "'Lora', serif"
          }}>
            Thank you for reaching out. Our team will respond to you shortly.
          </Typography>
          <Link to="/" className="return-link" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: ACCENT,
                color: '#fff',
                borderRadius: 25,
                fontWeight: 600,
                textTransform: 'none',
                px: 3,
                py: 1,
                fontSize: '15px',
                '&:hover': {
                  backgroundColor: DARK_ACCENT,
                },
                boxShadow: 'none',
              }}
            >
              Return to Home
            </Button>
          </Link>
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {error && <Alert severity="error" className="error-message">{error}</Alert>}

          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, background: '#fff' } }}
          />

          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, background: '#fff' } }}
          />

          <TextField
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            fullWidth
            InputProps={{ sx: { borderRadius: 2, background: '#fff' } }}
          />

          <TextField
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your skin care needs"
            required
            multiline
            minRows={4}
            fullWidth
            InputProps={{ sx: { borderRadius: 2, background: '#fff' } }}
          />

          <Button
            type="submit"
            variant="contained"
            className="submit-button"
            sx={{
              backgroundColor: ACCENT,
              color: '#fff',
              borderRadius: 25,
              fontWeight: 600,
              py: 1.5,
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              letterSpacing: 1,
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: DARK_ACCENT,
              }
            }}
          >
            Submit Request
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default ContactForm;
