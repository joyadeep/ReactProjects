import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

interface Iitem{
    id: number;
    title: string;
    duration: string;
    image: string;
    organization:string;
}

interface Iexp{
    item:Iitem;
}

const ExpCard:React.FC<Iexp> = ({item}) => {
  return (
    <Grid item md={6} sx={{border:0,boxShadow:'0'}} >
    <Card sx={{width:'100%',border:'none',boxShadow:'none'}}>
      <CardContent sx={{display:'flex',columnGap:2}} >
        <img src={item.image} width={100} height={100} style={{objectFit:'contain'}} />
       <Box sx={{my:'auto'}}>
       <Typography variant='h5' sx={{color:'black',fontWeight:'bold',fontSize:{xs:'16px',sm:'20px'}}}>{item.title}</Typography>
       <Typography variant='h6' sx={{color:'black',fontSize:{xs:'16px',sm:'20px'}}}>{item.organization}</Typography>
        <Typography variant='h6' sx={{color:'black',fontSize:{xs:'12px',sm:'16px'}}}>{item.duration}</Typography>
       </Box>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default ExpCard