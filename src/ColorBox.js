import React, { useState } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

export default function ColorBox({ background, name ,paletteId, id ,showLink}) {

  const [copied, setCopied]  = useState(false)
  const isDarkColor = chroma(background).luminance() <= 0.088
  const isLightColor = chroma(background).luminance() >= 0.088

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
            <p className={`${isLightColor && 'dark-text'}`}>{background}</p>
        </div>
        <div className='copy-container'>
            <div className='box-content'>
            <span className={isDarkColor && 'light-text'}>{name}</span>

            </div>
            <button className={`copy-button ${isLightColor && 'dark-text'}`} >Copy</button>

        </div>
        {showLink && <Link to={`/pallete/${paletteId}/${id}`} onclick={(e)=>e.stopPropagation()}>
          <span className={`see-more ${isLightColor && 'dark-text'}`}>more </span>
        </Link>}
        
        
      
      
    </div>
    </CopyToClipboard>
  );
}
