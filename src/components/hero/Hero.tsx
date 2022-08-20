import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/images/background.jpg';

const Hero = () => {
  return (
    <Box>
      <Typography variant='h3' align="center" sx={{fontWeight:"500"}}>Fashion<Typography variant="h3" component="span" sx={{color:"red",fontWeight:"900"}}>Blog</Typography></Typography>
        <Typography variant='body2' align="center" sx={{fontWeight:"100"}}>We make you look better!</Typography>
        <Box sx={{
            backgroundImage:`url(${Image})`,
            backgroundColor:'tomato',
            backgroundRepeat:"no-repeat",
            backgroundAttachment:"fixed",
            backgroundSize:'cover',
            width:'100%',
            height:'400px'
        }}>
            <Box sx={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{width:{xs:'90%',sm:'60%',md:'40%'},height:'fit-content',backgroundColor:"white",opacity:"0.7",paddingY:'10px'}}>
                <Typography variant='body1' align='center' sx={{fontWeight:'600',color:'red'}}>Trending Styles</Typography>
                <Typography variant='h5' align='center' sx={{fontWeight:'400',color:'black'}}>Life is boring without fashion</Typography>
                <Typography variant='body1' align='center' sx={{fontWeight:'600',color:'black'}}>We love to change your style</Typography>
            </Box>
            </Box>
  
        </Box>
    </Box>
  )
}

export default Hero