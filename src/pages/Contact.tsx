import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
type Props = {}

const Contact = (props: Props) => {
  return (
    <div className=' min-h-screen flex flex-col items-center justify-center gap-20'>
        <h3 className='text-5xl font-semibold tracking-tighter'>Want to work together ?</h3>
        <div className='text-center'>
            <h5 className='text-md text-slate-400'>Feel free to reach out at</h5>
            <h4 className='text-2xl font-semibold tracking-tight mt-5'>dev.joyadeep@gmail.com</h4>

        </div>
        
    </div>
  )
}

export default Contact