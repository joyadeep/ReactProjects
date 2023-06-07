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
  console.log("footerCard =",footer)
  return (
    <div>
        <h4 className='font-semibold text-xl'>{footer.title}</h4>
        {
          footer.links.map((link)=>(
            <p className='text-sm w-fit cursor-pointer hover:underline hover:underline-offset-4 '>{link.title}</p>
          ))
        }
       

    </div>
  )
}

export default FooterCard