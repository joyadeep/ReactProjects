import { ArrowForwardRounded, BookmarkRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Container, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import DeveloperDetails from '../components/DeveloperDetails'
import Similar from '../components/Similar'

const AppDetails = () => {
  return (
    <Box>
        <Box sx={{display:'flex',alignItems:'flex-end',pb:3,height:'100vh',bgcolor:'red',background:` linear-gradient(to right,
      rgba(0, 0, 0, 0.4), 
      rgba(0, 0, 0, 0)
    ), url("https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,backgroundSize:'cover',backgroundPosition:'right'}}>
            <Container>
            <Typography variant='h3' color="white" sx={{fontWeight:'500',mb:2}}>Clash of Clans</Typography>
            <Typography variant="h6" color="#058d67"  >Supercell</Typography>
            <Box sx={{display:'flex',alignItems:'center',columnGap:2,mt:1}}>
            <Avatar variant='rounded' sx={{width:64,height:64,bgcolor:'gray',borderRadius:'20px'}} >M</Avatar>
            <Box>
                <Typography variant="body2" sx={{display:'flex',alignItems:'center',color:'white'}}>4.2 <Rating sx={{fontSize:'16px',color:'white',ml:'2px'}} defaultValue={0.5} max={1} /></Typography>
                <Typography color="white" >50M+ reviews</Typography>
                {/* <Box>
                    <Typography color={'white'}>50M+</Typography>
                    <Typography color="white" >Downloads</Typography>
                </Box> */}
            </Box>
        </Box>
            <Button variant="contained" size='large' disableElevation sx={{textTransform:'none',fontWeight:'500',mt:2,width:'200px'}}>Install</Button>
            <Button startIcon={<BookmarkRounded/>}  size='large' disableElevation sx={{textTransform:'none',fontWeight:'500',mt:2,width:'200px'}}>Add to wishlist</Button>
            </Container>
        </Box>

        <Container sx={{mt:4}}>
          <Grid container columnSpacing={4}>
            <Grid item xs={8} >
            <Typography variant="h5" sx={{display:'flex',alignItems:'center'}}  >About this Game <ArrowForwardRounded sx={{ml:1}}/></Typography>
            <Typography mt={1}>
            Join millions of players worldwide as you build your village, raise a clan, and compete in epic Clan Wars!
Mustachioed Barbarians, fire wielding Wizards, and other unique troops are waiting for you! Enter the world of Clash!
Welcome to Skeleton Park, a new Clan Capital District with indestructible barriers!
            </Typography>

            <Typography variant="h5" mt={5} >What's New</Typography>
            <Typography mt={1} >Various minor bugs fixed</Typography>
            </Grid>
            <Grid item xs={4} >
                <DeveloperDetails/>
                <Similar/>
            </Grid>
          </Grid>
        </Container>
    </Box>
  )
}

export default AppDetails