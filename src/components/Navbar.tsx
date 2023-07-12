import { useState } from 'react'
import {BsArrowDownRight,BsMoonFill} from 'react-icons/bs'
import { CiMenuFries } from 'react-icons/ci'
import {WiMoonAltNew} from 'react-icons/wi'
type Props = {}

const Navbar = (props: Props) => {
  const [toggle,setToggle]=useState(false);
  const [isOpen,setIsOpen]=useState(false);
  return (
    <header className='fixed bg-white top-0 z-10 flex justify-between items-center w-full px-5 md:px-20 py-3'>
        <h4 className= 'text-3xl font-bold tracking-tighter text-gray-800 w-fit whitespace-nowrap'>Joy-<span className='text-blue-500'>A</span>-deep</h4>
        <CiMenuFries size={32} className='visible md:invisible' onClick={()=>setIsOpen(!isOpen)}/>
        <div className={`absolute right-0 duration-500 ${isOpen ? "w-full" : "w-0"} bg-slate-100 md:bg-inherit py-5 md:py-0 top-12 w-full  px-5 md:px-0 md:w-fit text-right md:static overflow-hidden gap-5 items-center text-slate-800 md:flex`}>
          <div className='relative w-12 h-6 ml-auto md:ml-0 rounded-full bg-slate-700 cursor-pointer flex items-center justify-between' onClick={()=>setToggle(!toggle)}>
            <div className={`w-6 h-6 absolute bg-white rounded-full left-0  duration-500 flex items-center ${toggle ? "translate-x-6" : "translate-x-0"}`} />
             <WiMoonAltNew className='w-6 h-6 text-yellow-400'/> 
             <BsMoonFill className='w-5 h-4  text-yellow-400'/> 
          </div>
          <div className='cursor-pointer hover:text-blue-500 my-3  md:my-0 w-fit ml-auto' >Works</div>
          <div className='cursor-pointer hover:text-blue-500 my-3  md:my-0 w-fit ml-auto' >About</div>
          <div className='cursor-pointer hover:text-blue-500 my-3  md:my-0 w-fit ml-auto'>My Services</div>
          <button className='px-3 py-1 ml-auto md:ml-0 border border-slate-300 rounded-full flex items-center gap-2'>Get in touch <BsArrowDownRight size={14}/></button>
        </div>
    </header>
  )
}

export default Navbar