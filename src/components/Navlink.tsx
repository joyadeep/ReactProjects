import React from 'react'
import { NavLink } from 'react-router-dom'
import {HomeIcon} from '@heroicons/react/24/outline'

type Props = {
    title:string,
    icon?:any,
    link:string,
    closeMenu:()=>void
    // icon:React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Navlink = ({title,icon,link,closeMenu}: Props) => {
  return (
    <NavLink to={link} 
    onClick={closeMenu}
    className=" text-lg px-2 py-1 rounded-md flex flex-row items-center gap-1 w-fit  hover:bg-slate-200  "
    >
        {/* <HomeIcon className='w-6 h-6' /> */}
        {icon}
        {title}
        {/* <span className='text-lg text-slate-800 '>{title}</span> */}
    </NavLink>
  )
}

export default Navlink