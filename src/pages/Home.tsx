import React from 'react'
import road from '../assets/images/road.jpg'
import PopularDestination from '../components/PopularDestination'
import RecentTrips from '../components/RecentTrips'
import Footer from '../components/Footer'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <main className="w-full h-screen bg-road flex flex-col items-center justify-center gap-5" style={{backgroundImage:`url(${road})`,backgroundSize:'cover',backgroundPositionY:'center'}}>
      <h1 className='font-bold text-6xl text-white capitalize tracking-tight'>Your journey your story</h1>
      <p className='text-white text-xl font-normal tracking-tight capitalize ' >choose your favourite destination</p>
      <button className='capitalize text-xl font-bold tracking-wider text-slate-700 bg-white rounded-md px-3 py-2'>
        Travel plan
      </button>
    </main>
    <PopularDestination/>
    <RecentTrips/>
    <Footer/>
    </>
  )
}

export default Home