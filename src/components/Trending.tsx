import { Box, Button, Paper, Typography,Avatar } from '@mui/material'
import React from 'react'
import {useNavigate} from 'react-router-dom'
const Trending = () => {
    const navigate=useNavigate();
  return (
    <Paper elevation={0} sx={{pr:3,boxShadow:'5px 10px 20px #f1f1f1',pb:2,pl:1}}>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>Trending</Typography>
            <Button sx={{p:0,textTransform:'none'}} onClick={()=>{navigate("/trending")}} ><Typography color="#6ab1fd">see all</Typography></Button>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',mt:2}}>
        <Avatar sx={{bgcolor:'blue',borderRadius:'10px'}} variant="rounded" >M</Avatar>
        <Box sx={{pl:1}}>
            <Typography variant='body1' sx={{p:0,fontWeight:'600'}} >Telegram</Typography>
            <Typography variant='caption' sx={{p:0}}>social network</Typography>
        </Box>
        <Button variant='contained' size="small" disableElevation sx={{ml:'auto',borderRadius:'15px',textTransform:'none',bgcolor:'#f1f1f1',color:'#6ab1fd'}} >Download</Button>
        </Box>


        <Box sx={{display:'flex',alignItems:'center',mt:2}}>
        <Avatar sx={{bgcolor:'green',borderRadius:'10px'}} variant="rounded" >A</Avatar>
        <Box sx={{pl:1}}>
            <Typography variant='body1' sx={{p:0,fontWeight:'600'}} >WhatsApp</Typography>
            <Typography variant='caption' sx={{p:0}}>social network</Typography>
        </Box>
        <Button variant='contained' size="small" disableElevation sx={{ml:'auto',borderRadius:'15px',textTransform:'none',bgcolor:'#f1f1f1',color:'#6ab1fd'}} >Download</Button>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',mt:2}}>
        <Avatar sx={{bgcolor:'secondary',borderRadius:'10px'}} variant="rounded" >Z</Avatar>
        <Box sx={{pl:1}}>
            <Typography variant='body1' sx={{p:0,fontWeight:'600'}} >PUBG mobile </Typography>
            <Typography variant='caption' sx={{p:0}}>multiplayer game</Typography>
        </Box>
        <Button variant='contained' size="small" disableElevation sx={{ml:'auto',borderRadius:'15px',textTransform:'none',bgcolor:'#f1f1f1',color:'#6ab1fd'}} >Download</Button>
        </Box>
    </Paper>
  )
}

export default Trending