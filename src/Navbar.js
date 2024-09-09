import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'

export default function Navbar(props) {
  const {level,changeLevel}  = props
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
        
   

   </header>
  )
}
