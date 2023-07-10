import React from 'react'
import arrow from '../assets/icons/arrow.svg'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='absolute z-10 flex justify-between items-center w-full bg-white px-5 md:px-20 py-3'>
        <h4 className= 'text-xl md:text-3xl font-bold tracking-tighter text-gray-800'>Joy-<span className='text-blue-500'>A</span>-deep</h4>
        <div className='flex gap-5 items-center text-slate-800 invisible md:visible'>
          <div>Works</div>
          <div>About</div>
          <div>My Services</div>
          <button className='px-3 py-1 border border-slate-300 rounded-full flex items-center gap-2'>Get in touch <img className='w-4 h-4' src={arrow} /></button>
        </div>
    </header>
  )
}

export default Navbar