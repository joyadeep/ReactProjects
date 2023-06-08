import React from 'react'
import TripCard from './TripCard'

type Props = {}

const RecentTrips = (props: Props) => {
  return (
    <div  className='flex flex-col items-center gap-3 px-5 lg:px-20 py-4'>
        <h1 className='text-5xl font-bold text-slate-800' >Recent Trips</h1>
        <p className='text-md text-slate-500 font-medium text-center' >You can discover unique destinations using Google Maps</p>
        <div className='flex flex-col lg:flex-row gap-3'>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        </div>
    </div>
  )
}

export default RecentTrips