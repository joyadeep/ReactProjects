import React from 'react'

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
        <p className='text-slate-500 text-center'>{description}</p>
    </div>
  )
}

export default ServiceCard