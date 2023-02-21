import React from 'react'
import {Box,Typography,Grid} from '@mui/material'
import Sidebar from '../components/Sidebar'
import Nav from '../components/Nav'
const Layout = ({children}:any) => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} sx={{pl:1,pt:1}}>
                    <Nav/>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Layout