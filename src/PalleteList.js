import React from 'react';
import { Box, Typography } from '@mui/material';
import MiniPalette from './MiniPallete';
import PalleteListStyles from './styles/PalleteListStyles';
import { useNavigate ,Link } from 'react-router-dom';

export default function PalleteList(props) {
  const pallets = props.pallets; 
  const goTo = useNavigate()
  const goToPallete = (id) => { 
    goTo(`/pallete/${id}`)
  }

  return (
    <Box sx={PalleteListStyles.root}>
      <Box sx={PalleteListStyles.container}>
        <Box sx={PalleteListStyles.nav}>
          <Typography variant="h1">React Colors</Typography>
          <Box><Link to='/pallete/new'>Create Palette</Link></Box>
        </Box>
        <Box sx={PalleteListStyles.palettes}>
          {pallets.map(palette => (
            <MiniPalette key={palette.id} {...palette} handleClick={() => goToPallete(palette.id)} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
