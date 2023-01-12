import React from 'react'
import {Typography} from '@mui/material'
const Layout= (children:React.ReactNode) => {
  return (
    <>
        <Typography>Head</Typography>
        {
            children
        }
        <Typography>Foot</Typography>
    </>
  )
}

export default Layout