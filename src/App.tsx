import { useState } from 'react'
import { Typography } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Register from './pages/Register'
function App() {
 
  return (
<>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/login' element={<Auth/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>
</>
  
  )
}

export default App
