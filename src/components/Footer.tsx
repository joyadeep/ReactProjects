import React from 'react'
import {ImFacebook2} from 'react-icons/im';
import {AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'
import FooterCard from './FooterCard';
import data from '../data/footer.json'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black text-white px-5 lg:px-20 py-10' >
     
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold tracking-tighter'>Trippy</h1>
                <h6 className='text-sm'>Choose your favourite destination</h6>
            </div>
            <div className='flex items-center gap-3'>
                <ImFacebook2 size={22} className='cursor-pointer' />
                <AiFillInstagram size={30} className='cursor-pointer' /> 
                <AiFillTwitterSquare size={30} className='cursor-pointer'  />
                <FaTiktok size={22} className='cursor-pointer' />
            </div>
        </div>
        <div className='mt-7 flex justify-between flex-wrap gap-y-4 text-center lg:text-left '>
        {/* <div className='mt-7  grid grid-cols-4   '> */}
          {
            data.map((footer)=>(
              <FooterCard key={footer.id} footer={footer} />
            ))
          }
          {/* <FooterCard/>
          <FooterCard/>
          <FooterCard/>
          <FooterCard/> */}
        </div>
    </div>
  )
}

export default Footer