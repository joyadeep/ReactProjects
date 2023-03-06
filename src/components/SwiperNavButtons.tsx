import { ArrowBackIos } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import React from 'react'
import {useSwiper} from 'swiper/react'

const SwiperNavButtons = () => {
    const swiper=useSwiper();
  return (
    <Box sx={{width:'100%',display:'flex',position:'absolute',top:'39%',zIndex:999}}>
        <IconButton onClick={()=>{swiper.slidePrev()}} sx={{bgcolor:'white',textAlign:'center',boxShadow:'5px 5px 10px gray',"&:hover":{bgcolor:'white'}}}><ArrowBackIos sx={{pl:1}}/></IconButton>
        <IconButton onClick={()=>{swiper.slideNext()}} sx={{bgcolor:'white',ml:'auto',textAlign:'center',boxShadow:'-5px -5px 10px gray',transform:'rotate(180deg)',"&:hover":{bgcolor:'white'}}} ><ArrowBackIos sx={{pl:1}}/></IconButton>
    </Box>
  )
}

export default SwiperNavButtons