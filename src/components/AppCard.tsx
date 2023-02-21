import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const AppCard = () => {
  return (
    <Paper sx={{width:'fit-content',p:1,boxShadow:'15px 10px 20px #f1f1f1'}}>
        <img src='https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={160} height={170} style={{objectFit:'cover',borderRadius:'7px'}} />
        <Typography variant='body1' sx={{fontWeight:'bold'}}>Chess Classic</Typography>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <Typography variant="caption" sx={{color:'#d6d6d6',fontWeight:'600',letterSpacing:'-1px'}}>Board Game</Typography>
            <Button size='small'  disableElevation sx={{textTransform:'none',bgcolor:'#f1f1f1',color:'#6ab1fd',borderRadius:'15px',fontSize:'12px',px:1}} >Download</Button>
        </Box>
    </Paper>
  )
}

export default AppCard