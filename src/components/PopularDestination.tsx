import React from 'react'

type Props = {}

const PopularDestination = (props: Props) => {
  return (
    <div className='flex flex-col items-center gap-3 px-20 py-4'>
        <h1 className='text-5xl font-bold text-slate-800' >Popular Destination</h1>
        <p className='text-md text-slate-500 font-medium' >Tours give you the opportunity to see a lot, within a time frame.</p>

    </div>
  )
}

export default PopularDestination