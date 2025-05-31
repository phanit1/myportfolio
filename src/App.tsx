import React from 'react';
import { Box, useTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  const theme = useTheme();

  return (
    <Box sx={{ 
      bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'background.default',
      color: theme.palette.mode === 'dark' ? 'common.white' : 'text.primary'
    }}>
      <Header />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;