import React from 'react'
import {Box,Typography,TextField,Button} from '@mui/material'

const ForgotPW = () => {
  return (
   <Box>

        <Box sx={{width:'50%',height:'50%'}}>
            <Typography>
                Forgot Password
            </Typography>
            <form>
            <TextField size="small" type="email" placeholder="Enter your email" fullWidth />
            <Button type="submit" variant="contained" disableElevation sx={{textTransform:'none'}}>Send</Button>
            </form>
        </Box>
   </Box>
  )
}

export default ForgotPW