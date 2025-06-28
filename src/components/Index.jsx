import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  CssBaseline,
  Paper,
  useMediaQuery,
  Divider,
  Menu,
  MenuItem
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './Index.css';

const PRIMARY = '#F1E4E1';
const ACCENT = '#B5838D';
const DARK_ACCENT = '#6D6875';
const CARD_BORDER = '#F6CED8';
const SECTION_BG = '#f0f0f0';
const CARD_BG = '#FAE6EB';
const CONSULTATION_COLOR = '#9A7B78';

const services = [
  { title: 'Skin & Nail Therapy', desc: 'Advanced solutions for acne, pigmentation, and nail conditions.', link: '/treatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
  { title: 'Laser Precision', desc: 'Luxury hair removal, resurfacing, and tattoo removal.', link: '/lasertreatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
  { title: 'Hair & STD Care', desc: 'PRP, hair restoration, and discreet STD treatments.', link: '/stdtreatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
  { title: 'Aesthetic Perfection', desc: 'Botox, fillers, and rejuvenating peels.', link: '/aesthetictreatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
  { title: 'Vitiligo Expertise', desc: 'Specialized care for vitiligo management.', link: '/vitiligotreatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
  { title: 'IPL Rejuvenation', desc: 'Intense Pulse Light for radiant skin.', link: '/ipltreatmentgallery', icon: <SpaIcon sx={{ color: ACCENT }} /> },
];

const doctors = [
  { name: 'Dr. Aashish Khurana', title: 'MBBS, M.D. - Dermatology, Trichology & Venereology', expertise: 'Pioneer in Skin Wellness', img: '/images/Dr.jpeg', link: '/drprofile' },
  { name: 'Dr. Cherry Khurana', title: 'MBBS - Aesthetics & Laser Specialist', expertise: 'Master of Aesthetic Arts', img: '/images/DrCherry.jpeg', link: '/drcherryprofile' },
];

const Index = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (e) => setMenuAnchor(e.currentTarget);
  const handleMenuClose = () => setMenuAnchor(null);

  return (
    <Box className="theme-light" sx={{ overflowX: 'hidden', minHeight: '100vh' }}>
      <CssBaseline />
      {/* Header with Hamburger for Mobile */}
      <AppBar
        position="sticky"
        elevation={1}
        className="header"
        sx={{
          background: '#fff',
          color: DARK_ACCENT,
          boxShadow: '0 2px 8px rgba(181,131,141,0.06)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <SpaIcon fontSize="large" sx={{ color: ACCENT }} />
            <Box>
              <Typography variant="h6" fontWeight={700} color='#444'>
                Dr. Khurana&apos;s Skin & Laser Clinic
              </Typography>
              <Typography variant="body2" sx={{ color: ACCENT }}>
                Luxury Dermatology & Aesthetic Excellence
              </Typography>
            </Box>
          </Box>
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box component="nav" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button color="inherit" component="a" href="#home" sx={{ color: DARK_ACCENT }}>Home</Button>
              <Button color="inherit" component="a" href="#services" sx={{ color: DARK_ACCENT }}>Services</Button>
              <Button color="inherit" component="a" href="#team" sx={{ color: DARK_ACCENT }}>Our Team</Button>
              <Button color="inherit" component="a" href="#contact" sx={{ color: DARK_ACCENT }}>Contact</Button>
              <Button
                variant="contained"
                component={RouterLink}
                to="/ContactForm"
                sx={{
                  ml: 2,
                  borderRadius: 8,
                  background: ACCENT,
                  color: '#fff',
                  fontWeight: 600,
                  boxShadow: '0 2px 8px rgba(181,131,141,0.12)',
                  '&:hover': {
                    background: DARK_ACCENT,
                  },
                }}
              >
                Book Consultation
              </Button>
            </Box>
          )}
          {/* Hamburger for Mobile */}
          {isMobile && (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: DARK_ACCENT }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: { minWidth: 200 }
                }}
              >
                <MenuItem onClick={handleMenuClose} component="a" href="#home">Home</MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="#services">Services</MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="#team">Our Team</MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="#contact">Contact</MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  component={RouterLink}
                  to="/ContactForm"
                  sx={{
                    color: '#fff',
                    background: ACCENT,
                    borderRadius: 1,
                    mt: 1,
                    '&:hover': { background: DARK_ACCENT },
                    justifyContent: 'center',
                  }}
                >
                  Book Consultation
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>


      {/* Hero Section */}
      <Box
        id="home"
        className="hero"
        sx={{
          background: `linear-gradient(120deg,${PRIMARY} 100%,#fff 0%)`,
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          textAlign: 'center',
          px: { xs: 2, sm: 4 },
        }}
      >
        <Container>
          <Typography
            variant={isMobile ? "h4" : "h2"}
            fontWeight={800}
            color={ACCENT}
            gutterBottom
            sx={{ letterSpacing: 1 }}
          >
            Elevate Your Skin&apos;s Beauty
          </Typography>
          <Typography
            variant={isMobile ? "body1" : "h5"}
            color={DARK_ACCENT}
            sx={{ mb: 3 }}
          >
            Experience bespoke dermatology and cutting-edge laser treatments in Delhi&apos;s finest clinic.
          </Typography>
          <Button
            size="large"
            variant="contained"
            component={RouterLink}
            to="/ContactForm"
            sx={{
              borderRadius: 8,
              px: 5,
              py: 1.5,
              fontWeight: 600,
              background: ACCENT,
              color: '#fff',
              boxShadow: '0 2px 8px rgba(181,131,141,0.12)',
              fontSize: { xs: '1rem', sm: '1.2rem' },
              '&:hover': { background: DARK_ACCENT },
            }}
          >
            Book Your Appointment
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ background: SECTION_BG, py: 8 }} id="services">
        <Container>
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ color: ACCENT }}
          >
            Our Signature Services
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, idx) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card
                  component={RouterLink}
                  to={service.link}
                  className="service-card"
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    transition: '0.4s',
                    boxShadow: '0 6px 25px rgba(181,131,141,0.07)',
                    textDecoration: 'none',
                    color:  ACCENT,
                    background: CARD_BG,
                    border: `1.5px solid ${CARD_BORDER}`,
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(181,131,141,0.15)',
                      borderColor: ACCENT,
                      background: '#f8d7df',
                      color: DARK_ACCENT,
                      '& .service-desc': {
                        color:  DARK_ACCENT,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', py: 4 }}>
                    <Box sx={{ mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" className="service-desc" sx={{ color: DARK_ACCENT, textAlign: 'center' }}>
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box
        id="team"
        className="team"
        sx={{
          py: 8,
          background: '#fff',
        }}
      >
        <Container>
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{ color: ACCENT }}
          >
            Our Expert Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {doctors.map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc.name} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper
                  elevation={0}
                  component={RouterLink}
                  to={doc.link}
                  className="doctor-card"
                  sx={{
                    p: 3,
                    borderRadius: 6,
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: ACCENT,
                    background: PRIMARY,
                    border: `2px solid ${CARD_BORDER}`,
                    boxShadow: '0 4px 16px rgba(181,131,141,0.08)',
                    minHeight: 300,
                    maxWidth: 350,
                    width: '100%',
                    transition: '0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '&:hover': {
                      borderColor: ACCENT,
                      boxShadow: '0 8px 24px rgba(181,131,141,0.18)',
                      background: '#fff',
                    },
                  }}
                >
                  <Avatar
                    src={doc.img}
                    alt={doc.name}
                    sx={{
                      width: 100,
                      height: 100,
                      mb: 2,
                      border: `4px solid ${ACCENT}`,
                      boxShadow: '0 2px 8px rgba(181,131,141,0.15)',
                    }}
                  />
                  <Typography variant="h6" fontWeight={700} sx={{ color: DARK_ACCENT }}>
                    {doc.name}
                  </Typography>
                  <Typography variant="body2" color={DARK_ACCENT} sx={{ mb: 1 }}>
                    {doc.title}
                  </Typography>
                  <Divider sx={{ my: 1, width: 60, mx: 'auto', bgcolor: ACCENT }} />
                  <Typography variant="subtitle2" color={ACCENT} fontStyle="italic">
                    {doc.expertise}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box sx={{ background: SECTION_BG, py: 8 }} id="contact">
  <Container>
    <Typography
      variant="h3"
      fontWeight={800}
      align="center"
      gutterBottom
      sx={{ color: ACCENT }}
    >
      Contact Us
    </Typography>
    <Box sx={{ maxWidth: 600, mx: 'auto', textAlign: 'center' }}>
      <Typography variant="body1" sx={{ mb: 2, color: '#000000'  }}>
        <b>Location:</b>{' '}
        <a
          href="https://www.google.com/maps?q=B1/50,+First+Floor,+Janak+Puri,+New+Delhi-110058,+India"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: ACCENT }}
          onMouseOver={e => (e.currentTarget.style.color = '#a0526a')}
          onMouseOut={e => (e.currentTarget.style.color = ACCENT)}
          onFocus={e => (e.currentTarget.style.color = '#a0526a')}
          onBlur={e => (e.currentTarget.style.color = ACCENT)}
        >
          B1/50, First Floor, Janak Puri, New Delhi-110058
        </a>
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: '#000000'  }}>
        <b>Phone:</b>{' '}
        <a
          href="tel:+919810858587"
          style={{ textDecoration: 'none', color: ACCENT }}
          onMouseOver={e => (e.currentTarget.style.color = '#a0526a')}
          onMouseOut={e => (e.currentTarget.style.color = ACCENT)}
          onFocus={e => (e.currentTarget.style.color = '#a0526a')}
          onBlur={e => (e.currentTarget.style.color = ACCENT)}
        >
          +91 981 085 8587
        </a>
        {' | '}
        <a
          href="tel:+919818768068"
          style={{ textDecoration: 'none', color: ACCENT }}
          onMouseOver={e => (e.currentTarget.style.color = '#a0526a')}
          onMouseOut={e => (e.currentTarget.style.color = ACCENT)}
          onFocus={e => (e.currentTarget.style.color = '#a0526a')}
          onBlur={e => (e.currentTarget.style.color = ACCENT)}
        >
          +91 981 876 8068
        </a>
      </Typography>
      <Typography variant="body1" sx={{ color: '#000000' }}>
        <b>Email:</b>{' '}
        <a
          href="mailto:khuranaskin@gmail.com"
          style={{ textDecoration: 'none', color: ACCENT }}
          onMouseOver={e => (e.currentTarget.style.color = '#a0526a')}
          onMouseOut={e => (e.currentTarget.style.color = ACCENT)}
          onFocus={e => (e.currentTarget.style.color = '#a0526a')}
          onBlur={e => (e.currentTarget.style.color = ACCENT)}
        >
          khuranaskin@gmail.com
        </a>
      </Typography>
    </Box>
  </Container>
