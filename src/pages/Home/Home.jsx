import React from 'react'
import myFoto from '../../../public/images/myFoto.jpg'
import { HomeContainer } from './Home.styled'

const Home = () => {
  return (
  <HomeContainer>
    
    <img src={myFoto} alt='Developer Image face with blue background'/>
    <h1>Ya tienes la idea? <br/>Yo tengo las herramientas para materializarla! </h1>
    
  </HomeContainer>
    
  )
}

export default Home