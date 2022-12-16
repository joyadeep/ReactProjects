import { Alert, Box, Button, Grid, Snackbar, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useRef, useState } from 'react'
import contactimg from '../assets/images/contact.png'
import contactSchema from '../schema';
import emailjs from '@emailjs/browser';

interface Iformvalues {
  fullname:string
  from_name:string
  message:string
}

interface Itoast{
  severity:'success'|'error';
  message:string;
}

const initialValues={
  fullname:'',
  from_name:'',
  message:''
}

const Contact = () => {
  const [open,setOpen]=useState(false);
  const[data,setData]=useState<Itoast>({severity:'success',message:''})
  const handleClose=()=>{
    setOpen(false)
  }
  
  const {values,errors,handleChange,handleSubmit}=useFormik(
    {
      initialValues:initialValues,
      validationSchema:contactSchema,
      onSubmit(values) {
        emailjs.send('service_bu6w92t','template_r1l215j',values,'ebOigTnsSkBh9c64C') .then((result) => {
          setData({severity:'success',message:'Email sent successfully'})
          setOpen(true)
      }, (error) => {
          setData({severity:'error',message:'Cannot send email. Try later'})
          setOpen(true)
      });
      }
    }
  )
  
  return (
   <Box id='contact' sx={{width:'100%',height:'100vh',bgcolor:'white',color:'black',py:2,oveflow:'hidden'}}>
    <Typography align="center" variant='h4' fontWeight="500">Let's Talk</Typography>
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',height:'90%'}}>
    <Grid container justifyContent='center' alignItems='center' height='fit-content'  >
        <Grid item xs={12} sm={12} md={6} sx={{textAlign:'center'}}><img src={contactimg} width={300} height={300}/></Grid>
        <Grid item xs={12} sm={12} md={6} >
          <Box sx={{width:{xs:'90%',sm:'60%'}, mx:'auto'}}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Box>
           <TextField variant='outlined' error={Boolean(errors.fullname)} type="text" name="fullname" value={values.fullname} onChange={handleChange} label="Fullname" fullWidth/>
           <Typography sx={{fontSize:'12px', color:'red',height:'15px'}}>{errors.fullname}</Typography>
              </Box>
              <Box>
            <TextField variant='outlined' error={Boolean(errors.from_name)} type="email" name="from_name" value={values.from_name} onChange={handleChange}  label="Email" fullWidth/>
            <Typography sx={{fontSize:'12px', color:'red',height:'15px'}}>{errors.from_name}</Typography>
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
    <Snackbar open={open} onClose={handleClose} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
    <Alert variant='filled' severity={data.severity} onClose={handleClose} >
        {data.message}
    </Alert>
   </Snackbar>
   </Box>
  )
}

export default Contact