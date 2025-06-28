import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Divider,
  Stack,
  useMediaQuery,
  Container
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './DrCherryProfile.css';

const ACCENT = '#B5838D';
const DARK_ACCENT = '#6D6875';
const PRIMARY = '#F1E4E1';

const doctorInfoData = [
  { title: 'Speciality', content: 'Aesthetics & Laser Specialist' },
  { title: 'Education', content: [
    { degree: 'MBBS' }
  ]},
  { title: 'Professional Memberships', content: [
    'American Academy of Aesthetic Science'
  ]}
];

const InfoSection = ({ title, content }) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === 'object' && content[0].degree) {
        return (
          <ul>
            {content.map((item, idx) => (
              <li key={idx}>
                <strong>{item.degree}</strong>
              </li>
            ))}
          </ul>
        );
      } else {
        return (
          <ul>
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      }
    } else {
      return <Typography variant="body1" sx={{ color: '#000', fontFamily: "'Lora', serif", fontSize: '1.1rem' }}>{content}</Typography>;
    }
  };

  return (
    <Box sx={{ mb: 3, textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={{ color: ACCENT, fontWeight: 700, mb: 1, fontSize: '1.2rem' }}>{title}</Typography>
      {renderContent()}
    </Box>
  );
};

const DrCherryProfile = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box className="dr-cherry-profile" sx={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${PRIMARY} 0%, #f0f4f8 100%)`,
      py: { xs: 2, md: 4 }
    }}>
      {/* Full-width Header */}
      <Box
        sx={{
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          mb: 5,
        }}
      >
        <Card
          elevation={3}
          sx={{
            borderRadius: 0,
            background: `linear-gradient(90deg, ${DARK_ACCENT} 0%, ${ACCENT} 100%)`,
            color: '#fff',
            px: { xs: 3, md: 4 },
            py: { xs: 2, md: 3 },
            maxWidth: '100vw',
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant={isMobile ? 'h5' : 'h4'} fontWeight={700}>
              Dr. Cherry Khurana
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: "'Lora', serif" }}>
              MBBS | Aesthetics & Laser Specialist
            </Typography>
          </Box>
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{
              backgroundColor: ACCENT,
              color: '#fff',
              borderRadius: 25,
              fontWeight: 600,
              textTransform: 'none',
              px: 3,
              py: 1,
              fontSize: '15px',
              boxShadow: 'none',
              '&:hover': { backgroundColor: DARK_ACCENT }
            }}
          >
            Back to Home
          </Button>
        </Card>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {/* Doctor Info Section (Enlarged) */}
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}>
            <Card className="profile-card" elevation={2} sx={{
              borderRadius: 3,
              mb: { xs: 3, md: 0 },
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <CardContent sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pb: 2,
                width: '100%'
              }}>
                <CardMedia
                  component="img"
                  image="/images/DrCherry.jpeg"
                  alt="Dr. Cherry Khurana"
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 3,
                    boxShadow: '0 4px 15px rgba(181,131,141,0.15)'
                  }}
                />
                <Divider sx={{ width: '60%', my: 2, bgcolor: ACCENT }} />
                <Typography variant="h5" align="center" sx={{ color: DARK_ACCENT, mb: 2, fontWeight: 700 }}>
                  Professional Information
                </Typography>
                <Stack spacing={2} sx={{ width: '100%', alignItems: 'center' }}>
                  {doctorInfoData.map((item, idx) => (
                    <InfoSection key={idx} title={item.title} content={item.content} />
                  ))}
                </Stack>
                <Divider sx={{ width: '60%', my: 3, bgcolor: ACCENT }} />
                <Box sx={{ textAlign: 'center', mt: 2, width: '100%' }}>
                  <Link to="/ContactForm" style={{ textDecoration: 'none' }}>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: ACCENT,
                        color: '#fff',
                        borderRadius: 25,
                        fontWeight: 600,
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        boxShadow: 'none',
                        '&:hover': { backgroundColor: DARK_ACCENT }
                      }}
                    >
                      Book an Appointment
                    </Button>
                  </Link>
                  <Typography variant="body1" sx={{ color: DARK_ACCENT, mt: 2, fontFamily: "'Lora', serif" }}>
                    Consultation Fee: ₹ at clinic
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Clinic Info and About Section */}
          <Grid item xs={12} md={6}>
            <Card className="profile-card" elevation={2} sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ color: ACCENT, fontWeight: 700, mb: 2 }}>
                    About Khurana's Skin Clinic & Laser Centre
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#000', 
                    fontFamily: "'Lora', serif", 
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}>
                    Khurana's Skin Clinic & Laser Centre is a premier dermatology and aesthetics clinic dedicated to personalized treatment plans, state-of-the-art technology, and holistic care. We specialize in treatments for skin, hair, and nail concerns, utilizing advanced lasers and cutting-edge techniques.
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ color: ACCENT, fontWeight: 700, mb: 2 }}>
                    About Dr. Cherry Khurana
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#000', 
                    fontFamily: "'Lora', serif", 
                    lineHeight: 1.8,
                    fontSize: '1.1rem'
                  }}>
                    Dr. Cherry Khurana is an MBBS graduate with specialized expertise in aesthetics and laser treatments. Committed to delivering exceptional results, she combines her extensive knowledge with a patient-centric approach to ensure the highest standards of care.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DrCherryProfile;
