import React from 'react'
import myFoto from '../../../public/images/myFoto.jpg'
import { Header, HomeContainer, TextContent } from './Home.styled'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Projects'
import Social from '../../components/Social/Social'

const Home = () => {
  return (
  <HomeContainer>
    <section>
      <h2>Nada mas satisfactorio que llevar una idea a la realidad</h2>
    </section>
    <Header>

    <img src={myFoto} alt='Developer Image face with blue background'/>
    <TextContent>

    <h1>Ya tienes la idea? <br/>Yo tengo las herramientas para materializarla! </h1>
    </TextContent>
    </Header>

    <Skills/>
    <Projects/>
    <Social/>
    
  </HomeContainer>
    
  )
}

export default Home