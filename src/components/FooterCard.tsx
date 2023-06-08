import React from 'react'

type Props = {
  footer: {
    id:number,
    title:string,
    links:{
      id:number,
      title:string,
      link:string
    }[]
  }
}

const FooterCard = ({footer}: Props) => {
  return (
    <div className=' w-1/2 lg:w-fit ' >
        <h4 className='font-semibold text-xl'>{footer.title}</h4>
        {
          footer.links.map((link)=>(
            <p className='text-sm w-fit mx-auto lg:mx-0 cursor-pointer hover:underline hover:underline-offset-4 '>{link.title}</p>
          ))
        }
       

    </div>
  )
}

export default FooterCard