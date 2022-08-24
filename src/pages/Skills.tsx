import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import SkillCard from '../component/SkillCard'
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import js from '../assets/icons/js.svg';
import react from '../assets/icons/reactjs.svg';
import nodejs from '../assets/icons/nodejs.svg';
import expressjs from '../assets/icons/expressjs.svg';
import mongodb from '../assets/icons/mongodb.svg';

const Skills = () => {
  const icons=[
    {icon:html,name:'HTML5'},
    {icon:css,name:'CSS3'},
    {icon:js,name:'Javascript'},
    {icon:react,name:'React'},
    {icon:nodejs,name:'Node.js'},
    {icon:expressjs,name:'Express js'},
    {icon:mongodb,name:'Mongodb'},

  ]
  return (
    <Box sx={{width:'100%',height:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
        <Typography align="center" variant='h4' fontWeight="500">Technical Skills</Typography>
        <Container maxWidth="lg" sx={{pt:2}}>
        <Grid container>
            {
              icons.map((icon,index)=>(
                <SkillCard key={index} icon={icon.icon} name={icon.name}/>
              ))
            }
        </Grid>
        </Container>
    </Box>
  )
}

export default Skills