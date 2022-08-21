import { Cloud, WbTwilight } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const Weather = () => {
  return (
   <Box sx={{p:2,backgroundColor:'#94BEC6',borderRadius:3,mt:2,width:{xs:'100%',sm:'80%',md:'50%'},color:'#0D174C'}}>
        <Stack direction={'column'}>
            <Box>
                <Typography align='center' variant='h4' letterSpacing={2}>Kathmandu</Typography>
            </Box>
            <Box>
               <Typography variant='h2' align='center' sx={{fontWeight:'600',letterSpacing:'5px'}}>24<sup>o</sup><sub>F</sub></Typography>
            </Box>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Cloud sx={{fontSize:'40px'}}/>
                <Typography  fontSize="25" mt={-1}>Cloudy</Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                <Box sx={{display:'flex',gap:1, alignItems:'center'}}>
                <WbTwilight sx={{fontSize:"36px"}}/><Typography variant='h6'>05:44 AM</Typography>
                </Box>

                <Box sx={{display:'flex', gap:1,alignItems:'center'}}>
                <WbTwilight sx={{fontSize:"36px"}}/><Typography variant='h6'>06:44 PM</Typography>
                </Box>
               
            </Box>
        </Stack>
   </Box>
  )
}

export default Weather