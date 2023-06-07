import React from 'react'
import japan from '../assets/images/japan.jpg'
import RecentTrips from '../components/RecentTrips'

type Props = {}

const Service = (props: Props) => {
  return (
    <div className='h-fit pb-20' >
    <div className='flex items-center justify-center mb-20 ' style={{height:'70vh',backgroundImage:`url(${japan})`,backgroundSize:'cover',backgroundPositionY:'center'}} >
      <h1 className='text-6xl font-bold text-white ' >Service</h1>
    </div>
    <RecentTrips/>
    </div>
  )
}

export default Service;