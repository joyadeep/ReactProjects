import React from 'react'
import {HeartIcon, HomeIcon, InformationCircleIcon, PhoneIcon, UserGroupIcon} from '@heroicons/react/24/outline'
import Navlink from './Navlink'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='fixed top-3 bg-transparent w-full p-3'>
        <nav className='bg-white  py-2 px-2 rounded-xl shadow-md flex flex-row items-center justify-between border  '>
        <div className='text-4xl font-bold tracking-tight '>Trippy</div>
        <div className='flex gap-3'>
          <Navlink title='Home' icon={<HomeIcon className='h-6 w-6'/>} />
          <Navlink title='About' icon={<InformationCircleIcon className='h-6 w-6'/>} />
          <Navlink title='Service' icon={<UserGroupIcon className='h-6 w-6'/>} />
          <Navlink title='Contact' icon={<PhoneIcon className='h-6 w-6'/>} />
          <button className='text-lg text-white px-4 rounded-md bg-black' >Signup</button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar