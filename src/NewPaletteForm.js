import React, { useState } from 'react';
import { AppBar, Box, CssBaseline, Drawer, IconButton, Toolbar, Typography, Divider, Button, TextField } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox'; // Adjust this component if necessary
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 400;

export default function NewPaletteForm(props) {
  const { palettes, savePalette } = props;
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('blue');
  const [colors, setColors] = useState([]);
  const [colorError, setColorError] = useState(''); // State for color name errors
  const [paletteNameError, setPaletteNameError] = useState(''); // State for palette name errors

  const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm();
  const newColorName = watch('colorName', '');
  const paletteName = watch('paletteName', '');

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleChange = (c) => {
    setColor(c.hex);
  };

  const handleAddColor = () => {
    const lowerCaseName = newColorName.toLowerCase();

    if (colors.some(colorObj => colorObj.name.toLowerCase() === lowerCaseName)) {
      setColorError('Color name must be unique!');
      return;
    }

    if (colors.some(colorObj => colorObj.color === color)) {
      setColorError('Color already used!');
      return;
    }

    setColorError('');
    addColor({ color: color, name: newColorName });
  };

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  // Custom validation function for unique palette name
  const isPaletteNameUnique = (name) => {
    return !palettes.some(palette => palette.paletteName.toLowerCase() === name.toLowerCase());
  };

  // Handle form submission for adding color
  const onSubmitColor = (event) => {
    event.preventDefault();
    handleAddColor(); // Add color to the list
  };

  // Handle form submission for saving the palette
  const onSubmitPalette = async (data) => {
    // Trigger validation for the palette name
    const isPaletteNameValid = await trigger('paletteName');
    
    if (!isPaletteNameValid) {
      // If validation fails, set the palette name error state
      setPaletteNameError('Palette name is required');
      return;
    }

    if (!isPaletteNameUnique(data.paletteName)) {
      // Check if the palette name is unique
      setPaletteNameError('Palette name must be unique');
      return;
    }

    setPaletteNameError(''); // Clear the error if validation passes

    const newPalette = {
      paletteName: data.paletteName,
      id: data.paletteName.toLowerCase().replace(/ /g, '-'),
      colors: colors
    }

    savePalette(newPalette);
    navigate('/');
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
          {/* Form for saving the palette */}
          <form onSubmit={handleSubmit(onSubmitPalette)}>
            <TextField
              label="Palette Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('paletteName', { required: true })}
              error={!!paletteNameError}
              helperText={paletteNameError || (errors.paletteName ? 'Palette name is required' : '')}
            />
            <Button type="submit" variant="contained" color="secondary">Save Palette</Button>
          </form>
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
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto' }}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
          <Typography variant="h4">Design Your Palette</Typography>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
          <ChromePicker color={color} onChange={handleChange} />

          {/* Form for adding a new color */}
          <form onSubmit={onSubmitColor}>
            <TextField
              label="Color Name"
              variant="outlined"
              fullWidth
              margin="normal"
              {...register('colorName', { required: 'Color name is required' })}
              value={newColorName}
              error={!!errors.colorName || !!colorError}
              helperText={errors.colorName ? errors.colorName.message : colorError}
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
          <DraggableColorBox color={colorObj.color} name={colorObj.name} key={colorObj.name} />
        ))}
      </Box>
    </Box>
  );
}
