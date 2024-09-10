import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function Navbar(props) {
  const {level,changeLevel}  = props
  const [format, setFormat] = useState('hex')
  const handleChange = (e) =>{
    setFormat(e.target.value)
    props.handleChange(e.target.value)

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
        </div>
        
   

   </header>
  )
}
