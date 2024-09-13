import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Footer from './Footer'
import {  Link } from 'react-router-dom';


export default function SingleColorPalette(props) {

  const [format,setFormat]  = useState('hex')
  const changeFormat = (val) =>{
    setFormat(val)
 
   }

  const {pallete, color}  = props
  const {paletteName, emoji,id} = pallete
  const gatherShades = (palette,colorToFilterBy)  =>{
    let shades = []
    let allColors = palette.colors
    for(let key in allColors){
        shades = shades.concat(allColors[key].filter(color => color.id === colorToFilterBy))
    }

    return shades.slice(1)

  }
  const shades = gatherShades(pallete,color)
  console.log(shades)
  const ColorBoxes = shades.map((shade) =>(<ColorBox key={shade.name} name={shade.name} background={shade[format]} showLink={false}/>))

 
  return (
    <div className='SingleColorPalette Pallete'>
        <Navbar handleChange={changeFormat} showSlider={false}/>
       
    <div className='Pallete-colors'>
    {ColorBoxes}
    <div className='go-back ColorBox'>
        <Link to={`/pallete/${id}`} className='back-button'>GO BACK</Link>
    </div>

    </div>
    <Footer paletteName={paletteName} emoji={emoji}/>
   
    </div>
  )
}
