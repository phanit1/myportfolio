import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
  Button
} from '@mui/material';
import { Menu as MenuIcon, X as CloseIcon, Moon, Sun } from 'lucide-react';
import { useThemeContext } from '../theme/ThemeContext';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleColorMode, mode } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <AppBar 
      position="fixed" 
      elevation={scrolled ? 4 : 0}
      sx={{
        bgcolor: scrolled 
          ? mode === 'dark' 
            ? 'rgba(18, 18, 18, 0.95)'
            : 'rgba(255, 255, 255, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: theme.transitions.create(['background-color', 'box-shadow']),
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: scrolled 
                ? theme.palette.text.primary
                : mode === 'dark'
                  ? 'common.white'
                  : 'common.black',
              fontWeight: 700,
            }}
          >
            Phaneendhar<span style={{ color: theme.palette.primary.main }}>Thota</span>
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                sx={{
                  color: scrolled 
                    ? theme.palette.text.primary
                    : mode === 'dark'
                      ? 'common.white'
                      : 'common.black',
                  fontWeight: 500,
                  position: 'relative',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    bgcolor: 'transparent',
                    '&::after': {
                      width: '100%',
                    },
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: '2px',
                    bgcolor: 'primary.main',
                    transition: 'width 0.3s ease',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton
              onClick={toggleColorMode}
              sx={{
                color: scrolled 
                  ? theme.palette.text.primary
                  : mode === 'dark'
                    ? 'common.white'
                    : 'common.black',
                ml: 1,
                '&:hover': {
                  bgcolor: mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={toggleColorMode}
              sx={{
                color: scrolled 
                  ? theme.palette.text.primary
                  : mode === 'dark'
                    ? 'common.white'
                    : 'common.black',
                mr: 1,
              }}
            >
              {mode === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </IconButton>
            <IconButton
              onClick={toggleMenu}
              sx={{
                color: scrolled 
                  ? theme.palette.text.primary
                  : mode === 'dark'
                    ? 'common.white'
                    : 'common.black',
              }}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={isMenuOpen && isMobile}
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: mode === 'dark' ? 'grey.900' : 'background.paper',
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem 
              key={item.label}
              onClick={toggleMenu}
              button 
              component="a"
              href={item.href}
              sx={{
                '&:hover': {
                  bgcolor: mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;