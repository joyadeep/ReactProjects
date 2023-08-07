import React from 'react'
import { twMerge } from 'tailwind-merge'


type Props = {
    title:string;
    classname?:string;
}

const Label = ({title,classname}: Props) => {
  return (
    <label className={twMerge('text-slate-600 text-md tracking-tighter',classname)} htmlFor={title}>{title}</label>
  )
}

export default Label