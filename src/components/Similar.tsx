import { ArrowForwardIosRounded, ArrowForwardRounded } from '@mui/icons-material'
import { Avatar, Box, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

const Similar = () => {
  return (
    <Box sx={{pl:2,mt:3}}>
        <Typography variant='h5' sx={{display:'flex',alignItems:'center'}} >Similar Apps <ArrowForwardRounded sx={{ml:1}}/> </Typography>
        {
            [1,2,3,4].map(()=>(
                <Paper elevation={0}  sx={{display:'flex',alignItems:'center',columnGap:2,cursor:'pointer','&:hover':{bgcolor:'#e9e9e9'},p:1}}>
            <Avatar variant='rounded' sx={{width:64,height:64,boxShadow:'0px 0px 10px #eeeeee',bgcolor:'black'}} >M</Avatar>
            <Box>
                <Typography variant='body1'>Facebook Lite</Typography>
                <Typography variant="caption" sx={{color:'gray'}}>Social</Typography>
                <Typography variant="body2" sx={{display:'flex',alignItems:'center',color:'gray'}}>4.2 <Rating sx={{fontSize:'12px',color:'gray',ml:'2px'}} defaultValue={0.5} max={1} /></Typography>
            </Box>
        </Paper>
            ))
        }
    </Box>
  )
}

export default Similar