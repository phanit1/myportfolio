import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Stack,
} from '@mui/material';

type Skill = {
  name: string;
  level: number;
  color: string;
};

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 90, color: '#1976d2' },
      { name: 'Angular', level: 85, color: '#dd1b16' },
      { name: 'TypeScript', level: 85, color: '#2196f3' },
      { name: 'Material UI', level: 90, color: '#00bcd4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, color: '#4caf50' },
      { name: 'Express.js', level: 80, color: '#757575' },
      { name: 'ColdFusion', level: 80, color: '#4caf50' },
      { name: 'RESTful APIs', level: 90, color: '#2196f3' },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Azure DevOps', level: 85, color: '#0078d4' },
      { name: 'MongoDB', level: 80, color: '#4caf50' },
      { name: 'MySQL', level: 80, color: '#f44336' },
      { name: 'Git', level: 90, color: '#f44336' },
    ],
  },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" justifyContent="space-between" mb={1}>
        <Typography variant="body1" color="text.primary">
          {skill.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {skill.level}%
        </Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={skill.level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'grey.200',
          '& .MuiLinearProgress-bar': {
            backgroundColor: skill.color,
            borderRadius: 4,
          },
        }}
      />
    </Box>
  );
};

const Skills: React.FC = () => {
  return (
    <Box
      id="skills"
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
              My Skills
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
              A showcase of my technical abilities and expertise
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {skillCategories.map((category, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    textAlign="center"
                    mb={4}
                  >
                    {category.title}
                  </Typography>
                  {category.skills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;