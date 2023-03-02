import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import AppCard from './AppCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {useNavigate} from 'react-router-dom'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TopList = () => {
  const navigate=useNavigate();
  return (
    <>
   <Box sx={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',mr:1}}>
   <Typography variant="h6" sx={{fontWeight:'600',letterSpacing:'-1px'}}>Top Apps and Games</Typography>
   <Button sx={{p:0,textTransform:'none'}}><Typography color="#6ab1fd" onClick={()=>{navigate("/alltop")}} >see all</Typography></Button>
   </Box>

   <Swiper
      modules={[Navigation]}
      spaceBetween={70}
      slidesPerView={4}
      navigation
    >
      {
        [1,2,3,4,5,6,7,8,9].map((index)=>(
          <SwiperSlide key={index} >
        <AppCard/>
      </SwiperSlide>
        ))
      }
      {/* avoiding last item to view half only */}
      <SwiperSlide>
      </SwiperSlide>
      
      
      </Swiper>



    {/* <Box sx={{position:'relative',top:'90px',width:'fit-content'}}><IconButton sx={{bgcolor:'white',textAlign:'center',boxShadow:'5px 5px 10px gray'}}><ArrowBackIos sx={{pl:1}}/></IconButton></Box>
    <Box sx={{position:'relative',top:'50px',left:'98%',width:'fit-content'}} ><IconButton sx={{bgcolor:'white',textAlign:'center',boxShadow:'-5px -5px 10px gray',transform:'rotate(180deg)'}} ><ArrowBackIos sx={{pl:1}}/></IconButton></Box>
   <Box sx={{display:'flex',overflowY:'auto',columnGap:1,mt:'-70px',pl:2,pr:2}}>
   <AppCard/>
   <AppCard/>
   <AppCard/>
   <AppCard/>
   <AppCard/>
   <AppCard/>
   <AppCard/>
   </Box> */}
    </>
  )
}

export default TopList