</Box>


      {/* Virtual Consultation */}
      <Box
        id="chat"
        className="consultation"
        sx={{
          py: 8,
          background: CONSULTATION_COLOR,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography variant="h3" fontWeight={800} gutterBottom>
          Virtual Consultation
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Personalized care at your fingertips.
        </Typography>
        <Button
          variant="contained"
          component={RouterLink}
          to="/ContactForm"
          sx={{
            borderRadius: 8,
            px: 5,
            py: 1.5,
            fontWeight: 600,
            background: '#fff',
            color: CONSULTATION_COLOR,
            boxShadow: '0 2px 8px rgba(181,131,141,0.12)',
            fontSize: '1.2rem',
            '&:hover': {
              background: PRIMARY,
              color: DARK_ACCENT,
            },
          }}
        >
          Start Now
        </Button>
      </Box>

      {/* Enhanced Footer */}
      <Box
        className="footer"
        sx={{ 
          background: '#111',
          color: '#fff',
          py: 6,
          width: '100%',
        }}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Clinic Information
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOnIcon sx={{ mr: 1.5 }} />
                <Typography variant="body1">
                  B1/50, First Floor, Janak Puri, New Delhi-110058
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1.5 }} />
                <Typography variant="body1">
                  +91 981 085 8587 | +91 981 876 8068
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1.5 }} />
                <Typography variant="body1">
                  khuranaskin@gmail.com
                </Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Business Hours
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Monday - Saturday: 10:00 AM - 2:00 PM
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                Monday - Saturday: 5:00 PM - 8:00 PM
              </Typography>
              <Typography variant="body1">
                Sunday: Closed
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Button component="a" href="#home" sx={{ color: '#fff', justifyContent: 'flex-start', mb: 1 }}>
                  Home
                </Button>
                <Button component="a" href="#services" sx={{ color: '#fff', justifyContent: 'flex-start', mb: 1 }}>
                  Services
                </Button>
                <Button component="a" href="#team" sx={{ color: '#fff', justifyContent: 'flex-start', mb: 1 }}>
                  Our Team
                </Button>
                <Button component="a" href="#contact" sx={{ color: '#fff', justifyContent: 'flex-start' }}>
                  Contact
                </Button>
              </Box>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body2">
              © 2025 Dr. Khurana&apos;s Skin & Laser Clinic. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
