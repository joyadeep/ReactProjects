import React from 'react'
import japan from '../assets/images/road.jpg'
type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='h-fit pb-20' >
      <div className='flex items-center justify-center ' style={{height:'70vh',backgroundImage:`url(${japan})`,backgroundSize:'cover',backgroundPositionY:'center'}} >
        <h1 className='text-6xl font-bold text-white ' >Contact Us</h1>
      </div>
      <div className='w-1/3 mx-auto text-center mt-20'>
        <h4 className='text-2xl font-semibold'>Send a message to us!</h4>
        <form onSubmit={(e)=>{e.preventDefault()}} className='flex flex-col gap-4 mt-5'>
            <input type="text" name="" placeholder='Name' className='w-full border px-4 py-2 rounded-md outline-none' />
            <input type="email" name="" placeholder='Email' className='w-full border px-4 py-2 rounded-md outline-none' />
            <input type="subject" name="" placeholder='Subject' className='w-full border px-4 py-2 rounded-md outline-none' />
            <textarea name="" rows={5} placeholder='Message' className='w-full border px-4 py-2 rounded-md outline-none resize-none' />
            <button type='submit' className='text-lg text-slate-100 font-semibold bg-blue-300 py-1 rounded-md' >Send Message</button>
        </form>
      </div>
      </div>
  )
}

export default Contact