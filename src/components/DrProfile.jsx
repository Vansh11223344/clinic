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
import './DrProfile.css';

const ACCENT = '#B5838D';
const DARK_ACCENT = '#6D6875';
const PRIMARY = '#F1E4E1';

const doctorInfoData = [
  { title: 'Speciality', content: 'Dermatologist' },
  { title: 'Other Treatment Areas', content: 'Dermatologist / Cosmetologist' },
  { title: 'Education', content: [
    { degree: 'MBBS', institution: 'KIMS HUBLI', year: 1997 },
    { degree: 'MD Dermatology', institution: 'M.R Medical College', year: 2002 }
  ]},
  { title: 'Languages Spoken', content: ['English', 'Hindi'] },
  { title: 'Professional Member', content: [
    'Indian Association of Dermatologists Venereologists and Leprologists (IADVL)',
    'AAAM',
    'Cosmetic Dermatology Society of India (CDSI)'
  ]}
];

const InfoSection = ({ title, content }) => {
  const renderContent = () => {
    if (Array.isArray(content)) {
      if (content.length > 0 && typeof content[0] === 'object' && content[0].degree) {
        // Education list
        return (
          <ul>
            {content.map((item, idx) => (
              <li key={idx}>
                <strong>{item.degree}</strong> - {item.institution}, {item.year}
              </li>
            ))}
          </ul>
        );
      } else {
        // Simple list
        return (
          <ul>
            {content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        );
      }
    } else {
      return <Typography variant="body1" sx={{ color: '#000', fontFamily: "'Lora', serif" }}>{content}</Typography>;
    }
  };

  return (
    <Box sx={{ mb: 2, textAlign: 'center' }}>
      <Typography variant="subtitle1" sx={{ color: ACCENT, fontWeight: 600, mb: 1 }}>{title}</Typography>
      {renderContent()}
    </Box>
  );
};

const DrProfile = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box className="dr-profile" sx={{
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${PRIMARY} 0%, #f0f4f8 100%)`,
      py: { xs: 2, md: 4 }
    }}>
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
              Dr. Aashish Khurana
            </Typography>
            <Typography variant="subtitle1" sx={{ fontFamily: "'Lora', serif" }}>
              Dermatologist&nbsp;|&nbsp;28 Years of Experience
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
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="stretch" justifyContent="center">
          {/* Left: Doctor Info */}
          <Grid item xs={12} md={5} sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Card className="profile-card" elevation={2} sx={{
              borderRadius: 3,
              mb: { xs: 3, md: 0 },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
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
                  image="/images/Dr.jpeg"
                  alt="Dr. Aashish Khurana"
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    mb: 2,
                    boxShadow: '0 4px 15px rgba(181,131,141,0.15)'
                  }}
                />
                <Divider sx={{ width: '60%', my: 2, bgcolor: ACCENT }} />
                <Typography variant="h6" align="center" sx={{ color: DARK_ACCENT, mb: 1 }}>
                  Doctor Information
                </Typography>
                <Stack spacing={1} sx={{ width: '100%', alignItems: 'center' }}>
                  {doctorInfoData.map((item, idx) => (
                    <InfoSection key={idx} title={item.title} content={item.content} />
                  ))}
                </Stack>
                <Divider sx={{ width: '60%', my: 2, bgcolor: ACCENT }} />
                <Button
                  component={Link}
                  to="/ContactForm"
                  variant="contained"
                  sx={{
                    backgroundColor: ACCENT,
                    color: '#fff',
                    borderRadius: 25,
                    fontWeight: 600,
                    px: 4,
                    py: 1.2,
                    fontSize: '1rem',
                    mb: 1.5,
                    boxShadow: 'none',
                    '&:hover': { backgroundColor: DARK_ACCENT }
                  }}
                >
                  Book an Appointment
                </Button>
                <Typography variant="caption" sx={{ color: DARK_ACCENT }}>
                  Consultation Fee: ₹ at clinic
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Right: Personal Statement and About */}
          <Grid item xs={12} md={7}>
            <Card className="profile-card" elevation={2} sx={{ borderRadius: 3, height: '100%' }}>
              <CardContent>
                <Typography variant="h6" sx={{ color: ACCENT, fontWeight: 700, mb: 1 }}>
                  Personal Statement
                </Typography>
                <Typography variant="body1" sx={{ color: '#000', mb: 3, fontFamily: "'Lora', serif" }}>
                  "My favorite part of being a doctor is the opportunity to directly improve the health and wellbeing of my patients and to develop professional and personal relationships with them."
                </Typography>
                <Divider sx={{ mb: 3, bgcolor: ACCENT }} />
                <Typography variant="h6" sx={{ color: ACCENT, fontWeight: 700, mb: 1 }}>
                  About Dr. Aashish Khurana
                </Typography>
                <Typography variant="body1" sx={{ color: '#000', mb: 2, fontFamily: "'Lora', serif" }}>
                  Dr. Aashish Khurana is a renowned dermatologist in Janakpuri, Delhi, with over 27+ years of experience. He holds an <b>MBBS</b> from KIMS Hubli (1997) and an <b>MD in Dermatology</b> from M.R Medical College (2002). Patients can consult him at Khurana's Skin Clinic for expert care.
                </Typography>
                <Typography variant="body1" sx={{ color: '#000', fontFamily: "'Lora', serif" }}>
                  Khurana's Skin Clinic & Laser Centre is a premier destination for dermatology and aesthetics, offering personalized treatment plans with cutting-edge technology. We specialize in skin, hair, and nail treatments, utilizing advanced lasers and modern techniques.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DrProfile;
