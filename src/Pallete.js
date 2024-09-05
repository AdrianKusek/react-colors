import React from 'react'
import ColorBox from './ColorBox'
import './Pallete.css'

export default function Pallete(props) {
  const colorBoxes = props.colors.map(color =>(<ColorBox background={color.color} name={color.name}/>))  
  return (
    <div className='Pallete'>
        {/* navbar goes here */}
        <div className='Pallete-colors'>
            {/* bunch of color boxes */}
        {colorBoxes}    
        </div>
        {/* footer later yo */}
    </div>
  )
}
