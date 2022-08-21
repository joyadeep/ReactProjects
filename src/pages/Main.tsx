import { Box, Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Weather from '../components/Weather'

const Main = () => {
  return (
   <>
   <Navbar/>
   <Container maxWidth="md" sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',mt:3}}>  
   <Searchbar/>
   <Weather/>
   </Container>
   </>
  )
}

export default Main