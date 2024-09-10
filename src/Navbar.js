import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export default function Navbar(props) {
  const {level,changeLevel}  = props
  const [format, setFormat] = useState('hex')
  const [open, setOpen] = useState(false)
  const handleChange = (e) =>{
    setFormat(e.target.value)
    setOpen(true)
    props.handleChange(e.target.value)

  }
  const closeSnackbar = ()=>{
    setOpen(false)
  }
  return (
   <header className='Navbar'>
    <div className='logo'>
        <a href='/'>ColorPicker</a>
    </div>   
        <div className='slider-container'>
        <div className='slider'>
            <span>Level: {level}</span>
            <Slider defaultValue={level} min={100} max={900} step={100} onChangeComplete={changeLevel}/>


        </div>

        </div>
        <div className='select-container'>
            <Select value={format} onChange={handleChange}>
                <MenuItem value='hex' >Hex  </MenuItem>
                <MenuItem value='rgb' >rgb </MenuItem>
                <MenuItem value='rgba' >rgba </MenuItem>

            </Select>
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal:'left'}}
                      open={open}
                      autoHideDuration={3000}
                      message={<span id='message-id'>Format Changed to {format}</span>}
                      ContentProps={
                        {"aria-describedby": "message-id"}
                      }
                      onClose={closeSnackbar}
                      action={[<IconButton onClick={closeSnackbar} key={'close'} aria-label='close'>
                        <CloseIcon/>
                      </IconButton>]}
            />
        </div>
        
   

   </header>
  )
}
