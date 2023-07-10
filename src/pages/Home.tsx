import React from 'react'
import me from '../assets/images/me.jpg'
import figma from '../assets/icons/figma.svg'
import node from '../assets/icons/node.svg'
import react from '../assets/icons/react.svg'
import tailwind from '../assets/icons/tailwind.svg'
import arrow from '../assets/icons/arrow.svg'
type Props = {}

const Home:React.FC = (props: Props) => {
  return (
    <div className='w-full h-screen px-20 flex  flex-col gap-2 justify-center items-center '>
        <div className='flex gap-5'>
            <div className='relative w-20'>
                <img src={figma} className=' absolute top-10 animate-rotation2 drop-shadow-xl w-10 h-10' alt="" />
                <img src={node} className=' animate-rotation duration-500 drop-shadow-xl absolute bottom-0 -left-10  w-10 h-10' alt="" />
            </div>
            <img src={me} alt="" className='w-56 h-56 object-cover rounded-full shadow-xl ' />
            <div className='relative'>
            <img src={react} className=' animate-rotation3 drop-shadow-xl w-10 h-10' alt="" />
            <img src={tailwind} className=' animate-rotation4 drop-shadow-xl duration-500 delay-1000 absolute bottom-10 -right-10  w-10 h-10' alt="" />
            </div>
        </div>
        <div className=' text-center flex flex-col gap-3 pt-4'>
            <p className='text-blue-500 font-semibold text-3xl tracking-tighter pl-10'>Hey, I am Joyadeep 👋</p>
            <p className='text-2xl font-semibold' >A Frontend Developer with 1+ years of experience</p>
            <p className='text-slate-400'>I am a skilled frontend developer with expertise in crafting intuitive and visually appealing user interfaces. I thrive on creating seamless user experiences through clean code, innovative designs, and a strong attention to detail.</p>
        </div>
        <button className='rounded-full shadow-xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg px-4 py-2 flex items-center gap-2' >See my works <img className='w-3 h-3 ' src={arrow} alt="" /></button>
    </div>
  )
}

export default Home