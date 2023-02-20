import { Box,Typography } from '@mui/material'
import React from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/sidebar.css"
import {Widgets,Gamepad} from '@mui/icons-material'

const Sidebar = () => {
  return (
    <Box sx={{height:'100vh',px:'5px',pt:'5px',borderRight:'2px solid #f4f4f4'}}>
        <Box>
            <Typography variant='h5'>App Store</Typography>
        </Box>
        <Box mt={3} sx={{display:'flex',flexDirection:'column',rowGap:1}}>
            <NavLink to={"/"} className="sidebar" >
                <Widgets/>
                <Typography component={"span"} sx={{letterSpacing:'-1px',fontWeight:'bold'}} >Overview</Typography>
            </NavLink>
            <NavLink to={"/home"} className="sidebar" >
                <Gamepad/>
                <Typography component={"span"} sx={{letterSpacing:'-1px',fontWeight:'bold'}}>Arcade</Typography>
            </NavLink>
            <NavLink to={"/about"} className="sidebar" >
                <Widgets/>
                <Typography component={"span"}sx={{letterSpacing:'-1px',fontWeight:'bold'}} >Overview</Typography>
            </NavLink>
          
        </Box>
    </Box>
  )
}

export default Sidebar