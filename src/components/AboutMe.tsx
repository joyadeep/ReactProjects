import React from 'react'
import me from '../assets/images/me.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
type Props = {}

const AboutMe = (props: Props) => {
  return (
    <div className=' min-h-screen md:h-screen flex flex-col md:flex-row items-center  justify-between gap-5'>
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl tracking-tight font-bold'>My name is Joyadeep, I'm a frontend developer working and living in Kathmandu.</h1>
            <p className='text-slate-500'>I was born in Taplejung and studied BSc. CSIT at ACHS in Kathmandu. I have worked in different firms as a Frontend Developer.</p>
            
            <div className=' flex gap-5'>
                <FaLinkedin size={24} className='text-slate-500 hover:text-black cursor-pointer'/>
                <FaGithub size={24} className='text-slate-500 hover:text-black  cursor-pointer'  />
            </div>
        </div>
        <img src={me} alt='' className='w-full md:w-1/3 h-full md:h-2/3 rounded-xl object-cover ' style={{borderRadius: "50% 50% 50% 50% / 30% 60% 40% 60%"}} />
    </div>
  )
}

export default AboutMe