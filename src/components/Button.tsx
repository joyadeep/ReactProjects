import React from 'react'
import {twMerge} from 'tailwind-merge'
type Props = {
    title:string;
    classname?:string;
    handleClick?:any;
    disabled?:boolean;
    type?:"button"|"submit"|"reset"

}

const Button = ({title,classname,handleClick,disabled,type}: Props) => {
  return (
    <button type={type ?? "button"} disabled={disabled} onClick={handleClick} className={twMerge('w-fit px-6 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300  text-white rounded-md',classname)}>{title}</button>
  )
}

export default Button