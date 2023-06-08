import React from 'react'
import japan from '../assets/images/japan.jpg'
import AboutCard from '../components/AboutCard'

const about=[
  {
    id:1,
    title:'our history',
    description:"Trippy is owned and managed by Trippy Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy Pvt. Ltd. is counted for its expertise in wen solutions and its top ranking business portals. Our incincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Trippy is a live paradigm of our work excellence "
  },
  {
    id:2,
    title:'our mission',
    description:"our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."
  },
  {
    id:3,
    title:"our vision",
    description:"To sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."
  }
]

type Props = {}

const About = (props: Props) => {
  return (
    <div className='h-fit pb-20' >
      <div className='flex items-center justify-center ' style={{height:'70vh',backgroundImage:`url(${japan})`,backgroundSize:'cover',backgroundPositionY:'center'}} >
        <h1 className='text-6xl font-bold text-white ' >About</h1>
      </div>
      <div className='px-5 lg:px-20 mt-10 flex flex-col gap-10'>
      {/* <AboutCard title='Our Mission' description='our mission' /> */}
      {
        about.map((item)=>(
          <AboutCard key={item.id} title={item.title} description={item.description} />
        ))
      }
      </div>
    </div>
  )
}

export default About