import React from 'react'
import './styles/DraggableColorBox.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
export default function DraggableColorBox(props) {
    const {color, name} = props

  return (
    <div className='DraggableColorBox' style={{backgroundColor:color}}>
        <div className='box-content box-content-flex'>
            <span>{name}</span>
            <DeleteIcon className='delete-icon' />
   
        </div>
    </div>
  )
}
