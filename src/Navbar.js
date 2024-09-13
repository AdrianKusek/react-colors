import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import {  Link } from 'react-router-dom';


export default function Navbar(props) {
  const {level,changeLevel,showSlider}  = props
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
        <Link to={'/'}>ColorPicker</Link>
    </div> 
     
        {showSlider && <div className='slider-container'>
        <div className='slider'>
            <span>Level: {level}</span>
            <Slider defaultValue={level} min={100} max={900} step={100} onChangeComplete={changeLevel}/>


        </div>

        </div>}
        <div className='select-container'>
            <Select value={format} onChange={handleChange}>
                <MenuItem value='hex' >HEX #ffffff  </MenuItem>
                <MenuItem value='rgb' >RGB (255, 255, 255) </MenuItem>
                <MenuItem value='rgba' >RGBA (255, 255, 255, 1.0) </MenuItem>

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
