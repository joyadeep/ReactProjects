import React from 'react'
import {ImFacebook2} from 'react-icons/im';
import {AiFillInstagram,AiFillTwitterSquare} from 'react-icons/ai'
import FooterCard from './FooterCard';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black text-white px-20 py-10' >
        <div className='flex justify-between items-center'>
            <div>
                <h1 className='text-3xl font-bold tracking-tighter'>Trippy</h1>
                <h6 className='text-sm'>Choose your favourite destination</h6>
            </div>
            <div className='flex items-center gap-3'>
                <ImFacebook2 size={22} />
                <AiFillInstagram size={30} /> 
                <AiFillTwitterSquare size={30} />
            </div>
        </div>
        <div className='mt-7 flex justify-between'>
          <FooterCard/>
          <FooterCard/>
          <FooterCard/>
          <FooterCard/>
        </div>
    </div>
  )
}

export default Footer