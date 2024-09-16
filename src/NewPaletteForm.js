import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, Divider, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';

const drawerWidth = 400;

export default function NewPaletteForm() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const [color, setColor] = useState('blue');
  const [colors, setColors] = useState(['red', 'blue']);

  const handleChange = (c) => {
    setColor(c.hex);
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
    console.log(colors, 'array state');
  };

  const handleAddColor = () => {
    addColor(color);
    console.log('in handle');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar at the top */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${open ? drawerWidth : 0}px)`,
          transition: 'width 0.3s ease',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent Drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Persistent Drawer on the left */}
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar>
          {/* Close button in the right corner */}
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto' }}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          {/* Add drawer content here */}
          <Typography variant="h4">Design Your Palette</Typography>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
          <ChromePicker color={color} onChange={handleChange} onChangeComplete={(newColor) => console.log(newColor, 'yo')} />
          <Button onClick={handleAddColor} variant="contained" color="primary" style={{ backgroundColor: color }}>
            ADD COLOR
          </Button>
        </Box>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${open ? drawerWidth : 0}px`, // Add this line to shift content to the right
          transition: 'margin-left 0.3s ease', // Smooth transition for content
          height: '100vh',
        }}
      >
        <Toolbar />
        <Typography paragraph>Main content goes here.</Typography>
        {colors.map((color) => (
          <DraggableColorBox color={color} key={color} />
        ))}
      </Box>
    </Box>
  );
}
