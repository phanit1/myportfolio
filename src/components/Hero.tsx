import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Avatar,
  IconButton,
  Stack
} from '@mui/material';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import mypic from "./MyPassportPic.jpg"

const Hero: React.FC = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 8,
        background: (theme) => 
          theme.palette.mode === 'dark'
            ? `linear-gradient(to bottom right, ${theme.palette.grey[900]}, ${theme.palette.grey[800]})`
            : `linear-gradient(to bottom right, ${theme.palette.primary.light}15, ${theme.palette.primary.light}25)`,
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
        >
          <Avatar
            src={mypic}
            alt="Phaneendhar Thota"
            sx={{
              width: 180,
              height: 180,
              border: 4,
              borderColor: 'background.paper',
              boxShadow: 3,
            }}
          />
          
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            sx={{ mb: 2 }}
          >
            Hi, I'm <Typography component="h1" variant='h2' fontWeight="bold" color="primary.main">Phaneendhar Thota</Typography>
          </Typography>
          
          <Box>
            <Typography variant="h4">
              Full Stack Developer
            </Typography>
          </Box>
          
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 'sm', mb: 4 }}
          >
            Full Stack Developer with 4+ years of experience building scalable web applications 
            using React.js, Node.js, and RESTful APIs. Specialized in MERN stack development 
            and cloud technologies.
          </Typography>
          
          <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
            <IconButton
              href="https://github.com/phanit1"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                bgcolor: 'grey.800',
                color: 'common.white',
                '&:hover': { bgcolor: 'grey.700' },
              }}
            >
              <Github size={20} />
            </IconButton>
            <IconButton
              href="https://www.linkedin.com/in/phaneendhar-thota/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                bgcolor: 'primary.main',
                color: 'common.white',
                '&:hover': { bgcolor: 'primary.dark' },
              }}
            >
              <Linkedin size={20} />
            </IconButton>
            <IconButton
              href="mailto:tphaneendhar1@gmail.com"
              sx={{ 
                bgcolor: 'error.main',
                color: 'common.white',
                '&:hover': { bgcolor: 'error.dark' },
              }}
            >
              <Mail size={20} />
            </IconButton>
          </Stack>
          
          <Stack direction="row" spacing={2}>
            <Button
              href="#contact"
              variant="contained"
              size="large"
              sx={{ borderRadius: 50 }}
            >
              Contact Me
            </Button>
            <Button
              href="#about"
              variant="outlined"
              size="large"
              sx={{ borderRadius: 50 }}
            >
              About Me
            </Button>
          </Stack>
        </Stack>
        
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
          }}
        >
          <IconButton
            href="#about"
            color="inherit"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;