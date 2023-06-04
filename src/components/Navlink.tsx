import React from 'react'
import { NavLink } from 'react-router-dom'
import {HomeIcon} from '@heroicons/react/24/outline'

type Props = {
    title:string,
    icon:any
    // icon:React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const Navlink = ({title,icon}: Props) => {
  return (
    <NavLink to="" className="px-2 py-1 rounded-md flex flex-row items-center gap-1  hover:bg-slate-200  ">
        {/* <HomeIcon className='w-6 h-6' /> */}
        {icon}
        <span className='text-lg text-slate-800 '>{title}</span>
    </NavLink>
  )
}

export default Navlink