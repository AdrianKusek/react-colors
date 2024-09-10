import React from 'react';
import { Box, Typography } from '@mui/material';
import MiniPaletteStyles from './styles/MiniPaletteStyles';

export default function MiniPalette(props) {
  const {paletteName, emoji,colors}  = props
  const miniColorBoxes = colors.map((color) => (
    <Box sx={{ ...MiniPaletteStyles.miniColor, backgroundColor: color.color }} key={color.name}></Box>
  ));  return (
    <Box sx={MiniPaletteStyles.root}>
      <Box sx={MiniPaletteStyles.colors}>
        {miniColorBoxes}
      </Box>
      <Typography variant="h5" sx={MiniPaletteStyles.title}>
        {paletteName}
        <span style={MiniPaletteStyles.emoji}>{emoji}</span>
      </Typography>
    </Box>
  );
}
