import { Box,Typography,Container,Grid, Paper } from '@mui/material'
import React from 'react'
import Project from '../component/Project';
import nflix from '../assets/images/nflix.png';
import fakestore from '../assets/images/fakestore.png';
import weatherman from '../assets/images/weatherman.png';

const Projects = () => {
  const projects=[
    {name:'Nflix',description:'Nflix is lets you find movies information as per search query',image:nflix},
    {name:'FakeStore',description:'Fakestore is a ecommerce site with redux and redux thunk',image:fakestore},
    {name:'WeatherMan',description:'Search your location and get weather status',image:weatherman},
  ]
  return (
    <Box sx={{width:'100%',height:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
    <Typography align="center" variant='h4' fontWeight="500">Projects</Typography>
    <Container maxWidth="lg" sx={{pt:2}}>
    <Grid container spacing={3}>
      {
        projects.map((project)=>(
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3} >
        <Project name={project.name} description={project.description} image={project.image} />       
         </Grid>
        ))
      }
   
    </Grid>
    </Container>
</Box>
  )
}

export default Projects