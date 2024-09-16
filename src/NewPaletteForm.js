import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, Divider, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox'; // Adjust this component if necessary
import { useForm } from 'react-hook-form';

const drawerWidth = 400;

export default function NewPaletteForm() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('blue');
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(''); // State for error messages

  // Initialize React Hook Form
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const newName = watch('name', '');

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleChange = (c) => {
    setColor(c.hex);
  };

  const handleAddColor = () => {
    // Convert newName to lowercase for case-insensitive comparison
    const lowerCaseName = newName.toLowerCase();

    // Check if the color name already exists (case-insensitive)
    if (colors.some(colorObj => colorObj.name.toLowerCase() === lowerCaseName)) {
      setError('Color name must be unique!');
      return;
    }

    // Check if the color already exists
    if (colors.some(colorObj => colorObj.hex === color)) {
      setError('Color already used!');
      return;
    }

    // Clear the error if the name and color are unique
    setError('');
    addColor({ hex: color, name: newName });
    console.log('Color added:', { hex: color, name: newName });
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
    console.log(colors, 'array state');
  };

  // Handle form submission
  const onSubmit = (data) => {
    handleAddColor(); // Add color to the list
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

          {/* Form for adding a new color */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('name', { required: 'Name is required' })}
              value={newName}
              error={!!errors.name || !!error}
              helperText={errors.name ? errors.name.message : error}
            />
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: color }}>
              ADD COLOR
            </Button>
          </form>
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
        {colors.map((colorObj) => (
          <DraggableColorBox color={colorObj.hex} name={colorObj.name} key={colorObj.hex} />
        ))}
      </Box>
    </Box>
  );
}
