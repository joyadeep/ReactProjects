import React,{useState} from 'react'
import japan from '../assets/images/japan.jpg'
type Props = {}

const TripCard = (props: Props) => {
  const [isHovered,setIsHovered]=useState(false)
  return (
    <div onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} className='shadow-xl w-1/3 cursor-pointer  p-2 rounded-md border overflow-hidden border-slate-100 hover:bg-slate-50 ' >
        <div className='h-72 overflow-hidden rounded-lg'>
        <img src={japan} alt="" className={isHovered ?"h-72 w-full rounded-lg scale-125  duration-200" : "h-72 w-full rounded-lg scale-100 duration-200 "} />
        </div>
        <h3 className='text-2xl font-semibold font-poppins mt-4'>Trip in Malaysia</h3>
        <p className='text-slate-500 text-sm text-justify '>
            Malaysia is a Southeast Asian country accupying parts of the Malay Peninsula and the island of Borneo.
            It's known for its beaches,rainforests and mix of Malay,
            Chinese, Indian and European culture Influences.
        </p>
    </div>
  )
}

export default TripCard