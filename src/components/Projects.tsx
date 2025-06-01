import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'MAX3G - Dental Diagnostic System',
    description: 'A cloud-based dental diagnostic management platform for CBCT Scan Centres. Features dynamic dashboards, custom analytics, real-time data aggregation, and role-based access control. Built with React.js and Material-UI.',
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg',
    tags: ['React.js', 'Material-UI', 'RESTful APIs', 'Data Aggregation'],
  },
  {
    id: 2,
    title: 'HRX - Employment Management',
    description: 'A scalable HR operations platform with automated offer letter generation and email notifications. Built using ColdFusion MVC architecture and React.js dashboard. Improved onboarding efficiency by 40%.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    tags: ['ColdFusion', 'React.js', 'MySQL', 'MVC'],
  },
  {
    id: 3,
    title: 'Admin Panel System',
    description: 'Secure access management system with RBAC, automated workflows, and real-time data sync. Features CI/CD pipelines through Azure DevOps and infrastructure automation with PowerShell.',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
    tags: ['React.js', 'Node.js', 'Azure DevOps', 'RBAC'],
  },
  {
    id: 4,
    title: 'Sehaki - Healthcare Portal',
    description: 'Responsive healthcare platform for appointment booking and virtual consultations. Features voice input support, real-time schedule sync, and integrated meeting links.',
    image: 'https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg',
    tags: ['Angular', 'JavaScript', 'Annyang.js', 'Accessibility'],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'Personal portfolio website built with React and Material-UI, featuring responsive design, dark mode support, and smooth animations. Showcases projects and professional experience.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['React.js', 'Material-UI', 'TypeScript'],
    liveUrl: 'https://tphani-portfolio-website.vercel.app/',
    githubUrl: 'https://github.com/phanit1/myportfolio',
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const allTags = ['All', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const handleFilterChange = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: string,
  ) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: 10,
        bgcolor: 'grey.50',
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="lg" mx="auto">
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
              My Projects
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
              Showcasing my professional work and achievements
            </Typography>
          </Box>

          {/* <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <ToggleButtonGroup
              value={filter}
              exclusive
              onChange={handleFilterChange}
              aria-label="project filter"
            >
              {allTags.map((tag) => (
                <ToggleButton
                  key={tag}
                  value={tag}
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '20px !important',
                    mx: 0.5,
                    '&.Mui-selected': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                      },
                    },
                  }}
                >
                  {tag}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box> */}

          <Grid container spacing={4}>
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                      {project.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'primary.light',
                            color: 'primary.contrastText',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                    {project.liveUrl && (
                      <Button
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<ExternalLink size={16} />}
                        color="primary"
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<Github size={16} />}
                        color="inherit"
                      >
                        View Code
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;