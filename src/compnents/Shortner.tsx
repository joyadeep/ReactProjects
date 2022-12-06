import React, { useRef, useState } from "react";
import short from '../services/shortUrl'
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Search, LinkRounded } from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import blob from '../assets/blob.svg'
const Shortner = () => {

  const[url,setUrl]:any=useState("")
    // const urlRef:any=useRef(null)
    const handleClick=(e:any)=>{
      e.preventDefault();
        console.log(url);
        const res=short(url);
        console.log(res)
    }

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: {xs:1,sm:1,md:3},
        background:`url(${blob})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'top right'
      }}
    >
        {/* <img src={blob}/> */}
      <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>A simple link</Typography>
      <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>but a powerful tool</Typography>
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'}}}>for</Typography>
        <Typography sx={{fontSize:{xs:'24px',sm:'24px',md:'60px'},color: "#eb1fbb", fontWeight: "600"}} >
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
      <Box sx={{ width: {xs:'100%',sm:'100%',md:'50%',lg:'40%'}, textJustify: "inter-word", mt: 3 }}>
        <Typography  variant="body1">
          Our tool allows you to seamlessly track your audience with simple and
          easy-to-remember yet powerful links and provide your customers a
          unique tailored experience.
        </Typography>
      </Box>
      <Box sx={{ mt: 3,display:'flex',alignItems:'center',gap:3 }}>
        {/* <TextField   /> */}
        <TextField
        name="url"
        type="url"
        value={url}
        onChange={(e:any)=>{setUrl(e.target.value)}}
          sx={{
            width: {xs:'80%',sm:'40%',md:'40%'},
            border: "none",
            boxShadow: "8px 5px 5px #eaeaea ",
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
        <Button onClick={handleClick} sx={{textTransform:'none',color:'white',bgcolor:'black',px:{xs:1,sm:2,md:3},"&:hover":{color:'white',bgcolor:'black'}}}>
            <Typography  sx={{
              fontSize:{
                xs:'16px',
                sm:'20px',
                md:'20px'
              },
              whiteSpace:'nowrap'
              
            }}>Try Now</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default Shortner;
