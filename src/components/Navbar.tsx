import { Air } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Navbar = () => {
  return (
    <AppBar position="static" elevation={0}>
        <Toolbar>
            <Box sx={{display:'flex', flexDirection:'row',gap:1,alignItems:'center'}}>
            <Air sx={{fontSize:'48px'}}/>
            <Typography variant='h5' sx={{display:{xs:"none",sm:"none",md:"block"}}}>Weather-Man</Typography>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar