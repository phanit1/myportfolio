import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Paper,
  Stack,
  // useTheme
} from '@mui/material';
import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import mypic from './mypic.jpg';

const About: React.FC = () => {
  // const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="lg" mx="auto">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              About Me
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: 3
              }}
            />
            <Typography variant="h6" color="text.secondary">
              Get to know me better
            </Typography>
          </Box>
          
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={4}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  '& img': {
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }
                }}
              >
                <img src={mypic} height={30} style={{ height: '70vh'}} alt="About Me" />
              </Paper>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                Who am I?
              </Typography>
              
              <Typography paragraph color="text.secondary">
                I'm a Full Stack Developer with over 4 years of experience in building scalable 
                and responsive web applications. Currently working at BizAcuity Solutions, 
                I specialize in React.js, Node.js, and RESTful APIs development.
              </Typography>
              
              <Typography paragraph color="text.secondary">
                With a strong foundation in computer science and extensive experience in modern web 
                technologies, I'm passionate about creating efficient, user-friendly applications 
                and solving complex technical challenges.
              </Typography>
              
              <Grid container spacing={2} sx={{ mb: 4 }}>
                {[
                  { icon: <Calendar size={18} />, text: 'Full Stack Developer' },
                  { icon: <MapPin size={18} />, text: 'Hyderabad, India' },
                  { icon: <GraduationCap size={18} />, text: 'M.S. Information Technology, IIIT Hyderabad' },
                  { icon: <Briefcase size={18} />, text: '4+ Years Experience' },
                ].map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      sx={{
                        color: 'text.secondary',
                        '& svg': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {item.icon}
                      <Typography>{item.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
              
              <Button
                href="#contact"
                variant="contained"
                size="large"
                sx={{
                  borderRadius: 50,
                  px: 4,
                }}
              >
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default About;