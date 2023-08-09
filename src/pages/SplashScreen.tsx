import React from 'react'
import splash from '../assets/icons/splash.gif'

type Props = {}

const SplashScreen = (props: Props) => {
  return (
    <div className='w-full h-screen flex flex-col bg-blue-50 items-center justify-center'>
        <img src={splash} alt='animated screen' className='object-contain' />
        <h1 className='text-4xl md:text-5xl font-semibold tracking-tighter'>waking up server<span className='animate-ping text-red-500'>.</span> </h1>
        <p className='tracking-tight text-md text-center md:text-lg text-slate-600 pt-3'>I am using free server. So it might be asleep. please wait atmost 30 seconds.</p>
    </div>
  )
}

export default SplashScreen