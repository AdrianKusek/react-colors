import React, { useState } from 'react';
import ColorBox from './ColorBox'
import './Pallete.css'
import Navbar from './Navbar';


export default function Pallete(props) {
  const [level, setLevel]  = useState(500)  
  const [format, setFormat] = useState('hex')
  const {paletteName,emoji} = props.pallete
 
  const colorBoxes = props.pallete.colors[level].map(color =>(<ColorBox background={color[format]} name={color.name} key={color.id}/>))
  const changeLevel = (newLevel)=>{
    setLevel(newLevel)

  } 
  const changeFormat = (val) =>{
   setFormat(val)

  }
  return (
    <div className='Pallete'>

        <Navbar level = {level} changeLevel = {changeLevel} handleChange={changeFormat}/>
       
        {/* navbar goes here */}
        <div className='Pallete-colors'>
            {/* bunch of color boxes */}
        {colorBoxes}    
        </div>
        <footer className='Pallete-footer'>
            {paletteName}
            <span className='emoji'> {emoji}</span>

        </footer>
    </div>
  )
}
