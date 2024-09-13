import React, {useState} from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SingleColorPalette(props) {

  const [format,setFormat]  = useState('hex')
  const changeFormat = (val) =>{
    setFormat(val)
 
   }

  const {pallete, color}  = props
  const {paletteName, emoji} = pallete
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
  const ColorBoxes = shades.map((shade) =>(<ColorBox key={shade.id} name={shade.name} background={shade[format]} showLink={false}/>))

 
  return (
    <div className='Pallete'>
        <Navbar handleChange={changeFormat} showSlider={false}/>
       
    <div className='Pallete-colors'>
    {ColorBoxes}

    </div>
    <Footer paletteName={paletteName} emoji={emoji}/>
   
    </div>
  )
}
