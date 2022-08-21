import { Search } from '@mui/icons-material'
import { Box, Button, InputBase, Paper, styled } from '@mui/material'
import React, { useState} from 'react'

const Searchbar = () => {
    const[city,setCity]=useState("");
    
    const handleclick=()=>{
        console.log(city)
    }

    const StyledButton=styled(Button)({
      backgroundColor:'black',
      "&:hover":{
        backgroundColor:'#222222'
      }
    })
   
  return (
    <Box  sx={{width:"fit-content",display:'flex',alignItems:'center',backgroundColor:'white',borderRadius:1}}>
       <Box sx={{width:"fit-content",border:'1px solid',display:'flex',alignItems:'center',borderRadius:"5px 0 0 5px"}}>
        <Search sx={{marginX:'4px'}}/>
        <InputBase type="text" placeholder="Enter city" sx={{fontSize:'20px',fontWeight:'500'}} name="city" value={city} onChange={e=>setCity(e.target.value)}  />
        </Box>
        <StyledButton onClick={handleclick} variant='text' sx={{fontSize:'16px',backgroundColor:'black',color:'white',borderRadius:'0px 5px 5px 0px',height:'100%'}}>Search</StyledButton>
    </Box>
  )
}

export default Searchbar