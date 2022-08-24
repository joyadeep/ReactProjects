import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import contactimg from '../assets/images/contact.png'
import contactSchema from '../schema';

const initialValues={
  fullname:'',
  email:'',
  message:''
}
const Contact = () => {
  const {values,errors,handleChange,handleSubmit}=useFormik(
    {
      initialValues:initialValues,
      validationSchema:contactSchema,
      onSubmit(values) {
        console.log("VALUES",values);
      },
    }
  )
  return (
   <Box sx={{width:'100%',height:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
    <Typography align="center" variant='h4' fontWeight="500">Let's Talk</Typography>
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',height:'90%'}}>
    <Grid container justifyContent='center' alignItems='center' height='fit-content'  >
        <Grid item xs={12} sm={12} md={6} sx={{textAlign:'center'}}><img src={contactimg} width={300} height={300}/></Grid>
        <Grid item xs={12} sm={12} md={6} >
          <Box sx={{width:'60%', mx:'auto'}}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Box>
           <TextField variant='outlined' error={Boolean(errors.fullname)} type="text" name="fullname" value={values.fullname} onChange={handleChange} label="Fullname" fullWidth/>
           <Typography sx={{fontSize:'12px', color:'red',height:'15px'}}>{errors.fullname}</Typography>
              </Box>
              <Box>
            <TextField variant='outlined' error={Boolean(errors.email)} type="email" name="email" value={values.email} onChange={handleChange}  label="Email" fullWidth/>
            <Typography sx={{fontSize:'12px', color:'red',height:'15px'}}>{errors.email}</Typography>
              </Box>
              <Box>
            <TextField variant='outlined' error={Boolean(errors.message)} type="text" name="message" value={values.message} onChange={handleChange} label="Message" multiline rows={4} fullWidth/>
            <Typography sx={{fontSize:'12px', color:'red',height:'15px'}}>{errors.message}</Typography>
              </Box>
            <Button variant="contained" type="submit" disableElevation size="small" sx={{textTransform:'none',fontWeight:'500',fontSize:'20px'}}>Message</Button>
            </Stack>
          </form>
          </Box>
        </Grid>
    </Grid>
    </Box>
   </Box>
  )
}

export default Contact