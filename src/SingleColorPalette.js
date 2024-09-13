import React from 'react'
import ColorBox from './ColorBox'

export default function SingleColorPalette(props) {

  const {pallete, color}  = props
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
  const ColorBoxes = shades.map((shade) =>(<ColorBox key={shade.id} name={shade.name} background={shade.hex} showLink={false}/>))

 
  return (
    <div className='Pallete'>SingleColorPalette {props.color}
    <div className='Pallete-colors'>
    {ColorBoxes}

    </div>
   
    </div>
  )
}
