import React from 'react';
import { Box, Typography } from '@mui/material';
import MiniPalette from './MiniPallete';
import PalleteListStyles from './styles/PalleteListStyles';

export default function PalleteList(props) {
  const pallets = props.pallets;

  return (
    <Box sx={PalleteListStyles.root}>
      <Box sx={PalleteListStyles.container}>
        <Box sx={PalleteListStyles.nav}>
          <Typography variant="h1">React Colors</Typography>
        </Box>
        <Box sx={PalleteListStyles.palettes}>
          {pallets.map(palette => (
            <MiniPalette key={palette.id} {...palette} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
