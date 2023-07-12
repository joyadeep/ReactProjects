import React from 'react'
import ServiceCard from '../components/ServiceCard';
import serviceData from '../data/service';
import {LuPenTool} from 'react-icons/lu';
import {CiMobile3} from 'react-icons/ci';
import {HiMiniCodeBracket,HiOutlineDevicePhoneMobile} from 'react-icons/hi2'
type Props = {}

const Services= (props: Props) => {
    console.log("serviceData ==",serviceData)
  return (
    <div className='w-full min-h-screen px-20  flex flex-col justify-center items-center gap-20'>
        <h1 className='text-4xl font-bold capitalize tracking-tighter' >My services</h1>
        <div className='flex justify-between w-full gap-5'>
         <ServiceCard title={"UI/UX design"} description={"I create User-centered interfaces for digital products, applications, and websites to enhance user experience."} icon={<LuPenTool size={40} className='text-blue-500'/>}  />
         <ServiceCard title={"Prototyping"} description={"Using prototyping services, clients can visualize and test their product's design and functionality."} icon={<HiOutlineDevicePhoneMobile size={40} className='text-blue-500'/>}  />
         <ServiceCard title={"Frontend development"} description={"In frontend development, I create visual appeal, usability, and accessibility for user interfaces."} icon={<HiMiniCodeBracket size={40} className='text-blue-500'/>}  />
           
       
        </div>
    </div>
  )
}

export default Services