import React, { useState } from 'react'
import me from '../assets/images/me.jpg'
import shopping from '../assets/images/shopping.png'
import trippy from '../assets/images/trippy.png'
import pendect from '../assets/images/pendect.png'
type Props = {}


const projects=[
    {
        id:1,
        title:"ecommerce with khalti integrated",
        image:shopping
    },
    {
        id:2,
        title:"travel app",
        image:trippy
    },
    {
        id:3,
        title:"URL shortner app",
        image:pendect
    }
]

const Projects = (props: Props) => {
    const [tab,setTab]=useState("1")
    const handleTabChange=(tab:"1"|"2"|"3")=>{
        setTab(tab)
    }
  return (
    <div id='works' className=' py-16 min-h-screen bg-slate-100 w-full px-5 md:px-20 text-center'>
        <h1 className='text-4xl font-bold tracking-tight capitalize'>My Works</h1>
        <div className='flex gap-2 justify-center mt-3 mb-8 w-fit mx-auto px-2 py-2 rounded-xl bg-slate-700 text-white duration-500'>
            <p onClick={()=>setTab("1")}  className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "1" && "bg-blue-500 font-semibold pointer-events-none"} cursor-pointer hover:bg-blue-400`}>All</p>
            <p onClick={()=>setTab("2")} className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "2" && "bg-blue-500 font-semibold "} cursor-pointer hover:bg-blue-400`}>Frontend</p>
            <p onClick={()=>setTab("3")} className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "3" && "bg-blue-500 font-semibold "} cursor-pointer hover:bg-blue-400`}>FullStack</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-4'>
            {
                projects.map((project)=>(
                    <div key={project.id}>
                <img src={project.image}  alt="" className='rounded-md h-56 w-full object-cover' />
                <p className='mt-2 text-slate-800'>{project.title}</p>
            </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects