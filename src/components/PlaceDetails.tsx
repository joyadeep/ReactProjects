import React from 'react'
import japan from '../assets/images/japan.jpg'
import highway from '../assets/images/road.jpg'
type Props = {}

const PlaceDetails = (props: Props) => {
  return (
    <div className='flex gap-5 justify-between mb-10 w-full even:flex-row-reverse'>
        <div className='w-1/2'>
            <h1 className='text-2xl font-semibold font-poppins'>Taal volcano,Batangas</h1>
            <p className='text-slate-500 text-justify '>
                one of the most iconic view in luzon Mt. taal booasts a volcanic inside 
                a lake island on island. if you fancy a close look,the hike up to the crater is a mere 45 minutes
                , and is easy enough for beginners.Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano,including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early moringn trip,
                and then unwind with some bulalo before heading back home !
            </p>
        </div>
        <div className='w-1/2 flex gap-2'>
            <img src={japan} alt="" className='w-64 h-80 translate-y-5 rounded-md object-cover shadow-2xl shadow-slate-400 '  />
            <img src={highway} alt="" className='w-64 h-80  rounded-md object-cover shadow-2xl shadow-slate-400' />
        </div>
    </div>
  )
}

export default PlaceDetails