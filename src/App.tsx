import { useState } from 'react'
import { Typography } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Layout from './Layout/Layout'
import Overview from './pages/Overview'
function App() {
 
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/about' element={<Overview/>} />
        <Route path='/home' element={<Overview/>} />
      </Routes>
   </Layout>
  )
}

export default App
