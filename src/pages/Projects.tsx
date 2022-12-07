import { Box,Typography,Container,Grid, Paper } from '@mui/material'
import React from 'react'
import Project from '../component/Project';
import nflix from '../assets/images/nflix.png';
import fakestore from '../assets/images/fakestore.png';
import weatherman from '../assets/images/weatherman.png';
import pendect from '../assets/images/pendect.png'

const Projects = () => {
  const projects=[
    {name:'Nflix',description:'Nflix is lets you find movies information as per search query',image:nflix,link:'https://joyadeep.github.io/nflix'},
    {name:'FakeStore',description:'Fakestore is a ecommerce site with redux and redux thunk',image:fakestore,link:'https://joyadeep.github.io/fakestore'},
    {name:'WeatherMan',description:'Search your location and get weather status',image:weatherman,link:'https://joyadeep.github.io/React-weatherman'},
    {name:'Pendect',description:'Url shortner web app.',image:pendect,link:'https://pendect.netlify.app/'}
  ]
  return (
    <Box sx={{width:'100%',minHeight:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
    <Typography align="center" variant='h4' fontWeight="500">Projects</Typography>
    <Container maxWidth="lg" sx={{pt:2}}>
    <Grid container spacing={3}>
      {
        projects.map((project,index)=>(
          <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={3} >
            <a style={{textDecoration:'none'}} href={project.link} target='_blank'>
        <Project name={project.name} description={project.description} image={project.image} />
        </a>       
         </Grid>
        ))
      }
   
    </Grid>
    </Container>
</Box>
  )
}

export default Projects