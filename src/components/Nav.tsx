import { NotificationAdd, Notifications, Search } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, IconButton, InputAdornment, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Nav = () => {
    const [isLogged,setIsLogged]=useState(true);
  return (
    <Box sx={{pr:3}}>
        <Box sx={{width:'fit-content',ml:'auto',display:'flex',alignItems:'center',columnGap:2}}>
            <IconButton sx={{bgcolor:'#f7f7f7',borderRadius:'10px'}} ><Notifications sx={{color:'#a3a9b4'}} /></IconButton>
            <TextField
            type="search"
            size='small'
          id="outlined-start-adornment"
          sx={{ m: 1, width: '30ch',bgcolor:'#f7f7f7',borderRadius:'10px',"& fieldset": { border: 'none' }}}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Search sx={{color:'#a3a9b4'}} /></InputAdornment>,
          }}
        />
            {isLogged?<Avatar sx={{bgcolor:'blue',borderRadius:'13px'}} variant="rounded" >M</Avatar>:<Button variant='contained' disableElevation size='small' sx={{textTransform:'none',bgcolor:'#3f9cff',fontSize:'16px'}} >Login</Button>}
        </Box>
    </Box>
  )
}

export default Nav