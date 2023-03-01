import { Avatar, Box, Container, Grid, Paper, Rating, Typography } from '@mui/material'
import React from 'react'

const Trending = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" >Trending</Typography>
      <Grid container spacing={2} sx={{mt:1}}>
        
        {
          [1,2,3,4].map((index)=>(
            <Grid item xs={4} key={index} sx={{}}>
          <Paper sx={{p:1,'&:hover':{bgcolor:'#fcfcfc'},boxShadow:'5px 10px 20px #f4f4f4',cursor:'pointer'}} elevation={0}  >
            <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={'100%'} height={'150px'} style={{objectFit:'cover',borderRadius:'5px'}} />
            <Box sx={{display:'flex',alignItems:'center',columnGap:2,mt:2}}>
            <Avatar variant='rounded' sx={{width:64,height:64,boxShadow:'0px 0px 10px #eeeeee',bgcolor:'black'}} >M</Avatar>
            <Box>
                <Typography variant='body1'>Facebook Lite</Typography>
                <Typography variant="caption" sx={{color:'gray'}}>Social</Typography>
                <Typography variant="body2" sx={{display:'flex',alignItems:'center',color:'gray'}}>4.2 <Rating sx={{fontSize:'12px',color:'gray',ml:'2px'}} defaultValue={0.5} max={1} /></Typography>
            </Box>
        </Box>
          </Paper>
        </Grid>
          ))
        }


        {/* <Grid item xs={4} sx={{}}>
          <Paper sx={{p:1,'&:hover':{bgcolor:'#eeeeee'}}} elevation={0}  >
            <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={'100%'} height={'150px'} style={{objectFit:'cover',borderRadius:'5px'}} />
            <Box sx={{display:'flex',alignItems:'center',columnGap:2,mt:2}}>
            <Avatar variant='rounded' sx={{width:64,height:64,boxShadow:'0px 0px 10px #eeeeee',bgcolor:'black'}} >M</Avatar>
            <Box>
                <Typography variant='body1'>Facebook Lite</Typography>
                <Typography variant="caption" sx={{color:'gray'}}>Social</Typography>
                <Typography variant="body2" sx={{display:'flex',alignItems:'center',color:'gray'}}>4.2 <Rating sx={{fontSize:'12px',color:'gray',ml:'2px'}} defaultValue={0.5} max={1} /></Typography>
            </Box>
        </Box>
          </Paper>
        </Grid> */}
    
      </Grid>
    </Container>
  )
}

export default Trending