import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Testimonial from './Testimonial'

type Props = {}

const Landing = (props: Props) => {
  return (
    <>
    <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Services/>
      <Testimonial/>
      <Contact/>
    </>
  )
}


export default Landing