import { Avatar, Box, Grid, Rating, Typography } from '@mui/material'
import React from 'react'

interface Iprops{
    title:string
}

const TopApps:React.FC<Iprops> = ({title}) => {
  const item=[1,2,3,4,5,6,7,8,9]
    return (
    <Box mt={5}>
        <Typography variant='h5' sx={{p:0,m:0,letterSpacing:'-1px'}} >{title}</Typography>
        <Grid container sx={{mt:0,height:'400px'}} direction="column" spacing={3}>
{
    item.map((item)=>(
        <Grid item xs={4} key={item} sx={{"& hover":"bgcolor:'red'"}}>
        <Box sx={{display:'flex',alignItems:'center',columnGap:2}}>
            <Typography>{item}</Typography>
            <Avatar variant='rounded' sx={{width:64,height:64,boxShadow:'0px 0px 10px #eeeeee',bgcolor:'black'}} >M</Avatar>
            <Box>
                <Typography variant='body1'>Facebook Lite</Typography>
                <Typography variant="caption" sx={{color:'gray'}}>Social</Typography>
                <Typography variant="body2" sx={{display:'flex',alignItems:'center',color:'gray'}}>4.2 <Rating sx={{fontSize:'12px',color:'gray',ml:'2px'}} defaultValue={0.5} max={1} /></Typography>
            </Box>
        </Box>
    </Grid>
    ))
}
            {/* <Grid item xs={4}>
                <Box sx={{display:'flex',alignItems:'center',columnGap:2}}>
                    <Typography>1</Typography>
                    <Avatar variant='rounded' sx={{width:64,height:64}} >M</Avatar>
                    <Box>
                        <Typography variant='body1'>Facebook Lite</Typography>
                        <Typography variant="caption" sx={{color:'gray'}}>Social</Typography>
                        <Typography variant="caption" sx={{display:'block',color:'gray'}}>4</Typography>
                    </Box>
                </Box>
            </Grid> */}

            
          


        </Grid>
    </Box>
  )
}

export default TopApps