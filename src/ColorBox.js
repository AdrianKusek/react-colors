import React, { useState } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

export default function ColorBox({ background, name ,paletteId, id }) {

  const [copied, setCopied]  = useState(false)
  const changeCopyState = ()=>{

    setCopied(true)
    setTimeout(() => {
        setCopied(false);
      }, 1500);

  }

  
  return (
    <CopyToClipboard text={background} onCopy={changeCopyState}>
    <div style={{ background }} className='ColorBox'>
        <div style={{ background }} className={`copy-overlay ${copied && 'show'}`}/>
        <div className={`copy-msg ${copied && 'show'}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
        </div>
        <div className='copy-container'>
            <div className='box-content'>
            <span>{name}</span>

            </div>
            <button className='copy-button'>Copy</button>

        </div>
        <Link to={`/pallete/${paletteId}/${id}`} onclick={(e)=>e.stopPropagation()}>
          <span className='see-more'>more </span>
        </Link>
        
      
      
    </div>
    </CopyToClipboard>
  );
}
