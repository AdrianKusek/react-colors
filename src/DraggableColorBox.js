import React from 'react'
import './styles/DraggableColorBox.css'

export default function DraggableColorBox(props) {
    const {color, name} = props

  return (
    <div className='DraggableColorBox' style={{backgroundColor:color}}>{color} {name}</div>
  )
}
