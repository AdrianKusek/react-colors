import React, { useState } from 'react';
import ColorBox from './ColorBox'
import './Pallete.css'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Pallete(props) {
  const [level, setLevel]  = useState(500)  
  const colorBoxes = props.pallete.colors[level].map(color =>(<ColorBox background={color.hex} name={color.name}/>))
  const changeLevel = (newLevel)=>{
    setLevel(newLevel)

  }  
  return (
    <div className='Pallete'>
        <div className='slider'>
            <Slider defaultValue={level} min={100} max={900} step={100} onChangeComplete={changeLevel}/>


        </div>
        {/* navbar goes here */}
        <div className='Pallete-colors'>
            {/* bunch of color boxes */}
        {colorBoxes}    
        </div>
        {/* footer later yo */}
    </div>
  )
}
