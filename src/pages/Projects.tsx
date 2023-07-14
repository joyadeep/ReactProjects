import React, { useState } from 'react'
import me from '../assets/images/me.jpg'
import shopping from '../assets/images/shopping.png'
import trippy from '../assets/images/trippy.png'
import pendect from '../assets/images/pendect.png'
import { Link } from 'react-router-dom'
import moviesnepal from '../assets/images/moviesnepal.png'
type Props = {}


const projects=[
    {
        id:1,
        title:"ecommerce with khalti integrated",
        image:shopping,
        url:"https://bestdealnepal.netlify.app/"
    },
    {
        id:2,
        title:"travel app",
        image:trippy,
        url:"https://triphop.netlify.app/"
    },
    {
        id:3,
        title:"URL shortner app",
        image:pendect,
        url:"https://pendect.netlify.app/"
    },
    {
        id:4,
        title:"Movies details with OMDB API",
        image:moviesnepal,
        url:"https://moviesnepal.netlify.app/"
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
            <p onClick={()=>handleTabChange("1")}  className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "1" && "bg-blue-500 "} cursor-pointer hover:bg-blue-400`}>All</p>
            <p onClick={()=>handleTabChange("2")} className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "2" && "bg-blue-500  "} cursor-pointer hover:bg-blue-400`}>Frontend</p>
            <p onClick={()=>handleTabChange("3")} className={`w-24 md:w-32 px-4 py-2 rounded-md  ${tab === "3" && "bg-blue-500  "} cursor-pointer hover:bg-blue-400`}>FullStack</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 mt-4'>
            {
                projects.map((project)=>(
                    <Link to={project.url} target='_blank' key={project.id} className='cursor-pointer'>
                <img src={project.image}  alt="" className='rounded-md  object-cover aspect-video' />
                <p className='mt-2 text-slate-800'>{project.title}</p>
            </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Projects