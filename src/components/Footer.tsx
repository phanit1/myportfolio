import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Stack,
  useTheme,
} from '@mui/material';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const theme = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'common.white',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Phaneendhar<Box component="span" color="primary.main">Thota</Box>
            </Typography>
            <Typography color="grey.400" paragraph>
              Full Stack Developer passionate about creating responsive and user-friendly web applications.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton
                href="https://github.com/phanit1"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/phaneendhar-thota/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'grey.400', '&:hover': { color: 'common.white' } }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  color="grey.400"
                  underline="hover"
                  sx={{ '&:hover': { color: 'common.white' } }}
                >
                  {item}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="medium" gutterBottom>
              Contact Info
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box color="primary.main">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </Box>
                <Typography color="grey.400">
                  tphaneendhar1@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box color="primary.main">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </Box>
                <Typography color="grey.400">
                  Vijayawada, India
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: 1,
            borderColor: 'grey.800',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography color="grey.400" textAlign={{ xs: 'center', md: 'left' }}>
            © {new Date().getFullYear()} Phaneendhar Thota. All rights reserved.
          </Typography>

          <IconButton
            onClick={scrollToTop}
            sx={{
              bgcolor: 'primary.main',
              color: 'common.white',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            <ArrowUp size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;