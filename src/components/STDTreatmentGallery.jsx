import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import MenuIcon from '@mui/icons-material/Menu';
import './STDTreatmentGallery.css';

const ACCENT = '#B5838D';
const DARK_ACCENT = '#6D6875';
const PRIMARY = '#F1E4E1';

const treatments = [
  {
    condition: 'Hair Fall Treatment',
    before: '/images/bhairfall.png',
    after: '/images/ahairfall.png',
    description: 'Effective solutions to reduce hair fall and promote healthy hair growth.',
  },
  {
    condition: 'PRP Therapy',
    before: '/images/bprp.png',
    after: '/images/aprp.png',
    description: 'Platelet-rich plasma therapy for hair regrowth and skin rejuvenation.',
  },
  {
    condition: 'Hair Transplant',
    before: '/images/btransplant.png',
    after: '/images/atransplant.png',
    description: 'Advanced hair transplant techniques for natural-looking results.',
  },
];

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/#services' },
  { label: 'Our Team', to: '/#team' },
  { label: 'Contact', to: '/#contact' },
];

const STDTreatmentGallery = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box className="std-treatment-gallery">
      {/* Header with Hamburger for Mobile */}
      <AppBar
        position="static"
        elevation={1}
        sx={{
          background: '#fff',
          color: DARK_ACCENT,
          boxShadow: '0 2px 8px rgba(181,131,141,0.06)',
          mb: 4,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <Box display="flex" alignItems="center" gap={1}>
            <SpaIcon fontSize="large" sx={{ color: ACCENT }} />
            <Box>
              <Typography variant="h6" fontWeight={700} color="#444">
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
              {navLinks.map((nav) => (
                <Button
                  key={nav.label}
                  color="inherit"
                  component={Link}
                  to={nav.to}
                  sx={{ color: DARK_ACCENT }}
                >
                  {nav.label}
                </Button>
              ))}
              <Button
                variant="contained"
                component={Link}
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
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                PaperProps={{
                  style: { minWidth: 200 }
                }}
              >
                {navLinks.map((nav) => (
                  <MenuItem
                    key={nav.label}
                    component={Link}
                    to={nav.to}
                    onClick={handleMenuClose}
                  >
                    {nav.label}
                  </MenuItem>
                ))}
                <MenuItem
                  component={Link}
                  to="/ContactForm"
                  onClick={handleMenuClose}
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

      {/* Gallery Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          fontWeight={800}
          align="center"
          gutterBottom
          sx={{
            color: ACCENT,
            mb: 3,
            fontFamily: "'Playfair Display', serif",
            position: 'relative',
            '&::after': {
              content: '""',
              width: 60,
              height: 3,
              backgroundColor: ACCENT,
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              borderRadius: 2,
              display: 'block'
            }
          }}
        >
          Treatment of STDs, Hair Fall, PRP, and Hair Transplant
        </Typography>
        <Grid container spacing={4} justifyContent="center" className="gallery-container">
          {treatments.map((treatment, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="treatment-card" elevation={3} sx={{
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 30px rgba(181,131,141,0.12)'
                }
              }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h6" align="center" sx={{
                    color: DARK_ACCENT,
                    fontWeight: 700,
                    mt: 3,
                    mb: 2,
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {treatment.condition}
                  </Typography>
                  <Box className="image-container" sx={{
                    position: 'relative',
                    width: '100%',
                    height: 220,
                    overflow: 'hidden',
                    mb: 2,
                  }}>
                    <CardMedia
                      component="img"
                      image={treatment.before}
                      alt={`Before ${treatment.condition}`}
                      className="before-image"
                      sx={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 1,
                        transition: 'opacity 0.5s'
                      }}
                    />
                    <CardMedia
                      component="img"
                      image={treatment.after}
                      alt={`After ${treatment.condition}`}
                      className="after-image"
                      sx={{
                        position: 'absolute',
                        top: 0, left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0,
                        transition: 'opacity 0.5s'
                      }}
                    />
                  </Box>
                  <Typography variant="body2" sx={{
                    color: '#6b7280',
                    fontFamily: "'Lora', serif",
                    px: 3,
                    pb: 3,
                    minHeight: 60,
                    lineHeight: 1.8
                  }}>
                    {treatment.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default STDTreatmentGallery;
