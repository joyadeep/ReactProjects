import React from 'react'
import { twMerge } from 'tailwind-merge'
type Props = {
    classname?:string;
    handleChange?:any;
    name?:string;
    value?:string
}

const Image:React.FC<Props> = ({classname,handleChange,name,value}) => {
  return (
    <input type="file" accept='image/*' name={name} value={value} onChange={handleChange}  className={twMerge('rounded-md pl-3 py-1 outline-none border border-slate-300 w-full text-lg',classname)}/>
  )
}

export default Image