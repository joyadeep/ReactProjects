import React from 'react'
import {AppBar,Toolbar,Typography,Box,Button,Badge} from '@mui/material'
const Header = () => {
    const links=[
        "Features",
        "Pricing",
        "Login"
    ]
  return (
    <>
    <AppBar elevation={0} sx={{bgcolor:'transparent'}}>
        <Toolbar>
            <Badge color='secondary' badgeContent={"Beta"} sx={{mr:'auto'}} >
            <Typography color='black' variant='h5' fontWeight={'bold'} letterSpacing="-1px" >Pendect</Typography>
            </Badge>
            <Box sx={{display:{xs:'none',sm:'none',md:'flex'},gap:3}}>
            {
                links.map((link,index)=>(
                    <Typography key={index} color="black">{link}</Typography>
                ))
            }
            </Box>
            <Button sx={{textTransform:'none',fontWeight:'600',borderRadius:5,bgcolor:'black',color:'white',ml:3,px:2,'&:hover':{'color':'white',bgcolor:'black'}}}>
                Get Started
            </Button>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header