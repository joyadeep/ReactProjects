import React from 'react'
import japan from '../assets/images/japan.jpg'
type Props = {}

const TripCard = (props: Props) => {
  return (
    <div className='shadow-xl w-1/3  p-2 rounded-md border border-slate-100 ' >
        <img src={japan} alt="" className='h-72 w-full rounded-lg ' />
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