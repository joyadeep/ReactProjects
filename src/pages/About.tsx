import React from 'react'
import AboutMe from '../components/AboutMe'

type Props = {}

const About = (props: Props) => {
  return (
    <div id='about' className='px-5 pt-16 md:px-20 h-fit'>
        <AboutMe/>
    </div>
  )
}

export default About