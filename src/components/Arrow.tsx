import React from 'react'

type Props = {
    fill?:string
}

function Arrow({fill}: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill={fill||"none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
</svg>

  )
}

export default Arrow