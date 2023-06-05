import React from 'react'

type Props = {}

const FooterCard = (props: Props) => {
  return (
    <div>
        <h4 className='font-semibold text-xl'>Project</h4>
        <p className='text-sm'>Changelog</p>
        <p className='text-sm'>Status</p>
        <p className='text-sm'>License</p>
        <p className='text-sm'>All Version</p>

    </div>
  )
}

export default FooterCard