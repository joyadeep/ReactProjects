import { useState } from 'react'
import {BsArrowDownRight,BsMoonFill} from 'react-icons/bs'
import {WiMoonAltNew} from 'react-icons/wi'
type Props = {}

const Navbar = (props: Props) => {
  const [toggle,setToggle]=useState(false);
  return (
    <header className='fixed top-0 z-10 flex justify-between items-center w-full bg-white px-5 md:px-20 py-3'>
        <h4 className= 'text-xl md:text-3xl font-bold tracking-tighter text-gray-800'>Joy-<span className='text-blue-500'>A</span>-deep</h4>
        <div className='flex gap-5 items-center text-slate-800 invisible md:visible'>
          <div className='relative w-12 h-6 rounded-full bg-slate-700 cursor-pointer flex items-center justify-between' onClick={()=>setToggle(!toggle)}>
            <div className={`w-6 h-6 absolute bg-white rounded-full left-0  duration-500 flex items-center ${toggle ? "translate-x-6" : "translate-x-0"}`} />
             <WiMoonAltNew className='w-6 h-6 text-yellow-400'/> 
             <BsMoonFill className='w-5 h-4  text-yellow-400'/> 
          </div>
          <div className='cursor-pointer hover:text-blue-500 ' >Works</div>
          <div className='cursor-pointer hover:text-blue-500 ' >About</div>
          <div className='cursor-pointer hover:text-blue-500 '>My Services</div>
          <button className='px-3 py-1 border border-slate-300 rounded-full flex items-center gap-2'>Get in touch <BsArrowDownRight size={14}/></button>
        </div>
    </header>
  )
}

export default Navbar