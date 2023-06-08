import React from 'react'
import PlaceDetails from './PlaceDetails'

type Props = {}

const PopularDestination = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-3 px-5 lg:px-20 py-4'>
        <h1 className=' text-5xl font-bold text-slate-800 text-center leading-tight' >Popular Destination</h1>
        <p className='text-md text-slate-500 font-medium text-center' >Tours give you the opportunity to see a lot, within a time frame.</p>
        <PlaceDetails/>
        <PlaceDetails/>
    </div>
  )
}

export default PopularDestination