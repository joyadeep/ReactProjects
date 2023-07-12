import React, { ReactNode } from 'react'
import {LuPenTool} from 'react-icons/lu'
import { IconType } from 'react-icons'

interface IService{
    icon?:JSX.Element;
    title?:string;
    description?:string;
}

const ServiceCard:React.FC<IService> = ({icon,title,description}) => {
  return (
    <div className='flex items-center flex-col w-full gap-3'>
        {icon}
        <div className='capitalize text-2xl font-semibold'>{title}</div>
        <p className='text-slate-400 text-center'>{description}</p>
    </div>
  )
}

export default ServiceCard