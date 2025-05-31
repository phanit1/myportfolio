import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Calendar, MapPin } from 'lucide-react';

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: 'Full Stack Developer',
    company: 'BizAcuity Solutions Pvt Ltd',
    location: 'Hyderabad, India',
    period: 'Dec 2024 - Present',
    description: [
      'Developed dynamic reporting dashboards using React.js and Material-UI, integrating RESTful APIs for real-time data visualization',
      'Implemented server-side pagination and custom filter controls for large datasets',
      'Created high-performance data aggregation for revenue tracking and analytics',
      'Built scalable employment management system using ColdFusion and React.js',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'ValueMomentum Services Pvt Ltd',
    location: 'Hyderabad, India',
    period: 'Jul 2021 - Nov 2024',
    description: [
      'Developed scalable admin dashboard using React and Node.js',
      'Implemented role-based access control (RBAC) and automated workflows',
      'Integrated RESTful APIs for real-time data communication',
      'Managed CI/CD pipelines through Azure DevOps and Azure Repos',
    ],
  },
  {
    title: 'Jr. Software Engineer',
    company: 'ICT Health',
    location: 'Bangalore, India',
    period: 'Feb 2021 - Jul 2021',
    description: [
      'Developed healthcare portal using Angular for appointment scheduling',
      'Integrated voice-input functionality using Annyang.js',
      'Implemented responsive design and accessibility features',
      'Created virtual consultation system with real-time schedule sync',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: 10,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="lg" mx="auto">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              Work Experience
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: 3,
              }}
            />
            <Typography variant="h6" color="text.secondary">
              My professional journey
            </Typography>
          </Box>

          <Box position="relative">
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '100%',
                width: 2,
                bgcolor: 'grey.200',
              }}
            />

            {experiences.map((exp, index) => (
              <Box key={index} mb={6} position="relative">
                <Grid
                  container
                  spacing={4}
                  direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                >
                  <Box
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      zIndex: 1,
                    }}
                  />

                  <Grid item xs={12} md={6}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 6,
                        },
                      }}
                    >
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {exp.title}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="primary"
                        gutterBottom
                      >
                        {exp.company}
                      </Typography>

                      <Stack
                        direction="row"
                        spacing={3}
                        mb={2}
                        color="text.secondary"
                      >
                        <Stack direction="row" spacing={1} alignItems="center">
                          <MapPin size={16} />
                          <Typography variant="body2">{exp.location}</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Calendar size={16} />
                          <Typography variant="body2">{exp.period}</Typography>
                        </Stack>
                      </Stack>

                      <List>
                        {exp.description.map((item, i) => (
                          <ListItem key={i} sx={{ pl: 0 }}>
                            <ListItemText
                              primary={item}
                              sx={{
                                '& .MuiListItemText-primary': {
                                  color: 'text.secondary',
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;