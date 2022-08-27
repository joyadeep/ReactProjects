import { Box, Button, Grid,Typography } from '@mui/material'
import { keyframes, Keyframes } from '@emotion/react'
import React from 'react'

const Intro = () => {

    const animation=keyframes`
    50%{ 
        transform: translateY(-50px);
    }
    100%{
         transform: translateY(-105px);
    }
    `
   
  return (
   <Box sx={{height:{xs:'200vh',sm:'200vh',md:'100vh'},bgcolor:'white',color:'black'}}>
    <Grid container>
        <Grid item xs={12} sm={12} md={6} sx={{justifyContent:'center',alignItems:'center',display:'flex',height:'100vh'}}>
           <Box>
           <Typography variant='h1'>Hi,</Typography>
            <Typography variant='h2'>I am</Typography>
            <Typography  sx={{typography:{sm:'body1',md:'h4',lg:'h1'},fontWeight:'bold'}}>Joy-A-deep</Typography>
            <Box sx={{overflow:'hidden',height:'30px',my:3}}>
            <Box sx={{height:'fit-content',animation:`${animation} 7s infinite ease-in-out alternate`}}>
                <Typography sx={{ height:'50px',fontSize: '25px', fontWeight: '600'}}>Web</Typography>
                <Typography sx={{ height:'50px',fontSize: '25px', fontWeight: '600'}}>React</Typography>
                <Typography sx={{ height:'50px',fontSize: '25px', fontWeight: '600'}}>Technophile</Typography>  
            </Box>
            </Box>
            <Box sx={{display:'flex',gap:3}}>
               <Button variant='contained' disableElevation size="small" sx={{textTransform:'none',fontWeight:'500',fontSize:'20px'}}>Hire me</Button>
               <a style={{textDecoration:'none'}} href="https://drive.google.com/file/d/1Wu_UPsA17D3hA0bra46P32XGNhNIXQod/view?usp=sharing" target="_blank"> <Button variant='outlined' size='small' sx={{textTransform:'none',fontWeight:'500',fontSize:'20px'}}>Download CV</Button></a>
            </Box>

           </Box>
        </Grid>
        <Grid item  xs={12} sm={12} md={6} sx={{height:'100vh',bgcolor:'white'}}>
            <Box sx={{bgcolor:'#78B9EF',width:'100%',height:'100%',overflow:'hidden'}} style={{clipPath:' polygon(38% 0, 100% 0%, 100% 100%, 30% 100%, 0% 50%)'}}>
                <img src='https://joyadeep.github.io/portfolio/static/media/me.5ea9dae1.png' width="100%" height="100%"/>
            </Box>
        </Grid>
    </Grid>
   </Box>
  )
}

export default Intro