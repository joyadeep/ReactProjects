import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import TopApps from '../components/TopApps'
import TopGames from '../components/TopGames'

const TopAppsandGames = () => {
  return (
    <Container maxWidth="lg" >
        <Typography variant="h4" fontWeight={500} letterSpacing="-1px">Top Apps and Games</Typography>
        <TopApps title='Top Apps'/>
        <TopApps title='Top Games'/>
    </Container>
  )
}

export default TopAppsandGames