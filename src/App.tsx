import { useState } from 'react'
import { AppBar, Fab, Toolbar, Typography } from '@mui/material'
import Intro from './pages/Intro'
import Skills from './pages/Skills'
import { Add, Download, ExpandMore, Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  const [page,setPage]=useState(0)

  return (
  <>
  <Intro/>
  <Skills/>
  <Projects/>
  <Contact/>
  {/* <Fab color="primary" size='small' sx={{position:'fixed',bottom:'20px',left:'95%'}}>
    <ExpandMore onClick={e=>setPage(page+100)} />
  </Fab> */}
  </>
  
  )
}

export default App
