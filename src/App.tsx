import { useState } from 'react'
import { Typography } from '@mui/material'
import {Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Layout from './Layout/Layout'
import Overview from './pages/Overview'
import TopAppsandGames from './pages/TopAppsandGames'
import TrendingList from './pages/TrendingList'
import AppDetails from './pages/AppDetails'
function App() {
 
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Overview/>}/>
          <Route path="about" element={<Overview/>}/>
          <Route path="home" element={<Overview/>}/>
        </Route>
        <Route path="/alltop" element={<TopAppsandGames/>}/>
        <Route path="/trending" element={<TrendingList/>}/>
        <Route path="/detail" element={<AppDetails/>}/>
      </Routes>
  )
}

export default App
