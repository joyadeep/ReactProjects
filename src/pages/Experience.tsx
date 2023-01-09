import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import deerhold from '../assets/images/deerhold.png';
import ExpCard from '../component/ExpCard';

const Experience = () => {
  const exp=[
    {
      id:1,
      title:'Fellow React Developer',
      duration:'Aug 2022 - Nov 2022',
      image:deerhold,
      organization:'Deerhold Nepal'
    }]
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