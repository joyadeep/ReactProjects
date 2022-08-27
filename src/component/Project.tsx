import { Box, Paper, Stack, styled, Typography } from '@mui/material'
import React from 'react'

interface Iproject{
  name:string;
  description:string;
  image:any;
}
const PaperStyled= styled(Paper)({
  transition:'1s',
  '&:hover':{
    transform:'translate(0,-6px)',
    transition:'1s'
  }
})

const Project:React.FC<Iproject> = ({name,description,image}) => {
  return (
    <PaperStyled elevation={6} sx={{bgcolor:'green',background:` linear-gradient(
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0.8)
    ), url(${image}) `,backgroundSize:'cover', height:'250px',cursor:'pointer'}}>
       <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <Typography variant='h3' sx={{color:'white'}}>{name}</Typography>
        <Typography variant='body1' sx={{color:'white',textAlign:'center',widht:'90%'}}>{description}</Typography>
       </Box>
    </PaperStyled>
  )
}

export default Project