import { Box, Stack, styled,Typography } from '@mui/material'
import React from 'react'
import kidCategory from '../../assets/images/kid.jpg';
import menCategory from '../../assets/images/men.jpeg';
import womenCategory from '../../assets/images/women.jpg';
const Categories = () => {
    const StyledBox=styled(Box)({
        height:'200px',
        width:'100%',
        cursor:'pointer',
        backgroundColor:'green',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
    })
    const StyledTypography=styled(Typography)({
        margin:'25% 50px',
        background:'white',
        textAlign:'center',
        opacity:'0.7',
        fontSize:'28px',
        fontWeight:'600',
        letterSpacing:'2px'
    })
  return (
    <Box sx={{my:3}}>
        <Stack direction={{sx:'column',sm:'row'}} spacing={{sx:1,sm:2,md:3}}>
            <StyledBox sx={{backgroundImage:`url(${kidCategory})`}}><StyledTypography>Kids</StyledTypography></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${menCategory})`}}><StyledTypography>Men</StyledTypography></StyledBox>
            <StyledBox sx={{backgroundImage:`url(${womenCategory})`}}><StyledTypography>Women</StyledTypography></StyledBox>
        </Stack>
    </Box>
  )
}

export default Categories