import React from 'react';
import { Box, Typography } from '@mui/material';
import MiniPaletteStyles from './styles/MiniPaletteStyles';

export default function MiniPalette(props) {
  const {paletteName, emoji}  = props
  return (
    <Box sx={MiniPaletteStyles.root}>
      <Box sx={MiniPaletteStyles.colors}>
        {/* Your color boxes or other content here */}
      </Box>
      <Typography variant="h5" sx={MiniPaletteStyles.title}>
        {paletteName}
        <span style={MiniPaletteStyles.emoji}>{emoji}</span>
      </Typography>
    </Box>
  );
}
