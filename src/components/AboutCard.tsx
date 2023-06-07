import React from 'react'

type Props = {
    title:string;
    description:string;
}

const AboutCard= ({title,description}: Props) => {
  return (
    <div>
        <h1 className='text-3xl font-bold capitalize ' >{title}</h1>
        <p className='text-md text-slate-500 mt-2' >{description}</p>
    </div>
  )
}

export default AboutCard