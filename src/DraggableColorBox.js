import React from 'react'
import './styles/DraggableColorBox.css'

export default function DraggableColorBox(props) {
    const color = props.color
  return (
    <div className='DraggableColorBox' style={{backgroundColor:color}}>{color} yo</div>
  )
}
