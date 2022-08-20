import { Facebook, Instagram, Menu as MenuIcon, Search, Twitter } from '@mui/icons-material'
import { AppBar, Box, InputBase,Menu,MenuItem, Toolbar, Typography } from '@mui/material'
import React,{useState} from 'react'

const Navbar = () => {
  const [open,setOpen]=useState(false);
  const MenuItems=[
  {Name:"Home",Link:"/"},
  {Name:"Products",Link:"/"},
  {Name:"Portfolio",Link:"/"},
  {Name:"Blog",Link:"/"},
  {Name:"Contact Us",Link:"/"}
]
  return (
    <AppBar elevation={0} sx={{backgroundColor:"black"}} position="static">
      <Toolbar sx={{justifyContent:"space-between"}}>
        <Box sx={{display:"flex",gap:2 }}>
          <Facebook/>
          <Instagram/>
          <Twitter/>
        </Box>
        <Box sx={{display:{xs:"none",sm:"none",md:"flex"},gap:3}}>
        {
          MenuItems.map((item,index)=>(
            <Typography key={index} sx={{cursor:"pointer",fontSize:"14px"}}>{item.Name}</Typography>
          ))
        }
        </Box>
        <Box sx={{display:"flex",alignItems:"center",gap:1}}>
        <Box sx={{display:"flex",alignItems:"center",backgroundColor:"white",borderRadius:1,p:"2px"}}>
          <Search sx={{color:"black"}}/>
          <InputBase placeholder="Search"/>
        </Box>
          <MenuIcon sx={{color:"white",display:{xs:"block",sm:"block",md:"none",cursor:"pointer"}}} onClick={e=>setOpen(true)} />
        </Box>
      </Toolbar>
    <Menu open={open} anchorOrigin={{
      horizontal:"right",
      vertical:"top"
    }}
    onClose={e=>setOpen(false)}
    >
      <Box sx={{width:"200px",height:"90vh"}}>
      {
          MenuItems.map((item,index)=>(
            <MenuItem key={index} sx={{cursor:"pointer",fontSize:"14px"}}>{item.Name}</MenuItem>
          ))
        }
      </Box>
    </Menu>
    </AppBar>
  )
}

export default Navbar