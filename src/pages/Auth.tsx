import React,{useState} from 'react'
import {Box,Grid,Typography,TextField,Button} from '@mui/material'
const Auth = () => {
  const[isLogin,setIsLogin]=useState(true);

  return (
    <Box height={'100vh'} bgcolor={'#97D9FF'} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Grid container sx={{height:'80%',width:'80%',bgcolor:'green',borderRadius:'5px',overflow:'hidden'}}>
        <Grid item md={6} sx={{bgcolor:'red'}}>

        </Grid>
        <Grid item md={6} sx={{bgcolor:'white'}}>
          <Box sx={{mx:'auto',width:'60%',pt:3}}>
          <Typography variant="h4" sx={{textAlign:'center',letterSpacing:'-1px'}}>{isLogin?"Login":"Register"}</Typography>
          <form>
            <Box sx={{display:'flex',flexDirection:'column',gap:2,mt:2}}>
            {!isLogin && <TextField size="small" type="text" placeholder="Username" fullWidth />}
            <TextField size="small" type="email" placeholder="Email" fullWidth />
            <TextField size="small" type="password" placeholder="Password" fullWidth />
{        !isLogin && <TextField size="small" type="password" placeholder="Confirm Password" fullWidth />
}            <Button variant="contained" disableElevation sx={{textTransform:'none'}}>{isLogin?"Login":"Signup"}</Button>
{
  isLogin && <>
              <Button variant="contained" disableElevation sx={{textTransform:'none',bgcolor:'white',color:'black',border:1,"&:hover":{background:'white'}}}>Login with Google</Button>
            <Button variant="contained" disableElevation  sx={{textTransform:'none',bgcolor:'white',color:'black',border:1,"&:hover":{background:'white'}}}>Login with Github</Button> 
  </>
}
            <Typography variant="body2" sx={{color:'gray'}}>
              <>
              {isLogin?"New to authApp?":"Already have account?"}<Button onClick={()=>setIsLogin(!isLogin)} sx={{textTransform:'none'}}><Typography variant="body2">{isLogin?"Sign Up":"Log In"}</Typography></Button>
              </>
            </Typography>
            </Box>
            
          </form>
          </Box>        
        </Grid>
      </Grid>
    </Box>
  )
}

export default Auth