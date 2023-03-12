import React, { useRef, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Modal,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  CircularProgress
} from "@mui/material";
import { LinkRounded,ContentPasteRounded } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import blob from '../assets/blob.svg'
import axois from 'axios';
const Shortner = () => {
  const[url,setUrl]=useState("")
  const[isLoading,setIsLoading]=useState(false);
  const[res,setRes]=useState("");
  const[isOpen,setIsOpen]=useState(false);
  const[openToast,setOpenToast]=useState(false);
    const handleClick=(e:any)=>{
      setIsLoading(true);
      const options = {
        method: 'POST',
        url: 'https://url-shortener23.p.rapidapi.com/shorten',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '1b426aca48mshdbabd82da60fca4p1894bbjsndcf818f12ed0',
          'X-RapidAPI-Host': 'url-shortener23.p.rapidapi.com'
        },
        data: {"url": `${url}` }
      };
      
      axois.request(options).then(function (response) {
        console.log(response.data);
        setRes(response.data.short_url)
        setIsOpen(true)
      }).catch(function (error) {
        console.error(error);
        setRes(error)
      });

setIsLoading(false)
    }

  return (
    <>
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: {xs:1,sm:1,md:3},
        background:{
          xs:'none',
          sm:'none',
          md:`url(${blob}) no-repeat top right`
        }
      }}
    >
      <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>A simple link</Typography>
      <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>but a powerful tool</Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>for</Typography>
        <Typography component={'div'}  sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'},color: "#eb1fbb", fontWeight: "600"}} >
          <Typewriter
            options={{
              strings: ["Youtube", "Facebook", "Instagram","and Everything !"],
              autoStart: true,
              loop: true,
              delay: 150,
            }}
          />
        </Typography>
      </Box>
      <Box sx={{ width: {xs:'100%',sm:'100%',md:'50%',lg:'50%'}, textJustify: "inter-word", mt: 3 }}>
      <Typography  variant="body1"> Our tool allows you to seamlessly track your audience with simple and</Typography>
        <Typography  variant="body1">
          easy-to-remember yet powerful links and provide your customers a
          unique tailored experience.
        </Typography>
      </Box>
      <Box sx={{ mt: 3,display:'flex',alignItems:'center',gap:3 }}>
        <TextField
        name="url"
        type="url"
        value={url}
        onChange={(e:any)=>{setUrl(e.target.value)}}
          sx={{
            width: {xs:'80%',sm:'40%',md:'40%'},
            border: "none",
            borderRadius:"9px",
            boxShadow: "0px 0px 10px #eaeaea ",
            bgcolor: "white",
            "& fieldset": { border: "none" },
          }}
          placeholder="https://youtube.com/watch?dfs34fvdv9v7e6vfrr"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkRounded />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button size="large" disabled={isLoading} onClick={handleClick} sx={{textTransform:'none',color:'white',bgcolor:'black',px:{xs:1,sm:2,md:3},"&:hover":{color:'white',bgcolor:'black'}}}>
            {
              isLoading?<CircularProgress size={'30px'} />:<Typography  sx={{
                fontSize:{
                  xs:'16px',
                  sm:'20px',
                  md:'20px'
                },
                whiteSpace:'nowrap'    
              }}>Try Now</Typography>
            }
        </Button>
      </Box>
    </Box>
    <Modal open={isOpen} onClose={()=>{setIsOpen(false)}} sx={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Paper sx={{width:"50%",p:3}}>
            <Typography variant='h6'>Your URL is ready</Typography>
            <Box sx={{display:'flex',alignItems:'center',width:'100%'}}>
            <TextField
            size="medium"
            aria-readonly
           fullWidth
          value={res}
         />
           <IconButton onClick={()=>{
            navigator.clipboard.writeText(res);
            setOpenToast(true);
            setIsOpen(false);
           }}>
            <ContentPasteRounded/>
           </IconButton>
            </Box>
            </Paper>
    </Modal>
    <Snackbar open={openToast}  anchorOrigin={{
        vertical: "top",
        horizontal: "right"
     }} onClose={()=>{setOpenToast(false)}} autoHideDuration={3000}>
      <Alert severity="success">
           <Typography variant='body1' >
            link copied successfully !
           </Typography>
      </Alert>
    </Snackbar>
    </>
  );
};

export default Shortner;
