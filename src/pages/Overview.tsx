import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TopList from '../components/TopList'
import Trending from '../components/Trending'

const Overview = () => {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Paper elevation={0} sx={{display:'flex',flexDirection:'column',justifyContent:'flex-end',overflow:'hidden',height:'300px',background:"url('https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",backgroundSize:'cover',mb:3}}>
                    <Box 
                    sx={{display:'flex',height:'100px',alignItems:'center',px:3,justifyContent:'space-between',background:'rgba( 0,0,0 , 0.2 )',backdropFilter: 'blur( 10px )'}}>
                    <Box>
                        <Button sx={{p:0}}><Typography variant="caption" sx={{color:'#70B8FF'}} >Graphics and design</Typography></Button>
                        <Typography variant="h6" sx={{color:'white'}} >Super Mario : Bros</Typography>
                        <Typography variant="body2" sx={{color:'white'}}>Save the world from evil with Mario Bros</Typography>
                    </Box>
                    <Button variant="contained" disableElevation size='small' sx={{textTransform:'none',borderRadius:'15px',px:2,fontSize:'16px',fontWeight:'bold',letterSpacing:'-1px'}} >Download</Button>
                    </Box>
                </Paper>

<TopList/>
<Typography>hello world</Typography>

            </Grid>
            <Grid item xs={4}>
                <Trending/>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Overview