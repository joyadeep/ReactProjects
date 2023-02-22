import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const PaidCard = () => {
  return (
    <Box sx={{mt:3,p:2}}>
        <Paper elevation={0} sx={{boxShadow:'5px 10px 20px #f1f1f1',width:'100%',p:2}} >
        <img src='https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={'100%'} height={'50%'} style={{objectFit:'cover',borderRadius:'7px'}} />
        <Typography sx={{fontWeight:'bold'}}>Bring You Home</Typography>
        <Typography variant='body2' sx={{color:'gray'}} >Puzzle game</Typography>
        <Button variant="contained" disableElevation sx={{bgcolor:'#419cff',fontSize:'18px',textTransform:'none',borderRadius:'20px',width:'100%',mt:2}}> $21.50</Button>
        </Paper>
    </Box>
  )
}

export default PaidCard