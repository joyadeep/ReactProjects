import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import deerhold from '../assets/images/deerhold.png';
import gotaxi from '../assets/images/gotaxi.png';
import ExpCard from '../component/ExpCard';

const Experience = () => {
  const exp=[
    {
      id:1,
      title:'Fellow React Developer',
      duration:'Mar 2022 - Aug 2022',
      image:deerhold,
      organization:'Deerhold Nepal'
    },
    {
      id:2,
      title:'Frontend Developer',
      duration:'Jan 2023 - present',
      image:gotaxi,
      organization:'Go Taxi Pvt. Ltd.'
    }
  ]
  return (
    <Box sx={{width:'100%',height:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
        <Typography align="center" variant='h4' fontWeight="500">Experience</Typography>
        <Container maxWidth="xl" sx={{pt:2}}>
        <Grid container>
            {
              exp.map((item)=>(
                <ExpCard key={item.id} item={item}/>
              ))
            }
        </Grid>
          </Container>
          </Box>
  )
}

export default Experience