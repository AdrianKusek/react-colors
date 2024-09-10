import React from 'react'
import {  Link } from 'react-router-dom';

export default function PalleteList(props) {
    // console.log(props)
  const pallets = props.pallets  
  console.log(pallets)
  return (
     <div>{pallets.map(pallete=>(<Link to={`/pallete/${pallete.id}`}>{pallete.paletteName}</Link>))}</div>
   
  )
}
