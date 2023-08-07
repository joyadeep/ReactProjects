import React from 'react'
import { twMerge } from 'tailwind-merge';

type Props = {
    classname?:string;
    name?:string;
    value?:string;
    handleChange?:React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

const TextArea = ({classname,handleChange,name,value}: Props) => {
  return (
    <textarea  rows={5} value={value} name={name} onChange={handleChange} className={twMerge('rounded-md pl-3 py-1 outline-none border border-slate-300 w-full text-lg resize-none',classname)} />
  )
}

export default TextArea