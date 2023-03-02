import { KeyboardArrowDownRounded, LanguageRounded, MailOutlineRounded, MailRounded, PlaceOutlined } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

const DeveloperDetails = () => {
  return (
    <Accordion elevation={0} sx={{p:0,m:0}}>
        <AccordionSummary 
        expandIcon={<KeyboardArrowDownRounded fontSize='large' />}
        >
            <Typography variant="h5">Developer Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box sx={{display:'flex',mb:3}}>
            <LanguageRounded sx={{color:'gray'}}/>
            <Box sx={{pl:2}}>
                <Typography variant="body2" sx={{fontWeight:'bold'}}>Website</Typography>
                <Typography variant='body2' >https://www.google.com</Typography>
            </Box>
        </Box>
        <Box sx={{display:'flex',mb:3}}>
            <MailOutlineRounded sx={{color:'gray'}}/>
            <Box sx={{pl:2}}>
                <Typography variant="body2" sx={{fontWeight:'bold'}}>Email</Typography>
                <Typography variant='body2' >testcompany@testmail.com</Typography>
            </Box>
        </Box>
        <Box sx={{display:'flex',mb:3}}>
            <PlaceOutlined sx={{color:'gray'}}/>
            <Box sx={{pl:2}}>
                <Typography variant="body2" sx={{fontWeight:'bold'}}>Address</Typography>
                <Typography variant='body2' >https://www.google.com</Typography>
            </Box>
        </Box>
        </AccordionDetails>
    </Accordion>
  )
}

export default DeveloperDetails