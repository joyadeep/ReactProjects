import React from 'react'
import {BiSolidQuoteLeft} from 'react-icons/bi'
import { Itestimonial } from '../pages/Testimonial'
type Props = {
  testimonial:Itestimonial
}

const TestimonialCard:React.FC<Props> = ({testimonial}) => {
  console.log("name==",testimonial.name)
  return (
    <div className='border rounded-md  p-5 flex justify-center flex-col  gap-3 shadow-md hover:shadow-xl cursor-pointer'>
        <img src={testimonial.image} alt="" className='w-20 h-20 rounded-full mx-auto' />
        <div className='text-center'>
        <h1 className='text-black text-lg font-medium tracking-tight capitalize'>{testimonial.name}</h1>
        <h3>{testimonial.designation}</h3>
        <h5 className='font-semibold text-slate-600'>{testimonial.email}</h5>
        </div>
        <p className=' tracking-tighter text-slate-500 text-left '><BiSolidQuoteLeft size={24} className='text-blue-500'/>{testimonial.message}</p>
    </div>
  )
}

export default TestimonialCard