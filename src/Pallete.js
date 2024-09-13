import React, { useState } from 'react';
import ColorBox from './ColorBox'
import './Pallete.css'
import Navbar from './Navbar';
import Footer from './Footer';


export default function Pallete(props) {
  const [level, setLevel]  = useState(500)  
  const [format, setFormat] = useState('hex')
  const {paletteName,emoji,id} = props.pallete
 
  const colorBoxes = props.pallete.colors[level].map(color =>(<ColorBox background={color[format]} name={color.name} showLink={true} key={color.id} id={color.id} paletteId={id}/>))
  const changeLevel = (newLevel)=>{
    setLevel(newLevel)

  } 
  const changeFormat = (val) =>{
   setFormat(val)

  }
  return (
    <div className='Pallete'>

        <Navbar level = {level} changeLevel = {changeLevel} handleChange={changeFormat} showSlider/>
       
        {/* navbar goes here */}
        <div className='Pallete-colors'>
            {/* bunch of color boxes */}
        {colorBoxes}    
        </div>
        <Footer paletteName={paletteName} emoji={emoji}/>
    </div>
  )
}
