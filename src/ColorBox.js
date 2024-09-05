import React from 'react';
import './ColorBox.css'

export default function ColorBox({ background, name }) {
  return (
    <div style={{ background }} className='ColorBox'>
        <span>more </span>
        <span>{name}</span>
    </div>
  );
}
