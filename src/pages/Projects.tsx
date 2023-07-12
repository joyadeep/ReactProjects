import React from 'react'
import me from '../assets/images/me.jpg'
type Props = {}

const Projects = (props: Props) => {
  return (
    <div className=' min-h-screen w-full px-20 text-center'>
        <h1 className='text-4xl font-bold tracking-tight capitalize'>My Works</h1>
        <div className='flex gap-5 justify-center mt-10'>
            <p className='px-4 py-1 rounded-md bg-blue-500 text-white cursor-pointer hover:shadow-md'>All</p>
            <p className='px-4 py-1 rounded-md  border cursor-pointer hover:shadow-md'>Frontend</p>
            <p className='px-4 py-1 rounded-md border cursor-pointer hover:shadow-md '>FullStack</p>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-4'>
            {
                [1,2,3,4,5,6].map((_,index)=>(
                    <div key={index}>
                <img src={me}  alt="" className='rounded-md h-56 w-full object-cover' />
                <p className='mt-2 text-slate-800'>this is project 1</p>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects