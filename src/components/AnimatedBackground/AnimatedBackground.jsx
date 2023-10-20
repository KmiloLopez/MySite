import React from 'react'
import { ListItem, Squares } from './AnimatedBackground.Styled'

const AnimatedBackground = () => {
  const items = new Array(11).fill(null)
  return (
    <Squares>
        {items.map((_, index)=>{
          return <ListItem key={`${index}`}></ListItem>
        })}
        
      
    </Squares>

  )
}

export default AnimatedBackground