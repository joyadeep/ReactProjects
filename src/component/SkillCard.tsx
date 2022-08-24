import { Card, CardContent, Grid, styled, Typography } from '@mui/material'
import React from 'react'

interface Iskills{
  icon:any;
  name:string;
}
const SkillCard:React.FC<Iskills> = ({icon,name}) => {
 
  return (
    <Grid item xs={4} sm={4} md={3} sx={{border:0,boxShadow:'0'}} >
    <Card sx={{width:'100%',border:'none',boxShadow:'none'}}>
      <CardContent sx={{textAlign:'center'}} >
        <img src={icon} width="70px" height="70px"/>
        <Typography variant='h5' sx={{color:'black',fontSize:{xs:'16px',sm:'20px'}}}>{name}</Typography>
      </CardContent>
    </Card>
    </Grid>
  )
}

export default SkillCard