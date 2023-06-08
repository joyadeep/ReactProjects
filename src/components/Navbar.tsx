import { useState } from 'react'
import Navlink from './Navlink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
type Props = {}

const Navbar = (props: Props) => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className='fixed top-3 bg-transparent w-full p-3 z-10'>
        <nav className='bg-white relative lg:static  py-2 px-5 rounded-xl shadow-md flex flex-row items-center justify-between border  '>
        <div className=' text-4xl font-bold tracking-tight '>Trippy</div>
        <div className={isOpen?' absolute top-16 bg-slate-300 lg:bg-white rounded-md pb-4 w-full lg:w-fit right-0 transition duration-700 ease-linear lg:pb-0 px-2 lg:px-0  lg:static  lg:gap-3 lg:flex' :
         'absolute top-16 bg-slate-300 lg:bg-white rounded-md pb-4 w-0 hidden transition duration-700 ease-linear lg:w-fit right-0 lg:pb-0 px-2 lg:px-0  lg:static lg:gap-3 lg:flex'}>
          <Navlink title='Home' link='/' />
          <Navlink title='About' link='/about' />
          <Navlink title='Service' link='/service' />
          <Navlink title='Contact' link='/contact' />
          <button className='text-lg text-white px-4 rounded-md bg-black w-full lg:w-fit py-2  lg:py-0 ' >Signup</button>
        </div>
        {isOpen?<XMarkIcon className='w-10 h-10 text-slate-500 block lg:hidden' onClick={()=>setIsOpen(false)} />:
        <Bars3Icon className='w-10 h-10 text-slate-500 block lg:hidden ' onClick={()=>setIsOpen(true)} />
        }
        

        
    </nav>
    </div>
  )
}

export default Navbar