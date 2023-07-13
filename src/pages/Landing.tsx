import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'

type Props = {}

const Landing = (props: Props) => {
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
    </>
  )
}


export default Landing